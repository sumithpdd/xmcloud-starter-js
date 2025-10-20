import type React from 'react';
import { Text, RichText, Image, Link, type Field, type ImageField, type LinkField, type RichTextField } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

interface HeroProps {
  fields?: {
    heading?: Field<string>;
    subheading?: Field<string>;
    description?: RichTextField;
    backgroundImage?: ImageField;
    ctaLink?: LinkField;
  };
}

type HeroComponentProps = ComponentProps & HeroProps;

/**
 * Hero Component
 * A simple hero section for the D-Link website
 */
export const Default: React.FC<HeroComponentProps> = (props) => {
  const { fields } = props;

  if (fields) {
    return (
      <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        {fields.backgroundImage && (
          <div className="absolute inset-0 z-0">
            <Image field={fields.backgroundImage} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          {fields.heading && (
            <Text field={fields.heading} tag="h1" className="text-5xl md:text-6xl font-bold mb-4" />
          )}

          {fields.subheading && (
            <Text field={fields.subheading} tag="h2" className="text-2xl md:text-3xl font-semibold mb-6" />
          )}

          {fields.description && (
            <RichText field={fields.description} className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" />
          )}

          {fields.ctaLink && (
            <Link
              field={fields.ctaLink}
              className="inline-block px-8 py-4 bg-accent text-black text-lg font-semibold rounded-md hover:bg-accent-hover transition-colors"
            />
          )}
        </div>
      </div>
    );
  }

  return <NoDataFallback componentName="Hero" />;
};
