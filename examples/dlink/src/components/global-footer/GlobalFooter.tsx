import type React from 'react';
import { Placeholder, Text, useSitecore } from '@sitecore-content-sdk/nextjs';
import { GlobalFooterProps } from '@/components/global-footer/global-footer.props';
import { Default as FooterCallout } from '@/components/footer-navigation-callout/FooterNavigationCallout.dev';
import { Default as Logo } from '@/components/logo/Logo.dev';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { EditableImageButton } from 'components/button-component/ButtonComponent';
import { cn } from 'lib/utils';

export const Default: React.FC<GlobalFooterProps> = (props) => {
  const { fields, rendering } = props;
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;

  const {
    footerCopyright,
    footerLogo,
    footerPromoDescription,
    footerPromoLink,
    footerPromoTitle,
    footerSocialLinks,
  } = fields?.data?.datasource ?? {};

  // D-Link footer navigation structure matching the website
  const dlinkFooterSections = [
    {
      title: 'For Home',
      links: [
        { name: 'Wi-Fi', href: '/home/wifi' },
        { name: '4G/5G', href: '/home/4g-5g' },
        { name: 'Cameras', href: '/home/cameras' },
        { name: 'Smart Home', href: '/home/smart-home' },
        { name: 'Switches', href: '/home/switches' },
        { name: 'Adapters', href: '/home/adapters' },
        { name: 'mydlink', href: '/home/mydlink' }
      ]
    },
    {
      title: 'For Business',
      links: [
        { name: 'Switches', href: '/business/switches' },
        { name: 'Wireless', href: '/business/wireless' },
        { name: 'Business Routers', href: '/business/routers' },
        { name: 'Nuclias', href: '/business/nuclias' },
        { name: 'IP Surveillance', href: '/business/surveillance' },
        { name: 'Accessories', href: '/business/accessories' }
      ]
    },
    {
      title: 'For Industry',
      links: [
        { name: '4G / 5G M2M', href: '/industry/m2m' },
        { name: 'D-ECS', href: '/industry/decs' },
        { name: 'Industry Switches', href: '/industry/switches' },
        { name: 'Accessories', href: '/industry/accessories' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Tech Support', href: '/support/tech-support' },
        { name: 'Tech Alerts', href: '/support/tech-alerts' },
        { name: 'FAQs', href: '/support/faqs' },
        { name: 'Services', href: '/support/services' },
        { name: 'Warranty', href: '/support/warranty' },
        { name: 'Contact', href: '/support/contact' },
        { name: 'Support Portal', href: '/support/portal' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Brochures and Guides', href: '/resources/brochures' },
        { name: 'Case Studies', href: '/resources/case-studies' },
        { name: 'Videos', href: '/resources/videos' },
        { name: 'Blog', href: '/resources/blog' },
        { name: 'Product Selector', href: '/resources/product-selector' }
      ]
    }
  ];

  if (fields) {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Logo section */}
            <div className="lg:col-span-1">
              <div className="max-w-[121px] mb-6">
                <Logo logo={footerLogo?.jsonValue} />
              </div>
            </div>

            {/* Navigation sections */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {dlinkFooterSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Social links */}
              <div className="flex space-x-4">
                {footerSocialLinks?.results?.map((socialLink, index) => (
                  <EditableImageButton
                    key={socialLink?.link?.jsonValue?.value.href || index}
                    buttonLink={socialLink?.link?.jsonValue}
                    className={cn('relative hover:bg-transparent')}
                    variant="ghost"
                    size={isPageEditing ? 'default' : 'icon'}
                    isPageEditing={isPageEditing}
                    icon={socialLink?.socialIcon?.jsonValue}
                    asIconLink={true}
                  />
                ))}
              </div>
              
              {/* Copyright text */}
              <Text
                className="text-sm text-gray-400"
                field={footerCopyright?.jsonValue}
                encode={false}
              />
            </div>
          </div>
        </div>
      </footer>
    );
  }
  return <NoDataFallback componentName="Global Footer" />;
};
