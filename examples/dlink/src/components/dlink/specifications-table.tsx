import type React from 'react';
import { Text, type Field } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

type Specification = {
  fields: {
    label: Field<string>;
    value: Field<string>;
  };
};

type SpecificationsTableProps = ComponentProps & {
  fields?: {
    title: Field<string>;
    specifications: Specification[];
  };
};

export const Default: React.FC<SpecificationsTableProps> = (props) => {
  const { fields } = props;

  if (fields) {
    const specifications = fields.specifications || [];

    if (specifications.length === 0) {
      return <NoDataFallback componentName="Specifications Table" />;
    }

    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {fields.title && (
            <Text field={fields.title} tag="h2" className="text-3xl font-bold text-gray-900 mb-8" />
          )}

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                {specifications.map((spec, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900 w-1/3">
                      <Text field={spec.fields.label} />
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      <Text field={spec.fields.value} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }

  return <NoDataFallback componentName="Specifications Table" />;
};
