import type React from 'react';
import { Text, RichText, useSitecore } from '@sitecore-content-sdk/nextjs';
import { cn } from '@/lib/utils';
import { NoDataFallback } from '@/utils/NoDataFallback';
import type { HeadingTextProps } from './HeadingText.props';

export const Default: React.FC<HeadingTextProps> = ({ fields, params }) => {
  const { heading, text } = fields?.data?.datasource ?? {};
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  if (!fields) {
    return <NoDataFallback componentName="Heading Text" />;
  }

  return (
    <section data-component="HeadingText" className={cn('py-16 md:py-24 bg-white', params?.styles)}>
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="max-w-4xl">
          {(heading?.jsonValue?.value || isPageEditing) && (
            <Text
              tag="h2"
              field={heading?.jsonValue}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal mb-6 text-[#312C62]"
            />
          )}
          {(text?.jsonValue?.value || isPageEditing) && (
            <RichText
              field={text?.jsonValue}
              className="prose prose-lg max-w-none text-[#312C62] leading-relaxed prose-p:mb-4 prose-p:mt-0"
            />
          )}
        </div>
      </div>
    </section>
  );
};
