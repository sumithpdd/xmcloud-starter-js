# All Available Components

This document lists all components in the Legal Demo that export `Default` and can be registered in the component map.

## Newly Created Components (3)

These are the three components that were recently created and documented:

1. **Hero Carousel** - `src/components/hero-carousel/HeroCarousel.tsx`
2. **Products Section** - `src/components/products-section/ProductsSection.tsx`
3. **Risk Areas Section** - `src/components/risk-areas-section/RiskAreasSection.tsx`

## Other Available Components (7)

The following components also export `Default` and can be added to the component map:

### 1. Global Header
- **Path**: `src/components/global-header/GlobalHeader.tsx`
- **Template**: `GlobalHeader`
- **Description**: Site header/navigation component
- **Status**: Already in use (likely already registered)

### 2. Global Footer
- **Path**: `src/components/global-footer/GlobalFooter.tsx`
- **Template**: `GlobalFooter`
- **Description**: Site footer component
- **Status**: Already in use (likely already registered)

### 3. Article Content
- **Path**: `src/components/article-content/ArticleContent.tsx`
- **Template**: `ArticleContent`
- **Description**: Article content with table of contents navigation
- **Status**: Documented in README, may need component map entry

### 4. Article Hero
- **Path**: `src/components/article-hero/ArticleHero.tsx`
- **Template**: `ArticleHero`
- **Description**: Hero section for article/report pages
- **Status**: Documented in README, may need component map entry

### 5. Insights Section
- **Path**: `src/components/insights-section/InsightsSection.tsx`
- **Template**: `InsightsSection`
- **Description**: Grid of insight articles with images, categories, titles, and dates
- **Status**: Documented in README, may need component map entry

### 6. Intro Section
- **Path**: `src/components/intro-section/IntroSection.tsx`
- **Template**: `IntroSection`
- **Description**: Simple text section with highlighted key phrases for homepage
- **Status**: Documented in README, may need component map entry

### 7. Vertical Image Accordion
- **Path**: `src/components/vertical-image-accordion/VerticalImageAccordion.tsx`
- **Template**: `VerticalImageAccordion`
- **Description**: Vertical accordion component with images
- **Status**: Not documented, may need component map entry

## Component Map Registration

To add any of these components to your manual component map, follow this pattern:

### Import Statement
```typescript
import * as ComponentName from 'components/component-folder/ComponentName';
```

### Component Entry
```typescript
['component-name', ComponentName],
```

### Example: Adding Insights Section

**Import** (add with other imports):
```typescript
import * as InsightsSection from 'components/insights-section/InsightsSection';
```

**Entry** (add to components array):
```typescript
['insights-section', InsightsSection],
```

## Complete Component Map Example

If you want to add all available components to your manual component map:

```typescript
// Newly created components
import * as HeroCarousel from 'components/hero-carousel/HeroCarousel';
import * as ProductsSection from 'components/products-section/ProductsSection';
import * as RiskAreasSection from 'components/risk-areas-section/RiskAreasSection';

// Other available components
import * as GlobalHeader from 'components/global-header/GlobalHeader';
import * as GlobalFooter from 'components/global-footer/GlobalFooter';
import * as ArticleContent from 'components/article-content/ArticleContent';
import * as ArticleHero from 'components/article-hero/ArticleHero';
import * as InsightsSection from 'components/insights-section/InsightsSection';
import * as IntroSection from 'components/intro-section/IntroSection';
import * as VerticalImageAccordion from 'components/vertical-image-accordion/VerticalImageAccordion';

// Add to components array
[
  ['hero-carousel', HeroCarousel],
  ['products-section', ProductsSection],
  ['risk-areas-section', RiskAreasSection],
  ['global-header', GlobalHeader],
  ['global-footer', GlobalFooter],
  ['article-content', ArticleContent],
  ['article-hero', ArticleHero],
  ['insights-section', InsightsSection],
  ['intro-section', IntroSection],
  ['vertical-image-accordion', VerticalImageAccordion],
]
```

## Recommendations

1. **Global Header & Footer**: These are typically already registered as they're used site-wide
2. **Article Components**: If you're using article pages, add ArticleHero and ArticleContent
3. **Content Sections**: Add InsightsSection and IntroSection if you're using them on pages
4. **Vertical Image Accordion**: Add if you plan to use this component

## Next Steps

1. **Check existing component map**: See which components are already registered
2. **Identify needed components**: Determine which components you'll actually use
3. **Add to component map**: Follow the manual setup guide to add only the components you need
4. **Test in Experience Editor**: Verify components appear in the component picker

## Related Documentation

- [Manual Component Map Setup Guide](./manual-component-map-setup.md) - How to manually add components
- [Component Registration Guide](./component-registration-guide.md) - General registration information
- [Components Reference Table](./components/components-reference-table.md) - Detailed component information
