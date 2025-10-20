import type React from 'react';
import { Text, Image, Link, type Field, type ImageField, type LinkField } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

type CategoryHeroProps = ComponentProps & {
  fields?: {
    title: Field<string>;
    subtitle: Field<string>;
    description: Field<string>;
    backgroundImage: ImageField;
    ctaText: Field<string>;
    ctaLink: LinkField;
  };
};

export const Default: React.FC<CategoryHeroProps> = (props) => {
  const { fields } = props;

  if (fields) {
    return (
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {fields.backgroundImage && (
          <div className="absolute inset-0 opacity-20">
            <Image field={fields.backgroundImage} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            {fields.subtitle && (
              <Text field={fields.subtitle} tag="p" className="text-sm font-semibold text-blue-300 uppercase tracking-wide mb-4" />
            )}

            {fields.title && (
              <Text field={fields.title} tag="h1" className="text-4xl lg:text-6xl font-bold mb-6 text-balance" />
            )}

            {fields.description && (
              <Text field={fields.description} tag="p" className="text-xl lg:text-2xl text-gray-300 mb-8 text-pretty" />
            )}

            {fields.ctaText && fields.ctaLink && (
              <Link
                field={fields.ctaLink}
                className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              />
            )}
          </div>
        </div>
      </section>
    );
  }

  return <NoDataFallback componentName="Category Hero" />;
};
