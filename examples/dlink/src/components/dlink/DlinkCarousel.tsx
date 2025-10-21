"use client";

import React, { useCallback, useEffect, JSX } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Text, RichText, Image, Link, type Field, type ImageField, type LinkField, type RichTextField, TextField } from '@sitecore-content-sdk/nextjs';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

interface CarouselSlide {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    heading?: TextField;
    subheading?: TextField;
    description?: RichTextField;
    backgroundImage?: ImageField;
    ctaLink?: LinkField;
    videoUrl?: TextField;
  };
}

type DlinkCarouselFields = {
  fields?: {
    slides?: CarouselSlide[];
    autoplay?: Field<boolean>;
    autoplayDelay?: Field<number>;
  };
};

type DlinkCarouselProps = ComponentProps & DlinkCarouselFields;

export const Default = (props: DlinkCarouselProps): JSX.Element => {
  const { fields } = props;

  if (fields) {
    const { slides, autoplay, autoplayDelay } = fields;
    
    const carouselSlides = slides || [];
    
    if (carouselSlides.length === 0) {
      return <NoDataFallback componentName="D-Link Carousel" />;
    }

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const scrollPrev = useCallback(() => {
      emblaApi?.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
      emblaApi?.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback(
      (index: number) => {
        emblaApi?.scrollTo(index);
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
      emblaApi.on('select', onSelect);
      return () => {
        emblaApi.off('select', onSelect);
      };
    }, [emblaApi, onSelect]);

    // Autoplay functionality
    useEffect(() => {
      const autoplayValue = autoplay?.value;
      if (!emblaApi || !autoplayValue) return;

      const delay = autoplayDelay?.value || 5000;
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, delay);

      return () => clearInterval(interval);
    }, [emblaApi, autoplay, autoplayDelay]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
         <div className="flex">
           {carouselSlides.map((slide, index) => (
             <div key={index} className="flex-[0_0_100%] min-w-0">
              <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
                {slide.fields.videoUrl?.value ? (
                  <div className="absolute inset-0 z-0">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                      <source src={slide.fields.videoUrl.value as string} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                ) : slide.fields.backgroundImage ? (
                  <div className="absolute inset-0 z-0">
                    <Image field={slide.fields.backgroundImage} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                ) : (
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary to-blue-600" />
                )}

                 <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                   {slide.fields.heading?.value ? (
                     <Text field={slide.fields.heading} tag="h1" className="text-4xl md:text-6xl font-bold mb-4 text-balance" />
                   ) : (
                     <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">D-Link Networking Solutions</h1>
                   )}
                   {slide.fields.subheading?.value ? (
                     <Text field={slide.fields.subheading} tag="h2" className="text-xl md:text-3xl font-semibold mb-6" />
                   ) : (
                     <h2 className="text-xl md:text-3xl font-semibold mb-6">Connect with Confidence</h2>
                   )}
                   {slide.fields.description?.value ? (
                     <RichText field={slide.fields.description} className="text-base md:text-xl mb-8 max-w-2xl mx-auto" />
                   ) : (
                     <p className="text-base md:text-xl mb-8 max-w-2xl mx-auto">Discover our range of networking products designed for home, business, and industry applications.</p>
                   )}
                   {slide.fields.ctaLink?.value ? (
                     <Link
                       field={slide.fields.ctaLink}
                       className="inline-block px-8 py-4 bg-accent text-black text-lg font-semibold rounded-md hover:bg-accent-hover transition-colors"
                     />
                   ) : (
                     <a href="/products" className="inline-block px-8 py-4 bg-accent text-black text-lg font-semibold rounded-md hover:bg-accent-hover transition-colors">
                       Explore Products
                     </a>
                   )}
                 </div>
               </div>
             </div>
           ))}
         </div>
      </div>

      {carouselSlides.length > 1 && (
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

      {carouselSlides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === selectedIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
  }

  return <NoDataFallback componentName="D-Link Carousel" />;
};
