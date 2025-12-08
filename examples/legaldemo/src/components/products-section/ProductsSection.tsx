import type React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Text, RichText, Link as SitecoreLink, useSitecore } from '@sitecore-content-sdk/nextjs';
import { cn } from '@/lib/utils';
import { NoDataFallback } from '@/utils/NoDataFallback';
import type { ProductsSectionProps, ProductItem } from './products-section.props';

export const Default: React.FC<ProductsSectionProps> = ({ fields, params }) => {
  const { title, subtitle, children } = fields?.data?.datasource ?? {};
  const products = children?.results ?? [];
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  const defaultProducts: ProductItem[] = [
    {
      title: { jsonValue: { value: 'Disputes Funding' } },
      description: {
        jsonValue: {
          value: 'The smart choice for organisations to turn cases into cash flow',
        },
      },
      url: '/expertise/products/disputes-funding',
      ctaText: { jsonValue: { value: 'Discover more' } },
      link: undefined,
    },
    {
      title: { jsonValue: { value: 'Climate Change Quarterly' } },
      description: {
        jsonValue: { value: 'Key updates on global climate litigation and regulations' },
      },
      url: '/expertise/products/climate-change-quarterly',
      ctaText: { jsonValue: { value: 'Find out more' } },
      link: undefined,
    },
  ];

  const productItems = products && products.length > 0 ? products : defaultProducts;

  if (!fields) {
    return <NoDataFallback componentName="Products Section" />;
  }

  return (
    <section
      data-component="ProductsSection"
      className={cn('py-16 md:py-24 bg-[#F8F9FA]', params?.styles)}
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        {title && (
          <Text
            tag="h2"
            field={title.jsonValue}
            className="text-3xl md:text-4xl font-heading font-normal mb-4 text-[#312C62]"
          />
        )}
        {subtitle && (
          <RichText
            field={subtitle.jsonValue}
            className="text-lg text-[#6C757D] mb-12 prose prose-lg max-w-none"
          />
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {productItems.map((product, index) => {
            const productUrl = product.url || product.link?.jsonValue?.value?.href || '#';
            const ctaText = product.ctaText?.jsonValue?.value || 'Learn more';

            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-none hover:shadow-lg transition-shadow border border-[#E9ECEF]"
              >
                {(product.title?.jsonValue?.value || isPageEditing) && (
                  <Text
                    tag="h3"
                    field={product.title?.jsonValue}
                    className="text-2xl font-heading font-normal mb-3 group-hover:text-[#007BFF] transition-colors text-[#312C62]"
                  />
                )}
                {(product.description?.jsonValue?.value || isPageEditing) && (
                  <RichText
                    field={product.description?.jsonValue}
                    className="text-lg text-[#6C757D] mb-4 prose prose-lg max-w-none"
                  />
                )}
                {isPageEditing && product.link ? (
                  <div className="text-[#007BFF] font-medium flex items-center gap-2">
                    <SitecoreLink field={product.link.jsonValue} />
                    <ChevronRight className="h-4 w-4" />
                  </div>
                ) : (
                  productUrl !== '#' && (
                    <Link
                      href={productUrl}
                      className="text-[#007BFF] font-medium flex items-center gap-2 hover:text-[#0066CC] transition-colors"
                    >
                      {ctaText}
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  )
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
