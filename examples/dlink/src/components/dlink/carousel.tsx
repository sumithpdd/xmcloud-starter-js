"use client";

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Text, RichText, Image, Link, type Field, type ImageField, type LinkField, type RichTextField } from '@sitecore-content-sdk/nextjs';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

interface CarouselSlide {
  heading?: Field<string>;
  subheading?: Field<string>;
  description?: RichTextField;
  backgroundImage?: ImageField;
  ctaLink?: LinkField;
  videoUrl?: Field<string>;
}

interface CarouselProps {
  fields?: {
    slides?: CarouselSlide[];
    autoplay?: Field<boolean>;
    autoplayDelay?: Field<number>;
  };
}

type CarouselComponentProps = ComponentProps & CarouselProps;

/**
 * Carousel Component using Embla Carousel
 * Displays a hero carousel with multiple slides
 */
export const Default: React.FC<CarouselComponentProps> = (props) => {
  const { fields } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay functionality
  useEffect(() => {
    const autoplay = fields?.autoplay?.value;
    if (!emblaApi || !autoplay) return;

    const delay = fields?.autoplayDelay?.value || 5000;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, delay);

    return () => clearInterval(interval);
  }, [emblaApi, fields?.autoplay, fields?.autoplayDelay]);

  if (fields) {
    const slides = fields.slides || [];

    if (slides.length === 0) {
      return <NoDataFallback componentName="Carousel" />;
    }

    return (
      <div className="relative w-full">
        {/* Embla Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
                  {/* Background Image or Video */}
                  {slide.videoUrl?.value ? (
                    <div className="absolute inset-0 z-0">
                      <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                        <source src={slide.videoUrl.value} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/40" />
                    </div>
                  ) : slide.backgroundImage ? (
                    <div className="absolute inset-0 z-0">
                      <Image field={slide.backgroundImage} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary to-blue-700" />
                  )}

                  {/* Content */}
                  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                    {slide.heading && (
                      <Text
                        field={slide.heading}
                        tag="h1"
                        className="text-4xl md:text-6xl font-bold mb-4 text-balance"
                      />
                    )}

                    {slide.subheading && (
                      <Text field={slide.subheading} tag="h2" className="text-xl md:text-3xl font-semibold mb-6" />
                    )}

                    {slide.description && (
                      <RichText field={slide.description} className="text-base md:text-xl mb-8 max-w-2xl mx-auto" />
                    )}

                    {slide.ctaLink && (
                      <Link
                        field={slide.ctaLink}
                        className="inline-block px-8 py-4 bg-accent text-black text-lg font-semibold rounded-md hover:bg-accent-hover transition-colors"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        {slides.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </>
        )}

        {/* Dots Navigation */}
        {slides.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === selectedIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return <NoDataFallback componentName="Carousel" />;
};
