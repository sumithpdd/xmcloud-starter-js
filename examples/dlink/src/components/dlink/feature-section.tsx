import type React from 'react';
import { Text, Image, type Field, type ImageField } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

type FeatureSectionProps = ComponentProps & {
  fields?: {
    title: Field<string>;
    subtitle: Field<string>;
    description: Field<string>;
    image: ImageField;
    imagePosition: Field<string>;
  };
};

export const Default: React.FC<FeatureSectionProps> = (props) => {
  const { fields } = props;

  if (fields) {
    const imagePosition = fields.imagePosition?.value || "right";

    const imageContent = fields.image && (
      <div className="flex items-center justify-center">
        <Image field={fields.image} className="w-full h-auto rounded-lg" />
      </div>
    );

    const textContent = (
      <div className="space-y-4">
        {fields.subtitle && (
          <Text field={fields.subtitle} tag="p" className="text-sm font-semibold text-primary uppercase tracking-wide" />
        )}
        {fields.title && (
          <Text field={fields.title} tag="h2" className="text-3xl lg:text-4xl font-bold text-gray-900 text-balance" />
        )}
        {fields.description && (
          <Text field={fields.description} tag="p" className="text-lg text-gray-600 text-pretty" />
        )}
      </div>
    );

    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {imagePosition === "left" ? (
              <>
                {imageContent}
                {textContent}
              </>
            ) : (
              <>
                {textContent}
                {imageContent}
              </>
            )}
          </div>
        </div>
      </section>
    );
  }

  return <NoDataFallback componentName="Feature Section" />;
};
