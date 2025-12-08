import type { Field } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from '@/lib/component-props';

export interface HeadingTextFields {
  fields: {
    data: {
      datasource?: {
        heading?: { jsonValue: Field<string> };
        text?: { jsonValue: Field<string> };
      };
    };
  };
}

export type HeadingTextProps = ComponentProps & HeadingTextFields;
