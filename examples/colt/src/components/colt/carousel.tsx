"use client"

import React, { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Text, RichText, Image, type Field, type ImageField, type LinkField } from "@sitecore-content-sdk/nextjs"
import type { ComponentProps } from "@/lib/component-props"

type CarouselSlideFields = {
  title?: Field<string>
  description?: Field<string>
  image?: ImageField
  ctaLink?: LinkField
  logo1?: ImageField
  logo2?: ImageField
}

type CarouselSlide = {
  id?: string
  fields?: CarouselSlideFields
}

type CarouselProps = ComponentProps & {
  fields: {
    data?: {
      datasource?: {
        children?: {
          results: CarouselSlide[]
        }
      }
    }
  }
}

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

  // Get slides from Sitecore datasource
  const slides = props.fields?.data?.datasource?.children?.results ?? []

  return (
    <section className="relative bg-gray-50">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slideData: CarouselSlide, index: number) => {
            const fields = slideData.fields

            return (
              <div key={slideData.id || index} className="flex-[0_0_100%] min-w-0">
                <div className="relative h-[600px] flex items-center">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    {fields?.image ? (
                      <Image field={fields.image} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gray-400"></div>
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
                      {fields?.title && (
                        <h2 className="text-5xl font-bold mb-6">
                          <Text field={fields.title} />
                        </h2>
                      )}

                      {/* Description */}
                      {fields?.description && (
                        <div className="text-xl mb-8">
                          <RichText field={fields.description} />
                        </div>
                      )}

                      {/* CTA Button */}
                      {fields?.ctaLink && (
                        <a
                          href={fields.ctaLink.value?.href || "#"}
                          className="inline-block bg-[#00BFA5] hover:bg-[#00A890] text-white px-8 py-3 rounded transition-colors"
                        >
                          {fields.ctaLink.value?.text || "Learn more"}
                        </a>
                      )}

                      {/* Partner Logos */}
                      {(fields?.logo1 || fields?.logo2) && (
                        <div className="flex gap-6 mt-12">
                          {fields.logo1 && (
                            <div className="bg-white/90 backdrop-blur-sm p-4 rounded">
                              <Image field={fields.logo1} className="h-12" />
                            </div>
                          )}
                          {fields.logo2 && (
                            <div className="bg-white/90 backdrop-blur-sm p-4 rounded">
                              <Image field={fields.logo2} className="h-12" />
                            </div>
                          )}
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
