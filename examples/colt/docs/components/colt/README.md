# Colt (@colt) Components

This reference lists the custom components under `src/components/colt/` and the expected Sitecore data templates (fields) inferred from the code. Use this to create or validate templates and renderings in Sitecore.

## Index

- Header
- Footer
- Hero
- ArticleCard
- ArticleHero
- ArticleContent
- ArticleDetail
- ArticleList
- FeaturesGrid
- CTASection
- Carousel
- SolutionsCarousel
- SolutionsSection
- StatsBar
- InterestedSection
- InfoSection
- LocationCard
- LocationList
- LocationDetails
- LocationDetail
- WhyColt
- Example
- ContentSection

---

## Header (`colt/header.tsx`)
Fields:
- `logo?: ImageField`
- `ctaText?: Field<string>`
- `ctaLink?: LinkField`
- `navigationItems?: Array<{ id: string; fields: { title: Field<string>; link?: LinkField } }>`

## Footer (`colt/footer.tsx`)
Fields:
- `logo?: ImageField`
- `copyrightText?: Field<string>`

## Hero (`colt/hero.tsx`)
Fields:
- `title?: Field<string>`
- `subtitle?: Field<string>` (RichText supported)
- `backgroundImage?: ImageField`

## ArticleCard (`colt/article-card.tsx`)
Fields:
- `image?: ImageField`
- `category?: Field<string>`
- `title?: Field<string>`
- `excerpt?: Field<string>`
- `date?: Field<string>`
- `readTime?: Field<string>`
- `link?: LinkField`

## ArticleHero (`colt/article-hero.tsx`)
Fields:
- `title?: Field<string>`
- `category?: Field<string>`
- `date?: Field<string>`
- `image?: ImageField`

## ArticleContent (`colt/article-content.tsx`)
Fields:
- `content: Field<string>` (RichText)
- `authorImage: ImageField`
- `authorName: Field<string>`
- `authorTitle: Field<string>`
- `authorQuote: Field<string>` (RichText)

## ArticleDetail (`colt/article-detail.tsx`)
Fields:
- `image?: ImageField`
- `category?: Field<string>`
- `title?: Field<string>`
- `date?: Field<string>`
- `readTime?: Field<string>`
- `author?: { name?: Field<string>; role?: Field<string>; avatar?: ImageField }`
- `content?: Field<string>` (RichText)
- `tags?: Array<Field<string>>`

## ArticleList (`colt/article-list.tsx`)
Fields (typical):
- `heading?: Field<string>`
- `items?: Array<ArticleCard>` (reuses ArticleCard fields)

## FeaturesGrid (`colt/features-grid.tsx`)
Fields:
- `heading: Field<string>`
- `features: Array<{ icon: ImageField | string; title: Field<string>; description: Field<string> }>`

## CTASection (`colt/cta-section.tsx`)
Fields:
- `heading?: Field<string>`
- `description?: Field<string>` (RichText)
- `link?: LinkField`

## Carousel (`colt/carousel.tsx`)
Fields (typical):
- `heading?: Field<string>`
- `items?: Array<{ image?: ImageField; title?: Field<string>; description?: Field<string>; link?: LinkField }>`

## SolutionsCarousel (`colt/solutions-carousel.tsx`)
Fields:
- `heading?: Field<string>`
- `solutions?: Array<{ icon?: ImageField; title?: Field<string>; description?: Field<string>; link?: LinkField }>`

## SolutionsSection (`colt/solutions-section.tsx`)
Fields:
- `heading?: Field<string>`
- `description?: Field<string>` (RichText)
- `solutions?: Array<{ title?: Field<string>; description?: Field<string>; icon?: ImageField }>`

## StatsBar (`colt/stats-bar.tsx`)
Fields:
- `stats?: Array<{ label?: Field<string>; value?: Field<string> }>`

## InterestedSection (`colt/interested-section.tsx`)
Fields:
- `heading?: Field<string>`
- `description?: Field<string>` (RichText)
- `link?: LinkField`

## InfoSection (`colt/info-section.tsx`)
Fields:
- `heading?: Field<string>`
- `items?: Array<{ title?: Field<string>; text?: Field<string>; icon?: ImageField }>`

## LocationCard (`colt/location-card.tsx`)
Fields:
- `image?: ImageField`
- `city?: Field<string>`
- `country?: Field<string>`
- `capacity?: Field<string>`
- `status?: Field<string>` (e.g., Operational, In Development)
- `features?: Array<Field<string>>`
- `link?: LinkField`

## LocationList (`colt/location-list.tsx`)
Fields (typical):
- `heading?: Field<string>`
- `items?: Array<LocationCard>`
- `filters?: Array<Field<string>>`

## LocationDetails (`colt/location-details.tsx`)
Fields:
- `image?: ImageField`
- `title?: Field<string>`
- `subtitle?: Field<string>` (RichText)
- `details?: Array<{ label?: Field<string>; value?: Field<string> }>`

## LocationDetail (`colt/location-detail.tsx`)
Fields:
- `title?: Field<string>`
- `summary?: Field<string>` (RichText)
- `gallery?: Array<ImageField>`
- `features?: Array<Field<string>>`

## WhyColt (`colt/why-colt.tsx`)
Fields:
- `heading?: Field<string>`
- `items?: Array<{ title?: Field<string>; text?: Field<string>; icon?: ImageField }>`

## Example (`colt/example.tsx`)
Fields:
- `title?: Field<string>`
- `text?: Field<string>`

## ContentSection (`colt/content-section.tsx`)
Fields:
- `content?: Field<string>` (RichText)
- `backgroundColor?: Field<string>`

---

Notes:
- Where fields are marked “typical”, they’re inferred from common patterns in this codebase and may vary per final implementation.
- Prefer `Field<string>`, `ImageField`, and `LinkField` from `@sitecore-content-sdk/nextjs` for Sitecore integration, and render text via `<Text/>` and `<RichText/>` for inline editing support.
