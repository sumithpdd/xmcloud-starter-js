"use client";

import { useState } from "react";
import type React from 'react';
import { Text, Image, Link, type Field, type ImageField, type LinkField } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

interface Product {
  fields: {
    name: Field<string>;
    model: Field<string>;
    image: ImageField;
    link: LinkField;
    features: Field<string>[];
  };
}

interface FilterOption {
  fields: {
    label: Field<string>;
    value: Field<string>;
  };
}

interface FilterCategory {
  fields: {
    categoryName: Field<string>;
    options: FilterOption[];
  };
}

interface ProductSelectorProps {
  fields?: {
    sectionTitle: Field<string>;
    filterCategories: FilterCategory[];
    products: Product[];
  };
}

type ProductSelectorComponentProps = ComponentProps & ProductSelectorProps;

export const Default: React.FC<ProductSelectorComponentProps> = (props) => {
  const { fields } = props;
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [showAllFilters, setShowAllFilters] = useState<Record<string, boolean>>({});

  if (fields) {
    const filterCategories = fields.filterCategories || [];
    const products = fields.products || [];

    if (products.length === 0) {
      return <NoDataFallback componentName="Product Selector" />;
    }

    const toggleFilter = (category: string, value: string) => {
      setSelectedFilters((prev) => {
        const current = prev[category] || [];
        const updated = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
        return { ...prev, [category]: updated };
      });
    };

    const toggleShowAll = (category: string) => {
      setShowAllFilters((prev) => ({ ...prev, [category]: !prev[category] }));
    };

    const filteredProducts = products.filter((product) => {
      return Object.entries(selectedFilters).every(([, values]) => {
        if (values.length === 0) return true;
        return values.some((value) => {
          const productFeatures = product.fields.features?.map(f => f?.value).filter(Boolean) || [];
          return productFeatures.some((feature) => feature?.toLowerCase().includes(value.toLowerCase()));
        });
      });
    });

    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {fields.sectionTitle && (
            <Text field={fields.sectionTitle} tag="h2" className="text-3xl font-bold text-gray-900 mb-8 text-center" />
          )}

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Filter Products</h3>
                
                {filterCategories.map((category, categoryIndex) => {
                  const categoryName = category.fields.categoryName?.value || '';
                  const options = category.fields.options || [];
                  const showAll = showAllFilters[categoryName] || false;
                  const displayOptions = showAll ? options : options.slice(0, 5);

                  return (
                    <div key={categoryIndex} className="mb-6">
                      <Text field={category.fields.categoryName} tag="h4" className="text-sm font-medium text-gray-700 mb-3" />
                      
                      <div className="space-y-2">
                        {displayOptions.map((option, optionIndex) => {
                          const optionValue = option.fields.value?.value || '';
                          const isSelected = selectedFilters[categoryName]?.includes(optionValue) || false;

                          return (
                            <label key={optionIndex} className="flex items-center">
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => toggleFilter(categoryName, optionValue)}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <Text field={option.fields.label} tag="span" className="ml-2 text-sm text-gray-600" />
                            </label>
                          );
                        })}
                      </div>

                      {options.length > 5 && (
                        <button
                          onClick={() => toggleShowAll(categoryName)}
                          className="text-sm text-primary hover:text-primary-hover mt-2"
                        >
                          {showAll ? 'Show Less' : `Show All (${options.length})`}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <Link
                    key={index}
                    field={product.fields.link}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                  >
                    <div className="aspect-square bg-gray-100 flex items-center justify-center p-6">
                      {product.fields.image && (
                        <Image
                          field={product.fields.image}
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>

                    <div className="p-6">
                      {product.fields.model && (
                        <Text field={product.fields.model} tag="p" className="text-sm font-semibold text-primary mb-2" />
                      )}
                      {product.fields.name && (
                        <Text field={product.fields.name} tag="h3" className="text-lg font-semibold text-gray-900 mb-3" />
                      )}
                      
                      {product.fields.features && product.fields.features.length > 0 && (
                        <ul className="space-y-1">
                          {product.fields.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                              <Text field={feature} />
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <NoDataFallback componentName="Product Selector" />;
};