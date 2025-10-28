'use client';
import type { JSX } from 'react/jsx-runtime';
import type {
  ComponentProps,
  TextField,
  ImageField,
  LinkField,
} from '@sitecore-content-sdk/nextjs';
import useEmblaCarousel from 'embla-carousel-react';

interface SolutionCard {
  fields: {
    image: ImageField;
    title: TextField;
    description: TextField;
    ctaText: TextField;
    ctaLink: LinkField;
  };
}

interface SolutionsCarouselProps extends ComponentProps {
  fields?: {
    title?: TextField;
    cards?: SolutionCard[];
  };
}

export const SolutionsCarousel = (props: SolutionsCarouselProps): JSX.Element => {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    },
  });

  const defaultCards = [
    {
      image: 'https://www.coltdatacentres.net/-/media/Images/carousel-images/caro-portal-login.jpg',
      title: 'Existing customers: Manage your account',
      description: 'Access your account to raise tickets, manage access to your location and more.',
      ctaText: 'Login now',
      ctaLink: 'https://customerportal.coltdatacentres.net/CherwellPortal',
    },
    {
      image: 'https://www.coltdatacentres.net/-/media/Images/carousel-images/car-hyperscale.jpg',
      title: 'Hyperscale Solutions',
      description:
        'With over 25 years of experience, we specialise in the design, build and operational management, of hyperscale data centres.',
      ctaText: 'Find out more',
      ctaLink: '/solutions/hyperscale',
    },
    {
      image: 'https://www.coltdatacentres.net/-/media/Images/carousel-images/caro-colocation.jpg',
      title: 'Colocation Solutions',
      description:
        'Our colocation solutions provide secure, resilient infrastructure with flexible capacity options.',
      ctaText: 'Learn more',
      ctaLink: '/solutions/colocation',
    },
  ];

  const cards = props.fields?.cards || defaultCards;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          {props.fields?.title?.value || 'Hyperscale and Colocation solutions'}
        </h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {cards.map((card: SolutionCard | typeof defaultCards[0], index: number) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={card.fields?.image?.value?.src || card.image}
                      alt={card.fields?.title?.value || card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {card.fields?.title?.value || card.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {card.fields?.description?.value || card.description}
                    </p>
                    <a
                      href={card.fields?.ctaLink?.value?.href || card.ctaLink}
                      className="inline-flex items-center text-[#00BFA5] hover:text-[#009688] font-semibold transition-colors"
                    >
                      {card.fields?.ctaText?.value || card.ctaText}
                      <svg
                        className="w-5 h-5 ml-2"
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
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCarousel;
