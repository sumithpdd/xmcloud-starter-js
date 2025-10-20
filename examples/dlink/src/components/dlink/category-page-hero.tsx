import type React from 'react';
import { Text, Image, Link, type Field, type ImageField, type LinkField } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

interface CategoryPageHeroProps {
  fields?: {
    categoryName: Field<string>;
    title: Field<string>;
    description: Field<string>;
    ctaText: Field<string>;
    ctaLink: LinkField;
    backgroundImage: ImageField;
  };
}

type CategoryPageHeroComponentProps = ComponentProps & CategoryPageHeroProps;

export const Default: React.FC<CategoryPageHeroComponentProps> = (props) => {
  const { fields } = props;

  if (fields) {
    return (
      <div className="relative bg-gradient-to-br from-primary to-blue-700 text-white overflow-hidden">
        {fields.backgroundImage && (
          <div className="absolute inset-0 opacity-20">
            <Image field={fields.backgroundImage} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            {fields.categoryName && (
              <Text field={fields.categoryName} tag="p" className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90" />
            )}

            {fields.title && (
              <Text field={fields.title} tag="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" />
            )}

            {fields.description && (
              <Text field={fields.description} tag="p" className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed" />
            )}

            {fields.ctaText && fields.ctaLink && (
              <Link
                field={fields.ctaLink}
                className="inline-block bg-white text-primary px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  return <NoDataFallback componentName="Category Page Hero" />;
};
