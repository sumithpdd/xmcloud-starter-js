# Component Documentation

This directory contains detailed documentation for all components in the Colt application.

## Table of Contents

- [Layout Components](#layout-components)
- [Content Components](#content-components)
- [Interactive Components](#interactive-components)
- [Media Components](#media-components)
- [Navigation Components](#navigation-components)
- [Special Components](#special-components)

## Layout Components

### Hero
**Path:** `src/components/hero/`  
**Purpose:** Full-width hero section with title, description, CTA, and media sections  
**Datasource:** Yes  
**Documentation:** [hero.md](./hero.md)

- Title (required)
- Description (optional)
- Link (optional)
- 4 Media sections (images/videos)
- Color scheme parameter

### Page Header
**Path:** `src/components/page-header/`  
**Purpose:** Page title header with logo section  
**Datasource:** Yes  
**Documentation:** [page-header.md](./page-header.md)

- Image required
- Video optional
- Title from page context
- Logo text
- Multiple logos

### Container
**Path:** `src/components/container/`  
**Purpose:** Layout containers with various split ratios  
**Variants:** 25252525, 303030, 3070, 4060, 5050, 6040, 6321, 70, 7030, full-bleed, full-width  
**Datasource:** No (layout component)  
**Documentation:** [container.md](./container.md)

## Content Components

### Article Header
**Path:** `src/components/article-header/`  
**Purpose:** Article page header with metadata  
**Datasource:** No  
**Documentation:** [article-header.md](./article-header.md)

### Article Listing
**Path:** `src/components/article-listing/`  
**Purpose:** Display articles in a grid/list  
**Datasource:** No  
**Documentation:** [article-listing.md](./article-listing.md)

### Rich Text Block
**Path:** `src/components/rich-text-block/`  
**Purpose:** Rich text content with formatting  
**Datasource:** No  
**Documentation:** [rich-text-block.md](./rich-text-block.md)

- HTML content
- Supports inline editing
- Automatic formatting

### Text Banner
**Path:** `src/components/text-banner/`  
**Purpose:** Text content with background styling  
**Datasource:** No  
**Documentation:** [text-banner.md](./text-banner.md)

- Heading (required)
- Description (optional)
- Link (optional)
- Background colors

### Promo Block
**Path:** `src/components/promo-block/`  
**Purpose:** Promotional content block  
**Datasource:** No  
**Documentation:** [promo-block.md](./promo-block.md)

- Heading
- Description
- Image
- Link
- Orientation (left/right)

### Multi Promo
**Path:** `src/components/multi-promo/`  
**Purpose:** Carousel of promotional items  
**Datasource:** Yes  
**Documentation:** [multi-promo.md](./multi-promo.md)

- Title
- Description
- Children items
- Configurable columns (3 or 4)
- Keyboard/Wheel navigation

### Promo Animated
**Path:** `src/components/promo-animated/`  
**Purpose:** Animated promotional section  
**Datasource:** Yes  
**Documentation:** [promo-animated.md](./promo-animated.md)

- Image on left or right
- Title and description
- CTA button
- Animation support

### CTA Banner
**Path:** `src/components/cta-banner/`  
**Purpose:** Call-to-action banner  
**Datasource:** No  
**Documentation:** [cta-banner.md](./cta-banner.md)

- Title
- Description
- Button
- Color schemes

### Subscription Banner
**Path:** `src/components/subscription-banner/`  
**Purpose:** Email subscription form  
**Datasource:** Yes  
**Documentation:** [subscription-banner.md](./subscription-banner.md)

- Title
- Description
- Form fields
- Validation

## Interactive Components

### Accordion Block
**Path:** `src/components/accordion-block/`  
**Purpose:** Expandable accordion sections  
**Datasource:** Yes  
**Documentation:** [accordion-block.md](./accordion-block.md)

- Multiple accordion items
- Heading per item
- Rich text content
- Section description

### Testimonial Carousel
**Path:** `src/components/testimonial-carousel/`  
**Purpose:** Customer testimonials carousel  
**Datasource:** Yes  
**Documentation:** [testimonial-carousel.md](./testimonial-carousel.md)

- Multiple testimonial items
- Quote text
- Attribution
- Auto-rotation

### Logo Tabs
**Path:** `src/components/logo-tabs/`  
**Purpose:** Logo display with tab navigation  
**Datasource:** Yes  
**Documentation:** [logo-tabs.md](./logo-tabs.md)

- Tab headings
- Logo items per tab
- Images and links

### Vertical Image Accordion
**Path:** `src/components/vertical-image-accordion/`  
**Purpose:** Vertical image accordion  
**Datasource:** Yes  
**Documentation:** [vertical-image-accordion.md](./vertical-image-accordion.md)

### Floating Dock
**Path:** `src/components/floating-dock/`  
**Purpose:** Floating navigation dock  
**Datasource:** No  
**Documentation:** [floating-dock.md](./floating-dock.md)

## Media Components

### Image
**Path:** `src/components/image/`  
**Purpose:** Optimized image component  
**Datasource:** No  
**Documentation:** [image.md](./image.md)

- Automatic optimization
- Responsive sizes
- Lazy loading
- Supports Sitecore media

### Video
**Path:** `src/components/video/`  
**Purpose:** Video player with modal  
**Datasource:** No  
**Documentation:** [video.md](./video.md)

- YouTube/Vimeo support
- Modal player
- Thumbnail image
- Play button overlay

### Media Section
**Path:** `src/components/media-section/`  
**Purpose:** Image or video media player  
**Datasource:** No  
**Documentation:** [media-section.md](./media-section.md)

- Video background
- Image fallback
- Pause/play control

### Background Thumbnail
**Path:** `src/components/background-thumbnail/`  
**Purpose:** Background image component  
**Datasource:** No  
**Documentation:** [background-thumbnail.md](./background-thumbnail.md)

## Navigation Components

### Global Header
**Path:** `src/components/global-header/`  
**Purpose:** Site header with navigation  
**Datasource:** No  
**Documentation:** [global-header.md](./global-header.md)

- Logo
- Navigation menu
- Mobile menu
- Search

### Global Footer
**Path:** `src/components/global-footer/`  
**Purpose:** Site footer  
**Datasource:** No  
**Documentation:** [global-footer.md](./global-footer.md)

- Multiple columns
- Links
- Social media
- Copyright

### Secondary Navigation
**Path:** `src/components/secondary-navigation/`  
**Purpose:** Secondary navigation menu  
**Datasource:** Yes  
**Documentation:** [secondary-navigation.md](./secondary-navigation.md)

### Breadcrumbs
**Path:** `src/components/breadcrumbs/`  
**Purpose:** Breadcrumb navigation  
**Datasource:** No  
**Documentation:** [breadcrumbs.md](./breadcrumbs.md)

### Footer Navigation Callout
**Path:** `src/components/footer-navigation-callout/`  
**Purpose:** Footer callout section  
**Datasource:** Yes  
**Documentation:** [footer-navigation-callout.md](./footer-navigation-callout.md)

## Special Components

### Alert Banner
**Path:** `src/components/alert-banner/`  
**Purpose:** Alert/notice banner  
**Datasource:** No  
**Documentation:** [alert-banner.md](./alert-banner.md)

### Site Metadata
**Path:** `src/components/site-metadata/`  
**Purpose:** SEO and page metadata  
**Datasource:** Yes  
**Documentation:** [site-metadata.md](./site-metadata.md)

- Page title
- Meta description
- Open Graph tags
- Canonical URL

### Animated Section
**Path:** `src/components/animated-section/`  
**Purpose:** Wrapper for animations  
**Datasource:** No  
**Documentation:** [animated-section.md](./animated-section.md)

### Theme Provider
**Path:** `src/components/theme-provider/`  
**Purpose:** Theme context provider  
**Datasource:** No  
**Documentation:** [theme-provider.md](./theme-provider.md)

### Mode Toggle
**Path:** `src/components/mode-toggle/`  
**Purpose:** Theme switcher  
**Datasource:** No  
**Documentation:** [mode-toggle.md](./mode-toggle.md)

### Topic Listing
**Path:** `src/components/topic-listing/`  
**Purpose:** List topics/articles  
**Datasource:** Yes  
**Documentation:** [topic-listing.md](./topic-listing.md)

### Button Component
**Path:** `src/components/button-component/`  
**Purpose:** Editable button  
**Datasource:** No  
**Documentation:** [button-component.md](./button-component.md)

### Card
**Path:** `src/components/card/`  
**Purpose:** Card layout component  
**Datasource:** No  
**Documentation:** [card.md](./card.md)

### Flex
**Path:** `src/components/flex/`  
**Purpose:** Flexbox layout component  
**Datasource:** No  
**Documentation:** [flex.md](./flex.md)

## Component Naming Convention

All components follow this structure:

```
component-name/
├── index.tsx (or *.tsx)
├── [ComponentName].tsx (main component)
├── [ComponentName].props.ts (props interface)
└── [ComponentName]Default.dev.tsx (dev variant)
```

## How to Read Component Docs

Each component documentation includes:

1. **Overview** - What the component does
2. **Usage** - How to use it
3. **Props** - Data structure
4. **Sitecore Template** - Required fields
5. **Examples** - Code examples
6. **Variations** - Available variants

## Quick Reference

```typescript
// Import pattern
import { Default as ComponentName } from '@/components/component-name';

// Props pattern
interface ComponentProps {
  fields: {
    // Field definitions
  };
  params: {
    // Parameter definitions
  };
}

// Usage pattern
<ComponentName fields={fields} params={params} />
```

## Need Help?

- See [Getting Started](../getting-started.md)
- Check [Sitecore JSS Architecture](../sitecore-jss-architecture.md)
- Review [Data Structures](../data-structures.md)

