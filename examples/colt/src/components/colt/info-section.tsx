import type { JSX } from 'react/jsx-runtime';
import type { ComponentProps } from '@/lib/component-props';
type InfoSectionProps = ComponentProps & {
  fields?: {
    content?: {
      value: string;
    };
  };
};

export const InfoSection = (props: InfoSectionProps): JSX.Element => {
  const defaultContent = `Colt DCS designs, builds and operates data centres for global hyperscalers and large enterprises.

Our global portfolio includes 13 operational data centres, with an additional 19 in development across 11 cities in the UK, Europe, and the APAC region.

We enable our customers to effectively plan for the growth of their business while also providing them with peace of mind. We provide secure, resilient, well-connected infrastructure with planned future capacity growth potential. We have over 25 years of experience in the data centre industry, delivering on our vision of being the most trusted and customer-centric data centre operator in the market.

We put the environment at the heart of everything we do by recognising this as a fundamental responsibility towards our planet. That's why we're taking ownership to reduce our environmental impact globally and make sustainability a key strategic driver. As part of our sustainability planning, Colt DCS has set comprehensive near-and long-term Science Based Targets to cut our emissions in line with the SBTi's latest Net Zero Standard.`;

  const content = props.fields?.content?.value || defaultContent;

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="prose prose-lg max-w-none">
          {content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
