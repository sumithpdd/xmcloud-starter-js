import type React from 'react';
import { Text, RichText, Image, Link, type Field, type ImageField, type LinkField, type RichTextField } from '@sitecore-content-sdk/nextjs';
import { Calendar } from "lucide-react";
import { NoDataFallback } from '@/utils/NoDataFallback';
import { ComponentProps } from '@/lib/component-props';

interface NewsArticle {
  title?: Field<string>;
  excerpt?: RichTextField;
  image?: ImageField;
  date?: Field<string>;
  link?: LinkField;
}

interface NewsSectionProps {
  fields?: {
    sectionHeading?: Field<string>;
    viewAllLink?: LinkField;
    articles?: NewsArticle[];
  };
}

type NewsSectionComponentProps = ComponentProps & NewsSectionProps;

/**
 * News Section Component
 * Displays latest news articles
 */
export const Default: React.FC<NewsSectionComponentProps> = (props) => {
  const { fields } = props;

  if (fields) {
    const articles = fields.articles || [];

    if (articles.length === 0) {
      return <NoDataFallback componentName="News Section" />;
    }

    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            {fields.sectionHeading && (
              <Text field={fields.sectionHeading} tag="h2" className="text-3xl md:text-4xl font-bold text-gray-900" />
            )}

            {fields.viewAllLink && (
              <Link
                field={fields.viewAllLink}
                className="text-primary hover:text-primary-hover font-medium transition-colors"
              />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="group cursor-pointer">
                {article.image && (
                  <div className="aspect-video w-full overflow-hidden rounded-lg mb-4 bg-gray-100">
                    <Image
                      field={article.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {article.title && (
                  <Text
                    field={article.title}
                    tag="h3"
                    className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors"
                  />
                )}

                {article.date && (
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <Text field={article.date} tag="time" />
                  </div>
                )}

                {article.excerpt && (
                  <RichText field={article.excerpt} className="text-gray-600 mb-4 line-clamp-3" />
                )}

                {article.link && (
                  <Link
                    field={article.link}
                    className="inline-block text-primary hover:text-primary-hover font-medium transition-colors"
                  />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return <NoDataFallback componentName="News Section" />;
};
