import { useState, useEffect, useCallback } from 'react';
import {
  Text,
  RichText,
  Image,
  Link as SitecoreLink,
  useSitecore,
} from '@sitecore-content-sdk/nextjs';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { HeroCarouselProps } from './hero-carousel.props';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

export const Default: React.FC<HeroCarouselProps> = ({ fields, params }) => {
  const { children } = fields?.data?.datasource ?? {};
  const slides = children?.results ?? [];
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const autoplay = params?.autoplay !== false;
  const autoplayInterval = params?.autoplayInterval ? Number(params.autoplayInterval) : 5000;
  const showDots = params?.showDots !== false;
  const showArrows = params?.showArrows !== false;

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Autoplay functionality
  useEffect(() => {
    if (!api || !autoplay || isPageEditing) {
      return;
    }

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [api, autoplay, autoplayInterval, isPageEditing]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  if (!fields || !slides || slides.length === 0) {
    return <NoDataFallback componentName="Hero Carousel" />;
  }

  return (
    <section className="relative w-full overflow-hidden bg-[#141414] text-white">
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide, index) => {
            const { title, subtitle, description, image, link, backgroundColor } = slide || {};
            const bgColor = backgroundColor?.jsonValue?.value || 'bg-[#141414]';

            return (
              <CarouselItem key={index} className="pl-0">
                <div
                  className={cn(
                    'relative flex min-h-[70vh] w-full items-center overflow-hidden',
                    bgColor
                  )}
                >
                  {/* Background Image */}
                  {(image?.jsonValue?.value?.src || isPageEditing) && (
                    <div className="absolute inset-0 z-0">
                      <Image
                        field={image?.jsonValue}
                        className="h-full w-full object-cover"
                        alt={image?.jsonValue?.value?.alt || ''}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/95 via-[#141414]/75 to-transparent" />
                    </div>
                  )}

                  {/* Content - Left Aligned */}
                  <div className="relative z-10 mx-auto w-full max-w-screen-xl px-4 py-16 md:px-8 lg:px-12">
                    <div className="max-w-2xl space-y-6 text-left">
                      {(subtitle?.jsonValue?.value || isPageEditing) && (
                        <Text
                          tag="p"
                          field={subtitle?.jsonValue}
                          className="text-xs font-medium uppercase tracking-[0.15em] text-white/80 md:text-sm mb-2"
                        />
                      )}
                      {(title?.jsonValue?.value || isPageEditing) && (
                        <Text
                          tag="h1"
                          field={title?.jsonValue}
                          className="font-heading text-4xl font-normal leading-[1.32] tracking-[0.81px] text-white md:text-5xl lg:text-6xl xl:text-7xl mb-4"
                        />
                      )}
                      {(description?.jsonValue?.value || isPageEditing) && (
                        <RichText
                          field={description?.jsonValue}
                          className="prose prose-invert max-w-xl text-base leading-[1.5] text-white/95 md:text-lg lg:text-xl prose-p:mb-4 prose-p:mt-0"
                        />
                      )}
                      {(link?.jsonValue?.value?.href || isPageEditing) && (
                        <div className="pt-4">
                          {isPageEditing ? (
                            <Button
                              variant="default"
                              asChild
                              size="lg"
                              className="bg-white text-[#141414] hover:bg-white/95 font-medium px-8 py-4 rounded-none border-0"
                            >
                              <SitecoreLink field={link?.jsonValue} />
                            </Button>
                          ) : (
                            link?.jsonValue?.value?.href && (
                              <Button
                                variant="default"
                                asChild
                                size="lg"
                                className="bg-white text-[#141414] hover:bg-white/95 font-medium px-8 py-4 rounded-none border-0"
                              >
                                <Link href={link.jsonValue.value.href}>
                                  {link.jsonValue.value.text || 'Learn More'}
                                </Link>
                              </Button>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Navigation Arrows */}
        {showArrows && (
          <>
            <CarouselPrevious className="left-6 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white md:left-8 backdrop-blur-sm" />
            <CarouselNext className="right-6 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white md:right-8 backdrop-blur-sm" />
          </>
        )}
      </Carousel>

      {/* Dots Indicator - Bottom Center */}
      {showDots && count > 1 && (
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                current === index ? 'w-8 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter - Bottom Right */}
      {count > 1 && (
        <div className="absolute bottom-6 right-6 z-20 text-xs font-medium text-white/70 md:bottom-8 md:right-8 md:text-sm">
          {current + 1} / {count}
        </div>
      )}
    </section>
  );
};

