"use client"

import React, { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Text, RichText, Image } from "@sitecore-content-sdk/nextjs"
import type { ComponentProps } from "@/lib/component-props"

type StringField = { value: string }
type ImageValue = { src: string; alt?: string }
type ImageFieldLike = { value: ImageValue }

type CarouselSlideFields = {
  title?: StringField | string
  description?: StringField | string
  image?: ImageFieldLike | string
  ctaText?: StringField | string
  ctaLink?: { value: { href: string } } | string
  logos?: Array<ImageFieldLike | string>
}

type CarouselSlide =
  | {
      id?: string
      fields?: CarouselSlideFields
    }
  | CarouselSlideFields

type CarouselProps = ComponentProps & {
  fields: {
    heading?: StringField
    slides: CarouselSlide[]
  }
}

const isStringField = (val: unknown): val is StringField =>
  typeof val === "object" && val !== null && "value" in (val as Record<string, unknown>)

const isImageField = (val: unknown): val is ImageFieldLike =>
  typeof val === "object" && val !== null && "value" in (val as Record<string, unknown>)

const isLinkField = (val: unknown): val is { value: { href: string } } =>
  typeof val === "object" && val !== null && "value" in (val as Record<string, unknown>)

const Carousel = (props: CarouselProps): React.JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  // Default slides if no Sitecore data
  const defaultSlides: CarouselSlideFields[] = [
    {
      title: "Colt DCS and ESR announce Joint Venture",
      description:
        "Joint venture to develop the first phase of a 130MW hyperscale data centre site in Minoh City, Osaka, Japan.",
      image: "/osaka-japan-cityscape-data-center.jpg",
      ctaText: "Learn more",
      ctaLink: "#",
      logos: ["/colt-logo.jpg", "/esr-logo.jpg"],
    },
    {
      title: "Sustainable Data Centre Solutions",
      description:
        "Net Zero emissions from our operations by 2045. Leading the industry in environmental responsibility.",
      image: "/sustainable-green-data-center.jpg",
      ctaText: "Discover more",
      ctaLink: "#",
      logos: [],
    },
    {
      title: "Global Data Centre Network",
      description:
        "13 Operational data centres and 19 in Development across 11 cities in the UK, Europe, and the APAC region.",
      image: "/global-network-data-centers.jpg",
      ctaText: "View locations",
      ctaLink: "#",
      logos: [],
    },
  ]

  const slides = props.fields?.slides?.length > 0 ? props.fields.slides : defaultSlides

  const getSlideFields = (slide: CarouselSlide): CarouselSlideFields => {
    return "fields" in slide && slide.fields ? slide.fields : (slide as CarouselSlideFields)
  }

  return (
    <section className="relative bg-gray-50">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slideData: CarouselSlide, index: number) => {
            const slide = getSlideFields(slideData)

            const titleText = isStringField(slide.title) ? slide.title.value : (slide.title as string | undefined)
            const descValue = isStringField(slide.description)
              ? slide.description.value
              : (slide.description as string | undefined)
            const imageField = isImageField(slide.image) ? slide.image : undefined
            const imageSrc = imageField?.value?.src || (typeof slide.image === "string" ? slide.image : undefined)
            const linkHref = isLinkField(slide.ctaLink)
              ? slide.ctaLink.value.href
              : typeof slide.ctaLink === "string"
                ? slide.ctaLink
                : undefined
            const ctaText = isStringField(slide.ctaText)
              ? slide.ctaText.value
              : (slide.ctaText as string | undefined)

            return (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="relative h-[600px] flex items-center">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    {imageField ? (
                      <Image field={imageField} className="w-full h-full object-cover" />
                    ) : (
                      <img src={imageSrc || "/placeholder.svg"} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
                    <div className="max-w-2xl text-white">
                      {/* Navigation Arrows */}
                      <div className="flex gap-4 mb-8">
                        <button
                          onClick={() => emblaApi?.scrollPrev()}
                          className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors"
                          aria-label="Previous slide"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => emblaApi?.scrollNext()}
                          className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors"
                          aria-label="Next slide"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>

                      {/* Title */}
                      {isStringField(slide.title) ? (
                        <h2 className="text-5xl font-bold mb-6">
                          <Text field={slide.title} />
                        </h2>
                      ) : (
                        <h2 className="text-5xl font-bold mb-6">{titleText}</h2>
                      )}

                      {/* Description */}
                      {isStringField(slide.description) ? (
                        <div className="text-xl mb-8">
                          <RichText field={slide.description} />
                        </div>
                      ) : (
                        <p className="text-xl mb-8">{descValue}</p>
                      )}

                      {/* CTA Button */}
                      {(ctaText || linkHref) && (
                        <a
                          href={linkHref || "#"}
                          className="inline-block bg-[#00BFA5] hover:bg-[#00A890] text-white px-8 py-3 rounded transition-colors"
                        >
                          {ctaText || "Learn more"}
                        </a>
                      )}

                      {/* Partner Logos */}
                      {slide.logos && slide.logos.length > 0 && (
                        <div className="flex gap-6 mt-12">
                          {slide.logos.map((logo: ImageFieldLike | string, logoIndex: number) => (
                            <div key={logoIndex} className="bg-white/90 backdrop-blur-sm p-4 rounded">
                              {isImageField(logo) ? (
                                <Image field={logo} className="h-12" />
                              ) : (
                                <img src={typeof logo === "string" ? logo : "/placeholder.svg"} alt={`Partner ${logoIndex + 1}`} className="h-12" />
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_: unknown, index: number) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === selectedIndex ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Carousel
