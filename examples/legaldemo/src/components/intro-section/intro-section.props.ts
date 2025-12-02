/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from '@/lib/component-props';

export interface IntroSectionFields {
  data: {
    datasource: {
      heading?: { jsonValue: Field<string> };
    };
  };
}

export interface IntroSectionParams {
  [key: string]: any;
}

export interface IntroSectionProps extends ComponentProps {
  params: IntroSectionParams;
  fields: IntroSectionFields;
}

