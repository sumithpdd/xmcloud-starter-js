import type React from 'react';
import { Text, Image, type Field, type ImageField } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

type UseCase = {
  fields: {
    title: Field<string>;
    description: Field<string>;
    icon: ImageField;
  };
};

type UseCaseGridProps = ComponentProps & {
  fields?: {
    title: Field<string>;
    subtitle: Field<string>;
    useCases: UseCase[];
  };
};

export const Default: React.FC<UseCaseGridProps> = (props) => {
  const { fields } = props;

  if (fields) {
    const useCases = fields.useCases || [];

    if (useCases.length === 0) {
      return <NoDataFallback componentName="Use Case Grid" />;
    }

    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {fields.subtitle && (
              <Text field={fields.subtitle} tag="p" className="text-sm font-semibold text-primary uppercase tracking-wide mb-2" />
            )}
            {fields.title && (
              <Text field={fields.title} tag="h2" className="text-3xl lg:text-4xl font-bold text-gray-900 text-balance" />
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center space-y-4">
                {useCase.fields.icon && (
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Image field={useCase.fields.icon} className="w-8 h-8 object-contain" />
                  </div>
                )}
                {useCase.fields.title && (
                  <Text field={useCase.fields.title} tag="h3" className="text-xl font-semibold text-gray-900" />
                )}
                {useCase.fields.description && (
                  <Text field={useCase.fields.description} tag="p" className="text-gray-600 text-pretty" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return <NoDataFallback componentName="Use Case Grid" />;
};
