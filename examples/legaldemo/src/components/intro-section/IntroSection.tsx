import type React from 'react';
import { RichText, useSitecore } from '@sitecore-content-sdk/nextjs';
import { cn } from '@/lib/utils';
import { NoDataFallback } from '@/utils/NoDataFallback';
import type { IntroSectionProps } from './intro-section.props';

export const Default: React.FC<IntroSectionProps> = ({ fields, params }) => {
  const { heading } = fields?.data?.datasource ?? {};
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  const defaultHeading = {
    jsonValue: {
      value:
        'Where there is opportunity, there is risk. <span class="text-[#00677F]">As the business landscape constantly evolves,</span> you need a legal partner with an in-depth understanding <span class="text-[#00677F]">of how to best address and navigate the risks you face.</span>',
    },
  };

  if (!fields) {
    return <NoDataFallback componentName="Intro Section" />;
  }

  return (
    <section
      data-component="IntroSection"
      className={cn('py-16 md:py-24 bg-white', params?.styles)}
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="max-w-4xl">
          <RichText
            tag="h2"
            field={heading?.jsonValue || defaultHeading.jsonValue}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal leading-tight text-[#212529]"
          />
        </div>
      </div>
    </section>
  );
};


