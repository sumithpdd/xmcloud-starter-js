import { Text, Image, type ImageField, type Field } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from '@/lib/component-props';
import type { JSX } from 'react/jsx-runtime';

type FooterProps = ComponentProps & {
  fields: {
    logo?: ImageField;
    copyrightText?: Field<string>;
  };
};

const Footer = (props: FooterProps): JSX.Element => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            {props.fields?.logo ? (
              <Image field={props.fields.logo} className="h-8 mb-4" />
            ) : (
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#00BFA5] rounded"></div>
                <span className="text-xl font-bold">colt</span>
              </div>
            )}
            <p className="text-sm text-gray-400 mb-4">Data Centre Services</p>
            <p className="text-sm text-gray-400">
              Secure, resilient, well-connected infrastructure for global hyperscalers and large
              enterprises.
            </p>
          </div>

          {/* Data Centres */}
          <div>
            <h3 className="font-bold mb-4">Data Centres</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#00BFA5] transition-colors">
                  UK
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00BFA5] transition-colors">
                  Europe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00BFA5] transition-colors">
                  APAC
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00BFA5] transition-colors">
                  Developments
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#00BFA5] transition-colors">
                  Hyperscale
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00BFA5] transition-colors">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00BFA5] transition-colors">
                  AI Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00BFA5] transition-colors">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#00BFA5] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00BFA5] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00BFA5] transition-colors">
                  Media Room
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00BFA5] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex gap-4 mb-8 pb-8 border-b border-gray-800">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#00BFA5] flex items-center justify-center transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#00BFA5] flex items-center justify-center transition-colors"
          >
            <span className="sr-only">Twitter</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#00BFA5] flex items-center justify-center transition-colors"
          >
            <span className="sr-only">YouTube</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-[#00BFA5] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#00BFA5] transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-[#00BFA5] transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-[#00BFA5] transition-colors">
              Accessibility
            </a>
          </div>

          {props.fields?.copyrightText ? (
            <div>
              <Text field={props.fields.copyrightText} />
            </div>
          ) : (
            <div>© 2025 Colt Data Centre Services. All rights reserved.</div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
