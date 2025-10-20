import type React from 'react';
import { Text, Image, Link, type Field, type ImageField, type LinkField } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

type Product = {
  fields: {
    name: Field<string>;
    model: Field<string>;
    image: ImageField;
    link: LinkField;
  };
};

type ProductGridProps = ComponentProps & {
  fields?: {
    title: Field<string>;
    products: Product[];
  };
};

export const Default: React.FC<ProductGridProps> = (props) => {
  const { fields } = props;

  if (fields) {
    const products = fields.products || [];

    if (products.length === 0) {
      return <NoDataFallback componentName="Product Grid" />;
    }

    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {fields.title && (
            <Text field={fields.title} tag="h2" className="text-3xl font-bold text-gray-900 mb-12 text-center" />
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link
                key={index}
                field={product.fields.link}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square bg-gray-100 flex items-center justify-center p-8">
                  {product.fields.image && (
                    <Image
                      field={product.fields.image}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  )}
                </div>

                <div className="p-6">
                  {product.fields.model && (
                    <Text field={product.fields.model} tag="p" className="text-sm font-semibold text-primary mb-2" />
                  )}
                  {product.fields.name && (
                    <Text
                      field={product.fields.name}
                      tag="h3"
                      className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors"
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return <NoDataFallback componentName="Product Grid" />;
};
