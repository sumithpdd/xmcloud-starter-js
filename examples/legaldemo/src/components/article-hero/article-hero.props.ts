/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, ImageField } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from '@/lib/component-props';

export interface ArticleHeroFields {
  data: {
    datasource: {
      category?: { jsonValue: Field<string> };
      title?: { jsonValue: Field<string> };
      subtitle?: { jsonValue: Field<string> };
      date?: { jsonValue: Field<string> };
      location?: { jsonValue: Field<string> };
      backgroundImage?: { jsonValue: ImageField };
    };
  };
}

export interface ArticleHeroParams {
  [key: string]: any;
}

export interface ArticleHeroProps extends ComponentProps {
  params: ArticleHeroParams;
  fields: ArticleHeroFields;
}


