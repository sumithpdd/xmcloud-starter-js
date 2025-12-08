import type React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import {
  Text,
  RichText,
  Image,
  Link as SitecoreLink,
  useSitecore,
} from '@sitecore-content-sdk/nextjs';
import { cn } from '@/lib/utils';
import { NoDataFallback } from '@/utils/NoDataFallback';
import type { RiskAreasSectionProps, RiskAreaItem } from './risk-areas-section.props';

export const Default: React.FC<RiskAreasSectionProps> = ({ fields, params }) => {
  const { title, introText, ctaText, ctaLink, children } = fields?.data?.datasource ?? {};
  const riskAreas = children?.results ?? [];
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  const defaultRiskAreas: RiskAreaItem[] = [
    {
      title: { jsonValue: { value: 'Economic Insights' } },
      description: {
        jsonValue: { value: 'Risks arising from changes and uncertainties in the global economy' },
      },
      url: '/insights/risk-area/economic-insights',
      image: undefined,
    },
    {
      title: { jsonValue: { value: 'People Dynamics' } },
      description: {
        jsonValue: { value: 'Steering the complexities of people management in business' },
      },
      url: '/insights/risk-area/people-dynamics',
      image: undefined,
    },
    {
      title: { jsonValue: { value: 'Tech & AI Evolution' } },
      description: {
        jsonValue: { value: 'Navigating the ever-evolving world of technology & data' },
      },
      url: '/insights/risk-area/tech-ai-evolution',
      image: undefined,
    },
    {
      title: { jsonValue: { value: 'Geopolitical Outlook' } },
      description: {
        jsonValue: {
          value: 'Addressing the consequences of a volatile geopolitical environment',
        },
      },
      url: '/insights/risk-area/geopolitical-outlook',
      image: undefined,
    },
    {
      title: { jsonValue: { value: 'Regulatory Movement' } },
      description: {
        jsonValue: {
          value: 'Charting differing international regulatory regimes and compliance',
        },
      },
      url: '/insights/risk-area/regulatory-movement',
      image: undefined,
    },
    {
      title: { jsonValue: { value: 'Climate Change' } },
      description: {
        jsonValue: {
          value: 'Risks and liabilities arising from climate change and environmental issues',
        },
      },
      url: '/insights/risk-area/climate-change',
      image: undefined,
    },
  ];

  const riskAreaItems = riskAreas && riskAreas.length > 0 ? riskAreas : defaultRiskAreas;

  if (!fields) {
    return <NoDataFallback componentName="Risk Areas Section" />;
  }

  return (
    <section
      data-component="RiskAreasSection"
      className={cn('py-16 md:py-24 bg-[#F8F9FA]', params?.styles)}
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="mb-12">
          {title && (
            <Text
              tag="h2"
              field={title.jsonValue}
              className="text-3xl md:text-4xl font-heading font-normal mb-6 text-[#212529]"
            />
          )}
          <div className="max-w-3xl">
            {(introText?.jsonValue?.value || isPageEditing) && (
              <RichText
                field={introText?.jsonValue}
                className="text-lg leading-relaxed mb-8 prose prose-lg max-w-none text-[#212529]"
              />
            )}
            {ctaLink && (
              <div className="mt-6">
                {isPageEditing ? (
                  <Button
                    variant="default"
                    size="lg"
                    asChild
                    className="bg-[#003366] hover:bg-[#002850] text-white rounded-none"
                  >
                    <SitecoreLink field={ctaLink.jsonValue} />
                  </Button>
                ) : (
                  ctaLink.jsonValue?.value?.href && (
                    <Button
                      variant="default"
                      size="lg"
                      asChild
                      className="bg-[#003366] hover:bg-[#002850] text-white rounded-none"
                    >
                      <Link href={ctaLink.jsonValue.value.href}>
                        {ctaText?.jsonValue?.value || 'View all six risks'}
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* Risk Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {riskAreaItems.map((risk, index) => {
            const riskUrl = risk.url || risk.link?.jsonValue?.value?.href || '#';

            return (
              <Link
                key={index}
                href={riskUrl}
                className="group relative overflow-hidden rounded-none bg-white hover:shadow-lg transition-shadow border border-[#E9ECEF]"
              >
                <div className="aspect-[4/3] relative">
                  {(risk.image?.jsonValue?.value?.src || isPageEditing) && (
                    <Image
                      field={risk.image?.jsonValue}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt={risk.image?.jsonValue?.value?.alt || ''}
                    />
                  )}
                </div>
                <div className="p-6">
                  {(risk.title?.jsonValue?.value || isPageEditing) && (
                    <Text
                      tag="h3"
                      field={risk.title?.jsonValue}
                      className="text-xl font-heading font-normal mb-2 group-hover:text-[#003366] transition-colors text-[#212529]"
                    />
                  )}
                  {(risk.description?.jsonValue?.value || isPageEditing) && (
                    <RichText
                      field={risk.description?.jsonValue}
                      className="text-[#6C757D] leading-relaxed prose prose-sm max-w-none"
                    />
                  )}
                  <div className="mt-4 text-[#003366] font-medium flex items-center gap-2">
                    Find out more <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
