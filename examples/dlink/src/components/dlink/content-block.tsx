import type React from 'react';
import { Text, RichText, Image, Link, type Field, type ImageField, type LinkField, type RichTextField } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

interface ContentBlockProps {
  fields?: {
    heading?: Field<string>;
    subheading?: Field<string>;
    content?: RichTextField;
    image?: ImageField;
    videoUrl?: Field<string>;
    ctaLink?: LinkField;
    imagePosition?: Field<"left" | "right">;
    backgroundColor?: Field<string>;
  };
}

type ContentBlockComponentProps = ComponentProps & ContentBlockProps;

/**
 * Content Block Component
 * Flexible content block with image/video and text
 */
export const Default: React.FC<ContentBlockComponentProps> = (props) => {
  const { fields } = props;

  if (fields) {
    const imagePosition = fields.imagePosition?.value || "left";
    const bgColor = fields.backgroundColor?.value || "bg-white";

    return (
      <section className={`py-16 ${bgColor}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex flex-col ${
              imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-12`}
          >
            {/* Media Section */}
            {(fields.image || fields.videoUrl) && (
              <div className="flex-1 w-full">
                {fields.videoUrl?.value ? (
                  <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                      <source src={fields.videoUrl.value} type="video/mp4" />
                    </video>
                  </div>
                ) : fields.image ? (
                  <div className="w-full rounded-lg overflow-hidden shadow-lg">
                    <Image field={fields.image} className="w-full h-auto" />
                  </div>
                ) : null}
              </div>
            )}

            {/* Content Section */}
            <div className="flex-1 w-full">
              {fields.heading && (
                <Text field={fields.heading} tag="h2" className="text-3xl md:text-4xl font-bold mb-4 text-gray-900" />
              )}

              {fields.subheading && (
                <Text
                  field={fields.subheading}
                  tag="h3"
                  className="text-xl md:text-2xl font-semibold mb-6 text-gray-700"
                />
              )}

              {fields.content && (
                <RichText field={fields.content} className="prose prose-lg mb-8 text-gray-600" />
              )}

              {fields.ctaLink && (
                <Link
                  field={fields.ctaLink}
                  className="inline-block px-8 py-4 bg-primary text-white text-lg font-semibold rounded-md hover:bg-primary-hover transition-colors"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <NoDataFallback componentName="Content Block" />;
};
