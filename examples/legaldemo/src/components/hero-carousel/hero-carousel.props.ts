/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, LinkField, ImageField } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from '@/lib/component-props';

interface HeroCarouselParams {
  autoplay?: boolean;
  autoplayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  [key: string]: any;
}

interface HeroCarouselSlide {
  title?: { jsonValue: Field<string> };
  subtitle?: { jsonValue: Field<string> };
  description?: { jsonValue: Field<string> };
  image?: { jsonValue: ImageField };
  link?: { jsonValue: LinkField };
  backgroundColor?: { jsonValue: Field<string> };
}

interface HeroCarouselFields {
  data: {
    datasource: {
      children?: {
        results?: HeroCarouselSlide[];
      };
    };
  };
}

export interface HeroCarouselProps extends ComponentProps {
  params: HeroCarouselParams;
  fields: HeroCarouselFields;
}

