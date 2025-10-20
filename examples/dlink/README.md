# D-Link Website - Sitecore XM Cloud Demo

## Overview
D-Link is a comprehensive networking solutions website built with Sitecore XM Cloud and Next.js. This demo showcases enterprise-grade networking products including routers, switches, cameras, and business solutions with a modern, responsive design.

## Key Features
* **Modern UI/UX**: Clean, professional design with D-Link branding
* **Product Showcases**: Interactive product grids and comparison tables
* **Business Solutions**: Dedicated sections for enterprise networking
* **Responsive Design**: Mobile-first approach with Tailwind CSS
* **Sitecore Integration**: Full Content SDK implementation
* **Component Library**: 25+ reusable React components

## Technology Stack
- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **CMS**: Sitecore XM Cloud with Content SDK
- **Icons**: Lucide React
- **Carousel**: Embla Carousel
- **Animation**: Framer Motion

## D-Link Component Library

### Core Layout Components

#### Header (`src/components/dlink/header.tsx`)
Main navigation header with logo, menu items, and mobile responsiveness.

**Props:**
```typescript
interface HeaderProps {
  fields?: {
    logo?: ImageField;
    navigation?: NavigationItem[];
    showSearch?: Field<boolean>;
    showCart?: Field<boolean>;
    showAccount?: Field<boolean>;
  };
}
```

#### Footer (`src/components/dlink/footer.tsx`)
Site-wide footer with links, social media, and copyright information.

**Props:**
```typescript
interface FooterProps {
  fields?: {
    logo?: ImageField;
    columns?: FooterColumn[];
    socialLinks?: SocialLink[];
    copyrightText?: Field<string>;
    bottomLinks?: FooterLink[];
  };
}
```

### Hero & Banner Components

#### Hero (`src/components/dlink/hero.tsx`)
Full-width hero section with background image, heading, and CTA.

**Props:**
```typescript
interface HeroProps {
  fields?: {
    heading?: Field<string>;
    subheading?: Field<string>;
    description?: RichTextField;
    backgroundImage?: ImageField;
    ctaLink?: LinkField;
  };
}
```

#### Category Hero (`src/components/dlink/category-hero.tsx`)
Category-specific hero with background image and category information.

#### Category Page Hero (`src/components/dlink/category-page-hero.tsx`)
Enhanced hero for category pages with additional metadata.

### Product Components

#### Product Grid (`src/components/dlink/product-grid.tsx`)
Grid layout for displaying multiple products with images and links.

**Example Data:**
```typescript
const productGridData = {
  fields: {
    title: { value: "IP Surveillance Products" },
    products: [
      {
        fields: {
          name: { value: "8 Megapixel H.265 Outdoor Dome Camera" },
          model: { value: "DCS-4618EK" },
          image: {
            value: {
              src: "/placeholder.svg?height=300&width=300",
              alt: "DCS-4618EK",
            },
          },
          link: { value: "/products/dcs-4618ek" },
        },
      },
      // ... more products
    ],
  },
};
```

#### Product Showcase (`src/components/dlink/product-showcase.tsx`)
Featured product display with enhanced styling and descriptions.

**Example Data:**
```typescript
const productShowcaseData = {
  fields: {
    sectionHeading: { value: "Explore Our Products" },
    products: [
      {
        heading: { value: "Mesh Wi-Fi System & Wi-Fi Routers" },
        description: { value: "Blazing speeds with maximum coverage." },
        image: {
          value: {
            src: "/mesh-wifi-router-system.jpg",
            alt: "Mesh Wi-Fi",
          },
        },
        link: { value: { href: "/products/wifi", text: "Learn More" } },
      },
      // ... more products
    ],
  },
};
```

#### Product Selector (`src/components/dlink/product-selector.tsx`)
Interactive product filtering tool with categories and search functionality.

**Example Data:**
```typescript
const productSelectorData = {
  sectionTitle: { value: "Product Selector Tool" },
  filterCategories: [
    {
      fields: {
        categoryName: { value: "Wireless standard" },
        options: [{ fields: { label: { value: "802.11ax Wi-Fi 6" }, value: { value: "wifi6" } } }],
      },
    },
    // ... more categories
  ],
  products: [
    {
      fields: {
        name: { value: "5G Wi-Fi 6 Mobile Hotspot" },
        model: { value: "DWR-2101" },
        image: { value: { src: "/dwr-2101-5g-mobile-hotspot.jpg", alt: "DWR-2101" } },
        link: { value: { href: "/products/dwr-2101" } },
        features: [],
      },
    },
    // ... more products
  ],
};
```

#### Product Detail Header (`src/components/dlink/product-detail-header.tsx`)
Detailed product information header with specifications and features.

#### Product Detail Hero (`src/components/dlink/product-detail-hero.tsx`)
Hero section for individual product pages with image gallery.

### Comparison & Specification Components

#### Comparison Table (`src/components/dlink/comparison-table.tsx`)
Side-by-side product comparison with specifications.

**Example Data:**
```typescript
const comparisonTableData = {
  fields: {
    title: { value: "DSS-200G Series Comparison" },
    specLabels: [
      { value: "Port Count" },
      { value: "Dimension" },
      { value: "Surge Protection" },
      { value: "PoE Power Budget" },
      { value: "PoE Standard" },
      { value: "Smart Fan" },
    ],
    products: [
      {
        fields: {
          model: { value: "DSS-200G-10MP" },
          image: {
            value: {
              src: "/placeholder.svg?height=150&width=150",
              alt: "DSS-200G-10MP",
            },
          },
          link: { value: "/products/dss-200g-10mp" },
          specs: {
            "Port Count": { value: "8×GE PoE + 2×GE SFP" },
            Dimension: { value: '11"' },
            "Surge Protection": { value: "6KV Full port & Power Supply" },
            "PoE Power Budget": { value: "130 W" },
            "PoE Standard": { value: "IEEE 802.3af, 802.3at" },
            "Smart Fan": { value: "Fanless" },
          },
        },
      },
      // ... more products
    ],
  },
};
```

#### Specifications Table (`src/components/dlink/specifications-table.tsx`)
Detailed technical specifications in a clean table format.

**Example Data:**
```typescript
const specificationsData = {
  fields: {
    title: { value: "Technical Specifications" },
    specifications: [
      {
        fields: {
          label: { value: "Model" },
          value: { value: "DSS-200G-10MP" },
        },
      },
      {
        fields: {
          label: { value: "Total Ports" },
          value: { value: "10 (8× 10/100/1000BASE-T PoE + 2× Gigabit SFP)" },
        },
      },
      // ... more specifications
    ],
  },
};
```

#### Specifications Section (`src/components/dlink/specifications-section.tsx`)
Categorized specifications with collapsible sections.

### Content & Feature Components

#### Content Block (`src/components/dlink/content-block.tsx`)
Flexible content section with image/video and text layout options.

#### Content Section with Image (`src/components/dlink/content-section-with-image.tsx`)
Content section with configurable image positioning.

#### Feature List (`src/components/dlink/feature-list.tsx`)
Bulleted list of features with checkmark icons.

#### Feature Section (`src/components/dlink/feature-section.tsx`)
Feature showcase with image and text content.

#### Tech Features (`src/components/dlink/tech-features.tsx`)
Technology features display with icons and descriptions.

#### Use Case Grid (`src/components/dlink/use-case-grid.tsx`)
Grid layout for displaying use cases and applications.

### Navigation & Utility Components

#### Breadcrumb (`src/components/dlink/breadcrumb.tsx`)
Navigation breadcrumb with chevron separators.

#### Jump Links (`src/components/dlink/jump-links.tsx`)
Sticky navigation for page sections with smooth scrolling.

#### Carousel (`src/components/dlink/carousel.tsx`)
Image/video carousel with navigation controls and autoplay.

#### D-Link Carousel (`src/components/dlink/DlinkCarousel.tsx`)
Enhanced carousel component with D-Link-specific styling.

### News & Information Components

#### News Section (`src/components/dlink/news-section.tsx`)
News articles display with images, dates, and excerpts.

#### Product Overview Section (`src/components/dlink/product-overview-section.tsx`)
Product overview with multiple content blocks.

#### Example (`src/components/dlink/example.tsx`)
Template component demonstrating Sitecore integration patterns.

## Component Usage Patterns

### Standard Export Pattern
All components follow the `export const Default: React.FC<ComponentProps>` pattern:

```typescript
export const Default: React.FC<ComponentProps> = (props) => {
  const { fields } = props;
  
  if (fields) {
    return (
      // Component JSX
    );
  }
  
  return <NoDataFallback componentName="Component Name" />;
};
```

### Field Handling
Components use Sitecore Content SDK components directly:

```typescript
import { Text, RichText, Image, Link, type Field, type ImageField, type LinkField, type RichTextField } from '@sitecore-content-sdk/nextjs';

// Usage
<Text field={fields.title} tag="h1" className="text-2xl font-bold" />
<RichText field={fields.description} className="prose" />
<Image field={fields.image} className="w-full h-auto" />
<Link field={fields.ctaLink} className="btn btn-primary" />
```

### Error Handling
All components include `NoDataFallback` for graceful error handling when fields are missing.

## Build and Run

1. Navigate to the D-Link project:
   ```bash
   cd examples/dlink/
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment configuration:
   ```bash
   cp .env.example .env.local
   ```

4. Configure environment variables in `.env.local`

5. Run development server:
   ```bash
   npm run dev
   ```

6. Access the site at http://localhost:3000

## Sitecore Integration

The D-Link components are fully integrated with Sitecore XM Cloud:

- **Component Map**: All components registered in `.sitecore/component-map.ts`
- **Field Types**: Proper TypeScript interfaces for all Sitecore field types
- **Content SDK**: Direct usage of Sitecore Content SDK components
- **Error Handling**: Graceful fallbacks for missing content
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## D-Link Branding

Components use D-Link's official color scheme:
- **Primary**: `#0051ff` (D-Link Blue)
- **Accent**: `#ffd700` (D-Link Gold)
- **Hover States**: `#0047e6` (Primary Hover), `#e6c200` (Accent Hover)

## Documentation

For detailed component documentation, see:
- `docs/COMPONENT_REFERENCE.md` - Complete component reference
- `docs/CAROUSEL_DATA_TEMPLATE.md` - Carousel component data templates
- `docs/carousel-template.yml` - Sample YAML template
