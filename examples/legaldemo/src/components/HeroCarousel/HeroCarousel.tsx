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
  // Based on CIPFA website content from https://www.cipfa.org/
  const defaultSlides: HeroCarouselSlide[] = [
    {
      fields: {
        Title: { jsonValue: { value: 'Public Finance Live 15-16 July 2026' } },
        Subtitle: { jsonValue: { value: 'Event' } },
        Description: {
          jsonValue: {
            value:
              'Super early bird discount until 30 January 2026. Join us for the premier public finance event of the year.',
          },
        },
        Image: {
          jsonValue: {
            value: {
              src: 'https://www.cipfa.org/-/media/Images/Training/Conferences/PFL-2026-carousel.jpg',
              alt: 'Public Finance Live 2026',
            },
          },
        },
        Link: {
          jsonValue: {
            value: {
              href: '/events/public-finance-live-2026',
              text: 'Read more',
            },
          },
        },
        BackgroundColor: { jsonValue: { value: 'bg-white' } },
      },
    },
    {
      fields: {
        Title: { jsonValue: { value: 'Developing tomorrow\'s public finance leaders' } },
        Subtitle: { jsonValue: { value: 'Training' } },
        Description: {
          jsonValue: {
            value:
              'Supporting public finance professionals throughout their careers with world-class education and advisory services.',
          },
        },
        Image: {
          jsonValue: {
            value: {
              src: 'https://www.cipfa.org/-/media/Images/Banner-images/cogs-hands-banner-917px-by-260px.jpg',
              alt: 'Training and Development',
            },
          },
        },
        Link: {
          jsonValue: {
            value: {
              href: '/training',
              text: 'Read more',
            },
          },
        },
        BackgroundColor: { jsonValue: { value: 'bg-white' } },
      },
    },
    {
      fields: {
        Title: { jsonValue: { value: 'Create the next generation of counter fraud investigators' } },
        Subtitle: { jsonValue: { value: 'Qualifications' } },
        Description: {
          jsonValue: {
            value:
              'Build expertise in governance, risk and counter fraud skills with CIPFA\'s professional qualifications.',
          },
        },
        Image: {
          jsonValue: {
            value: {
              src: 'https://www.cipfa.org/-/media/Images/Banner-images/Homepage-carousel/Qualifications-banner-image.jpg',
              alt: 'Professional Qualifications',
            },
          },
        },
        Link: {
          jsonValue: {
            value: {
              href: '/qualifications',
              text: 'Read more',
            },
          },
        },
        BackgroundColor: { jsonValue: { value: 'bg-white' } },
      },
    },
    {
      fields: {
        Title: { jsonValue: { value: 'ICAEW CIPFA Public Sector Sustainability Certificate' } },
        Subtitle: { jsonValue: { value: 'Certificate' } },
        Description: {
          jsonValue: {
            value:
              'Gain expertise in public sector sustainability and environmental financial management.',
          },
        },
        Image: {
          jsonValue: {
            value: {
              src: 'https://www.cipfa.org/-/media/Images/Banner-images/PAQ-banner-2024.jpg',
              alt: 'Sustainability Certificate',
            },
          },
        },
        Link: {
          jsonValue: {
            value: {
              href: '/qualifications/sustainability-certificate',
              text: 'Read more',
            },
          },
        },
        BackgroundColor: { jsonValue: { value: 'bg-white' } },
      },
    },
    {
      fields: {
        Title: {
          jsonValue: {
            value: 'Accelerated route to qualify for CPFA and ACA designation and dual membership',
          },
        },
        Subtitle: { jsonValue: { value: 'Qualifications' } },
        Description: {
          jsonValue: {
            value:
              'Fast-track your career with our accelerated route to dual professional qualification and membership.',
          },
        },
        Image: {
          jsonValue: {
            value: {
              src: 'https://www.cipfa.org/-/media/Images/Banner-images/CFIA_banner_2024.jpg',
              alt: 'Accelerated Route to Qualification',
            },
          },
        },
        Link: {
          jsonValue: {
            value: {
              href: '/qualifications/accelerated-route',
              text: 'Read more',
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

                  {/* Content - Centered */}
                  <div className="relative z-10 mx-auto w-full max-w-screen-xl px-4 py-16 md:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl space-y-6 text-center">
                      {(hasSubtitle || isPageEditing) && subtitleField && (
                        <Text
                          tag="p"
                          field={subtitleField}
                          className="text-xs font-medium uppercase tracking-[0.15em] text-[#003366] md:text-sm mb-2"
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
                              className="bg-[#003366] text-white hover:bg-[#002850] font-medium px-8 py-4 rounded-none border-0"
                            >
                              <SitecoreLink field={linkField} />
                            </Button>
                          ) : (
                            linkField?.value?.href && (
                              <Button
                                variant="default"
                                asChild
                                size="lg"
                                className="bg-[#003366] text-white hover:bg-[#002850] font-medium px-8 py-4 rounded-none border-0"
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
            <CarouselPrevious className="left-6 border-[#003366]/30 bg-[#003366]/10 text-[#003366] hover:bg-[#003366]/20 hover:text-[#003366] md:left-8 backdrop-blur-sm" />
            <CarouselNext className="right-6 border-[#003366]/30 bg-[#003366]/10 text-[#003366] hover:bg-[#003366]/20 hover:text-[#003366] md:right-8 backdrop-blur-sm" />
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
                  ? 'w-8 bg-[#003366]'
                  : 'w-1.5 bg-[#003366]/40 hover:bg-[#003366]/60'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter - Bottom Right */}
      {count > 1 && (
        <div className="absolute bottom-6 right-6 z-20 text-xs font-medium text-[#003366]/70 md:bottom-8 md:right-8 md:text-sm">
          {current + 1} / {count}
        </div>
      )}
    </section>
  );
};
