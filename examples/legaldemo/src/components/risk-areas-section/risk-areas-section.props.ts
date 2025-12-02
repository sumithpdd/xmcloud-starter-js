/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, LinkField, ImageField } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from '@/lib/component-props';

export interface RiskAreaItem {
  title?: { jsonValue: Field<string> };
  description?: { jsonValue: Field<string> };
  url?: string;
  link?: { jsonValue: LinkField };
  image?: { jsonValue: ImageField };
}

export interface RiskAreasSectionFields {
  data: {
    datasource: {
      title?: { jsonValue: Field<string> };
      introText?: { jsonValue: Field<string> };
      ctaText?: { jsonValue: Field<string> };
      ctaLink?: { jsonValue: LinkField };
      children?: {
        results?: RiskAreaItem[];
      };
    };
  };
}

export interface RiskAreasSectionParams {
  [key: string]: any;
}

export interface RiskAreasSectionProps extends ComponentProps {
  params: RiskAreasSectionParams;
  fields: RiskAreasSectionFields;
}
