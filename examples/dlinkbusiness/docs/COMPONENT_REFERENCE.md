# D-Link Business Sitecore JSS Component Reference

## Project Overview

The D-Link Business project is a Sitecore Content SDK application built with Next.js, specifically designed for business and enterprise networking solutions. This project showcases D-Link's professional networking products with a focus on business infrastructure, security, and scalability.

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
- **Shadcn/ui** - Modern component library

### Sitecore Integration
- **@sitecore-content-sdk/nextjs** - Content SDK integration
- **@sitecore-cloudsdk/core** - Cloud SDK
- **@sitecore-feaas/clientside** - Frontend as a Service
- **@sitecore/components** - Sitecore component library

## Styling System

### Design Tokens
The project uses a comprehensive design token system with business-focused branding:

```css
@theme {
  --color-primary: #0051ff;
  --color-primary-foreground: #ffffff;
  --color-primary-hover: #003dcc;
  --color-secondary: #f5f5f5;
  --color-accent: #c8ff00;
  --color-accent-foreground: #000000;
  --background-image-gradient: linear-gradient(180deg, #c8ff00 0%, #000 100%);
  --background-image-gradient-secondary: linear-gradient(90deg, #c8ff00 0%, #000 50%, #c8ff00 100%);
  --background-image-sound-waves: /* SVG sound wave pattern */
  --font-family-heading: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
  --font-family-body: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
  --border-radius-default: 1.5rem;
  --opacity-*: /* Comprehensive opacity scale */
}
```

### Color Scheme
- **Primary**: Blue (#0051ff) - Professional brand color
- **Secondary**: Light gray (#f5f5f5) - Supporting elements
- **Accent**: Bright yellow-green (#c8ff00) - Highlights and CTAs
- **Background**: White (#ffffff)
- **Foreground**: Black (#000000)
- **Gradients**: Custom gradients for visual appeal

## Component Library

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
Enhanced container system with business-focused layouts:

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

**Enhanced Container Features:**
- Dynamic placeholder support
- Responsive breakpoints
- Margin and padding controls
- Background color variants (primary, secondary, tertiary, transparent)
- Inset styling options
- Style parameter support
- Business-specific styling variants

#### Flex Component
```typescript
<Flex wrap="nowrap" direction="row">
  <FlexItem basis="1/2">Content</FlexItem>
</Flex>
```

### Navigation Components

#### Global Header (`GlobalHeader`)
**Variants:**
- `Default` - Standard business header
- `GlobalHeaderDefault` - Enhanced default variant
- `GlobalHeaderCentered` - Centered layout variant

**Features:**
- Responsive navigation with mobile menu
- D-Link business navigation structure
- Scroll-based visibility control
- Dropdown submenus
- Page editing mode support
- Reduced motion support
- Professional styling

**Navigation Structure:**
- For Home (Wi-Fi, 4G/5G, Cameras, Smart Home, Switches, Adapters, mydlink)
- For Business (Switches, Wireless, Business Routers, Nuclias, IP Surveillance, Accessories)
- For Industry (4G/5G M2M, D-ECS, Industry Switches, Accessories)
- Support (Tech Support, Tech Alerts, FAQs, Services, Warranty, Contact, Support Portal)
- Resources (Brochures and Guides, Case Studies, Videos, Blog, Product Selector)

#### Global Footer (`GlobalFooter`)
**Variants:**
- `Default` - Standard footer
- `GlobalFooterDefault` - Enhanced default
- `GlobalFooterBlackCompact` - Compact black variant
- `GlobalFooterBlackLarge` - Large black variant
- `GlobalFooterBlueCentered` - Centered blue variant
- `GlobalFooterBlueCompact` - Compact blue variant

**Features:**
- Multi-column footer layout
- Social media links
- Copyright information
- Promotional content support
- Responsive design
- Business-specific styling

#### Secondary Navigation (`SecondaryNavigation`)
- Breadcrumb-style navigation
- Context-aware navigation
- Mobile-friendly design
- Business context support

### Content Components

#### Hero Components

##### Hero (`Hero`)
**Variants:**
- `Default` - Standard hero with video/image background
- `HeroDefault` - Enhanced default variant
- `HeroImageBackground` - Image background variant
- `HeroImageBottom` - Image at bottom layout
- `HeroImageBottomInset` - Inset bottom image
- `HeroImageRight` - Image on right layout

**Features:**
- Video background support
- Multiple image options
- Animated content sections
- Responsive design
- Accessibility controls (reduced motion)
- Business-focused layouts
- Professional styling

**Color Schemes:**
- `primary` - Blue background
- `secondary` - Light gray background
- `tertiary` - Tertiary color background
- `dark` - Dark background
- `light` - Light background (default)

**Sitecore Fields:**
```typescript
interface HeroFields {
  title: Field<string>;
  description?: Field<string>;
  link?: LinkField;
  heroVideo?: LinkField;
  heroImage?: ImageField;
  heroImage2?: ImageField;
  bannerText?: Field<string>;
  bannerCTA?: LinkField;
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
- Business-focused styling

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
- `TextBanner03` - Variant 3
- `TextBanner04` - Variant 4
- `TextBanner05` - Variant 5
- `TextBanner06` - Variant 6

**Features:**
- Heading and description support
- Multiple link options
- Background image support
- Responsive typography
- Business-specific styling

#### Rich Text Block (`RichTextBlock`)
- Sitecore Rich Text field integration
- Custom styling support
- Responsive content
- Business formatting options

#### Image Components (`ImageBlock`)
- Next.js Image optimization
- Sitecore Image field integration
- Responsive sizing
- Lazy loading
- Business-focused layouts

### Interactive Components

#### Accordion Block (`AccordionBlock`)
**Variants:**
- `Default` - Standard accordion
- `AccordionBlockDefault` - Enhanced default
- `AccordionBlockCentered` - Centered layout
- `Accordion5050TitleAbove` - Title above layout
- `AccordionBlockOneColumnTitleLeft` - Single column with left title
- `AccordionBlockTwoColumnTitleLeft` - Two column with left title
- `AccordionBlockItem` - Individual accordion item

**Features:**
- Collapsible content sections
- Smooth animations
- Accessibility support
- Custom styling
- Business-focused layouts

#### Multi-Promo Components

##### Multi-Promo (`MultiPromo`)
- Grid layout for promotional content
- Responsive design
- Custom spacing
- Business product showcases

##### Multi-Promo Tabs (`MultiPromoTabs`)
- Tabbed promotional content
- Smooth transitions
- Mobile-friendly
- Business solution tabs

#### Promo Animated (`PromoAnimated`)
**Variants:**
- `Default` - Standard animated promo
- `PromoAnimatedImageRight` - Image on right layout

**Features:**
- Framer Motion animations
- Image and text combinations
- Responsive layouts
- Business-focused animations

#### Testimonial Carousel (`TestimonialCarousel`)
- Customer testimonial display
- Carousel functionality
- Responsive design
- Business customer stories

### Business-Specific Components

#### Component Library
A comprehensive set of business-focused components:

##### Header (`Header`)
**Features:**
- Business-focused header layout
- Form integration
- Contact information
- Professional styling

**Sitecore Fields:**
```typescript
interface HeaderFields {
  Tagline: Field<string>;
  Heading: Field<string>;
  Body: Field<string>;
  Link1: LinkField;
  Link2: LinkField;
  Image: ImageField;
  FormDisclaimer: Field<string>;
}
```

##### Hero (`Hero`)
**Features:**
- Business hero layouts
- Professional imagery
- Call-to-action integration
- Responsive design

##### Features Section (`FeaturesSection`)
**Features:**
- Feature grid layouts
- Icon support
- Business feature highlights
- Responsive design

**Sitecore Fields:**
```typescript
interface FeatureFields {
  featureTitle: Field<string>;
  featureDescription: Field<string>;
  featureIcon?: ImageField;
  featureLink?: LinkField;
}
```

##### Call to Action (`CallToAction`)
**Features:**
- Business CTAs
- Professional styling
- Image support
- Link integration

##### Contact Section (`ContactSection`)
**Features:**
- Contact form integration
- Business contact information
- Professional layout
- Responsive design

##### FAQ (`FAQ`)
**Features:**
- Frequently asked questions
- Accordion-style layout
- Business-focused content
- Search functionality

##### Newsletter Section (`NewsletterSection`)
**Features:**
- Email subscription
- Business newsletter signup
- Professional styling
- Form validation

##### Products Section (`ProductsSection`)
**Features:**
- Product showcase
- Business product grid
- Filtering capabilities
- Responsive design

##### Stats Section (`StatsSection`)
**Features:**
- Business statistics
- Animated counters
- Professional presentation
- Responsive layout

##### Team Section (`TeamSection`)
**Features:**
- Team member profiles
- Professional headshots
- Contact information
- Business team layout

##### Testimonials (`Testimonials`)
**Features:**
- Customer testimonials
- Business case studies
- Professional presentation
- Carousel functionality

##### Logo Cloud (`LogoCloud`)
**Features:**
- Partner/client logos
- Business credibility
- Responsive grid
- Professional presentation

#### Product Listing (`ProductListing`)
**Variants:**
- `Default` - Standard product listing
- `ThreeUp` - Three-column layout
- `Slider` - Carousel-style listing

**Features:**
- Product grid layouts
- Filtering and sorting
- Business product showcase
- Responsive design

#### Image Components

##### Image Carousel (`ImageCarousel`)
**Variants:**
- `Default` - Standard carousel
- `ImageCarouselCentered` - Centered layout
- `ImageCarouselFullWidth` - Full-width variant
- `ImageCarouselWithThumbnails` - Thumbnail navigation
- `ImageCarouselAutoplay` - Auto-playing carousel
- `ImageCarouselPagination` - Pagination controls
- `ImageCarouselVertical` - Vertical layout
- `ImageCarouselFade` - Fade transitions

**Features:**
- Multiple transition effects
- Navigation controls
- Responsive design
- Business product imagery

##### Image Gallery (`ImageGallery`)
**Variants:**
- `Default` - Standard gallery
- `ImageGalleryGrid` - Grid layout
- `ImageGalleryMasonry` - Masonry layout
- `ImageGalleryLightbox` - Lightbox functionality
- `ImageGallerySlider` - Slider layout
- `ImageGalleryThumbnails` - Thumbnail navigation

**Features:**
- Multiple layout options
- Lightbox functionality
- Responsive design
- Business imagery support

#### Location Search (`LocationSearch`)
**Variants:**
- `Default` - Standard location search
- `LocationSearchMap` - Map integration
- `LocationSearchList` - List view
- `LocationSearchFilters` - Filter options
- `LocationSearchResults` - Results display
- `LocationSearchAutocomplete` - Autocomplete
- `LocationSearchRadius` - Radius selection
- `LocationSearchNearby` - Nearby locations

**Features:**
- Geographic search
- Map integration
- Filtering capabilities
- Business location finder

#### Forms

##### Email Form (`EmailForm`)
**Features:**
- Email subscription
- Business newsletter signup
- Form validation
- Professional styling

##### Submit Info Form (`SubmitInfoForm`)
**Features:**
- Information submission
- Business inquiry forms
- Data validation
- Professional layout

##### Success Form (`SuccessForm`)
**Features:**
- Form submission confirmation
- Success messaging
- Professional styling
- Business feedback

##### Zipcode Form (`ZipcodeForm`)
**Features:**
- Location-based forms
- Zipcode validation
- Business location services
- Professional styling

##### Submission Form (`SubmissionForm`)
**Variants:**
- `Default` - Standard submission form
- `SubmissionFormContact` - Contact form
- `SubmissionFormInquiry` - Business inquiry
- `SubmissionFormQuote` - Quote request

**Features:**
- Business form handling
- Data validation
- Professional styling
- Multiple form types

##### Zipcode Modal (`ZipcodeModal`)
**Features:**
- Modal zipcode entry
- Location services
- Business location finder
- Professional styling

#### Site Three Components
A comprehensive set of business site components:

- `SiteThreeHeader` - Business site header
- `SiteThreeNavigation` - Business navigation
- `SiteThreeHero` - Business hero section
- `SiteThreeFeatures` - Business features
- `SiteThreeProducts` - Business products
- `SiteThreeTestimonials` - Business testimonials
- `SiteThreeContact` - Business contact
- `SiteThreeFooter` - Business footer
- `SiteThreeAbout` - Business about section
- `SiteThreeServices` - Business services
- `SiteThreeSolutions` - Business solutions
- `SiteThreeCaseStudies` - Business case studies
- `SiteThreePartners` - Business partners
- `SiteThreeNews` - Business news
- `SiteThreeResources` - Business resources
- `SiteThreeSupport` - Business support
- `SiteThreeDownloads` - Business downloads

#### Slide Carousel (`SlideCarousel`)
**Variants:**
- `Default` - Standard slide carousel
- `SlideCarouselAutoplay` - Auto-playing carousel

**Features:**
- Slide transitions
- Navigation controls
- Responsive design
- Business content presentation

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
- Business shortcuts

#### Mode Toggle (`ModeToggle`)
- Theme switching capability
- Light/dark mode support
- Professional themes

#### Portal (`Portal`)
- React Portal implementation
- Modal and overlay support
- Business modals

### Sitecore-Specific Components

#### SXA Components
Enhanced Sitecore Experience Accelerator components:

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

#### Content SDK Rich Text (`ContentSdkRichText`)
- Enhanced rich text rendering
- Business formatting options
- Custom styling support

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

#### Card Components
- `Card` - Standard card component
- `CardSpotlight` - Highlighted card variant

#### Icon System (`Icon`)
Enhanced icon library with 18+ SVG icons:
- Brand icons
- Navigation icons
- Action icons
- Status icons
- Business-specific icons

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
- `FeatureFields` - Feature-specific fields
- `CardProps` - Card component fields

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

#### Business-Specific Fields
```typescript
interface BusinessFields {
  businessName: Field<string>;
  businessType: Field<string>;
  contactInfo: Field<string>;
  services: Field<string[]>;
  // ... business-specific fields
}
```

## Development Guidelines

### Component Development
1. **TypeScript First** - All components use TypeScript interfaces
2. **Sitecore Integration** - Components integrate with Sitecore fields
3. **Responsive Design** - Mobile-first approach with Tailwind CSS
4. **Accessibility** - ARIA attributes and keyboard navigation
5. **Performance** - Optimized images and lazy loading
6. **Business Focus** - Professional styling and functionality

### Styling Guidelines
1. **Design Tokens** - Use CSS custom properties for consistency
2. **Component Variants** - Use class-variance-authority for variants
3. **Responsive Design** - Mobile-first with Tailwind breakpoints
4. **Animation** - Framer Motion for smooth interactions
5. **Business Aesthetics** - Professional color schemes and layouts

### Sitecore Integration
1. **Field Validation** - Always check field existence before rendering
2. **Page Editing** - Support Sitecore's page editing mode
3. **Placeholders** - Use dynamic placeholders for flexible layouts
4. **Error Handling** - Graceful fallbacks for missing content
5. **Business Context** - Maintain professional content standards

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

### UI Hero Component
```tsx
import { Hero } from '@/components/ui/Hero';

<Hero 
  title="Enterprise Networking Solutions"
  subtitle="Scalable, Secure, and Reliable"
  description="Discover professional networking solutions designed for business growth and operational excellence."
  ctaText="Contact Sales"
  ctaHref="/contact"
/>
```

### Business Button Component
```tsx
import { Button } from '@/components/ui/button';

<Button variant="primary" size="lg">
  Contact Sales
</Button>
```

### Business Card Component
```tsx
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Enterprise Switches</CardTitle>
    <CardDescription>High-performance networking for business</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Scalable, secure, and reliable networking solutions</p>
  </CardContent>
</Card>
```

### Business Product Listing
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

This component reference provides a comprehensive overview of the D-Link Business Sitecore JSS project's component library, styling system, and Sitecore integration patterns. Each component is designed specifically for business and enterprise use cases while maintaining seamless integration with Sitecore's content management system.