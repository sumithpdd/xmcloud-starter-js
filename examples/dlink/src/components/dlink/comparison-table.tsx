import type React from 'react';
import { Text, Image, Link, type Field, type ImageField, type LinkField } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

type ComparisonProduct = {
  fields: {
    model: Field<string>;
    image: ImageField;
    link: LinkField;
    specs: { [key: string]: Field<string> };
  };
};

type ComparisonTableProps = ComponentProps & {
  fields?: {
    title: Field<string>;
    products: ComparisonProduct[];
    specLabels: Field<string>[];
  };
};

export const Default: React.FC<ComparisonTableProps> = (props) => {
  const { fields } = props;

  if (fields) {
    const products = fields.products || [];
    const specLabels = fields.specLabels || [];

    if (products.length === 0) {
      return <NoDataFallback componentName="Comparison Table" />;
    }

    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {fields.title && (
            <Text field={fields.title} tag="h2" className="text-3xl font-bold text-gray-900 mb-8 text-center" />
          )}

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Model</th>
                  {products.map((product, index) => (
                    <th key={index} className="px-6 py-4 text-center">
                      <Link field={product.fields.link} className="block space-y-2 hover:opacity-75 transition-opacity">
                        {product.fields.image && (
                          <Image
                            field={product.fields.image}
                            className="w-24 h-24 object-contain mx-auto"
                          />
                        )}
                        <Text field={product.fields.model} className="font-semibold text-primary" />
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {specLabels.map((labelField, rowIndex) => {
                  const label = labelField?.value;

                  return (
                    <tr key={rowIndex} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        <Text field={labelField} />
                      </td>
                      {products.map((product, colIndex) => {
                        const specField = product.fields.specs?.[label || ''];

                        return (
                          <td key={colIndex} className="px-6 py-4 text-center text-gray-600">
                            {specField ? <Text field={specField} /> : "-"}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }

  return <NoDataFallback componentName="Comparison Table" />;
};
