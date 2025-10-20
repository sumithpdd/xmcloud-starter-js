"use client";

import { useState, useEffect } from "react";
import type React from 'react';
import { Text, type Field } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

interface JumpLinkItem {
  fields: {
    title: Field<string>;
    anchor: Field<string>;
  };
}

interface JumpLinksProps {
  fields?: {
    items: JumpLinkItem[];
  };
}

type JumpLinksComponentProps = ComponentProps & JumpLinksProps;

export const Default: React.FC<JumpLinksComponentProps> = (props) => {
  const { fields } = props;
  const [activeSection, setActiveSection] = useState("");

  if (fields) {
    const items = fields.items || [];

    if (items.length === 0) {
      return <NoDataFallback componentName="Jump Links" />;
    }

    useEffect(() => {
      const handleScroll = () => {
        const sections = items.map((item) => item.fields.anchor?.value).filter(Boolean);

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [items]);

    const scrollToSection = (anchor: string) => {
      const element = document.getElementById(anchor);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    return (
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <nav className="flex gap-8 overflow-x-auto py-4">
            {items.map((item, index) => {
              const anchor = item.fields.anchor?.value;
              const isActive = activeSection === anchor;

              return (
                <button
                  key={index}
                  onClick={() => anchor && scrollToSection(anchor)}
                  className={`whitespace-nowrap text-sm font-medium transition-colors pb-2 border-b-2 ${
                    isActive ? "text-primary border-primary" : "text-gray-600 border-transparent hover:text-primary"
                  }`}
                >
                  <Text field={item.fields.title} />
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    );
  }

  return <NoDataFallback componentName="Jump Links" />;
};
