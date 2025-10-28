# Hero Component

Full-width hero section with title, description, call-to-action, and multiple media sections.

## Overview

The Hero component is a prominent, full-width section typically used at the top of pages. It includes:
- Large headline text
- Optional description
- Call-to-action button
- 4 media sections (images or videos)
- Configurable color scheme

## Usage

```typescript
import { Default as Hero } from '@/components/hero';

<Hero 
  fields={{
    titleRequired,
    descriptionOptional,
    linkOptional,
    heroImageOptional1,
    heroVideoOptional1,
    // ... more media fields
  }}
  params={{
    colorScheme: 'primary'
  }}
/>
```

## Props Structure

```typescript
interface HeroProps extends ComponentProps {
  params: {
    colorScheme?: 'primary' | 'secondary' | 'tertiary' | 'dark' | 'light';
  };
  fields: {
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
  };
}
```

## Sitecore Template

### Component Template: Hero

**Fields:**
- `TitleRequired` (Single-Line Text) - Main heading text
- `DescriptionOptional` (Multi-Line Text) - Supporting text
- `LinkOptional` (General Link) - Call-to-action button
- `HeroVideoOptional1` (General Link) - First video URL
- `HeroImageOptional1` (Image) - First image (fallback)
- `HeroVideoOptional2` (General Link) - Second video URL
- `HeroImageOptional2` (Image) - Second image
- `HeroVideoOptional3` (General Link) - Third video URL
- `HeroImageOptional3` (Image) - Third image
- `HeroVideoOptional4` (General Link) - Fourth video URL
- `HeroImageOptional4` (Image) - Fourth image

**Parameters:**
- `ColorScheme` (Dropdown) - Background color scheme
  - Values: `primary`, `secondary`, `tertiary`, `dark`, `light`
  - Default: `light`

## Features

### 1. Color Schemes

Different color schemes change the background and text colors:

```typescript
// Primary scheme (blue background, white text)
<Hero params={{ colorScheme: 'primary' }} />

// Secondary scheme (gray background, dark text)
<Hero params={{ colorScheme: 'secondary' }} />

// Light scheme (white background, dark text)
<Hero params={{ colorScheme: 'light' }} />
```

### 2. Media Sections

The hero displays 4 media sections side-by-side:

```typescript
const heroVariants = {
  media1: { video: heroVideoOptional1, image: heroImageOptional1 },
  media2: { video: heroVideoOptional2, image: heroImageOptional2 },
  media3: { video: heroVideoOptional3, image: heroImageOptional3 },
  media4: { video: heroVideoOptional4, image: heroImageOptional4 },
};
```

Each section can display either:
- A video (with image fallback)
- An image

### 3. Play/Pause Control

The component includes a play/pause button for controlling videos:

```typescript
<Button
  onClick={() => setIsPlaying(!isPlaying)}
  aria-label={isPlaying ? 'Pause Ambient Video' : 'Play Ambient'}
>
  {isPlaying ? <Pause /> : <Play />}
</Button>
```

### 4. Accessibility

- Respects `prefers-reduced-motion` media query
- Pause button is not shown when reduced motion is preferred
- Proper ARIA labels on controls

## Layout

```
┌─────────────────────────────────────────┐
│  Container                               │
│  ┌─────────────────────────────────────┐ │
│  │ Title (H1)                          │ │
│  └─────────────────────────────────────┘ │
│  ┌─────────────────────────────────────┐ │
│  │ Description                         │ │
│  │ + CTA Button                        │ │
│  └─────────────────────────────────────┘ │
├─────────────────────────────────────────┤
│  Media Section                          │
│  ┌──────┬──────┬──────┬──────┐        │
│  │ [1]  │ [2]  │ [3]  │ [4]  │        │
│  └──────┴──────┴──────┴──────┘        │
│          [Play/Pause Button]          │
└─────────────────────────────────────────┘
```

## Responsive Behavior

- **Mobile (< @lg):**
  - Single column layout
  - Stacked title and description

- **Desktop (@lg+):**
  - Two-column layout (title | description + CTA)
  - Four-column media grid

## Example Sitecore Item

```
Hero Rendering
├── Title Required: "Welcome to Colt"
├── Description Optional: "Experience modern web design..."
├── Link Optional: /about
├── Hero Video Optional 1: https://youtube.com/...
│   └── Hero Image Optional 1: /media/hero1.jpg
├── Hero Video Optional 2: (empty)
│   └── Hero Image Optional 2: /media/hero2.jpg
├── Hero Video Optional 3: (empty)
│   └── Hero Image Optional 3: /media/hero3.jpg
└── Hero Video Optional 4: (empty)
    └── Hero Image Optional 4: /media/hero4.jpg
```

## Code Example

```typescript
import { useState, useEffect } from 'react';
import { Text, useSitecore } from '@sitecore-content-sdk/nextjs';
import { Default as AnimatedSection } from '@/components/animated-section/AnimatedSection.dev';
import { EditableButton } from '@/components/button-component';
import { Default as MediaSection } from '@/components/media-section/MediaSection.dev';

export const Hero = ({ fields, params }) => {
  const { page } = useSitecore();
  const isPageEditing = page.mode.isEditing;
  const [isPlaying, setIsPlaying] = useState(true);
  
  const {
    titleRequired,
    descriptionOptional,
    linkOptional,
    heroVideoOptional1,
    heroImageOptional1,
    // ... more fields
  } = fields || {};

  return (
    <section className="hero py-24">
      <div className="grid gap-20">
        {/* Content */}
        <div className="px-4 xl:px-8">
          <AnimatedSection>
            <Text tag="h1" field={titleRequired} />
            <Text tag="p" field={descriptionOptional} />
            {linkOptional && (
              <EditableButton buttonLink={linkOptional} />
            )}
          </AnimatedSection>
        </div>
        
        {/* Media */}
        <div className="flex items-center gap-4">
          <MediaSection 
            video={heroVideoOptional1?.value?.href}
            image={heroImageOptional1}
            pause={!isPlaying}
          />
          {/* ... more media sections */}
        </div>
      </div>
    </section>
  );
};
```

## Styling

The component uses Tailwind CSS with the `heroVariants` utility:

```typescript
export const heroVariants = cva('hero @container py-24 relative w-full', {
  variants: {
    colorScheme: {
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-primary',
      tertiary: 'bg-tertiary text-primary',
      dark: 'bg-dark text-primary',
      light: 'bg-light text-primary',
    },
  },
  defaultVariants: {
    colorScheme: 'light',
  },
});
```

## Dependencies

- `@sitecore-content-sdk/nextjs` - Sitecore SDK
- `class-variance-authority` - Variant styling
- `lucide-react` - Icons (Play, Pause)
- `framer-motion` - Animations

## Best Practices

1. **Always provide fallback images** when using videos
2. **Use appropriate color schemes** for content contrast
3. **Keep title concise** - works best with 3-5 words
4. **Optimize media sizes** - videos should be under 5MB
5. **Test play/pause functionality** in different browsers

## Troubleshooting

### Media not showing
- Check that either video or image is provided
- Verify media URLs are accessible
- Check Sitecore media library

### Play button not working
- Ensure `prefers-reduced-motion: reduce` is not set
- Check video format compatibility

### CTA button not appearing
- Verify link field has data in Sitecore
- Check Edit mode vs Normal mode

## Related Components

- [Page Header](./page-header.md) - Similar header component
- [Media Section](./media-section.md) - Reusable media player
- [Animated Section](./animated-section.md) - Animation wrapper

