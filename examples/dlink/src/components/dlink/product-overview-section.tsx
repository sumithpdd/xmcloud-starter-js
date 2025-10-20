import type React from 'react';
import { Text, Image, type Field, type ImageField } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

interface OverviewBlock {
  fields: {
    title: Field<string>;
    description: Field<string>;
    image: ImageField;
    imagePosition: Field<string>;
  };
}

interface ProductOverviewSectionProps {
  fields?: {
    sectionTitle: Field<string>;
    blocks: OverviewBlock[];
  };
}

type ProductOverviewSectionComponentProps = ComponentProps & ProductOverviewSectionProps;

export const Default: React.FC<ProductOverviewSectionComponentProps> = (props) => {
  const { fields } = props;

  if (fields) {
    const blocks = fields.blocks || [];

    if (blocks.length === 0) {
      return <NoDataFallback componentName="Product Overview Section" />;
    }

    return (
      <section id="overview" className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {fields.sectionTitle && (
            <Text field={fields.sectionTitle} tag="h2" className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12" />
          )}

          <div className="space-y-16">
            {blocks.map((block, index) => {
              const imagePosition = block.fields.imagePosition?.value || "right";
              const isImageLeft = imagePosition === "left";

              return (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                    isImageLeft ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={isImageLeft ? "md:order-2" : ""}>
                    {block.fields.title && (
                      <Text field={block.fields.title} tag="h3" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" />
                    )}
                    {block.fields.description && (
                      <Text field={block.fields.description} tag="p" className="text-gray-700 leading-relaxed whitespace-pre-line" />
                    )}
                  </div>

                  <div className={isImageLeft ? "md:order-1" : ""}>
                    {block.fields.image && (
                      <Image field={block.fields.image} className="w-full h-auto rounded-lg" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return <NoDataFallback componentName="Product Overview Section" />;
};
