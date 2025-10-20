"use client";

import { useState } from "react";
import type React from 'react';
import { Text, Image, Link, type Field, type ImageField, type LinkField } from '@sitecore-content-sdk/nextjs';
import NextLink from 'next/link';
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

interface NavigationItem {
  text?: Field<string>;
  link?: LinkField;
  children?: NavigationItem[];
}

interface HeaderProps {
  fields?: {
    logo?: ImageField;
    navigation?: NavigationItem[];
    showSearch?: Field<boolean>;
    showCart?: Field<boolean>;
    showAccount?: Field<boolean>;
  };
}

type HeaderComponentProps = ComponentProps & HeaderProps;

/**
 * Header Component
 * Main navigation header for the D-Link website
 */
export const Default: React.FC<HeaderComponentProps> = (props) => {
  const { fields } = props;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (fields) {
    return (
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              {fields.logo ? (
                <NextLink href="/">
                  <Image field={fields.logo} className="h-8 w-auto" />
                </NextLink>
              ) : (
                <NextLink href="/">
                  <span className="text-2xl font-bold text-primary">D-Link</span>
                </NextLink>
              )}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {fields.navigation?.map((item, index) => (
                <div key={index} className="relative group">
                  {item.link ? (
                    <Link
                      field={item.link}
                      className="text-gray-700 hover:text-primary font-medium transition-colors"
                    />
                  ) : item.text ? (
                    <Text
                      field={item.text}
                      tag="span"
                      className="text-gray-700 hover:text-primary font-medium cursor-pointer transition-colors"
                    />
                  ) : null}

                  {/* Dropdown Menu */}
                  {item.children && item.children.length > 0 && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2">
                        {item.children.map((child, childIndex) => (
                          <div key={childIndex}>
                            {child.link && (
                              <Link
                                field={child.link}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {fields.showSearch?.value && (
                <button className="p-2 text-gray-700 hover:text-primary transition-colors" aria-label="Search">
                  <Search className="w-5 h-5" />
                </button>
              )}

              {fields.showCart?.value && (
                <button className="p-2 text-gray-700 hover:text-primary transition-colors" aria-label="Shopping cart">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              )}

              {fields.showAccount?.value && (
                <button className="p-2 text-gray-700 hover:text-primary transition-colors" aria-label="Account">
                  <User className="w-5 h-5" />
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                {fields.navigation?.map((item, index) => (
                  <div key={index}>
                    {item.link ? (
                      <Link
                        field={item.link}
                        className="block text-gray-700 hover:text-primary font-medium transition-colors"
                      />
                    ) : item.text ? (
                      <Text field={item.text} tag="span" className="block text-gray-700 font-medium" />
                    ) : null}

                    {item.children && item.children.length > 0 && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.children.map((child, childIndex) => (
                          <div key={childIndex}>
                            {child.link && (
                              <Link
                                field={child.link}
                                className="block text-sm text-gray-600 hover:text-primary transition-colors"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    );
  }

  return <NoDataFallback componentName="Header" />;
};
