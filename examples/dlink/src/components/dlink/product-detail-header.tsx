import type React from 'react';
import { Text, Image, Link, type Field, type ImageField, type LinkField } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

interface ProductDetailHeaderProps {
  fields?: {
    badge: Field<string>;
    title: Field<string>;
    model: Field<string>;
    productStatus: Field<string>;
    features: Field<string>[];
    image: ImageField;
    datasheetLink: LinkField;
  };
}

type ProductDetailHeaderComponentProps = ComponentProps & ProductDetailHeaderProps;

export const Default: React.FC<ProductDetailHeaderComponentProps> = (props) => {
  const { fields } = props;

  if (fields) {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Product Info */}
            <div>
              {fields.badge && (
                <Text field={fields.badge} tag="span" className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded mb-4" />
              )}

              {fields.title && (
                <Text field={fields.title} tag="h1" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" />
              )}

              {fields.model && (
                <Text field={fields.model} tag="h2" className="text-2xl md:text-3xl font-semibold text-primary mb-6" />
              )}

              {fields.productStatus && (
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm text-gray-600">Product Status:</span>
                  <span className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <Text field={fields.productStatus} tag="span" className="text-sm font-medium text-gray-900" />
                  </span>
                </div>
              )}

              {fields.features && fields.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {fields.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <Text field={feature} tag="span" className="text-gray-700" />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {fields.datasheetLink && (
                <Link
                  field={fields.datasheetLink}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition-colors"
                />
              )}
            </div>

            {/* Right Column - Product Image */}
            <div className="flex items-center justify-center">
              {fields.image && (
                <Image
                  field={fields.image}
                  className="w-full h-auto max-w-md"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <NoDataFallback componentName="Product Detail Header" />;
};