# Components Reference Table

This document provides a comprehensive reference table for all newly created components in the Legal Demo site.

## Quick Reference Table

| Component Name | Component Path | Template Name | Child Template | Placeholder | Documentation |
|----------------|----------------|---------------|----------------|-------------|--------------|
| Hero Carousel | `src/components/hero-carousel/HeroCarousel.tsx` | `HeroCarousel` | `HeroCarouselSlide` | `headless-main` | [Hero Carousel](./hero-carousel.md) |
| Products Section | `src/components/products-section/ProductsSection.tsx` | `ProductsSection` | `ProductItem` | `headless-main` | [Products Section](./products-section.md) |
| Risk Areas Section | `src/components/risk-areas-section/RiskAreasSection.tsx` | `RiskAreasSection` | `RiskAreaItem` | `headless-main` | [Risk Areas Section](./risk-areas-section.md) |

## Detailed Component Information

### Hero Carousel Component

| Property | Value |
|----------|-------|
| **Component Name** | Hero Carousel |
| **File Path** | `src/components/hero-carousel/HeroCarousel.tsx` |
| **Props File** | `src/components/hero-carousel/hero-carousel.props.ts` |
| **Export Name** | `Default` |
| **Template Name** | `HeroCarousel` |
| **Child Template** | `HeroCarouselSlide` |
| **Datasource Location** | `/sitecore/content/LegalDemo/Components/HeroCarousels` |
| **Placeholder** | `headless-main` |

#### Main Template Fields

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| *(No direct fields - uses child items)* | | | |

#### Child Template Fields (HeroCarouselSlide)

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| `Title` | Single-Line Text | Yes | Main heading for the slide (rendered as H1) |
| `Subtitle` | Single-Line Text | No | Small text displayed above the title |
| `Description` | Rich Text | No | Detailed description text below the title |
| `Image` | Image | No | Background image for the slide |
| `Link` | General Link | No | Call-to-action link button |
| `Background Color` | Single-Line Text | No | CSS class name for background color |

#### Component Parameters

| Parameter Name | Type | Default | Description |
|----------------|------|---------|-------------|
| `autoplay` | Boolean | `true` | Enable/disable automatic slide rotation |
| `autoplayInterval` | Number | `5000` | Time in milliseconds between slide transitions |
| `showDots` | Boolean | `true` | Show/hide dot navigation indicators |
| `showArrows` | Boolean | `true` | Show/hide previous/next arrow buttons |

#### Features

- ✅ Multiple slides with customizable content
- ✅ Autoplay functionality (configurable)
- ✅ Navigation arrows and dot indicators
- ✅ Slide counter display
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Full Sitecore XM Cloud integration
- ✅ Editing mode support
- ✅ Keyboard navigation support
- ✅ Touch/swipe support

---

### Products Section Component

| Property | Value |
|----------|-------|
| **Component Name** | Products Section |
| **File Path** | `src/components/products-section/ProductsSection.tsx` |
| **Props File** | `src/components/products-section/products-section.props.ts` |
| **Export Name** | `Default` |
| **Template Name** | `ProductsSection` |
| **Child Template** | `ProductItem` |
| **Datasource Location** | `/sitecore/content/LegalDemo/Components/ProductsSections` |
| **Placeholder** | `headless-main` |

#### Main Template Fields

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| `Title` | Single-Line Text | No | Section heading (rendered as H2) |
| `Subtitle` | Rich Text | No | Section description/introduction |

#### Child Template Fields (ProductItem)

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| `Title` | Single-Line Text | Yes | Product name/title |
| `Description` | Rich Text | No | Product description |
| `Link` | General Link | No | Call-to-action link to product page |
| `CTA Text` | Single-Line Text | No | Custom text for CTA link (defaults to "Learn more") |

#### Component Parameters

| Parameter Name | Type | Default | Description |
|----------------|------|---------|-------------|
| `styles` | String | - | Optional CSS classes for custom styling |

#### Features

- ✅ Responsive 2-column grid layout (mobile stacks to single column)
- ✅ Product cards with hover effects
- ✅ Section title and subtitle support
- ✅ Customizable CTA text and links
- ✅ Full Sitecore XM Cloud integration
- ✅ Editing mode support
- ✅ Fallback default content for disconnected mode

---

### Risk Areas Section Component

| Property | Value |
|----------|-------|
| **Component Name** | Risk Areas Section |
| **File Path** | `src/components/risk-areas-section/RiskAreasSection.tsx` |
| **Props File** | `src/components/risk-areas-section/risk-areas-section.props.ts` |
| **Export Name** | `Default` |
| **Template Name** | `RiskAreasSection` |
| **Child Template** | `RiskAreaItem` |
| **Datasource Location** | `/sitecore/content/LegalDemo/Components/RiskAreasSections` |
| **Placeholder** | `headless-main` |

#### Main Template Fields

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| `Title` | Single-Line Text | No | Section heading (rendered as H2) |
| `Intro Text` | Rich Text | No | Introduction/description text for the section |
| `CTA Text` | Single-Line Text | No | Text for the call-to-action button |
| `CTA Link` | General Link | No | Link for the call-to-action button |

#### Child Template Fields (RiskAreaItem)

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| `Title` | Single-Line Text | Yes | Risk area name/title |
| `Description` | Rich Text | No | Risk area description |
| `Image` | Image | No | Featured image for the risk area card (recommended 4:3 aspect ratio) |
| `Link` | General Link | No | Link to risk area detail page |
| `URL` | Single-Line Text | No | Alternative URL field (fallback if Link not set) |

#### Component Parameters

| Parameter Name | Type | Default | Description |
|----------------|------|---------|-------------|
| `styles` | String | - | Optional CSS classes for custom styling |

#### Features

- ✅ Responsive grid layout (1 column mobile, 2 columns tablet, 3 columns desktop)
- ✅ Section header with title, intro text, and CTA button
- ✅ Risk area cards with images, titles, and descriptions
- ✅ Image hover effects with scale animation
- ✅ Full Sitecore XM Cloud integration
- ✅ Editing mode support
- ✅ Fallback default content for disconnected mode
- ✅ Card hover effects and transitions

---

## Component Registration

Components can be registered in two ways:

1. **Automatic Registration**: The build process automatically scans and registers all components in `src/components`
2. **Manual Registration**: Manually edit `.sitecore/component-map.ts` to include only specific components

**For Manual Setup**: If you want to register only the three new components and exclude unwanted ones, see the [Manual Component Map Setup Guide](../manual-component-map-setup.md) for detailed instructions.

### Registration Requirements

For a component to be automatically registered, it must:

1. Be in the correct location: `src/components/[component-name]/`
2. Have a default export: Export a component named `Default`
3. Follow naming convention: Folder name should match component name (kebab-case)
4. Have proper structure: Component file should be `[ComponentName].tsx`

### Verifying Registration

To verify component registration:

1. Run: `npm run sitecore-tools:generate-map`
2. Check `.sitecore/component-map.ts` (if accessible)
3. Test in Experience Editor - components should appear in component picker

For more information, see the [Component Registration Guide](../component-registration-guide.md).

---

## Sitecore Setup Checklist

For each component, follow these steps:

- [ ] Create component template in Sitecore
- [ ] Create child item template (if needed)
- [ ] Add all required fields to templates
- [ ] Create rendering in Sitecore
- [ ] Configure datasource template and location
- [ ] Register component (auto-generated via build)
- [ ] Create content items with proper structure
- [ ] Test component in Experience Editor
- [ ] Verify component displays correctly on frontend
- [ ] Test responsive behavior
- [ ] Verify accessibility features
- [ ] Publish content items

For detailed setup instructions, see the [Sitecore Setup Guide](../sitecore-setup.md).

---

## Related Documentation

- [Components README](./README.md) - Overview of all components
- [Sitecore Setup Guide](../sitecore-setup.md) - Step-by-step setup instructions
- [Component Registration Guide](../component-registration-guide.md) - Registration details
- [Hero Carousel Documentation](./hero-carousel.md) - Detailed Hero Carousel docs
- [Products Section Documentation](./products-section.md) - Detailed Products Section docs
- [Risk Areas Section Documentation](./risk-areas-section.md) - Detailed Risk Areas Section docs
