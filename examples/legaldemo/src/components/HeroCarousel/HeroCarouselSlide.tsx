import {
  Text,
  RichText,
  Image,
  Link as SitecoreLink,
  useSitecore,
} from '@sitecore-content-sdk/nextjs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroCarouselSlideProps } from './HeroCarouselSlide.props';

export const Default: React.FC<HeroCarouselSlideProps> = (props) => {
  const { fields } = props;
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  const {
    Title,
    Subtitle,
    Description,
    Image: ImageField,
    Link: LinkField,
  } = fields?.data?.item || {};

  return (
    <div className="relative flex min-h-[70vh] w-full items-center overflow-hidden bg-white">
      {/* Background Image */}
      {(ImageField?.jsonValue?.value?.src || isPageEditing) && (
        <div className="absolute inset-0 z-0">
          <Image
            field={ImageField?.jsonValue}
            className="h-full w-full object-cover"
            alt={ImageField?.jsonValue?.value?.alt || ''}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent" />
        </div>
      )}

      {/* Content - Left Aligned */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-4 py-16 md:px-8 lg:px-12">
        <div className="max-w-2xl space-y-6 text-left">
          {(Subtitle?.jsonValue?.value || isPageEditing) && (
            <Text
              tag="p"
              field={Subtitle?.jsonValue}
              className="text-xs font-medium uppercase tracking-[0.15em] text-[#007BFF] md:text-sm mb-2"
            />
          )}
          {(Title?.jsonValue?.value || isPageEditing) && (
            <Text
              tag="h1"
              field={Title?.jsonValue}
              className="font-heading text-4xl font-normal leading-[1.32] tracking-[0.81px] text-[#312C62] md:text-5xl lg:text-6xl xl:text-7xl mb-4"
            />
          )}
          {(Description?.jsonValue?.value || isPageEditing) && (
            <RichText
              field={Description?.jsonValue}
              className="prose max-w-xl text-base leading-[1.5] text-[#312C62] md:text-lg lg:text-xl prose-p:mb-4 prose-p:mt-0 prose-headings:text-[#312C62] prose-p:text-[#312C62]"
            />
          )}
          {(LinkField?.jsonValue?.value?.href || isPageEditing) && (
            <div className="pt-4">
              {isPageEditing && LinkField?.jsonValue ? (
                <Button
                  variant="default"
                  asChild
                  size="lg"
                  className="bg-[#007BFF] text-white hover:bg-[#0066CC] font-medium px-8 py-4 rounded-none border-0"
                >
                  <SitecoreLink field={LinkField.jsonValue} />
                </Button>
              ) : (
                LinkField?.jsonValue?.value?.href && (
                  <Button
                    variant="default"
                    asChild
                    size="lg"
                    className="bg-[#007BFF] text-white hover:bg-[#0066CC] font-medium px-8 py-4 rounded-none border-0"
                  >
                    <Link href={LinkField.jsonValue.value.href}>
                      {LinkField.jsonValue.value.text || 'Learn More'}
                    </Link>
                  </Button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
