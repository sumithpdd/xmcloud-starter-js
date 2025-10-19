import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const footerSections = [
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

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Logo size="md" className="mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting people and technology with innovative networking solutions for home, business, and industry.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © D-Link Corporation. All rights reserved. No. 289, Xinhu 3rd Road Neihu District, Taipei 11494 Taiwan
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-accent transition-colors duration-200 text-sm">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-accent transition-colors duration-200 text-sm">
                Terms of use
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-accent transition-colors duration-200 text-sm">
                Sitemap
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-accent transition-colors duration-200 text-sm">
                Cookie Declaration
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
