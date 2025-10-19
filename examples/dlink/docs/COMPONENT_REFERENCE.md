# D-Link Sitecore JSS Component Reference

## Project Overview

The D-Link project is a Sitecore Content SDK application built with Next.js, featuring a comprehensive component library for building modern web experiences. This project showcases D-Link's networking and technology products with a focus on home, business, and industry solutions.

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

### Sitecore Integration
- **@sitecore-content-sdk/nextjs** - Content SDK integration
- **@sitecore-cloudsdk/core** - Cloud SDK
- **@sitecore-feaas/clientside** - Frontend as a Service
- **@sitecore/components** - Sitecore component library

## Styling System

### Design Tokens
The project uses a comprehensive design token system defined in `globals.css`:

```css
@theme {
  --color-primary: #0051ff;
  --color-primary-foreground: #ffffff;
  --color-primary-hover: #003dcc;
  --color-secondary: #f5f5f5;
  --color-accent: #c8ff00;
  --color-accent-foreground: #000000;
  --font-family-heading: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
  --font-family-body: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
  --border-radius-default: 1.5rem;
  --spacing-*: /* Comprehensive spacing scale */
}
```

### Color Scheme
- **Primary**: Blue (#0051ff) - Main brand color
- **Secondary**: Light gray (#f5f5f5) - Supporting elements
- **Accent**: Bright yellow-green (#c8ff00) - Highlights and CTAs
- **Background**: White (#ffffff)
- **Foreground**: Black (#000000)

## Component Library

### Page Components

#### HomePage (`HomePage`)
**Features:**
- Complete home page layout
- Navigation with D-Link branding
- Hero section with Meta-ready messaging
- Features showcase (Mesh Wi-Fi, Cameras, Smart Home, Switches)
- Call-to-action section
- Footer with comprehensive links

**Usage:**
```tsx
import { HomePage } from '@/components/HomePage';

<HomePage className="min-h-screen bg-white" />
```

### UI Components

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

### Sitecore Layout Components

#### Container Components
Container components provide flexible layout structures with various column configurations:

| Component | Layout | Description |
|-----------|--------|-------------|
| `Container25252525` | 25% / 25% / 25% / 25% | Four equal columns |
| `Container303030` | 30% / 30% / 30% | Three equal columns |
| `Container3070` | 30% / 70% | Left sidebar layout |
| `Container4060` | 40% / 60% | Balanced two-column |
| `Container5050` | 50% / 50% | Equal two-column |
| `Container6040` | 60% / 40% | Content-focused layout |
| `Container6321` | 60% / 30% / 20% | Three-column with emphasis |
| `Container70` | 70% / 30% | Content-heavy layout |
| `Container7030` | 70% / 30% | Wide content layout |
| `ContainerFullBleed` | Full width | Edge-to-edge content |
| `ContainerFullWidth` | Full width | Full-width container |

**Container Features:**
- Dynamic placeholder support
- Responsive breakpoints
- Margin and padding controls
- Background color variants
- Style parameter support

#### Flex Component
```typescript
<Flex wrap="nowrap" direction="row">
  <FlexItem basis="1/2">Content</FlexItem>
</Flex>
```

### Navigation Components

#### Global Header (`GlobalHeader`)
**Features:**
- Responsive navigation with mobile menu
- D-Link brand navigation structure
- Scroll-based visibility control
- Dropdown submenus
- Page editing mode support

**Navigation Structure:**
- For Home (Wi-Fi, 4G/5G, Cameras, Smart Home, Switches, Adapters, mydlink)
- For Business (Switches, Wireless, Business Routers, Nuclias, IP Surveillance, Accessories)
- For Industry (4G/5G M2M, D-ECS, Industry Switches, Accessories)
- Support (Tech Support, Tech Alerts, FAQs, Services, Warranty, Contact, Support Portal)
- Resources (Brochures and Guides, Case Studies, Videos, Blog, Product Selector)

#### Global Footer (`GlobalFooter`)
**Features:**
- Multi-column footer layout
- Social media links
- Copyright information
- Promotional content support
- Responsive design

#### Secondary Navigation (`SecondaryNavigation`)
- Breadcrumb-style navigation
- Context-aware navigation
- Mobile-friendly design

### Content Components

#### Hero Components

##### Hero (`Hero`)
**Variants:**
- `Default` - Standard hero with video/image background
- `HeroST` - Split layout with content overlay

**Features:**
- Video background support
- Multiple image options
- Animated content sections
- Responsive design
- Accessibility controls (reduced motion)

**Color Schemes:**
- `primary` - Blue background
- `secondary` - Light gray background
- `tertiary` - Tertiary color background
- `dark` - Dark background
- `light` - Light background (default)

**Sitecore Fields:**
```typescript
interface HeroFields {
  titleRequired: Field<string>;
  descriptionOptional?: Field<string>;
  linkOptional?: LinkField;
  heroVideoOptional1?: LinkField;
  heroImageOptional1?: ImageField;
  heroVideoOptional2?: LinkField;
  heroImageOptional2?: ImageField;
  heroVideoOptional3?: LinkField;
  heroImageOptional3?: ImageField;
  heroVideoOptional4?: LinkField;
  heroImageOptional4?: ImageField;
}
```

#### Button Components (`ButtonComponent`)

**Variants:**
- `Default` - Base button component
- `Primary` - Primary brand button
- `Secondary` - Secondary button
- `Tertiary` - Tertiary button
- `Outline` - Outlined button
- `Ghost` - Transparent button
- `LinkButton` - Link-styled button
- `Destructive` - Error/danger button

**Features:**
- Icon support (left/right positioning)
- Multiple sizes
- Loading states
- Accessibility features
- Sitecore field integration

**Sitecore Fields:**
```typescript
interface ButtonFields {
  buttonLink: LinkField;
  icon?: { value: IconName };
  iconClassName?: string;
  isAriaHidden?: boolean;
}
```

#### Text Banner (`TextBanner`)
**Variants:**
- `Default` - Standard text banner
- `TextBanner01` - Variant 1
- `TextBanner02` - Variant 2

**Features:**
- Heading and description support
- Multiple link options
- Background image support
- Responsive typography

#### Rich Text Block (`RichTextBlock`)
- Sitecore Rich Text field integration
- Custom styling support
- Responsive content

#### Image Components (`ImageBlock`)
- Next.js Image optimization
- Sitecore Image field integration
- Responsive sizing
- Lazy loading

### Interactive Components

#### Accordion Block (`AccordionBlock`)
**Variants:**
- `Default` - Standard accordion
- `AccordionBlockItem` - Individual accordion item

**Features:**
- Collapsible content sections
- Smooth animations
- Accessibility support
- Custom styling

#### Multi-Promo Components

##### Multi-Promo (`MultiPromo`)
- Grid layout for promotional content
- Responsive design
- Custom spacing

##### Multi-Promo Tabs (`MultiPromoTabs`)
- Tabbed promotional content
- Smooth transitions
- Mobile-friendly

#### Promo Animated (`PromoAnimated`)
**Variants:**
- `Default` - Standard animated promo
- `PromoAnimatedImageRight` - Image on right layout

**Features:**
- Framer Motion animations
- Image and text combinations
- Responsive layouts

#### Testimonial Carousel (`TestimonialCarousel`)
- Customer testimonial display
- Carousel functionality
- Responsive design

### Utility Components

#### Animated Section (`AnimatedSection`)
- Framer Motion integration
- Direction-based animations
- Reduced motion support
- Page editing mode awareness

#### Floating Dock (`FloatingDock`)
- Fixed position navigation
- Quick access menu
- Mobile-friendly

#### Mode Toggle (`ModeToggle`)
- Theme switching capability
- Light/dark mode support

#### Portal (`Portal`)
- React Portal implementation
- Modal and overlay support

### Sitecore-Specific Components

#### SXA Components
Sitecore Experience Accelerator components for enhanced functionality:

- `ColumnSplitter` - Column layout management
- `Container` - SXA container component
- `ContentBlock` - Content management
- `Image` - SXA image component
- `LinkList` - Navigation list component
- `Navigation` - SXA navigation
- `PageContent` - Page content management
- `PartialDesignDynamicPlaceholder` - Dynamic placeholder support
- `Promo` - Promotional content
- `RichText` - Rich text content
- `RowSplitter` - Row layout management
- `Title` - Title component

### Specialized Components

#### Article Components
- `ArticleHeader` - Article page headers
- `ArticleListing` - Article listing pages

#### Topic Components
- `TopicListing` - Topic-based content listing
- `TopicItem` - Individual topic items

#### Media Components
- `MediaSection` - Video/image media display
- `Video` - Video player component

#### Form Components
- `SubscriptionBanner` - Newsletter signup
- `CtaBanner` - Call-to-action banners

#### Background Components
- `BackgroundThumbnail` - Background image support

#### Icon System (`Icon`)
Comprehensive icon library with 17+ SVG icons:
- Brand icons
- Navigation icons
- Action icons
- Status icons

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

## Development Guidelines

### Component Development
1. **TypeScript First** - All components use TypeScript interfaces
2. **Sitecore Integration** - Components integrate with Sitecore fields
3. **Responsive Design** - Mobile-first approach with Tailwind CSS
4. **Accessibility** - ARIA attributes and keyboard navigation
5. **Performance** - Optimized images and lazy loading

### Styling Guidelines
1. **Design Tokens** - Use CSS custom properties for consistency
2. **Component Variants** - Use class-variance-authority for variants
3. **Responsive Design** - Mobile-first with Tailwind breakpoints
4. **Animation** - Framer Motion for smooth interactions

### Sitecore Integration
1. **Field Validation** - Always check field existence before rendering
2. **Page Editing** - Support Sitecore's page editing mode
3. **Placeholders** - Use dynamic placeholders for flexible layouts
4. **Error Handling** - Graceful fallbacks for missing content

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Sitecore XM Cloud instance

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Sitecore Tools
```bash
npm run sitecore-tools:generate-map
npm run sitecore-tools:build
```

## Component Usage Examples

### Complete HomePage Component
```tsx
import { HomePage } from '@/components/HomePage';

<HomePage 
  className="min-h-screen bg-white"
/>
```

### UI Hero Component
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

### Button Component
```tsx
import { Button } from '@/components/ui/button';

<Button variant="primary" size="lg">
  Discover More
</Button>
```

### Card Component
```tsx
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Mesh Wi-Fi System</CardTitle>
    <CardDescription>Blazing speeds with maximum coverage</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Complete home networking solution</p>
  </CardContent>
</Card>
```

This component reference provides a comprehensive overview of the D-Link Sitecore JSS project's component library, styling system, and Sitecore integration patterns. Each component is designed to work seamlessly with Sitecore's content management system while providing modern, responsive, and accessible user experiences.