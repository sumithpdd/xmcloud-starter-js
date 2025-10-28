'use client';

import {
  Image,
  Text,
  RichText,
} from '@sitecore-content-sdk/nextjs';
import type { ComponentProps } from '@/lib/component-props';
import type { JSX } from 'react/jsx-runtime';

type ArticleDetailProps = ComponentProps & {
  fields: {
    image?: { value: { src: string; alt?: string } };
    category?: { value: string };
    title?: { value: string };
    date?: { value: string };
    readTime?: { value: string };
    author?: {
      name?: { value: string };
      role?: { value: string };
      avatar?: { value: { src: string; alt?: string } };
    };
    content?: { value: string };
    tags?: Array<{ value: string }>;
  };
};

const ArticleDetail = (props: ArticleDetailProps): JSX.Element => {
  const { image, category, title, date, readTime, author, content, tags } = props.fields;

  return (
    <article className="bg-white">
      {/* Hero Image */}
      <div className="relative h-[500px] w-full">
        {image?.value?.src ? (
          <Image field={image} className="w-full h-full object-cover" />
        ) : (
          <img
            src="/data-center-technology.jpg"
            alt="Article"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Category Badge */}
        {category?.value && (
          <div className="absolute top-8 left-8">
            <span className="bg-[#00BFA5] text-white px-4 py-2 rounded text-sm font-medium">
              <Text field={category} />
            </span>
          </div>
        )}
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          {title?.value ? <Text field={title} /> : 'Article Title'}
        </h1>

        {/* Meta Information */}
        <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          {/* Author */}
          {author && (
            <div className="flex items-center gap-3">
              {author.avatar?.value?.src ? (
                <Image field={author.avatar} className="w-12 h-12 rounded-full" />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
              )}
              <div>
                {author.name?.value && (
                  <p className="font-medium text-gray-900">
                    <Text field={author.name} />
                  </p>
                )}
                {author.role?.value && (
                  <p className="text-sm text-gray-500">
                    <Text field={author.role} />
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Date and Read Time */}
          <div className="flex items-center gap-4 text-sm">
            {date?.value && (
              <span>
                <Text field={date} />
              </span>
            )}
            {readTime?.value && (
              <>
                <span>•</span>
                <span>
                  <Text field={readTime} /> read
                </span>
              </>
            )}
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none mb-12">
          {content?.value ? (
            <RichText field={content} />
          ) : (
            <div>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          )}
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-200">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm"
              >
                {tag.value}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ArticleDetail;
