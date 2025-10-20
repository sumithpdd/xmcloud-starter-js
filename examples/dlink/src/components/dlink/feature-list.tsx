import type React from 'react';
import { Text, type Field } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

type Feature = {
  fields: {
    title: Field<string>;
    description: Field<string>;
  };
};

type FeatureListProps = ComponentProps & {
  fields?: {
    features: Feature[];
  };
};

export const Default: React.FC<FeatureListProps> = (props) => {
  const { fields } = props;

  if (fields) {
    const features = fields.features || [];

    if (features.length === 0) {
      return <NoDataFallback componentName="Feature List" />;
    }

    return (
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900">
                    <span className="font-semibold">
                      <Text field={feature.fields.title} />
                    </span>: <Text field={feature.fields.description} />
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return <NoDataFallback componentName="Feature List" />;
};
