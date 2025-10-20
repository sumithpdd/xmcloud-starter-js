# D-Link Sitecore JSS Component Reference

## Project Overview

The D-Link project is a Sitecore Content SDK application built with Next.js, featuring a comprehensive component library for building modern web experiences. This project showcases D-Link's networking and technology products with a focus on home, business, and industry solutions.

## D-Link Component Library

The D-Link project includes **25 custom components** built specifically for networking and technology product showcases. All components follow Sitecore Content SDK patterns and use TypeScript for type safety.

### Core Layout Components

#### Header Component
**File:** `src/components/dlink/header.tsx`
**Purpose:** Main navigation header with logo, menu items, and mobile responsiveness.

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

**Features:**
- Responsive mobile menu
- Dropdown navigation support
- Search, cart, and account icons
- D-Link branding integration

#### Footer Component
**File:** `src/components/dlink/footer.tsx`
**Purpose:** Site-wide footer with links, social media, and copyright information.

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

**Features:**
- Multi-column layout
- Social media integration
- Copyright information
- Bottom navigation links

### Hero & Banner Components

#### Hero Component
**File:** `src/components/dlink/hero.tsx`
**Purpose:** Full-width hero section with background image, heading, and CTA.

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

**Features:**
- Full-width background image support
- Overlay text with proper contrast
- Call-to-action button
- Responsive typography

#### Category Hero Component
**File:** `src/components/dlink/category-hero.tsx`
**Purpose:** Category-specific hero with background image and category information.

#### Category Page Hero Component
**File:** `src/components/dlink/category-page-hero.tsx`
**Purpose:** Enhanced hero for category pages with additional metadata.

### Product Components

#### Product Grid Component
**File:** `src/components/dlink/product-grid.tsx`
**Purpose:** Grid layout for displaying multiple products with images and links.

**Props:**
```typescript
type ProductGridProps = ComponentProps & {
  fields?: {
    title: Field<string>;
    products: Product[];
  };
};
```

**Sample Data:**
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
      {
        fields: {
          name: { value: "8-Port PoE Gigabit Ethernet Surveillance Switch" },
          model: { value: "DSS-200G-10MP" },
          image: {
            value: {
              src: "/placeholder.svg?height=300&width=300",
              alt: "DSS-200G-10MP",
            },
          },
          link: { value: "/products/dss-200g-10mp" },
        },
      },
      {
        fields: {
          name: { value: "8-Port PoE Gigabit Ethernet Surveillance Switch" },
          model: { value: "DSS-200G-10MPP" },
          image: {
            value: {
              src: "/placeholder.svg?height=300&width=300",
              alt: "DSS-200G-10MPP",
            },
          },
          link: { value: "/products/dss-200g-10mpp" },
        },
      },
      {
        fields: {
          name: { value: "Fast Ethernet PoE Unmanaged Surveillance Switch" },
          model: { value: "DSS-100E-9P" },
          image: {
            value: {
              src: "/placeholder.svg?height=300&width=300",
              alt: "DSS-100E-9P",
            },
          },
          link: { value: "/products/dss-100e-9p" },
        },
      },
      {
        fields: {
          name: { value: "Smart+ Managed Gigabit Switches" },
          model: { value: "DGS-1210 Series" },
          image: {
            value: {
              src: "/placeholder.svg?height=300&width=300",
              alt: "DGS-1210",
            },
          },
          link: { value: "/products/dgs-1210" },
        },
      },
      {
        fields: {
          name: { value: "D-ViewCam Surveillance Software" },
          model: { value: "DCS-100" },
          image: {
            value: {
              src: "/placeholder.svg?height=300&width=300",
              alt: "DCS-100",
            },
          },
          link: { value: "/products/dcs-100" },
        },
      },
    ],
  },
};
```

**Features:**
- Responsive grid layout (1-3 columns)
- Product image hover effects
- Model number display
- Direct product links

#### Product Showcase Component
**File:** `src/components/dlink/product-showcase.tsx`
**Purpose:** Featured product display with enhanced styling and descriptions.

**Props:**
```typescript
interface ProductShowcaseProps {
  fields?: {
    sectionHeading?: Field<string>;
    products?: ProductCard[];
  };
};
```

**Sample Data:**
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
      {
        heading: { value: "Wi-Fi Cameras" },
        description: { value: "Watch over your home, from anywhere." },
        image: {
          value: {
            src: "/wifi-security-camera.jpg",
            alt: "Wi-Fi Cameras",
          },
        },
        link: { value: { href: "/products/cameras", text: "Learn More" } },
      },
      {
        heading: { value: "Nuclias" },
        description: { value: "Business network management, refreshed." },
        image: {
          value: {
            src: "/cloud-network-management.jpg",
            alt: "Nuclias",
          },
        },
        link: { value: { href: "/for-business/nuclias", text: "Learn More" } },
      },
    ],
  },
};
```

**Features:**
- Card-based layout with shadows
- Image hover effects
- Rich text descriptions
- Call-to-action buttons

#### Product Selector Component
**File:** `src/components/dlink/product-selector.tsx`
**Purpose:** Interactive product filtering tool with categories and search functionality.

**Props:**
```typescript
interface ProductSelectorProps {
  fields?: {
    sectionTitle: Field<string>;
    filterCategories: FilterCategory[];
    products: Product[];
  };
}
```

**Sample Data:**
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
    {
      fields: {
        categoryName: { value: "Advanced features" },
        options: [
          { fields: { label: { value: "AI Assistant" }, value: { value: "ai-assistant" } } },
          { fields: { label: { value: "AI Mesh Optimiser" }, value: { value: "ai-mesh" } } },
          { fields: { label: { value: "AI Parental Control" }, value: { value: "parental-control" } } },
          { fields: { label: { value: "AI Traffic Optimiser" }, value: { value: "traffic-optimiser" } } },
          { fields: { label: { value: "AI Wi-Fi Optimiser" }, value: { value: "wifi-optimiser" } } },
          { fields: { label: { value: "MU-MIMO" }, value: { value: "mu-mimo" } } },
          { fields: { label: { value: "Seamless Wi-Fi network" }, value: { value: "seamless" } } },
          { fields: { label: { value: "SmartBeam" }, value: { value: "smartbeam" } } },
          { fields: { label: { value: "SmartConnect band optimisation" }, value: { value: "smartconnect" } } },
          { fields: { label: { value: "Wi-Fi Mesh support" }, value: { value: "mesh" } } },
        ],
      },
    },
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
    {
      fields: {
        name: { value: "5G/LTE Outdoor CPE" },
        model: { value: "DWP-1010" },
        image: { value: { src: "/dwp-1010-outdoor-5g-cpe.jpg", alt: "DWP-1010" } },
        link: { value: { href: "/products/dwp-1010" } },
        features: [],
      },
    },
    {
      fields: {
        name: { value: "5G NR AX3000 Wi-Fi 6 Router" },
        model: { value: "G530" },
        image: { value: { src: "/g530-5g-router.jpg", alt: "G530" } },
        link: { value: { href: "/products/g530" } },
        features: [],
      },
    },
    {
      fields: {
        name: { value: "AX1500 4G CAT6 Smart Router" },
        model: { value: "G416" },
        image: { value: { src: "/g416-4g-router.jpg", alt: "G416" } },
        link: { value: { href: "/products/g416" } },
        features: [],
      },
    },
    {
      fields: {
        name: { value: "AX1500 4G Smart Router" },
        model: { value: "G415" },
        image: { value: { src: "/g415-4g-router.jpg", alt: "G415" } },
        link: { value: { href: "/products/g415" } },
        features: [],
      },
    },
    {
      fields: {
        name: { value: "5G NR AX1800 Wi-Fi 6 Mobile Hotspot" },
        model: { value: "F518" },
        image: { value: { src: "/f518-5g-mobile-hotspot.jpg", alt: "F518" } },
        link: { value: { href: "/products/f518" } },
        features: [],
      },
    },
  ],
};
```

**Features:**
- Dynamic filtering by categories
- Real-time product updates
- Sticky sidebar filters
- Show more/less functionality
- Product count display

#### Product Detail Header Component
**File:** `src/components/dlink/product-detail-header.tsx`
**Purpose:** Detailed product information header with specifications and features.

#### Product Detail Hero Component
**File:** `src/components/dlink/product-detail-hero.tsx`
**Purpose:** Hero section for individual product pages with image gallery.

### Comparison & Specification Components

#### Comparison Table Component
**File:** `src/components/dlink/comparison-table.tsx`
**Purpose:** Side-by-side product comparison with specifications.

**Props:**
```typescript
type ComparisonTableProps = ComponentProps & {
  fields?: {
    title: Field<string>;
    products: ComparisonProduct[];
    specLabels: Field<string>[];
  };
}
```

**Sample Data:**
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
      {
        fields: {
          model: { value: "DSS-200G-10MPP" },
          image: {
            value: {
              src: "/placeholder.svg?height=150&width=150",
              alt: "DSS-200G-10MPP",
            },
          },
          link: { value: "/products/dss-200g-10mpp" },
          specs: {
            "Port Count": { value: "8×GE PoE + 2×GE SFP" },
            Dimension: { value: '11"' },
            "Surge Protection": { value: "6KV Full port & Power Supply" },
            "PoE Power Budget": { value: "242 W" },
            "PoE Standard": { value: "IEEE 802.3af, 802.3at, 802.3bt" },
            "Smart Fan": { value: "1" },
          },
        },
      },
      {
        fields: {
          model: { value: "DSS-200G-28MP" },
          image: {
            value: {
              src: "/placeholder.svg?height=150&width=150",
              alt: "DSS-200G-28MP",
            },
          },
          link: { value: "/products/dss-200g-28mp" },
          specs: {
            "Port Count": { value: "24×GE PoE + 4×GE Combo" },
            Dimension: { value: '19"' },
            "Surge Protection": { value: "6KV Full port & Power Supply" },
            "PoE Power Budget": { value: "370 W" },
            "PoE Standard": { value: "IEEE 802.3af, 802.3at" },
            "Smart Fan": { value: "2" },
          },
        },
      },
      {
        fields: {
          model: { value: "DSS-200G-28MPP" },
          image: {
            value: {
              src: "/placeholder.svg?height=150&width=150",
              alt: "DSS-200G-28MPP",
            },
          },
          link: { value: "/products/dss-200g-28mpp" },
          specs: {
            "Port Count": { value: "24×GE PoE + 4×GE Combo" },
            Dimension: { value: '19"' },
            "Surge Protection": { value: "6KV Full port & Power Supply" },
            "PoE Power Budget": { value: "518 W" },
            "PoE Standard": { value: "IEEE 802.3af, 802.3at, 802.3bt" },
            "Smart Fan": { value: "2" },
          },
        },
      },
    ],
  },
};
```

**Features:**
- Responsive table layout
- Product images in headers
- Hover effects on rows
- Direct product links

#### Specifications Table Component
**File:** `src/components/dlink/specifications-table.tsx`
**Purpose:** Detailed technical specifications in a clean table format.

**Props:**
```typescript
type SpecificationsTableProps = ComponentProps & {
  fields?: {
    title: Field<string>;
    specifications: Specification[];
  };
}
```

**Sample Data:**
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
      {
        fields: {
          label: { value: "PoE Budget" },
          value: { value: "130W" },
        },
      },
      {
        fields: {
          label: { value: "PoE Standard" },
          value: { value: "IEEE 802.3af (15.4W), IEEE 802.3at (30W)" },
        },
      },
      {
        fields: {
          label: { value: "Switching Capacity" },
          value: { value: "20 Gbps" },
        },
      },
      {
        fields: {
          label: { value: "Forwarding Rate" },
          value: { value: "14.88 Mpps" },
        },
      },
      {
        fields: {
          label: { value: "Surge Protection" },
          value: { value: "6kV on all PoE ports and power supply" },
        },
      },
      {
        fields: {
          label: { value: "Operating Temperature" },
          value: { value: "0°C to 50°C (32°F to 122°F)" },
        },
      },
      {
        fields: {
          label: { value: "Dimensions" },
          value: { value: "280 × 180 × 44 mm (11.02 × 7.09 × 1.73 inches)" },
        },
      },
      {
        fields: {
          label: { value: "Weight" },
          value: { value: "1.5 kg (3.31 lbs)" },
        },
      },
    ],
  },
};
```

**Features:**
- Clean two-column layout
- Alternating row colors
- Responsive design
- Easy-to-scan format

#### Specifications Section Component
**File:** `src/components/dlink/specifications-section.tsx`
**Purpose:** Categorized specifications with collapsible sections.

### Content & Feature Components

#### Content Block Component
**File:** `src/components/dlink/content-block.tsx`
**Purpose:** Flexible content section with image/video and text layout options.

#### Content Section with Image Component
**File:** `src/components/dlink/content-section-with-image.tsx`
**Purpose:** Content section with configurable image positioning.

#### Feature List Component
**File:** `src/components/dlink/feature-list.tsx`
**Purpose:** Bulleted list of features with checkmark icons.

#### Feature Section Component
**File:** `src/components/dlink/feature-section.tsx`
**Purpose:** Feature showcase with image and text content.

#### Tech Features Component
**File:** `src/components/dlink/tech-features.tsx`
**Purpose:** Technology features display with icons and descriptions.

#### Use Case Grid Component
**File:** `src/components/dlink/use-case-grid.tsx`
**Purpose:** Grid layout for displaying use cases and applications.

### Navigation & Utility Components

#### Breadcrumb Component
**File:** `src/components/dlink/breadcrumb.tsx`
**Purpose:** Navigation breadcrumb with chevron separators.

#### Jump Links Component
**File:** `src/components/dlink/jump-links.tsx`
**Purpose:** Sticky navigation for page sections with smooth scrolling.

#### Carousel Component
**File:** `src/components/dlink/carousel.tsx`
**Purpose:** Image/video carousel with navigation controls and autoplay.

#### D-Link Carousel Component
**File:** `src/components/dlink/DlinkCarousel.tsx`
**Purpose:** Enhanced carousel component with D-Link-specific styling.

### News & Information Components

#### News Section Component
**File:** `src/components/dlink/news-section.tsx`
**Purpose:** News articles display with images, dates, and excerpts.

#### Product Overview Section Component
**File:** `src/components/dlink/product-overview-section.tsx`
**Purpose:** Product overview with multiple content blocks.

#### Example Component
**File:** `src/components/dlink/example.tsx`
**Purpose:** Template component demonstrating Sitecore integration patterns.

### Component Usage Patterns

#### Standard Export Pattern
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

#### Field Handling
Components use Sitecore Content SDK components directly:

```typescript
import { Text, RichText, Image, Link, type Field, type ImageField, type LinkField, type RichTextField } from '@sitecore-content-sdk/nextjs';

// Usage examples
<Text field={fields.title} tag="h1" className="text-2xl font-bold" />
<RichText field={fields.description} className="prose" />
<Image field={fields.image} className="w-full h-auto" />
<Link field={fields.ctaLink} className="btn btn-primary" />
```

#### Error Handling
All components include `NoDataFallback` for graceful error handling when fields are missing.

#### D-Link Branding
Components use D-Link's official color scheme:
- **Primary**: `#0051ff` (D-Link Blue)
- **Accent**: `#ffd700` (D-Link Gold)
- **Hover States**: `#0047e6` (Primary Hover), `#e6c200` (Accent Hover)

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

### D-Link Project Data Templates
| Template Name | Page Design Assigned | Insert Options | Pages Used | Last Modified |
|---------------|---------------------|----------------|------------|---------------|
| Article Page | Default | SET | 0 | 17 October 2025 at 23:07 |
| Audio Product Page | ProductPage | SET | 3 | 17 October 2025 at 23:07 |

### Page Designs
- **Default**: Standard page layout design
- **ProductPage**: Specialized layout for product pages

### Partial Designs
- **Footer**: Site-wide footer component
- **Header**: Site-wide header component  
- **ProductContent**: Product-specific content sections

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