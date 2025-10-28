import {
  Text,
  RichText,
  Image,
  type ImageField,
  type Field,
} from '@sitecore-content-sdk/nextjs';
import type { JSX } from 'react/jsx-runtime';
import type { ComponentProps } from '@/lib/component-props';
type Feature = {
  icon: ImageField | string;
  title: Field<string>;
  description: Field<string>;
};

type FeaturesGridProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    features: Feature[];
  };
};

const FeaturesGrid = (props: FeaturesGridProps): JSX.Element => {
  const defaultFeatures = [
    {
      icon: '🏢',
      title: '25 Years Experience',
      description:
        'First data centres were built in 1999 and Hyperscale operations started in 2016',
    },
    {
      icon: '🌍',
      title: 'Significant Global Footprint',
      description:
        '13 Operational data centres and 19 in Development across 11 cities in UK, France, Germany, Netherlands, India and Japan',
    },
    {
      icon: '📈',
      title: 'Strong Growth Plan',
      description: '10 owned sites to develop from 190MW to 1GW in 10 years',
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Net Zero emissions from our operations by 2045',
    },
    {
      icon: '🎯',
      title: 'Customer Focus',
      description: '75 NPS Score, Advanced telemetry & portals, Local and global support',
    },
    {
      icon: '⚡',
      title: 'Flexible and Scalable',
      description:
        'Adaptable design: air, hybrid and water cooling. Multi-hall and multi-building scalability',
    },
  ];

  const features = props.fields?.features?.length > 0 ? props.fields.features : defaultFeatures;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        {props.fields?.heading ? (
          <h2 className="text-4xl font-bold text-center mb-16">
            <Text field={props.fields.heading} />
          </h2>
        ) : (
          <h2 className="text-4xl font-bold text-center mb-16">Why Colt Data Centre Services?</h2>
        )}

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature: Feature, index: number) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                {feature.icon && typeof feature.icon === 'object' && feature.icon?.value?.src ? (
                  <div className="w-20 h-20 rounded-full bg-[#00BFA5] flex items-center justify-center">
                    <Image field={feature.icon} className="w-10 h-10" />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full bg-[#00BFA5] flex items-center justify-center text-4xl">
                    {feature.icon}
                  </div>
                )}
              </div>

              {/* Title */}
              {feature.title?.value ? (
                <h3 className="text-xl font-bold mb-4">
                  <Text field={feature.title} />
                </h3>
              ) : (
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              )}

              {/* Description */}
              {feature.description?.value ? (
                <div className="text-gray-600">
                  <RichText field={feature.description} />
                </div>
              ) : (
                <p className="text-gray-600">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
