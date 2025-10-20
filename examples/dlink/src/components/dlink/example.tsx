import type React from 'react';
import { Text, RichText, Image, Link, type Field, type ImageField, type LinkField, type RichTextField } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

interface ExampleProps {
  fields?: {
    heading?: Field<string>;
    content?: RichTextField;
    image?: ImageField;
    link?: LinkField;
  };
}

type ExampleComponentProps = ComponentProps & ExampleProps;

/**
 * Example Sitecore Component
 * This demonstrates the typical structure of a Sitecore XM Cloud component
 * - Uses Field types from @sitecore-content-sdk/nextjs
 * - Renders content using Sitecore SDK components
 * - Receives fields prop from Sitecore
 */
export const Default: React.FC<ExampleComponentProps> = (props) => {
  const { fields } = props;

  if (fields) {
    return (
      <div className="example-component p-6 bg-white rounded-lg shadow-md">
        {fields.heading && (
          <Text field={fields.heading} tag="h2" className="text-2xl font-bold mb-4 text-gray-900" />
        )}

        {fields.image && (
          <Image field={fields.image} className="w-full h-auto rounded-md mb-4" />
        )}

        {fields.content && (
          <RichText field={fields.content} className="prose prose-lg mb-4 text-gray-700" />
        )}

        {fields.link && (
          <Link
            field={fields.link}
            className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-hover transition-colors"
          />
        )}
      </div>
    );
  }

  return <NoDataFallback componentName="Example" />;
};
