'use client';
import type {
  ImageField,
  Field,
  LinkField,
} from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from '@/lib/component-props';
import useEmblaCarousel from 'embla-carousel-react';
import type { JSX } from 'react/jsx-runtime';

type Solution = {
  image: ImageField;
  title: Field<string>;
  description: Field<string>;
  link: LinkField;
  linkText: Field<string>;
};

type SolutionsSectionProps = ComponentProps & {
  fields?: {
    title?: Field<string>;
    solutions?: Solution[];
  };
};

export const SolutionsSection = (props: SolutionsSectionProps): JSX.Element => {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
  });

  const defaultSolutions = [
    {
      image: {
        value: {
          src: 'https://www.coltdatacentres.net/-/media/Images/carousel-images/caro-portal-login.jpg',
        },
      },
      title: { value: 'Existing customers: Manage your account' },
      description: {
        value: 'Access your account to raise tickets, manage access to your location and more.',
      },
      link: { value: { href: 'https://customerportal.coltdatacentres.net/CherwellPortal' } },
      linkText: { value: 'Login now' },
    },
    {
      image: {
        value: {
          src: 'https://www.coltdatacentres.net/-/media/Images/carousel-images/car-hyperscale.jpg',
        },
      },
      title: { value: 'Hyperscale Solutions' },
      description: {
        value:
          'With over 25 years of experience, we specialise in the design, build and operational management, of hyperscale data centres.',
      },
      link: { value: { href: '/solutions/hyperscale' } },
      linkText: { value: 'Find out more' },
    },
    {
      image: {
        value: {
          src: 'https://www.coltdatacentres.net/-/media/Images/carousel-images/car-colocation.jpg',
        },
      },
      title: { value: 'Colocation Solutions' },
      description: {
        value:
          'Our colocation solutions provide secure, reliable and flexible data centre space for your critical infrastructure.',
      },
      link: { value: { href: '/solutions/colocation' } },
      linkText: { value: 'Find out more' },
    },
  ];

  const solutions = props.fields?.solutions || defaultSolutions;
  const title = props.fields?.title?.value || 'Hyperscale and Colocation solutions';

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">{title}</h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
              >
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={solution.image.value?.src || '/placeholder.svg'}
                    alt={solution.title.value}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{solution.title.value}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {solution.description.value}
                    </p>
                    <a
                      href={solution.link.value?.href || '#'}
                      className="text-[#00BFA5] font-semibold hover:underline"
                    >
                      {solution.linkText.value}
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

export default SolutionsSection;
