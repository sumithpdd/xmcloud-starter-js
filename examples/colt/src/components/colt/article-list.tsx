'use client';

import { Text, type Field, type ImageField, type LinkField } from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from '@/lib/component-props';
import ArticleCard from './article-card';
import type { JSX } from 'react/jsx-runtime';

type Article = {
  id?: string;
  fields?: {
    image?: ImageField;
    category?: Field<string>;
    title?: Field<string>;
    excerpt?: Field<string>;
    date?: Field<string>;
    readTime?: Field<string>;
    link?: LinkField;
  };
};

type ArticleListProps = ComponentProps & {
  fields: {
    heading?: Field<string>;
    subheading?: Field<string>;
    articles?: Article[];
  };
};

const ArticleList = (props: ArticleListProps): JSX.Element => {
  const { heading, subheading, articles } = props.fields;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { fields: _, ...restProps } = props;

  const displayArticles = articles && articles.length > 0 ? articles : [];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          {heading && (
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <Text field={heading} />
            </h2>
          )}
          {subheading && (
            <p className="text-xl text-gray-600">
              <Text field={subheading} />
            </p>
          )}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayArticles.length > 0 ? (
            displayArticles.map((article, index) => (
              <ArticleCard
                key={article.id || `article-${index}`}
                {...restProps}
                fields={article.fields || {}}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No articles available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArticleList;
