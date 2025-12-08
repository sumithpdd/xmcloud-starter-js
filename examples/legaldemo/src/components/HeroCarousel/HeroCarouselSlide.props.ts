import type { Field, LinkField, ImageField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from '@/lib/component-props';

export interface HeroCarouselSlideItem {
  Title?: { jsonValue: Field<string> };
  Subtitle?: { jsonValue: Field<string> };
  Description?: { jsonValue: Field<string> };
  Image?: { jsonValue: ImageField };
  Link?: { jsonValue: LinkField };
  BackgroundColor?: { jsonValue: Field<string> };
}

export interface HeroCarouselSlideFields {
  fields: {
    data: {
      item?: HeroCarouselSlideItem;
    };
  };
}

export type HeroCarouselSlideProps = ComponentProps & HeroCarouselSlideFields;

