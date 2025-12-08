import React, { JSX } from 'react';
import {
  NextImage as ContentSdkImage,
  Link as ContentSdkLink,
  RichText as ContentSdkRichText,
  ImageField,
  Field,
  LinkField,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  PromoIcon: ImageField;
  PromoText: Field<string>;
  PromoLink: LinkField;
  PromoText2: Field<string>;
}

type PromoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const PromoDefaultComponent = (props: PromoProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Promo</span>
    </div>
  </div>
);

export const Default = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div
        className={`component promo flex flex-col h-full w-full ${props.params.styles}`}
        id={id ? id : undefined}
      >
        <div className="component-content flex flex-col h-full">
          {/* Text content first - heading and description */}
          <div className="promo-text flex flex-col flex-1 mb-6">
            <div className="field-promotext [&_p:first-child]:text-2xl [&_p:first-child]:md:text-3xl [&_p:first-child]:font-heading [&_p:first-child]:text-[#312C62] [&_p:first-child]:mb-4 [&_p:first-child]:font-normal [&_p:not(:first-child)]:text-base [&_p:not(:first-child)]:text-gray-600 [&_p:not(:first-child)]:leading-relaxed [&_p:not(:first-child)]:mb-0">
              <ContentSdkRichText field={props.fields.PromoText} />
            </div>
            {/* Link if present */}
            {props.fields.PromoLink && (
              <div className="field-promolink mt-4">
                <ContentSdkLink field={props.fields.PromoLink} />
              </div>
            )}
          </div>
          {/* Image at the bottom */}
          {props.fields.PromoIcon && (
            <div className="field-promoicon w-full mt-auto">
              <ContentSdkImage
                field={props.fields.PromoIcon}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

export const WithText = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component promo ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <div className="field-promoicon">
            <ContentSdkImage field={props.fields.PromoIcon} />
          </div>
          <div className="promo-text">
            <div>
              <div className="field-promotext">
                <ContentSdkRichText className="promo-text" field={props.fields.PromoText} />
              </div>
            </div>
            <div className="field-promotext">
              <ContentSdkRichText className="promo-text" field={props.fields.PromoText2} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};
