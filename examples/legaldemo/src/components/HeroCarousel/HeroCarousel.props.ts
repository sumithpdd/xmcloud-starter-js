/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Field, LinkField, ImageField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from '@/lib/component-props';

interface HeroCarouselParams {
  autoplay?: boolean;
  autoplayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  [key: string]: any;
}

export interface HeroCarouselSlide {
  id?: string;
  name?: string;
  url?: string;
  displayName?: string;
  fields?: {
    Title?: { jsonValue: Field<string> };
    Subtitle?: { jsonValue: Field<string> };
    Description?: { jsonValue: Field<string> };
    Image?: { jsonValue: ImageField };
    Link?: { jsonValue: LinkField };
    BackgroundColor?: { jsonValue: Field<string> };
  };
}

export interface HeroCarouselFields {
  fields: {
    data: {
      datasource?: {
        slides?: HeroCarouselSlide[];
      };
    };
  };
}

export type HeroCarouselProps = ComponentProps &
  HeroCarouselFields & {
    params: HeroCarouselParams;
  };
