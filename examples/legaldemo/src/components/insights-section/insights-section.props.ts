/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, ImageField } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from '@/lib/component-props';

export interface InsightItem {
  category?: { jsonValue: Field<string> };
  subCategory?: { jsonValue: Field<string> };
  title?: { jsonValue: Field<string> };
  date?: { jsonValue: Field<string> };
  url?: string;
  image?: { jsonValue: ImageField };
}

export interface InsightsSectionFields {
  data: {
    datasource: {
      title?: { jsonValue: Field<string> };
      children?: {
        results?: InsightItem[];
      };
    };
  };
}

export interface InsightsSectionParams {
  [key: string]: any;
}

export interface InsightsSectionProps extends ComponentProps {
  params: InsightsSectionParams;
  fields: InsightsSectionFields;
}


