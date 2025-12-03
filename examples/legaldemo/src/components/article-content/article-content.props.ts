/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, LinkField } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from '@/lib/component-props';

export interface ArticleSection {
  id?: string;
  title?: { jsonValue: Field<string> };
  content?: { jsonValue: Field<string> };
}

export interface ArticleContentFields {
  data: {
    datasource: {
      downloadButtonText?: { jsonValue: Field<string> };
      downloadButtonLink?: { jsonValue: LinkField };
      children?: {
        results?: ArticleSection[];
      };
    };
  };
}

export interface ArticleContentParams {
  [key: string]: any;
}

export interface ArticleContentProps extends ComponentProps {
  params: ArticleContentParams;
  fields: ArticleContentFields;
}

