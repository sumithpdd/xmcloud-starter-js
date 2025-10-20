import type React from 'react';
import { Text, Link, type Field, type LinkField } from '@sitecore-content-sdk/nextjs';
import { ChevronRight } from 'lucide-react';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

interface BreadcrumbItem {
  fields: {
    title: Field<string>;
    link: LinkField;
  };
}

type BreadcrumbFields = {
  fields?: {
    items?: BreadcrumbItem[];
  };
};

type BreadcrumbProps = ComponentProps & BreadcrumbFields;

export const Default: React.FC<BreadcrumbProps> = (props) => {
  const { fields } = props;

  if (fields) {
    const { items } = fields;
    const breadcrumbItems = items || [];

    if (breadcrumbItems.length === 0) {
      return <NoDataFallback componentName="Breadcrumb" />;
    }

    return (
      <nav className="bg-gray-100 py-3 px-4 md:px-8" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;

            return (
              <li key={index} className="flex items-center gap-2">
                {!isLast ? (
                  <>
                    <Link 
                      field={item.fields.link} 
                      className="text-primary hover:text-primary-hover hover:underline"
                    />
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </>
                ) : (
                  <Text 
                    field={item.fields.title} 
                    className="text-gray-600 font-medium"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }

  return <NoDataFallback componentName="Breadcrumb" />;
};
