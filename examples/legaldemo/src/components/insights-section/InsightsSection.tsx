import type React from 'react';
import Link from 'next/link';
import { Text, Image, useSitecore } from '@sitecore-content-sdk/nextjs';
import { cn } from '@/lib/utils';
import { NoDataFallback } from '@/utils/NoDataFallback';
import type { InsightsSectionProps } from './insights-section.props';

export const Default: React.FC<InsightsSectionProps> = ({ fields, params }) => {
  const { title, children } = fields?.data?.datasource ?? {};
  const insights = children?.results ?? [];
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  const defaultInsights = [
    {
      category: { jsonValue: { value: 'Water Scarcity' } },
      title: { jsonValue: { value: 'Water Scarcity' } },
      date: { jsonValue: { value: '22 May 2025' } },
      url: '/insights/water-scarcity',
      image: {
        jsonValue: {
          value: {
            src: '/dried-lake-water-scarcity.jpg',
            alt: 'Water Scarcity',
          },
        },
      },
    },
    {
      category: { jsonValue: { value: 'Podcast' } },
      subCategory: { jsonValue: { value: 'Regulatory movement | Insurance' } },
      title: { jsonValue: { value: 'Beyond the flames: Lithium batteries' } },
      date: { jsonValue: { value: '22 May 2025' } },
      url: '/insights/lithium-batteries',
      image: {
        jsonValue: {
          value: {
            src: '/lithium-battery-technology.jpg',
            alt: 'Lithium batteries',
          },
        },
      },
    },
    {
      category: { jsonValue: { value: 'Commercial Disputes' } },
      title: {
        jsonValue: { value: 'Climate Litigation & Greenwashing: Emerging Risks for Business' },
      },
      date: { jsonValue: { value: '27 May 2025' } },
      url: '/insights/climate-litigation',
      image: {
        jsonValue: {
          value: {
            src: '/climate-protest-sustainability.jpg',
            alt: 'Climate Litigation',
          },
        },
      },
    },
  ];

  const insightItems = insights && insights.length > 0 ? insights : defaultInsights;

  if (!fields) {
    return <NoDataFallback componentName="Insights Section" />;
  }

  return (
    <section
      data-component="InsightsSection"
      className={cn('py-16 md:py-24 bg-white', params?.styles)}
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        {title && (
          <Text
            tag="h2"
            field={title.jsonValue}
            className="text-3xl md:text-4xl font-heading font-normal mb-12 text-[#212529]"
          />
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insightItems.map((insight, index) => {
            const insightUrl = insight.url || '#';

            return (
              <Link key={index} href={insightUrl} className="group">
                <article className="bg-white rounded-none overflow-hidden hover:shadow-lg transition-shadow border border-[#E9ECEF]">
                  <div className="aspect-[3/2] relative overflow-hidden">
                    {(insight.image?.jsonValue?.value?.src || isPageEditing) && (
                      <Image
                        field={insight.image?.jsonValue}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        alt={insight.image?.jsonValue?.value?.alt || ''}
                      />
                    )}
                  </div>
                  <div className="p-6">
                    {(insight.category?.jsonValue?.value || isPageEditing) && (
                      <Text
                        tag="div"
                        field={insight.category?.jsonValue}
                        className="text-sm text-[#00677F] font-medium mb-2"
                      />
                    )}
                    {insight.subCategory && (
                      <Text
                        tag="div"
                        field={insight.subCategory.jsonValue}
                        className="text-sm text-[#6C757D] mb-2"
                      />
                    )}
                    {(insight.title?.jsonValue?.value || isPageEditing) && (
                      <Text
                        tag="h3"
                        field={insight.title?.jsonValue}
                        className="text-xl font-heading font-normal mb-3 group-hover:text-[#00677F] transition-colors leading-tight text-[#212529]"
                      />
                    )}
                    {(insight.date?.jsonValue?.value || isPageEditing) && (
                      <Text
                        tag="time"
                        field={insight.date?.jsonValue}
                        className="text-sm text-[#6C757D]"
                      />
                    )}
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
