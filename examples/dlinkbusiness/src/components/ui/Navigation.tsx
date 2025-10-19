import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const navigationItems = [
    {
      name: 'For Home',
      href: '/home',
      submenu: ['Wi-Fi', '4G/5G', 'Cameras', 'Smart Home', 'Switches', 'Adapters', 'mydlink'],
    },
    {
      name: 'For Business',
      href: '/business',
      submenu: [
        'Switches',
        'Wireless',
        'Business Routers',
        'Nuclias',
        'IP Surveillance',
        'Accessories',
      ],
    },
    {
      name: 'For Industry',
      href: '/industry',
      submenu: ['4G / 5G M2M', 'D-ECS', 'Industry Switches', 'Accessories'],
    },
    {
      name: 'Support',
      href: '/support',
      submenu: [
        'Tech Support',
        'Tech Alerts',
        'FAQs',
        'Services',
        'Warranty',
        'Contact',
        'Support Portal',
      ],
    },
    {
      name: 'Resources',
      href: '/resources',
      submenu: ['Brochures and Guides', 'Case Studies', 'Videos', 'Blog', 'Product Selector'],
    },
  ];

  return (
    <nav className={`bg-white border-b border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Logo size="md" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem}
                          href={`${item.href}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
          {navigationItems.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium"
              >
                {item.name}
              </Link>
              <div className="pl-4 space-y-1">
                {item.submenu.slice(0, 3).map((subItem) => (
                  <Link
                    key={subItem}
                    href={`${item.href}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-600 hover:text-primary block px-3 py-1 text-sm"
                  >
                    {subItem}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
