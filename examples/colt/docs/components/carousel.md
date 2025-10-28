# Carousel Component (Hero)

Full-width carousel hero component with autoplay, navigation controls, and custom content per slide. Based on the Colt DCS homepage design.

## Overview

The Carousel component is an autoplaying hero section typically used at the top of pages. It displays multiple slides with:
- Background images with gradient overlays
- Title and description text
- Call-to-action buttons
- Navigation arrows
- Dot indicators
- Optional partner logos

## Usage

```typescript
import Carousel from '@/components/colt/carousel';

<Carousel 
  fields={{
    data: {
      datasource: {
        children: {
          results: [
            {
              id: 'slide-1',
              fields: {
                title: { value: 'Colt DCS and ESR announce Joint Venture' },
                description: { value: 'A joint venture to develop the first phase of a 130MW hyperscale data centre site in Minoh City, Osaka, Japan.' },
                image: imageField,
                ctaLink: { value: { href: '/announcements', text: 'Learn more' } },
                logo1: logoImage1,
                logo2: logoImage2
              }
            },
            // ... more slides
          ]
        }
      }
    }
  }}
/>
```

## Props Structure

```typescript
interface CarouselProps extends ComponentProps {
  fields: {
    data?: {
      datasource?: {
        children?: {
          results: CarouselSlide[];
        };
      };
    };
  };
}

type CarouselSlide = {
  id?: string;
  fields?: {
    title?: Field<string>;
    description?: Field<string>;
    image?: ImageField;
    ctaLink?: LinkField;
    logo1?: ImageField;
    logo2?: ImageField;
  };
};
```

## Sitecore Template

### Component Template: Carousel

**Rendering Parameters:**
- None currently

**Datasource Template: Carousel Slide**

Create an `IEnumerable` data source template with child items using the slide template:

**Slide Template Fields:**
- `Title` (Single-Line Text) - Main heading for the slide
- `Description` (Multi-Line Text or Rich Text) - Supporting description text
- `Image` (Image) - Background image for the slide (1920x1080px recommended)
- `CTALink` (General Link) - Call-to-action button link
  - Display name: Button text (e.g., "Learn more")
  - Target URL: Destination page
- `Logo1` (Image) - Optional partner logo image (first)
- `Logo2` (Image) - Optional partner logo image (second)

## Features

### 1. Autoplay

The carousel automatically advances to the next slide every 5 seconds:

```typescript
const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
  Autoplay({ delay: 5000, stopOnInteraction: false }),
]);
```

### 2. Navigation Controls

Users can navigate slides using:
- **Arrow buttons** - Previous and next buttons at the top-left
- **Dot indicators** - Clickable dots at the bottom to jump to specific slides

```typescript
// Arrow navigation
<button onClick={() => emblaApi?.scrollPrev()} aria-label="Previous slide">
  {/* Left arrow icon */}
</button>

<button onClick={() => emblaApi?.scrollNext()} aria-label="Next slide">
  {/* Right arrow icon */}
</button>

// Dot navigation
<button
  onClick={() => scrollTo(index)}
  className={index === selectedIndex ? 'bg-white w-8' : 'bg-white/50'}
/>
```

### 3. Background Images with Gradient

Each slide includes a full-width background image with a gradient overlay for text readability:

```typescript
<div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
```

The gradient goes from 70% black opacity on the left to 30% on the right, creating depth and ensuring text remains readable.

### 4. Partner Logos

Slides can display up to 2 partner logos in white cards with backdrop blur:

```typescript
{fields.logo1 && (
  <div className="bg-white/90 backdrop-blur-sm p-4 rounded">
    <Image field={fields.logo1} className="h-12" />
  </div>
)}
```

### 5. Responsive Design

- Fixed height: `600px` on all screen sizes
- Content centered with max-width: `7xl` (1280px)
- Padding: `px-4` on mobile, responsive scaling on larger screens

## Layout

```
┌───────────────────────────────────────────────┐
│  Section: bg-gray-50                           │
│  ┌───────────────────────────────────────────┐│
│  │  Embla Container                           ││
│  │  ┌────────────────────────────────────────┐││
│  │  │ Slide 1 (600px height)                │││
│  │  │  ┌────────────────────────────────────┐│││
│  │  │  │ Background Image + Gradient       ││││
│  │  │  └────────────────────────────────────┘│││
│  │  │  ┌────────────────────────────────────┐│││
│  │  │  │ Content (z-10 relative)           ││││
│  │  │  │  ┌──────────────────────────────┐││││
│  │  │  │  │ [← Prev] [Next →]            │││││
│  │  │  │  │ Title (text-5xl font-bold)   │││││
│  │  │  │  │ Description (text-xl)        │││││
│  │  │  │  │ [CTA Button]                 │││││
│  │  │  │  │ [Logo1] [Logo2]              │││││
│  │  │  │  └──────────────────────────────┘││││
│  │  │  └────────────────────────────────────┘│││
│  │  └─────────────────────────────────────────┘││
│  │  │ Slide 2...                             ││
│  │  └─────────────────────────────────────────┘│
│  └───────────────────────────────────────────────┘│
│  ┌───────────────────────────────────────────────┐│
│  │ Dots Navigation (absolute bottom-8)          ││
│  │ ● ● ● (white/50 or white w-8)                ││
│  └───────────────────────────────────────────────┘│
└───────────────────────────────────────────────────┘
```

## Examples

### Example 1: Joint Venture Announcement

```typescript
{
  id: 'joint-venture',
  fields: {
    title: { value: 'Colt DCS and ESR announce Joint Venture' },
    description: { value: 'A joint venture to develop the first phase of a 130MW hyperscale data centre site in Minoh City, Osaka, Japan.' },
    image: {
      value: {
        src: 'https://www.coltdatacentres.net/-/media/Images/hero-images/joint-venture.jpg',
        alt: 'Data centre construction site'
      }
    },
    ctaLink: {
      value: {
        href: '/announcements/esr-joint-venture',
        text: 'Learn more'
      }
    },
    logo1: {
      value: {
        src: 'https://www.coltdatacentres.net/-/media/Images/logos/colt-logo.png',
        alt: 'Colt logo'
      }
    },
    logo2: {
      value: {
        src: 'https://www.esr.com/images/esr-logo.png',
        alt: 'ESR logo'
      }
    }
  }
}
```

### Example 2: Sustainability Report

```typescript
{
  id: 'sustainability',
  fields: {
    title: { value: '2024 Sustainability Highlights Report' },
    description: { value: 'Our annual ESG performance report is now available.' },
    image: {
      value: {
        src: 'https://www.coltdatacentres.net/-/media/Images/hero-images/sustainability.jpg',
        alt: 'Sustainability initiatives'
      }
    },
    ctaLink: {
      value: {
        href: '/sustainability/2024-report',
        text: 'Download Report'
      }
    }
    // No logos for this slide
  }
}
```

### Example 3: Paris Ground-breaking

```typescript
{
  id: 'paris-groundbreaking',
  fields: {
    title: { value: 'Paris 2 Ground-breaking' },
    description: { value: 'We commence development on the first of five new data centres in Paris.' },
    image: {
      value: {
        src: 'https://www.coltdatacentres.net/-/media/Images/hero-images/paris-groundbreaking.jpg',
        alt: 'Paris construction'
      }
    },
    ctaLink: {
      value: {
        href: '/locations/paris/paris-2',
        text: 'Learn more'
      }
    }
  }
}
```

## Styling

The component uses Tailwind CSS with the following key styles:

```typescript
// Container
section className="relative bg-gray-50"

// Embla wrapper
div className="overflow-hidden"

// Slide wrapper
div className="flex-[0_0_100%] min-w-0"

// Slide content container
div className="relative h-[600px] flex items-center"

// Background gradient
div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"

// Content wrapper
div className="max-w-7xl mx-auto px-4 w-full"
div className="max-w-2xl text-white"

// Title
h2 className="text-5xl font-bold mb-6"

// Description
div className="text-xl mb-8"

// CTA Button
a className="inline-block bg-[#00BFA5] hover:bg-[#00A890] text-white px-8 py-3 rounded transition-colors"

// Navigation buttons
button className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors"

// Dot indicators
button className="w-3 h-3 rounded-full transition-all"
// Active: bg-white w-8
// Inactive: bg-white/50
```

## Brand Colors

The CTA button uses Colt's brand color:

- **Primary:** `#00BFA5` (Colt Teal)
- **Hover:** `#00A890` (Darkened Teal)
- **Background:** Use in button and link styling

## Dependencies

- `embla-carousel-react` - Carousel functionality
- `embla-carousel-autoplay` - Autoplay plugin
- `@sitecore-content-sdk/nextjs` - Sitecore SDK integration
- `react` - React hooks (useState, useEffect, useCallback)

## Accessibility

- All buttons include proper `aria-label` attributes
- Keyboard navigation supported through Embla
- Color contrast meets WCAG standards (white text on dark gradient)
- Focus states on interactive elements

## Performance

- Images should be optimized (WebP format recommended)
- Typical image dimensions: 1920x1080px (16:9 aspect ratio)
- Logo images should be transparent PNGs or SVGs
- Recommended file sizes:
  - Background images: < 300KB
  - Logos: < 50KB

## Best Practices

1. **Limit slide count** - 3-5 slides works best for user experience
2. **Keep titles short** - 5-10 words maximum
3. **Concise descriptions** - 1-2 sentences that communicate value
4. **High-quality images** - Use professional photos with good lighting
5. **Optimize images** - Compress before uploading to Sitecore
6. **Relevant CTAs** - Link to related pages that add value
7. **Test autoplay** - Verify timing works well with content
8. **Mobile-friendly** - Ensure text is readable on small screens

## Troubleshooting

### Slider not auto-advancing
- Check that the `Autoplay` plugin is imported correctly
- Verify `loop: true` is set in carousel config
- Ensure there are multiple slides

### Images not displaying
- Verify image field has data in Sitecore
- Check image URLs are accessible
- Ensure `ImageField` type is correct

### Buttons not working
- Check Embla API initialization
- Verify click handlers are properly bound
- Test in both edit and preview modes

### Layout issues
- Ensure parent container allows full width
- Check that Tailwind utilities are available
- Verify `bg-[#00BFA5]` custom color syntax

### Too fast/slow autoplay
- Adjust `delay` in Autoplay plugin (default 5000ms)
- Current delay: 5 seconds between slides

## Related Components

- [Solutions Carousel](../solutions-carousel.md) - Horizontal scrolling carousel for content cards
- [Hero](./hero.md) - Static hero section component
- [Multi-Promo](./multi-promo.md) - Promotional content sections

## Implementation Steps

1. **Create Sitecore Templates:**
   - Carousel Slide template with fields listed above
   - Carousel rendering with datasource configuration

2. **Add Component to Pages:**
   - Insert rendering on page
   - Create datasource item
   - Add slide child items

3. **Configure Content:**
   - Upload background images to media library
   - Create/upload logo images
   - Enter title and description text
   - Configure CTA links

4. **Preview and Test:**
   - Verify all slides display correctly
   - Test navigation controls
   - Confirm autoplay works
   - Check responsive behavior

## Example Sitecore Item Structure

```
Carousel Rendering (on homepage)
└── Datasource: "Homepage Carousel"
    ├── Slide 1: Joint Venture
    │   ├── Title: "Colt DCS and ESR announce Joint Venture"
    │   ├── Description: "A joint venture to develop..."
    │   ├── Image: /media/hero-images/joint-venture.jpg
    │   ├── CTALink: General Link to /announcements/esr-joint-venture
    │   ├── Logo1: /media/logos/colt-logo.png
    │   └── Logo2: /media/logos/esr-logo.png
    │
    ├── Slide 2: Sustainability Report
    │   ├── Title: "2024 Sustainability Highlights Report"
    │   ├── Description: "Our annual ESG performance..."
    │   ├── Image: /media/hero-images/sustainability.jpg
    │   ├── CTALink: General Link to /sustainability/2024-report
    │   ├── Logo1: (empty)
    │   └── Logo2: (empty)
    │
    └── Slide 3: Paris Groundbreaking
        ├── Title: "Paris 2 Ground-breaking"
        ├── Description: "We commence development..."
        ├── Image: /media/hero-images/paris-groundbreaking.jpg
        ├── CTALink: General Link to /locations/paris/paris-2
        ├── Logo1: (empty)
        └── Logo2: (empty)
```

---

**Last Updated:** Based on [Colt DCS homepage](https://www.coltdatacentres.net/en-GB) design patterns
