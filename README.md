# D-Link Sitecore JSS Projects - Component Reference

## Project Overview

This repository contains two comprehensive Sitecore Content SDK applications built with Next.js, showcasing D-Link's networking and technology solutions:

1. **dlink** - Consumer-focused networking solutions
2. **dlinkbusiness** - Business and enterprise networking solutions

Both projects demonstrate modern web development practices with Sitecore's headless CMS capabilities, providing flexible, scalable, and maintainable component libraries.

## Technology Stack

### Core Technologies
- **Next.js 15.3.2** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5.8.3** - Type safety and development experience
- **Sitecore Content SDK** - Content management integration

### Styling & UI Framework
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion 12.23.0** - Animation library
- **Class Variance Authority** - Component variant management
- **Lucide React** - Icon library
- **Font Awesome** - Additional icon support
- **Shadcn/ui** - Modern component library (dlinkbusiness)

### Sitecore Integration
- **@sitecore-content-sdk/nextjs** - Content SDK integration
- **@sitecore-cloudsdk/core** - Cloud SDK
- **@sitecore-feaas/clientside** - Frontend as a Service
- **@sitecore/components** - Sitecore component library

### Data Templates

#### D-Link Project Data Templates
| Template Name | Page Design Assigned | Insert Options | Pages Used | Last Modified |
|---------------|---------------------|----------------|------------|---------------|
| Article Page | Default | SET | 0 | 17 October 2025 at 23:07 |
| Audio Product Page | ProductPage | SET | 3 | 17 October 2025 at 23:07 |

#### D-Link Business Project Data Templates
| Template Name | Page Design Assigned | Insert Options | Pages Used | Last Modified |
|---------------|---------------------|----------------|------------|---------------|
| Detail Page | Default | SET | 0 | 17 October 2025 at 23:07 |
| Home Page | Default | SET | 1 | 17 October 2025 at 23:06 |

### Page Designs

#### D-Link Business Project Page Designs
- **Default**: Standard page layout design
- **ProductPage**: Specialized layout for product pages

### Partial Designs

#### D-Link Business Project Partial Designs
- **Footer**: Site-wide footer component
- **Header**: Site-wide header component  
- **ProductContent**: Product-specific content sections

## Project Structure

```
examples/
├── dlink/                    # Consumer-focused project
│   ├── src/
│   │   ├── components/       # Component library
│   │   ├── assets/          # Styles and assets
│   │   ├── lib/             # Utilities and configuration
│   │   └── types/           # TypeScript definitions
│   ├── docs/                # Documentation
│   └── package.json         # Dependencies
│
└── dlinkbusiness/           # Business-focused project
    ├── src/
    │   ├── components/      # Enhanced component library
    │   ├── assets/         # Styles and assets
    │   ├── lib/            # Utilities and configuration
    │   └── types/          # TypeScript definitions
    ├── docs/               # Documentation
    └── package.json        # Dependencies
```

## Styling Systems

### Design Tokens
Both projects use comprehensive design token systems:

#### D-Link (Consumer)
```css
@theme {
  --color-primary: #0051ff;
  --color-secondary: #f5f5f5;
  --color-accent: #c8ff00;
  --font-family-heading: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
  --border-radius-default: 1.5rem;
}
```

#### D-Link Business (Enterprise)
```css
@theme {
  --color-primary: #0051ff;
  --color-secondary: #f5f5f5;
  --color-accent: #c8ff00;
  --background-image-gradient: linear-gradient(180deg, #c8ff00 0%, #000 100%);
  --background-image-sound-waves: /* SVG pattern */;
  --opacity-*: /* Comprehensive opacity scale */;
}
```

### Color Schemes
- **Primary**: Blue (#0051ff) - Brand color
- **Secondary**: Light gray (#f5f5f5) - Supporting elements
- **Accent**: Bright yellow-green (#c8ff00) - Highlights and CTAs
- **Background**: White (#ffffff)
- **Foreground**: Black (#000000)

## Component Libraries Comparison

### UI Components (Both Projects)

Both projects include comprehensive UI component libraries with 50+ components:

#### Core UI Components
| Component | Description | Features |
|-----------|-------------|----------|
| `Button` | Interactive buttons | 8 variants (default, destructive, outline, secondary, tertiary, ghost, link, topic, rounded-white) |
| `Card` | Content containers | Header, Content, Footer, Title, Description variants |
| `Navigation` | Site navigation | Responsive, dropdown menus, mobile-friendly |
| `Hero` | Hero sections | Background patterns, CTAs, responsive design |
| `Footer` | Site footer | Multi-column layout, social links, responsive |
| `Logo` | Brand logo | Multiple sizes (sm, md, lg) |

#### Form Components
| Component | Description | Features |
|-----------|-------------|----------|
| `Input` | Text input fields | Various types and validation |
| `Textarea` | Multi-line text input | Resizable, validation support |
| `Select` | Dropdown selection | Searchable, multi-select options |
| `Checkbox` | Checkbox inputs | Indeterminate state support |
| `RadioGroup` | Radio button groups | Controlled components |
| `Switch` | Toggle switches | Animated transitions |
| `Slider` | Range sliders | Customizable steps and marks |
| `Form` | Form wrapper | Validation, error handling |

#### Layout & Navigation
| Component | Description | Features |
|-----------|-------------|----------|
| `Accordion` | Collapsible content | Single/multiple open, animated |
| `Tabs` | Tabbed content | Keyboard navigation, animated |
| `Breadcrumb` | Navigation breadcrumbs | Responsive, customizable |
| `Pagination` | Page navigation | Customizable page sizes |
| `Separator` | Visual dividers | Horizontal/vertical orientations |

#### Overlay Components
| Component | Description | Features |
|-----------|-------------|----------|
| `Dialog` | Modal dialogs | Backdrop, focus management |
| `Drawer` | Slide-out panels | Multiple positions, backdrop |
| `Sheet` | Side panels | Responsive, customizable |
| `Popover` | Floating content | Positioning, triggers |
| `Tooltip` | Hover tooltips | Multiple positions, delays |
| `HoverCard` | Rich hover content | Customizable triggers |

#### Data Display
| Component | Description | Features |
|-----------|-------------|----------|
| `Table` | Data tables | Sorting, filtering, responsive |
| `Chart` | Data visualization | Multiple chart types |
| `Progress` | Progress indicators | Linear, circular variants |
| `Skeleton` | Loading placeholders | Customizable shapes |
| `Badge` | Status indicators | Multiple variants, colors |
| `Avatar` | User avatars | Fallback text, images |

#### Feedback Components
| Component | Description | Features |
|-----------|-------------|----------|
| `Alert` | Alert messages | Multiple variants, dismissible |
| `AlertDialog` | Confirmation dialogs | Destructive actions |
| `Toast` | Notification toasts | Multiple positions, auto-dismiss |
| `Sonner` | Toast notifications | Rich content, actions |

#### Utility Components
| Component | Description | Features |
|-----------|-------------|----------|
| `Command` | Command palette | Search, keyboard shortcuts |
| `Calendar` | Date picker | Range selection, localization |
| `Carousel` | Image/content carousel | Touch/swipe support |
| `Collapsible` | Collapsible sections | Smooth animations |
| `Resizable` | Resizable panels | Multiple orientations |
| `ScrollArea` | Custom scrollbars | Styled scrollbars |
| `AspectRatio` | Aspect ratio containers | Multiple ratios |

### Sitecore-Specific Components

Both projects include Sitecore Content SDK components:

#### Layout Components
| Component | Description | Variants |
|-----------|-------------|----------|
| `Container*` | Flexible layout containers | 11 layout variants (25/25/25/25, 30/30/30, 30/70, 40/60, 50/50, 60/40, 63/21, 70/30, 70/30, Full Bleed, Full Width) |
| `Flex` | Flexbox utility component | Multiple direction/wrap options |
| `GlobalHeader` | Site-wide navigation | Multiple styling variants |
| `GlobalFooter` | Site-wide footer | Multiple styling variants |

#### Content Components
| Component | Description | Variants |
|-----------|-------------|----------|
| `Hero` | Hero sections | Multiple layout variants |
| `ButtonComponent` | Interactive buttons | 8 button variants |
| `TextBanner` | Text-based banners | Multiple styling variants |
| `RichTextBlock` | Rich text content | Custom styling support |
| `ImageBlock` | Optimized images | Responsive sizing |

#### Interactive Components
| Component | Description | Variants |
|-----------|-------------|----------|
| `AccordionBlock` | Collapsible content | Multiple layout variants |
| `MultiPromo` | Promotional content grids | Grid layouts |
| `TestimonialCarousel` | Customer testimonials | Carousel functionality |
| `AnimatedSection` | Animated content sections | Direction-based animations |

### D-Link Business Exclusive Components

The business project includes additional enterprise-focused components:

#### Business-Specific Components
| Component | Description | Variants |
|-----------|-------------|----------|
| `Header` | Business-focused headers | Form integration |
| `FeaturesSection` | Business feature highlights | Grid layouts |
| `CallToAction` | Business CTAs | Professional styling |
| `ContactSection` | Contact form integration | Business layout |
| `FAQ` | Frequently asked questions | Accordion-style |
| `NewsletterSection` | Email subscription | Form validation |
| `ProductsSection` | Product showcase | Filtering capabilities |
| `StatsSection` | Business statistics | Animated counters |
| `TeamSection` | Team member profiles | Professional layout |
| `Testimonials` | Customer testimonials | Business case studies |
| `LogoCloud` | Partner/client logos | Business credibility |

#### Enhanced Media Components
| Component | Description | Variants |
|-----------|-------------|----------|
| `ImageCarousel` | Image carousels | 8 transition variants |
| `ImageGallery` | Image galleries | 6 layout variants |
| `SlideCarousel` | Slide presentations | Auto-play support |

#### Location & Search Components
| Component | Description | Variants |
|-----------|-------------|----------|
| `LocationSearch` | Geographic search | 8 search variants |
| `ZipcodeModal` | Location-based modals | Business location finder |

#### Form Components
| Component | Description | Variants |
|-----------|-------------|----------|
| `EmailForm` | Email subscription | Business newsletter |
| `SubmitInfoForm` | Information submission | Business inquiry |
| `SubmissionForm` | General submissions | 4 form types |
| `SuccessForm` | Form confirmation | Success messaging |

#### Site Three Components
Complete business site component set:
- `SiteThreeHeader` - Business site header
- `SiteThreeNavigation` - Business navigation
- `SiteThreeHero` - Business hero section
- `SiteThreeFeatures` - Business features
- `SiteThreeProducts` - Business products
- `SiteThreeTestimonials` - Business testimonials
- `SiteThreeContact` - Business contact
- `SiteThreeFooter` - Business footer
- And 8 additional business components...

## Sitecore Data Templates

### Field Types Used

#### Core Field Types
- `Field<string>` - Text fields
- `TextField` - Rich text fields
- `ImageField` - Image fields
- `LinkField` - Link fields
- `RichTextField` - Rich text content

#### Custom Field Types
- `ReferenceField` - Item references
- `AuthorItemFields` - Author information
- `PageType` - Page-level fields
- `GqlField<T>` - GraphQL field wrapper
- `FeatureFields` - Feature-specific fields (Business)
- `CardProps` - Card component fields (Business)

### Common Field Patterns

#### Page-Level Fields
```typescript
interface PageTitles {
  pageTitle: Field<string>;
  metaTitle: Field<string>;
  metaDescription: Field<string>;
  // ... additional page fields
}
```

#### Component Field Patterns
```typescript
interface ComponentFields {
  heading: Field<string>;
  description?: Field<string>;
  link?: LinkField;
  image?: ImageField;
  // ... component-specific fields
}
```

## Component Variants & Styling

### Hero Components

#### D-Link Hero Variants
- `Default` - Standard hero with video/image background
- `HeroST` - Split layout with content overlay

#### D-Link Business Hero Variants
- `Default` - Standard hero with video/image background
- `HeroDefault` - Enhanced default variant
- `HeroImageBackground` - Image background variant
- `HeroImageBottom` - Image at bottom layout
- `HeroImageBottomInset` - Inset bottom image
- `HeroImageRight` - Image on right layout

### Button Components

Both projects support the same button variants:
- `Default` - Base button component
- `Primary` - Primary brand button
- `Secondary` - Secondary button
- `Tertiary` - Tertiary button
- `Outline` - Outlined button
- `Ghost` - Transparent button
- `LinkButton` - Link-styled button
- `Destructive` - Error/danger button

### Container Layouts

Both projects support the same container variants:
- `Container25252525` - 25% / 25% / 25% / 25%
- `Container303030` - 30% / 30% / 30%
- `Container3070` - 30% / 70%
- `Container4060` - 40% / 60%
- `Container5050` - 50% / 50%
- `Container6040` - 60% / 40%
- `Container6321` - 60% / 30% / 20%
- `Container70` - 70% / 30%
- `Container7030` - 70% / 30%
- `ContainerFullBleed` - Full width
- `ContainerFullWidth` - Full width

## Development Guidelines

### Component Development
1. **TypeScript First** - All components use TypeScript interfaces
2. **Sitecore Integration** - Components integrate with Sitecore fields
3. **Responsive Design** - Mobile-first approach with Tailwind CSS
4. **Accessibility** - ARIA attributes and keyboard navigation
5. **Performance** - Optimized images and lazy loading
6. **Business Focus** - Professional styling (Business project)

### Styling Guidelines
1. **Design Tokens** - Use CSS custom properties for consistency
2. **Component Variants** - Use class-variance-authority for variants
3. **Responsive Design** - Mobile-first with Tailwind breakpoints
4. **Animation** - Framer Motion for smooth interactions
5. **Business Aesthetics** - Professional color schemes (Business project)

### Sitecore Integration
1. **Field Validation** - Always check field existence before rendering
2. **Page Editing** - Support Sitecore's page editing mode
3. **Placeholders** - Use dynamic placeholders for flexible layouts
4. **Error Handling** - Graceful fallbacks for missing content
5. **Business Context** - Maintain professional content standards (Business project)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Sitecore XM Cloud instance

### Installation

#### D-Link Project
  ```bash
  cd examples/dlink
  npm install
```

#### D-Link Business Project
```bash
cd examples/dlinkbusiness
npm install
```

### Development

#### D-Link Project
```bash
cd examples/dlink
  npm run dev
  ```

#### D-Link Business Project
  ```bash
cd examples/dlinkbusiness
  npm run dev
  ```

### Build

#### D-Link Project
```bash
cd examples/dlink
npm run build
```

#### D-Link Business Project
```bash
cd examples/dlinkbusiness
npm run build
```

### Sitecore Tools
  ```bash
npm run sitecore-tools:generate-map
npm run sitecore-tools:build
```

## Component Usage Examples

### Complete HomePage Component (D-Link)
```tsx
import { HomePage } from '@/components/HomePage';

<HomePage 
  className="min-h-screen bg-white"
/>
```

The HomePage component includes:
- Navigation with D-Link branding
- Hero section with Meta-ready messaging
- Features section (Mesh Wi-Fi, Cameras, Smart Home, Switches)
- Call-to-action section
- Footer with comprehensive links

### Basic Hero Component (Both Projects)
```tsx
import { Hero } from '@/components/ui/Hero';

<Hero 
  title="Made for Meta\nGet Your Next\nEssential Upgrade"
  subtitle="Designed for Busy Homes and Offices"
  description="Discover innovative networking solutions that keep you connected with the latest technology and seamless performance."
  ctaText="Discover More"
  ctaHref="/products/meta-ready"
/>
```

### Business Hero Component (D-Link Business Only)
```tsx
import { HeroDefault } from '@/components/hero/HeroDefault.dev';

<HeroDefault 
  fields={{
    title: { value: "Enterprise Networking Solutions" },
    description: { value: "Scalable, secure, and reliable" },
    link: { href: "/solutions", text: "Explore Solutions" }
  }}
  params={{ styles: "position-left" }}
/>
```

### Container with Content (Both Projects)
```tsx
import { Container5050 } from '@/components/container/container-5050/Container5050';

<Container5050 
  params={{ styles: "my-8" }}
  left={<TextBanner fields={leftFields} />}
  right={<ImageBlock fields={rightFields} />}
/>
```

### Business Product Listing (D-Link Business Only)
```tsx
import { ProductListing } from '@/components/product-listing/ProductListing';

<ProductListing 
  fields={{
    products: productData,
    title: { value: "Business Solutions" }
  }}
  params={{ variant: "ThreeUp" }}
/>
```

## Project Differences Summary

| Aspect | D-Link (Consumer) | D-Link Business (Enterprise) |
|--------|-------------------|-------------------------------|
| **Focus** | Consumer products | Business solutions |
| **UI Components** | 50+ components | 50+ components |
| **Sitecore Components** | 50+ components | 80+ components |
| **Total Components** | 100+ components | 130+ components |
| **Styling** | Consumer-friendly | Professional/business |
| **Forms** | Basic forms | Advanced business forms |
| **Media** | Standard media | Enhanced media galleries |
| **Search** | Basic search | Location-based search |
| **Layouts** | Standard layouts | Business-specific layouts |
| **Animations** | Consumer-focused | Professional animations |
| **Icons** | 17+ icons | 18+ icons |
| **Documentation** | Consumer-focused | Business-focused |
| **HomePage** | Complete home page | Business home page |

## Documentation

- [D-Link Component Reference](./examples/dlink/docs/COMPONENT_REFERENCE.md)
- [D-Link Business Component Reference](./examples/dlinkbusiness/docs/COMPONENT_REFERENCE.md)

## Support

For questions about these projects:
- Review the component documentation
- Check the Sitecore Content SDK documentation
- Refer to the Next.js documentation
- Contact the development team

This comprehensive component reference provides detailed information about both D-Link Sitecore JSS projects, their component libraries, styling systems, and Sitecore integration patterns. Each project is designed to meet specific audience needs while maintaining consistency in development practices and Sitecore integration.