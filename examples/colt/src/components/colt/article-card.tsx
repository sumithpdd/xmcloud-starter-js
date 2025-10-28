"use client"

import { Image, Text, type ImageField, type Field, type LinkField } from "@sitecore-content-sdk/nextjs"
import type { ComponentProps } from "@/lib/component-props"
import React from "react"

type ArticleCardProps = ComponentProps & {
  fields: {
    image?: ImageField
    category?: Field<string>
    title?: Field<string>
    excerpt?: Field<string>
    date?: Field<string>
    readTime?: Field<string>
    link?: LinkField
  }
}

const ArticleCard = (props: ArticleCardProps): React.JSX.Element => {
  const { image, category, title, excerpt, date, readTime, link } = props.fields

  return (
    <article className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      {/* Article Image */}
      <div className="relative h-64 overflow-hidden">
        {image ? (
          <Image
            field={image}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <img
            src="/data-center-technology.jpg"
            alt="Article"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        {category && (
          <div className="absolute top-4 left-4">
            <span className="bg-[#00BFA5] text-white px-3 py-1 rounded text-sm font-medium">
              <Text field={category} />
            </span>
          </div>
        )}
      </div>

      {/* Article Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          {date && (
            <span>
              <Text field={date} />
            </span>
          )}
          {readTime && (
            <>
              <span>•</span>
              <span>
                <Text field={readTime} /> read
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00BFA5] transition-colors">
          {title ? <Text field={title} /> : "Article Title"}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt ? <Text field={excerpt} /> : "Article excerpt goes here..."}
        </p>

        {/* Read More Link */}
        <a
          href={link?.value?.href || "#"}
          className="inline-flex items-center text-[#00BFA5] font-medium hover:text-[#00A890] transition-colors"
        >
          Read more
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  )
}

export default ArticleCard
