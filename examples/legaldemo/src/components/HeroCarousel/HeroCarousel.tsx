import { useState, useEffect, useCallback } from 'react';
import {
  Text,
  RichText,
  Image,
  Link as SitecoreLink,
  useSitecore,
} from '@sitecore-content-sdk/nextjs';
import type { Field, LinkField, ImageField } from '@sitecore-content-sdk/nextjs';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { HeroCarouselProps, type HeroCarouselSlide } from './HeroCarousel.props';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

export const Default: React.FC<HeroCarouselProps> = (props) => {
  const { fields, params, rendering } = props;
  const slidesFromDatasource = fields?.data?.datasource?.slides ?? [];
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  // Debug logging (remove in production)
  if (process.env.NODE_ENV === 'development') {
    console.log('HeroCarousel:', {
      slidesCount: slidesFromDatasource.length,
      firstSlide: slidesFromDatasource[0],
      firstSlideFields: slidesFromDatasource[0]?.fields,
      datasource: fields?.data?.datasource,
      componentName: rendering?.componentName,
    });
  }
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const autoplay = params?.autoplay !== false;
  const autoplayInterval = params?.autoplayInterval ? Number(params.autoplayInterval) : 5000;
  const showDots = params?.showDots !== false;
  const showArrows = params?.showArrows !== false;

  // Default slides for disconnected mode or when no slides are configured
  // Based on Clyde & Co website content
  const defaultSlides: HeroCarouselSlide[] = [
    {
      fields: {
        Title: { jsonValue: { value: 'Insurance Emerging Risk uncovered' } },
        Subtitle: { jsonValue: { value: 'Expertise' } },
        Description: {
          jsonValue: {
            value: "Navigate the risks shaping tomorrow's insurance landscape",
          },
        },
        Link: {
          jsonValue: {
            value: {
              href: '/insights/emerging-risks',
              text: 'Discover more',
            },
          },
        },
        BackgroundColor: { jsonValue: { value: 'bg-white' } },
      },
    },
    {
      fields: {
        Title: { jsonValue: { value: 'Risk Quarterly' } },
        Subtitle: { jsonValue: { value: 'Insights' } },
        Description: {
          jsonValue: {
            value: 'Leading voices delivering the latest insight',
          },
        },
        Link: {
          jsonValue: {
            value: {
              href: '/insights/risk-quarterly',
              text: 'Read issue 4',
            },
          },
        },
        BackgroundColor: { jsonValue: { value: 'bg-white' } },
      },
    },
    {
      fields: {
        Title: { jsonValue: { value: 'Corporate Risk Radar 2025' } },
        Subtitle: { jsonValue: { value: 'Reports' } },
        Description: {
          jsonValue: {
            value:
              'Research-led report capturing cross-sector perspectives from 400+ global leaders on risks and opportunities in the coming years',
          },
        },
        Link: {
          jsonValue: {
            value: {
              href: '/reports/corporate-risk-radar-2025',
              text: 'Read the second edition',
            },
          },
        },
        BackgroundColor: { jsonValue: { value: 'bg-white' } },
      },
    },
  ];

  // Use datasource slides if available, otherwise use defaults
  const slides: HeroCarouselSlide[] =
    slidesFromDatasource && slidesFromDatasource.length > 0 ? slidesFromDatasource : defaultSlides;

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

  // Only show error if fields don't exist (no datasource assigned)
  if (!fields) {
    return <NoDataFallback componentName="Hero Carousel" />;
  }

  return (
    <section className="relative w-full overflow-hidden bg-white text-[#212529]">
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
            // Multilist reference fields have fields with direct .value access (like ArticleListing)
            const slideFields = slide?.fields || {};
            const Title = slideFields.Title as
              | { jsonValue: Field<string> }
              | Field<string>
              | undefined;
            const Subtitle = slideFields.Subtitle as
              | { jsonValue: Field<string> }
              | Field<string>
              | undefined;
            const Description = slideFields.Description as
              | { jsonValue: Field<string> }
              | Field<string>
              | undefined;
            const slideImage = slideFields.Image as
              | { jsonValue: ImageField }
              | ImageField
              | undefined;
            const slideLink = slideFields.Link as { jsonValue: LinkField } | LinkField | undefined;
            const BackgroundColor = slideFields.BackgroundColor as
              | { jsonValue: Field<string> }
              | Field<string>
              | undefined;

            // Helper functions to safely access values from both patterns
            const getStringField = (
              field: { jsonValue: Field<string> } | Field<string> | undefined
            ): Field<string> | undefined => {
              if (!field) return undefined;
              if ('jsonValue' in field) return field.jsonValue;
              return field;
            };

            const getImageField = (
              field: { jsonValue: ImageField } | ImageField | undefined
            ): ImageField | undefined => {
              if (!field) return undefined;
              if ('jsonValue' in field) return field.jsonValue;
              return field;
            };

            const getLinkField = (
              field: { jsonValue: LinkField } | LinkField | undefined
            ): LinkField | undefined => {
              if (!field) return undefined;
              if ('jsonValue' in field) return field.jsonValue;
              return field;
            };

            // Multilist fields use direct .value access (not .jsonValue.value)
            const titleField = getStringField(Title);
            const subtitleField = getStringField(Subtitle);
            const descriptionField = getStringField(Description);
            const backgroundColorField = getStringField(BackgroundColor);
            const imageField = getImageField(slideImage);
            const linkField = getLinkField(slideLink);

            const bgColor = backgroundColorField?.value || 'bg-white';
            const hasTitle = titleField?.value;
            const hasSubtitle = subtitleField?.value;
            const hasDescription = descriptionField?.value;
            const hasImage = imageField?.value?.src;
            const hasLink = linkField?.value?.href;

            return (
              <CarouselItem key={index} className="pl-0">
                <div
                  className={cn(
                    'relative flex min-h-[70vh] w-full items-center overflow-hidden',
                    bgColor
                  )}
                >
                  {/* Background Image */}
                  {(hasImage || isPageEditing) && imageField && (
                    <div className="absolute inset-0 z-0">
                      <Image
                        field={imageField}
                        className="h-full w-full object-cover"
                        alt={imageField?.value?.alt || ''}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent" />
                    </div>
                  )}

                  {/* Content - Left Aligned */}
                  <div className="relative z-10 mx-auto w-full max-w-screen-xl px-4 py-16 md:px-8 lg:px-12">
                    <div className="max-w-2xl space-y-6 text-left">
                      {(hasSubtitle || isPageEditing) && subtitleField && (
                        <Text
                          tag="p"
                          field={subtitleField}
                          className="text-xs font-medium uppercase tracking-[0.15em] text-[#00677F] md:text-sm mb-2"
                        />
                      )}
                      {(hasTitle || isPageEditing) && titleField && (
                        <Text
                          tag="h1"
                          field={titleField}
                          className="font-heading text-4xl font-normal leading-[1.32] tracking-[0.81px] text-[#212529] md:text-5xl lg:text-6xl xl:text-7xl mb-4"
                        />
                      )}
                      {(hasDescription || isPageEditing) && descriptionField && (
                        <RichText
                          field={descriptionField}
                          className="prose max-w-xl text-base leading-[1.5] text-[#212529] md:text-lg lg:text-xl prose-p:mb-4 prose-p:mt-0 prose-headings:text-[#212529] prose-p:text-[#212529]"
                        />
                      )}
                      {(hasLink || isPageEditing) && linkField && (
                        <div className="pt-4">
                          {isPageEditing ? (
                            <Button
                              variant="default"
                              asChild
                              size="lg"
                              className="bg-[#00677F] text-white hover:bg-[#005267] font-medium px-8 py-4 rounded-none border-0"
                            >
                              <SitecoreLink field={linkField} />
                            </Button>
                          ) : (
                            linkField?.value?.href && (
                              <Button
                                variant="default"
                                asChild
                                size="lg"
                                className="bg-[#00677F] text-white hover:bg-[#005267] font-medium px-8 py-4 rounded-none border-0"
                              >
                                <Link href={linkField.value.href}>
                                  {linkField.value.text || 'Learn More'}
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
            <CarouselPrevious className="left-6 border-[#00677F]/30 bg-[#00677F]/10 text-[#00677F] hover:bg-[#00677F]/20 hover:text-[#00677F] md:left-8 backdrop-blur-sm" />
            <CarouselNext className="right-6 border-[#00677F]/30 bg-[#00677F]/10 text-[#00677F] hover:bg-[#00677F]/20 hover:text-[#00677F] md:right-8 backdrop-blur-sm" />
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
                current === index
                  ? 'w-8 bg-[#00677F]'
                  : 'w-1.5 bg-[#00677F]/40 hover:bg-[#00677F]/60'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter - Bottom Right */}
      {count > 1 && (
        <div className="absolute bottom-6 right-6 z-20 text-xs font-medium text-[#00677F]/70 md:bottom-8 md:right-8 md:text-sm">
          {current + 1} / {count}
        </div>
      )}
    </section>
  );
};
