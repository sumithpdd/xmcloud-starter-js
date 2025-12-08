import type React from 'react';
import { Text, RichText, useSitecore } from '@sitecore-content-sdk/nextjs';
import { cn } from '@/lib/utils';
import { NoDataFallback } from '@/utils/NoDataFallback';
import type { HeadingTextProps } from './HeadingText.props';

export const Default: React.FC<HeadingTextProps> = ({ fields, params, rendering }) => {
  // Initial debug - component is being called
  console.log('[HeadingText] Component initialized', {
    timestamp: new Date().toISOString(),
    hasProps: true,
  });

  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  // Try to get fields from datasource first, then fallback to rendering.fields
  const datasourceFields = fields?.data?.datasource;
  const renderingFields = rendering?.fields;
  
  // Helper function to normalize field structure
  // Handles both { jsonValue: { value } } and { value } structures
  const normalizeField = (field: any) => {
    if (!field) return null;
    
    // If it already has jsonValue, return as-is
    if (field.jsonValue) {
      return field;
    }
    
    // If it has value directly, wrap it in jsonValue structure
    if (field.value !== undefined) {
      return {
        jsonValue: {
          value: field.value,
        },
      };
    }
    
    return null;
  };
  
  // Get fields from either datasource or rendering.fields
  const headingRaw = datasourceFields?.heading ?? renderingFields?.heading;
  const textRaw = datasourceFields?.text ?? renderingFields?.text;
  
  // Normalize the field structures
  const heading = normalizeField(headingRaw);
  const text = normalizeField(textRaw);

  // Debug logging (remove in production)
  if (process.env.NODE_ENV === 'development') {
    console.log('[HeadingText] Component Debug:', {
      componentName: rendering?.componentName,
      hasFields: !!fields,
      hasDatasource: !!fields?.data?.datasource,
      hasRenderingFields: !!renderingFields,
      datasource: fields?.data?.datasource,
      renderingFields: renderingFields,
      heading: {
        exists: !!heading,
        hasJsonValue: !!heading?.jsonValue,
        value: heading?.jsonValue?.value,
        fullField: heading,
        source: datasourceFields?.heading ? 'datasource' : renderingFields?.heading ? 'rendering.fields' : 'none',
      },
      text: {
        exists: !!text,
        hasJsonValue: !!text?.jsonValue,
        value: text?.jsonValue?.value,
        fullField: text,
        source: datasourceFields?.text ? 'datasource' : renderingFields?.text ? 'rendering.fields' : 'none',
      },
      isPageEditing,
      params,
      rendering,
    });
  }

  if (!fields && !renderingFields) {
    console.warn('[HeadingText] No fields provided - showing fallback');
    return <NoDataFallback componentName="Heading Text" />;
  }

  if (!datasourceFields && !renderingFields) {
    console.warn('[HeadingText] No datasource or rendering fields found:', {
      hasFields: !!fields,
      hasData: !!fields?.data,
      hasDatasource: !!fields?.data?.datasource,
      hasRenderingFields: !!renderingFields,
      fieldsStructure: Object.keys(fields || {}),
      dataStructure: fields?.data ? Object.keys(fields.data) : 'no data',
      renderingFieldsKeys: renderingFields ? Object.keys(renderingFields) : 'no rendering fields',
    });
  }

  const headingValue = heading?.jsonValue?.value;
  const textValue = text?.jsonValue?.value;
  const hasHeading = !!headingValue || isPageEditing;
  const hasText = !!textValue || isPageEditing;

  if (process.env.NODE_ENV === 'development') {
    console.log('[HeadingText] Render State:', {
      hasHeading,
      hasText,
      willRenderHeading: hasHeading,
      willRenderText: hasText,
      headingValue: headingValue,
      textValue: textValue ? textValue.substring(0, 100) + '...' : undefined,
      normalizedHeading: heading,
      normalizedText: text,
    });
  }

  return (
    <section data-component="HeadingText" className={cn('py-16 md:py-24 bg-white', params?.styles)}>
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="max-w-4xl">
          {hasHeading && (
            <Text
              tag="h2"
              field={heading?.jsonValue}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal mb-6 text-[#312C62]"
            />
          )}
          {hasText && (
            <RichText
              field={text?.jsonValue}
              className="prose prose-lg max-w-none text-[#312C62] leading-relaxed prose-p:mb-4 prose-p:mt-0"
            />
          )}
          {!hasHeading && !hasText && !isPageEditing && (
            <div className="text-center text-gray-500 py-8">
              <p>HeadingText component loaded but no content to display.</p>
              <p className="text-sm mt-2">Check browser console for debugging information.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
