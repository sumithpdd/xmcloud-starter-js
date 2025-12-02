/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, LinkField } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from '@/lib/component-props';

export interface ProductItem {
  title?: { jsonValue: Field<string> };
  description?: { jsonValue: Field<string> };
  url?: string;
  ctaText?: { jsonValue: Field<string> };
  link?: { jsonValue: LinkField };
}

export interface ProductsSectionFields {
  data: {
    datasource: {
      title?: { jsonValue: Field<string> };
      subtitle?: { jsonValue: Field<string> };
      children?: {
        results?: ProductItem[];
      };
    };
  };
}

export interface ProductsSectionParams {
  [key: string]: any;
}

export interface ProductsSectionProps extends ComponentProps {
  params: ProductsSectionParams;
  fields: ProductsSectionFields;
}

