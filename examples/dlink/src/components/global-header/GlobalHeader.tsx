import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, ChevronDown } from 'lucide-react';
import { useSitecore, Image } from '@sitecore-content-sdk/nextjs';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

import { Default as Logo } from '@/components/logo/Logo.dev';
import { GlobalHeaderProps } from './global-header.props';

export const Default: React.FC<GlobalHeaderProps> = (props) => {
  const { fields } = props ?? {};
  const { logo } = fields?.data?.item ?? {};
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { page } = useSitecore();
  const pageEditing = page.mode.isEditing;

  const [visible, setVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  // D-Link navigation structure matching the website
  const dlinkNavigation = [
    {
      name: 'For Home',
      href: '/home',
      submenu: ['Wi-Fi', '4G/5G', 'Cameras', 'Smart Home', 'Switches', 'Adapters', 'mydlink']
    },
    {
      name: 'For Business', 
      href: '/business',
      submenu: ['Switches', 'Wireless', 'Business Routers', 'Nuclias', 'IP Surveillance', 'Accessories']
    },
    {
      name: 'For Industry',
      href: '/industry', 
      submenu: ['4G / 5G M2M', 'D-ECS', 'Industry Switches', 'Accessories']
    },
    {
      name: 'Support',
      href: '/support',
      submenu: ['Tech Support', 'Tech Alerts', 'FAQs', 'Services', 'Warranty', 'Contact', 'Support Portal']
    },
    {
      name: 'Resources',
      href: '/resources',
      submenu: ['Brochures and Guides', 'Case Studies', 'Videos', 'Blog', 'Product Selector']
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY < prevScrollY) {
        setVisible(true);
      } else if (currentScrollY > 10 && currentScrollY > prevScrollY) {
        setVisible(false);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  return (
    <AnimatePresence mode="wait">
      <motion.header
        initial={{ opacity: 1 }}
        animate={{ opacity: visible ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm',
          !visible && 'pointer-events-none'
        )}
      >
        <nav className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                {pageEditing ? (
                  <Image field={logo?.jsonValue} className="h-8 w-auto" />
                ) : (
                  logo?.jsonValue?.value && (
                    <Link href="/" className="flex items-center">
                      <Logo logo={logo?.jsonValue} className="h-8 w-auto" />
                    </Link>
                  )
                )}
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {dlinkNavigation.map((item) => (
                    <div key={item.name} className="relative group">
                      <button
                        className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div 
                        className={cn(
                          "absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible transition-all duration-200 z-50",
                          activeDropdown === item.name && "opacity-100 visible"
                        )}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
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

              {/* Language Selector */}
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-sm text-gray-500">GB</span>
                <span className="text-gray-300">|</span>
                <span className="text-sm text-primary font-medium">EN</span>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  type="button"
                  className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu className="block h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
                {dlinkNavigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <div className="pl-4 space-y-1">
                      {item.submenu.slice(0, 3).map((subItem) => (
                        <Link
                          key={subItem}
                          href={`${item.href}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-gray-600 hover:text-primary block px-3 py-1 text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>
      </motion.header>
    </AnimatePresence>
  );
};
