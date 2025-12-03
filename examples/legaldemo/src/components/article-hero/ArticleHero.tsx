import type React from 'react';
import { Text, Image, useSitecore } from '@sitecore-content-sdk/nextjs';
import { cn } from '@/lib/utils';
import { NoDataFallback } from '@/utils/NoDataFallback';
import type { ArticleHeroProps } from './article-hero.props';

export const Default: React.FC<ArticleHeroProps> = ({ fields, params }) => {
  const { category, title, subtitle, date, location, backgroundImage } =
    fields?.data?.datasource ?? {};
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  if (!fields) {
    return <NoDataFallback componentName="Article Hero" />;
  }

  return (
    <div
      data-component="ArticleHero"
      className={cn('relative w-full h-[500px] md:h-[600px] overflow-hidden', params?.styles)}
    >
      {/* Background Image */}
      {(backgroundImage?.jsonValue?.value?.src || isPageEditing) && (
        <div className="absolute inset-0">
          <Image
            field={backgroundImage?.jsonValue}
            className="w-full h-full object-cover"
            alt={backgroundImage?.jsonValue?.value?.alt || ''}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        </div>
      )}

      {/* Content Overlay */}
      <div className="relative h-full container mx-auto px-4 max-w-screen-xl flex flex-col justify-end pb-16">
        {/* Decorative Element */}
        <div className="w-16 h-16 mb-6 bg-[#00677F]/80 rounded-none" />

        {(category?.jsonValue?.value || isPageEditing) && (
          <Text
            tag="div"
            field={category?.jsonValue}
            className="text-white/90 text-sm mb-4 uppercase tracking-wider"
          />
        )}

        {(title?.jsonValue?.value || isPageEditing) && (
          <Text
            tag="h1"
            field={title?.jsonValue}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal text-white mb-6 max-w-4xl leading-tight"
          />
        )}

        {(subtitle?.jsonValue?.value || isPageEditing) && (
          <Text
            tag="p"
            field={subtitle?.jsonValue}
            className="text-xl text-white/90 mb-6 max-w-2xl"
          />
        )}

        {(date || location) && (
          <div className="flex items-center gap-4 text-white/90 text-sm">
            {date && (
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{date?.jsonValue?.value}</span>
              </div>
            )}
            {location && (
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{location?.jsonValue?.value}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
