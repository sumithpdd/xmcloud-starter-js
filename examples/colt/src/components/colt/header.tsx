'use client';

import {
  Text,
  Image,
  type ImageField,
  type Field,
  type LinkField,
} from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from '@/lib/component-props';
import type { JSX } from 'react/jsx-runtime';
import { useState } from 'react';
import Link from 'next/link';

type NavigationItem = {
  id: string;
  fields: {
    title: Field<string>;
    link?: LinkField;
  };
};

type HeaderProps = ComponentProps & {
  fields: {
    logo?: ImageField;
    ctaText?: Field<string>;
    ctaLink?: LinkField;
    navigationItems?: NavigationItem[];
  };
};

const Header = (props: HeaderProps): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#00BFA5] shadow-sm">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              {props.fields?.logo ? (
                <Image field={props.fields.logo} className="h-8" />
              ) : (
                <img
                  src="https://www.coltdatacentres.net/-/media/Images/logos/colt-logos/colt-logo-white.svg?rev=d15c0ffcfd0449c693d235e8fe3091da"
                  alt="Colt Data Centre Services"
                  className="h-8"
                />
              )}
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {props.fields?.navigationItems && props.fields.navigationItems.length > 0 ? (
              props.fields.navigationItems.map((item) => (
                <div key={item.id} className="relative group">
                  {item.fields?.link?.value?.href ? (
                    <a
                      href={item.fields.link.value.href}
                      className="flex items-center gap-1 text-white hover:text-white/80 transition-colors"
                    >
                      <Text field={item.fields.title} />
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </a>
                  ) : (
                    <button className="flex items-center gap-1 text-white hover:text-white/80 transition-colors">
                      <Text field={item.fields.title} />
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              ))
            ) : (
              <>
                <div className="relative group">
                  <button className="flex items-center gap-1 text-white hover:text-white/80 transition-colors">
                    Data Centres
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                <div className="relative group">
                  <button className="flex items-center gap-1 text-white hover:text-white/80 transition-colors">
                    Developments
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                <div className="relative group">
                  <button className="flex items-center gap-1 text-white hover:text-white/80 transition-colors">
                    Solutions
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                <div className="relative group">
                  <button className="flex items-center gap-1 text-white hover:text-white/80 transition-colors">
                    Sustainability
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                <div className="relative group">
                  <button className="flex items-center gap-1 text-white hover:text-white/80 transition-colors">
                    About
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                <div className="relative group">
                  <button className="flex items-center gap-1 text-white hover:text-white/80 transition-colors">
                    Media Room
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                <div className="relative group">
                  <button className="flex items-center gap-1 text-white hover:text-white/80 transition-colors">
                    Contact
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-white hover:text-white/80">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <Link href="/careers" className="text-sm text-white hover:text-white/80">
              Careers
            </Link>

            <div className="flex items-center gap-2 text-sm">
              <img src="/placeholder.svg?height=16&width=24" alt="UK Flag" className="w-6 h-4" />
              <span className="text-white">English</span>
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {props.fields?.ctaText && props.fields?.ctaLink ? (
              <a
                href={props.fields.ctaLink.value?.href || '/contact'}
                className="bg-[#6B46C1] hover:bg-[#5A3BA8] text-white px-6 py-2 rounded transition-colors"
              >
                <Text field={props.fields.ctaText} />
              </a>
            ) : (
              <button className="bg-[#6B46C1] hover:bg-[#5A3BA8] text-white px-6 py-2 rounded transition-colors">
                Get a quote
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white hover:text-white/80"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile navigation menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 py-4">
            <nav className="flex flex-col gap-4">
              {props.fields?.navigationItems && props.fields.navigationItems.length > 0 ? (
                props.fields.navigationItems.map((item) => (
                  <div key={item.id}>
                    {item.fields?.link?.value?.href ? (
                      <a
                        href={item.fields.link.value.href}
                        className="flex items-center justify-between text-white hover:text-white/80 transition-colors py-2"
                      >
                        <Text field={item.fields.title} />
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    ) : (
                      <button className="flex items-center justify-between w-full text-white hover:text-white/80 transition-colors py-2">
                        <Text field={item.fields.title} />
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <>
                  <button className="flex items-center justify-between text-white hover:text-white/80 transition-colors py-2">
                    Data Centres
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <button className="flex items-center justify-between text-white hover:text-white/80 transition-colors py-2">
                    Developments
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <button className="flex items-center justify-between text-white hover:text-white/80 transition-colors py-2">
                    Solutions
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <button className="flex items-center justify-between text-white hover:text-white/80 transition-colors py-2">
                    Sustainability
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <button className="flex items-center justify-between text-white hover:text-white/80 transition-colors py-2">
                    About
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <button className="flex items-center justify-between text-white hover:text-white/80 transition-colors py-2">
                    Media Room
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <button className="flex items-center justify-between text-white hover:text-white/80 transition-colors py-2">
                    Contact
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}

              <div className="border-t border-white/20 pt-4 mt-2 flex flex-col gap-4">
                <Link href="/careers" className="text-white hover:text-white/80 py-2">
                  Careers
                </Link>

                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg?height=16&width=24"
                    alt="UK Flag"
                    className="w-6 h-4"
                  />
                  <span className="text-white">English</span>
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {props.fields?.ctaText && props.fields?.ctaLink ? (
                  <a
                    href={props.fields.ctaLink.value?.href || '/contact'}
                    className="bg-[#6B46C1] hover:bg-[#5A3BA8] text-white px-6 py-2 rounded transition-colors text-center"
                  >
                    <Text field={props.fields.ctaText} />
                  </a>
                ) : (
                  <button className="bg-[#6B46C1] hover:bg-[#5A3BA8] text-white px-6 py-2 rounded transition-colors">
                    Get a quote
                  </button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
