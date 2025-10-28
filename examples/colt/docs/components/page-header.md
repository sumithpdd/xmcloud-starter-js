# Page Header Component

Page header with title, subtitle, logo section, and media (image or video).

## Overview

The Page Header component provides a two-column layout for page headers:
- Left column: Title, subtitle, and logo section
- Right column: Media (image or video with optional modal)

## Usage

```typescript
import { Default as PageHeader } from '@/components/page-header';

<PageHeader 
  fields={{
    data: {
      datasource: {
        imageRequired: { jsonValue: imageField },
        videoOptional: { jsonValue: videoField },
        logoText: { jsonValue: textField },
        children: {
          results: logos
        }
      },
      externalFields: {
        pageTitle: { jsonValue: pageTitleField },
        pageHeaderTitle: { jsonValue: headerTitleField },
        pageSubtitle: { jsonValue: subtitleField }
      }
    }
  }}
  params={{
    colorScheme: 'primary',
    darkPlayIcon: '1'
  }}
/>
```

## Props Structure

```typescript
interface PageHeaderProps extends ComponentProps {
  params: {
    colorScheme?: 'default' | 'primary' | 'secondary';
    darkPlayIcon?: '0' | '1';
  };
  fields: {
    data: {
      datasource: {
        imageRequired: { jsonValue: ImageField };
        videoOptional?: { jsonValue: LinkField };
        logoText?: { jsonValue: Field<string> };
        children?: { results: PageHeaderLogos[] };
      };
      externalFields: {
        pageTitle: { jsonValue: Field<string> };
        pageHeaderTitle: { jsonValue: Field<string> };
        pageSubtitle: { jsonValue: Field<string> };
      };
    };
  };
}
```

## Sitecore Template

### Component Template: Page Header

**Fields from Datasource:**
- `ImageRequired` (Image) - Main header image
- `VideoOptional` (General Link) - Video URL (opens in modal)
- `LogoText` (Single-Line Text) - Text above logos

**Children (Logos):**
- Multiple logo items with images

**External Fields (from Page Context):**
- `PageTitle` - Page title (SEO)
- `PageHeaderTitle` - Header title (display)
- `PageSubtitle` - Page subtitle

**Parameters:**
- `ColorScheme` (Dropdown)
  - Values: `default`, `primary`, `secondary`
- `DarkPlayIcon` (Checkbox)
  - Values: `0` (light), `1` (dark)

## Features

### 1. External Fields

The component uses external fields to pull data from the page context:

```typescript
// Page-level fields in Sitecore
route.fields = {
  pageTitle: { value: "Home" },
  pageHeaderTitle: { value: "Welcome" },
  pageSubtitle: { value: "Discover..." }
};
```

### 2. Title Fallback

The component tries multiple sources for the title:

```typescript
const title = pageHeaderTitle?.jsonValue ?? pageTitle?.jsonValue;
```

This provides:
1. Primary: `pageHeaderTitle` (display title)
2. Fallback: `pageTitle` (SEO title)

### 3. Video with Modal

When a video is provided, it opens in a modal:

```typescript
{videoOptional?.jsonValue?.value?.href ? (
  <Video
    fields={{ video: videoOptional.jsonValue, image: imageRequired.jsonValue }}
    params={{ darkPlayIcon: darkPlayIcon, useModal: '1' }}
  />
) : (
  <ImageWrapper image={imageRequired?.jsonValue} />
)}
```

### 4. Logo Section

Multiple logos displayed horizontally:

```typescript
{children?.results && (
  <div className="flex items-center gap-8">
    {children.results.map((logo, index) => (
      <ImageWrapper key={index} image={logo.image?.jsonValue} />
    ))}
  </div>
)}
```

## Layout

```
┌────────────────────────────────────────┐
│ Left Column      │ Right Column         │
│                 │                      │
│ Page Title (H1) │ Subtitle (Rich Text) │
│ Large, Bold     │                      │
│                 ├──────────────────────┤
│ Logo Text       │                      │
│ "Trusted By"    │ [Image/Video]        │
│                 │                      │
│ ┌──┬──┬──┬──┐  │                      │
│ │L1│L2│L3│L4│  │                      │
│ └──┴──┴──┴──┘  │                      │
└────────────────────────────────────────┘
```

## Color Schemes

### Default
- White background
- Dark text

### Primary
- Primary brand color background
- Light text

### Secondary
- Secondary color background
- Contrast text

```typescript
const pageHeaderClasses = cva('page-header', {
  variants: {
    colorScheme: {
      default: '',
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
    },
  },
});
```

## Responsive Behavior

**Mobile (< @md):**
- Single column
- Stacked content

**Desktop (@md+):**
- Two-column grid
- Side-by-side layout

## Example Sitecore Item

```
Page Header Rendering
└── Datasource: "Home Header"
    ├── Image Required: /media/home-header.jpg
    ├── Video Optional: /video/welcome.mp4
    ├── Logo Text: "Trusted By"
    └── Children:
        └── Logo Item 1:
            └── Image: /media/logo-partner1.jpg

Page Item:
├── Page Title: "Home"
├── Page Header Title: "Welcome to Colt"
└── Page Subtitle: "Experience..."
```

## Code Example

```typescript
import { useEffect, useState } from 'react';
import { Text, RichText, useSitecore } from '@sitecore-content-sdk/nextjs';
import { VideoBase as Video } from '@/components/video/Video';
import { ImageWrapper } from '@/components/image/ImageWrapper.dev';

export const Default = ({ fields, params }) => {
  const { imageRequired, videoOptional, logoText, children } = 
    fields?.data?.datasource || {};
  const { pageHeaderTitle, pageTitle, pageSubtitle } = 
    fields?.data?.externalFields || {};
  
  const { colorScheme = 'default', darkPlayIcon = '0' } = params;
  const { page } = useSitecore();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  const title = pageHeaderTitle?.jsonValue ?? pageTitle?.jsonValue;
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);
  
  return (
    <section className={pageHeaderClasses({ colorScheme })}>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="flex flex-col justify-between">
          <Text tag="h1" field={title} />
          {children?.results && (
            <div>
              <Text field={logoText?.jsonValue} />
              <div className="flex gap-8">
                {children.results.map((logo, index) => (
                  <ImageWrapper key={index} image={logo.image?.jsonValue} />
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Right Column */}
        <div className="flex flex-col gap-10">
          <RichText field={subtitle} />
          {videoOptional?.jsonValue?.value?.href ? (
            <Video
              fields={{ video: videoOptional.jsonValue, image: imageRequired.jsonValue }}
              params={{ darkPlayIcon, useModal: '1' }}
            />
          ) : (
            <ImageWrapper image={imageRequired?.jsonValue} />
          )}
        </div>
      </div>
    </section>
  );
};
```

## Animation

Uses `AnimatedSection` for entrance animations:

```typescript
<AnimatedSection reducedMotion={prefersReducedMotion}>
  <Text tag="h1" field={title} />
</AnimatedSection>
```

## Dependencies

- `@sitecore-content-sdk/nextjs` - Sitecore SDK
- `class-variance-authority` - Variant styling
- `framer-motion` - Animations
- `lucide-react` - Icons

## Best Practices

1. **Always provide image** - Required field, used as fallback
2. **Use appropriate title** - `pageHeaderTitle` for display, `pageTitle` for SEO
3. **Keep logo text short** - Works best with 1-3 words
4. **Optimize media** - Header images should be high quality
5. **Provide both titles** - Better SEO and display flexibility

## Related Components

- [Hero](./hero.md) - Similar full-width header
- [Video](./video.md) - Video player component
- [Image](./image.md) - Image component

