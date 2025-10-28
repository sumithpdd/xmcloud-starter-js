import type { JSX } from 'react/jsx-runtime';
import type { TextField, LinkField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from '@/lib/component-props';
interface CtaSectionProps extends ComponentProps {
  fields?: {
    title?: TextField;
    description?: TextField;
    ctaText?: TextField;
    ctaLink?: LinkField;
    backgroundImage?: TextField;
  };
}

export const CtaSection = (props: CtaSectionProps): JSX.Element => {
  const title = props.fields?.title?.value || 'Interested to know more about our data centres?';
  const description =
    props.fields?.description?.value ||
    'Get in touch with our team to discuss your requirements and find the perfect solution for your business.';
  const ctaText = props.fields?.ctaText?.value || 'Contact us';
  const ctaLink = props.fields?.ctaLink?.value?.href || '/contact';
  const backgroundImage =
    props.fields?.backgroundImage?.value ||
    'https://www.coltdatacentres.net/-/media/Images/cta-backgrounds/cta-data-centre.jpg';

  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#00BFA5]/90 to-[#6B46C1]/90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{title}</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">{description}</p>
          <a
            href={ctaLink}
            className="inline-block bg-white text-[#6B46C1] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
