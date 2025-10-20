import type React from 'react';
import { Text, RichText, Image, Link, type Field, type ImageField, type LinkField, type RichTextField } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

interface ProductCard {
  heading?: Field<string>;
  description?: RichTextField;
  image?: ImageField;
  link?: LinkField;
}

interface ProductShowcaseProps {
  fields?: {
    sectionHeading?: Field<string>;
    products?: ProductCard[];
  };
}

type ProductShowcaseComponentProps = ComponentProps & ProductShowcaseProps;

/**
 * Product Showcase Component
 * Displays a grid of product cards
 */
export const Default: React.FC<ProductShowcaseComponentProps> = (props) => {
  const { fields } = props;

  if (fields) {
    const products = fields.products || [];

    if (products.length === 0) {
      return <NoDataFallback componentName="Product Showcase" />;
    }

    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {fields.sectionHeading && (
            <Text
              field={fields.sectionHeading}
              tag="h2"
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                {product.image && (
                  <div className="aspect-video w-full overflow-hidden bg-gray-100">
                    <Image
                      field={product.image}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6">
                  {product.heading && (
                    <Text field={product.heading} tag="h3" className="text-xl font-semibold mb-3 text-gray-900" />
                  )}

                  {product.description && (
                    <RichText field={product.description} className="text-gray-600 mb-4 line-clamp-3" />
                  )}

                  {product.link && (
                    <Link
                      field={product.link}
                      className="inline-block text-primary hover:text-primary-hover font-medium transition-colors"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return <NoDataFallback componentName="Product Showcase" />;
};
