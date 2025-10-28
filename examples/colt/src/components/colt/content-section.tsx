import { RichText, type Field } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from '@/lib/component-props';
import type { JSX } from 'react/jsx-runtime';

type ContentSectionProps = ComponentProps & {
  fields: {
    content?: Field<string>;
    backgroundColor?: Field<string>;
  };
};

const ContentSection = (props: ContentSectionProps): JSX.Element => {
  const bgColor = props.fields?.backgroundColor?.value || 'white';

  return (
    <section className={`py-16 bg-${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4">
        {props.fields?.content ? (
          <div className="prose prose-lg max-w-none">
            <RichText field={props.fields.content} />
          </div>
        ) : (
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700">
              Colt DCS designs, builds and operates data centres for global hyperscalers and large
              enterprises.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
              Our global portfolio includes 13 operational data centres, with an additional 19 in
              development across 11 cities in the UK, Europe, and the APAC region.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
              We enable our customers to effectively plan for the growth of their business while
              also providing them with peace of mind. We provide secure, resilient, well-connected
              infrastructure with planned future capacity growth potential. We have over 25 years of
              experience in the data centre industry, delivering on our vision of being the most
              trusted and customer-centric data centre operator in the market.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentSection;
