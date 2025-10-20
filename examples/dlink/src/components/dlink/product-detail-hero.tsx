"use client";

import type React from 'react';
import { Text, Image, Link, type Field, type ImageField, type LinkField } from '@sitecore-content-sdk/nextjs';
import { useState } from "react";
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

type ProductImage = {
  fields: {
    image: ImageField;
  };
};

type ProductDetailHeroProps = ComponentProps & {
  fields?: {
    model: Field<string>;
    name: Field<string>;
    badge: Field<string>;
    images: ProductImage[];
    ctaText: Field<string>;
    ctaLink: LinkField;
    downloadText: Field<string>;
    downloadLink: LinkField;
  };
};

export const Default: React.FC<ProductDetailHeroProps> = (props) => {
  const { fields } = props;
  const [selectedImage, setSelectedImage] = useState(0);

  if (fields) {
    const images = fields.images || [];

    if (images.length === 0) {
      return <NoDataFallback componentName="Product Detail Hero" />;
    }

    return (
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center p-8">
                {images[selectedImage] && (
                  <Image
                    field={images[selectedImage].fields.image}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {images.map((imageItem, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-primary' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Image
                        field={imageItem.fields.image}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {fields.badge && (
                <Text field={fields.badge} tag="span" className="inline-block bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full" />
              )}

              {fields.model && (
                <Text field={fields.model} tag="h1" className="text-4xl lg:text-5xl font-bold text-gray-900" />
              )}

              {fields.name && (
                <Text field={fields.name} tag="h2" className="text-2xl lg:text-3xl font-semibold text-primary" />
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                {fields.ctaText && fields.ctaLink && (
                  <Link
                    field={fields.ctaLink}
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors"
                  />
                )}

                {fields.downloadText && fields.downloadLink && (
                  <Link
                    field={fields.downloadLink}
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <NoDataFallback componentName="Product Detail Hero" />;
};