'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Text,
  RichText,
  Image,
  type Field,
  type ImageField,
  type LinkField,
  withDatasourceCheck,
} from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from '@/lib/component-props';

type CarouselSlide = {
  id?: string;
  displayName?: string;
  title?: Field<string>;
  description?: Field<string>;
  image?: ImageField;
  ctaLink?: LinkField;
  logo1?: ImageField;
  logo2?: ImageField;
  fields?: {
    title?: Field<string>;
    description?: Field<string>;
    image?: ImageField;
    ctaLink?: LinkField;
    logo1?: ImageField;
    logo2?: ImageField;
  };
};

// Updated to match how datasource data actually comes through
type CarouselProps = ComponentProps & {
  fields: {
    data?: {
      datasource?: {
        children?: {
          results: CarouselSlide[];
        };
        items?: {
          results: CarouselSlide[];
        };
      };
    };
  };
};

const Carousel = (props: CarouselProps): React.JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

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

  // Debug logging - comprehensive - FIRST THING
  console.log('\n\n=== CAROUSEL DEBUG START ===');
  console.log('Component: Carousel');
  console.log('Full props object:', props);
  console.log('props.rendering:', props.rendering);
  console.log('props.rendering.fields:', props.rendering?.fields);
  console.log('props.rendering.fields keys:', Object.keys(props.rendering?.fields || {}));
  console.log('props.rendering.fields?.data:', props.rendering?.fields?.data);
  console.log('props.params:', props.params);
  console.log('props.fields:', props.fields);
  console.log('props.fields keys:', Object.keys(props.fields || {}));
  console.log('props.fields.data:', props.fields?.data);
  console.log('props.fields.data.datasource:', props.fields?.data?.datasource);

  // Get slides - the datasource should be in props.fields based on Sitecore SDK
  const slides =
    props.fields?.data?.datasource?.children?.results ??
    props.fields?.data?.datasource?.items?.results ??
    [];

  console.log('props.fields.data.datasource:', props.fields?.data?.datasource);
  console.log('props.fields.data.datasource.children:', props.fields?.data?.datasource?.children);
  console.log(
    'props.fields.data.datasource.children.results:',
    props.fields?.data?.datasource?.children?.results
  );

  console.log('Slides count:', slides.length);
  console.log('Slides array:', JSON.stringify(slides, null, 2));
  // If no slides, show a message (especially useful for debugging)
  if (slides.length === 0) {
    console.warn('⚠️ No carousel slides found. Check that:');
    console.warn('1. Datasource is configured in Sitecore rendering');
    console.warn('2. Datasource item has child items');
    console.warn('3. GraphQL query includes children');
    return (
      <section className="relative bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            Carousel: No slides found. Please configure the datasource in Sitecore.
          </p>
        </div>
      </section>
    );
  }

  if (slides.length > 0) {
    console.log('First slide:', JSON.stringify(slides[0], null, 2));
    console.log('First slide keys:', Object.keys(slides[0] || {}));
    console.log('First slide title:', slides[0].title);
    console.log('First slide description:', slides[0].description);
    console.log('First slide image:', slides[0].image);
  }

  // Check alternative field paths
  if (slides.length > 0) {
    console.log('=== Checking Field Access Patterns ===');
    const firstSlide = slides[0];
    console.log('slideData.title:', firstSlide.title);
    console.log('slideData.title?.value:', firstSlide.title?.value);
    // Some fields may arrive as jsonValue in certain templates; log if present safely
    // (Using optional chaining without unsafe casts)
    // console.log('slideData.title?.jsonValue:', (firstSlide as { title?: { jsonValue?: unknown } }).title?.jsonValue);
    console.log('slideData.fields:', firstSlide.fields);
    if (firstSlide.fields) {
      console.log('slideData.fields.title:', firstSlide.fields.title);
    }
  }

  console.log('=== CAROUSEL DEBUG END ===');

  return (
    <section className="relative bg-gray-50">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slideData: CarouselSlide, index: number) => {
            // Access fields directly from slideData
            const title = slideData.title;
            const description = slideData.description;
            const image = slideData.image;
            const ctaLink = slideData.ctaLink;
            const logo1 = slideData.logo1;
            const logo2 = slideData.logo2;

            // Debug logging for each slide
            console.log(`\n--- SLIDE ${index} DETAILED ---`);
            console.log('Full slideData:', JSON.stringify(slideData, null, 2));
            console.log('title field:', title);
            console.log('title?.value:', title?.value);
            // console.log('title?.jsonValue?.value:', (title as { jsonValue?: { value?: unknown } })?.jsonValue?.value);
            console.log('description:', description);
            console.log('image:', image);
            console.log('ctaLink:', ctaLink);
            console.log('ctaLink?.value:', ctaLink?.value);
            console.log('ctaLink?.value?.href:', ctaLink?.value?.href);
            console.log('logo1:', logo1);
            console.log('logo2:', logo2);

            return (
              <div
                key={slideData.id || slideData.displayName || index}
                className="flex-[0_0_100%] min-w-0"
              >
                <div className="relative h-[600px] flex items-center">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    {image ? (
                      <Image field={image} className="w-full h-full object-cover" />
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
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => emblaApi?.scrollNext()}
                          className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors"
                          aria-label="Next slide"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Title */}
                      {title && (
                        <h2 className="text-5xl font-bold mb-6">
                          <Text field={title} />
                        </h2>
                      )}

                      {/* Description */}
                      {description && (
                        <div className="text-xl mb-8">
                          <RichText field={description} />
                        </div>
                      )}

                      {/* CTA Button */}
                      {ctaLink && (
                        <a
                          href={ctaLink.value?.href || '#'}
                          className="inline-block bg-[#00BFA5] hover:bg-[#00A890] text-white px-8 py-3 rounded transition-colors"
                        >
                          {ctaLink.value?.text || 'Learn more'}
                        </a>
                      )}

                      {/* Partner Logos */}
                      {(logo1 || logo2) && (
                        <div className="flex gap-6 mt-12">
                          {logo1 && (
                            <div className="bg-white/90 backdrop-blur-sm p-4 rounded">
                              <Image field={logo1} className="h-12" />
                            </div>
                          )}
                          {logo2 && (
                            <div className="bg-white/90 backdrop-blur-sm p-4 rounded">
                              <Image field={logo2} className="h-12" />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
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
              index === selectedIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

// Export with datasource check to ensure data is available
export default withDatasourceCheck()(Carousel);
