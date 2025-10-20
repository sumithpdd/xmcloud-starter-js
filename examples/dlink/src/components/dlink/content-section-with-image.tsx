import type React from 'react';
import { Text, Image, Link, type Field, type ImageField, type LinkField } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

interface ContentSectionWithImageProps {
  fields?: {
    title: Field<string>;
    description: Field<string>;
    ctaText: Field<string>;
    ctaLink: LinkField;
    image: ImageField;
    imagePosition: Field<string>;
    backgroundColor: Field<string>;
  };
}

type ContentSectionWithImageComponentProps = ComponentProps & ContentSectionWithImageProps;

export const Default: React.FC<ContentSectionWithImageComponentProps> = (props) => {
  const { fields } = props;

  if (fields) {
    const imagePosition = fields.imagePosition?.value || "right";
    const backgroundColor = fields.backgroundColor?.value || "white";
    const isImageLeft = imagePosition === "left";
    const bgClass = backgroundColor === "gray" ? "bg-gray-50" : "bg-white";

    return (
      <section className={`${bgClass} py-12 md:py-16`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center`}>
            <div className={isImageLeft ? "md:order-2" : ""}>
              {fields.title && (
                <Text field={fields.title} tag="h2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" />
              )}

              {fields.description && (
                <Text field={fields.description} tag="p" className="text-gray-700 leading-relaxed mb-8 whitespace-pre-line" />
              )}

              {fields.ctaText && fields.ctaLink && (
                <Link
                  field={fields.ctaLink}
                  className="inline-block bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-primary-hover transition-colors"
                />
              )}
            </div>

            <div className={isImageLeft ? "md:order-1" : ""}>
              {fields.image && (
                <Image field={fields.image} className="w-full h-auto rounded-lg" />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <NoDataFallback componentName="Content Section With Image" />;
};
