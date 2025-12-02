# Components Documentation

This directory contains detailed documentation for custom components used in the Legal Demo site.

## Newly Created Components Reference Table

The following table provides a quick reference for the newly created components:

| Component Name | File Path | Template Name | Child Template | Key Features | Documentation |
|----------------|-----------|---------------|----------------|-------------|--------------|
| **Hero Carousel** | `src/components/hero-carousel/HeroCarousel.tsx` | `HeroCarousel` | `HeroCarouselSlide` | Multiple slides, autoplay, navigation arrows, dots, slide counter | [Hero Carousel](./hero-carousel.md) |
| **Products Section** | `src/components/products-section/ProductsSection.tsx` | `ProductsSection` | `ProductItem` | 2-column grid, product cards, CTA links, hover effects | [Products Section](./products-section.md) |
| **Risk Areas Section** | `src/components/risk-areas-section/RiskAreasSection.tsx` | `RiskAreasSection` | `RiskAreaItem` | 3-column grid, image cards, section header with CTA button, image hover effects | [Risk Areas Section](./risk-areas-section.md) |

### Component Details

#### Hero Carousel
- **Main Fields**: None (uses child items)
- **Child Fields**: Title, Subtitle, Description, Image, Link, Background Color
- **Parameters**: autoplay, autoplayInterval, showDots, showArrows
- **Layout**: Full-width carousel with responsive design
- **Use Case**: Hero sections on landing pages

#### Products Section
- **Main Fields**: Title, Subtitle
- **Child Fields**: Title (required), Description, Link, CTA Text
- **Parameters**: styles (optional)
- **Layout**: 2-column grid (mobile: 1 column)
- **Use Case**: Product/service offerings display

#### Risk Areas Section
- **Main Fields**: Title, Intro Text, CTA Text, CTA Link
- **Child Fields**: Title (required), Description, Image, Link, URL
- **Parameters**: styles (optional)
- **Layout**: 3-column grid (mobile: 1, tablet: 2, desktop: 3)
- **Use Case**: Risk category showcase with images

## Available Components

### Hero Components
- [Hero Carousel](./hero-carousel.md) - Full-width carousel component for hero sections
- [Article Hero](./article-hero.md) - Hero section for article/report pages

### Content Sections
- [Products Section](./products-section.md) - Product offerings grid with CTA links
- [Risk Areas Section](./risk-areas-section.md) - Risk category cards with images and CTA button
- [Insights Section](./insights-section.md) - Article/insight grid
- [Intro Section](./intro-section.md) - Homepage introduction text
- [Article Content](./article-content.md) - Article content with table of contents

## Components Reference Table

For a comprehensive reference table with all component details, field information, and setup requirements, see the [Components Reference Table](./components-reference-table.md).

## Component Documentation Structure

Each component documentation file includes:

1. **Overview** - What the component does
2. **Component Location** - File paths and structure
3. **Features** - List of capabilities
4. **Sitecore Configuration** - Template structure and fields needed
5. **Usage in XM Cloud** - Step-by-step usage instructions
6. **Styling** - Customization options
7. **Technical Details** - Implementation details
8. **Troubleshooting** - Common issues and solutions
9. **Examples** - Usage examples

## Contributing

When adding new components or updating existing ones:

1. Create a new markdown file in this directory
2. Follow the documentation structure outlined above
3. Include Sitecore field requirements
4. Provide clear examples
5. Update this README with a link to the new component

