import type React from 'react';
import { Text, type Field } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

interface SpecRow {
  fields: {
    label: Field<string>;
    value: Field<string>;
  };
}

interface SpecCategory {
  fields: {
    categoryTitle: Field<string>;
    rows: SpecRow[];
  };
}

interface SpecificationsSectionProps {
  fields?: {
    sectionTitle: Field<string>;
    categories: SpecCategory[];
  };
}

type SpecificationsSectionComponentProps = ComponentProps & SpecificationsSectionProps;

export const Default: React.FC<SpecificationsSectionComponentProps> = (props) => {
  const { fields } = props;

  if (fields) {
    const categories = fields.categories || [];

    if (categories.length === 0) {
      return <NoDataFallback componentName="Specifications Section" />;
    }

    return (
      <section id="specification" className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {fields.sectionTitle && (
            <Text field={fields.sectionTitle} tag="h2" className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12" />
          )}

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {categories.map((category, catIndex) => {
              const rows = category.fields.rows || [];

              return (
                <div key={catIndex} className={catIndex > 0 ? "border-t border-gray-200" : ""}>
                  {category.fields.categoryTitle && (
                    <div className="bg-gray-100 px-6 py-4">
                      <Text field={category.fields.categoryTitle} tag="h3" className="text-lg font-bold text-gray-900" />
                    </div>
                  )}

                  <div className="divide-y divide-gray-200">
                    {rows.map((row, rowIndex) => (
                      <div
                        key={rowIndex}
                        className="grid md:grid-cols-3 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-medium text-gray-900">
                          <Text field={row.fields.label} />
                        </div>
                        <div className="md:col-span-2 text-gray-700">
                          <Text field={row.fields.value} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return <NoDataFallback componentName="Specifications Section" />;
};
