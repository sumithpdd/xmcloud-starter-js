import type React from 'react';
import { Text, RichText, Image, type Field, type ImageField, type RichTextField } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

interface TechFeature {
  icon?: ImageField;
  heading?: Field<string>;
  description?: RichTextField;
}

interface TechFeaturesProps {
  fields?: {
    sectionHeading?: Field<string>;
    sectionDescription?: RichTextField;
    features?: TechFeature[];
    backgroundColor?: Field<string>;
  };
}

type TechFeaturesComponentProps = ComponentProps & TechFeaturesProps;

/**
 * Tech Features Component
 * Displays technology features in a grid layout
 */
export const Default: React.FC<TechFeaturesComponentProps> = (props) => {
  const { fields } = props;

  if (fields) {
    const features = fields.features || [];

    if (features.length === 0) {
      return <NoDataFallback componentName="Tech Features" />;
    }

    const bgColor = fields.backgroundColor?.value || "bg-primary";

    return (
      <section className={`py-16 ${bgColor}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {fields.sectionHeading && (
              <Text
                field={fields.sectionHeading}
                tag="h2"
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
              />
            )}

            {fields.sectionDescription && (
              <RichText field={fields.sectionDescription} className="text-lg text-blue-100 max-w-3xl mx-auto" />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  {feature.icon && (
                    <div className="flex-shrink-0">
                      <Image field={feature.icon} className="w-16 h-16 object-contain" />
                    </div>
                  )}

                  <div className="flex-1">
                    {feature.heading && (
                      <Text field={feature.heading} tag="h3" className="text-xl font-semibold mb-2 text-white" />
                    )}

                    {feature.description && (
                      <RichText field={feature.description} className="text-blue-100" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return <NoDataFallback componentName="Tech Features" />;
};
