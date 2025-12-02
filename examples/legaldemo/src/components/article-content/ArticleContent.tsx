import type React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { RichText, Link as SitecoreLink, useSitecore } from '@sitecore-content-sdk/nextjs';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { NoDataFallback } from '@/utils/NoDataFallback';
import type { ArticleContentProps } from './article-content.props';

export const Default: React.FC<ArticleContentProps> = ({ fields, params }) => {
  const { downloadButtonText, downloadButtonLink, children } = fields?.data?.datasource ?? {};
  const sections = children?.results ?? [];
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  if (!fields) {
    return <NoDataFallback componentName="Article Content" />;
  }

  return (
    <div
      data-component="ArticleContent"
      className={cn('py-16 md:py-24 bg-white', params?.styles)}
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="max-w-4xl">
          {/* Table of Contents */}
          {sections && sections.length > 0 && (
            <nav className="mb-12 pb-8 border-b border-[#E9ECEF]">
              <ul className="space-y-2">
                {sections.map((section, index) => {
                  const sectionId = section.id || `section-${index}`;
                  return (
                    <li key={index}>
                      <a
                        href={`#${sectionId}`}
                        className="text-[#00677F] hover:underline text-sm font-medium"
                      >
                        {section.title?.jsonValue?.value || `Section ${index + 1}`}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}

          {/* Article Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => {
              const sectionId = section.id || `section-${index}`;
              return (
                <section key={index} id={sectionId} className="scroll-mt-20">
                  {(section.title?.jsonValue?.value || isPageEditing) && (
                    <h2 className="text-2xl md:text-3xl font-heading font-normal mb-6 text-[#212529]">
                      {section.title?.jsonValue?.value}
                    </h2>
                  )}
                  {(section.content?.jsonValue?.value || isPageEditing) && (
                    <div className="prose prose-lg max-w-none">
                      <RichText field={section.content?.jsonValue} />
                    </div>
                  )}
                  {index === 0 && downloadButtonLink && (
                    <div className="mt-8">
                      {isPageEditing ? (
                        <Button
                          asChild
                          size="lg"
                          className="bg-[#00677F] hover:bg-[#005267] text-white rounded-none"
                        >
                          <SitecoreLink field={downloadButtonLink.jsonValue} />
                        </Button>
                      ) : (
                        downloadButtonLink.jsonValue?.value?.href && (
                          <Button
                            asChild
                            size="lg"
                            className="bg-[#00677F] hover:bg-[#005267] text-white rounded-none"
                          >
                            <Link href={downloadButtonLink.jsonValue.value.href}>
                              {downloadButtonText?.jsonValue?.value || 'Download'}
                              <ChevronRight className="ml-2 h-5 w-5" />
                            </Link>
                          </Button>
                        )
                      )}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};


