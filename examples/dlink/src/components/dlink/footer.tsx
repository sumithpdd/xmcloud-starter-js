import type React from 'react';
import { Text, Image, Link, type Field, type ImageField, type LinkField } from '@sitecore-content-sdk/nextjs';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

interface FooterLink {
  text?: Field<string>;
  link?: LinkField;
}

interface FooterColumn {
  heading?: Field<string>;
  links?: FooterLink[];
}

interface SocialLink {
  platform?: Field<string>;
  url?: Field<string>;
}

interface FooterProps {
  fields?: {
    logo?: ImageField;
    columns?: FooterColumn[];
    socialLinks?: SocialLink[];
    copyrightText?: Field<string>;
    bottomLinks?: FooterLink[];
  };
}

type FooterComponentProps = ComponentProps & FooterProps;

/**
 * Footer Component
 * Main footer for the D-Link website
 */
export const Default: React.FC<FooterComponentProps> = (props) => {
  const { fields } = props;

  const getSocialIcon = (platform: string) => {
    const iconClass = "w-5 h-5";
    switch (platform.toLowerCase()) {
      case "facebook":
        return <Facebook className={iconClass} />;
      case "twitter":
        return <Twitter className={iconClass} />;
      case "instagram":
        return <Instagram className={iconClass} />;
      case "linkedin":
        return <Linkedin className={iconClass} />;
      case "youtube":
        return <Youtube className={iconClass} />;
      default:
        return null;
    }
  };

  if (fields) {
    return (
      <footer className="bg-gray-900 text-gray-300">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              {fields.logo ? (
                <Image field={fields.logo} className="h-8 w-auto mb-4 brightness-0 invert" />
              ) : (
                <span className="text-2xl font-bold text-white mb-4 block">D-Link</span>
              )}

              {/* Social Links */}
              {fields.socialLinks && fields.socialLinks.length > 0 && (
                <div className="flex space-x-4 mt-6">
                  {fields.socialLinks.map((social, index) => {
                    const platform = social.platform?.value;
                    const url = social.url?.value;
                    return (
                      <a
                        key={index}
                        href={url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label={platform || "Social media"}
                      >
                        {platform && getSocialIcon(platform)}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer Columns */}
            {fields.columns?.map((column, index) => (
              <div key={index}>
                {column.heading && (
                  <Text field={column.heading} tag="h3" className="text-white font-semibold mb-4" />
                )}
                {column.links && column.links.length > 0 && (
                  <ul className="space-y-2">
                    {column.links.map((linkItem, linkIndex) => (
                      <li key={linkIndex}>
                        {linkItem.link && (
                          <Link
                            field={linkItem.link}
                            className="text-gray-400 hover:text-white transition-colors text-sm"
                          />
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              {fields.copyrightText ? (
                <Text field={fields.copyrightText} tag="p" className="text-sm text-gray-400" />
              ) : (
                <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()} D-Link Corporation. All rights reserved.
                </p>
              )}

              {/* Bottom Links */}
              {fields.bottomLinks && fields.bottomLinks.length > 0 && (
                <div className="flex space-x-6">
                  {fields.bottomLinks.map((linkItem, index) => (
                    linkItem.link && (
                      <Link
                        key={index}
                        field={linkItem.link}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      />
                    )
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return <NoDataFallback componentName="Footer" />;
};
