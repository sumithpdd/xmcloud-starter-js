# Multi Promo Component

A carousel component displaying promotional items with title, description, and navigation controls.

## Overview

The Multi Promo component displays a collection of promotional cards in a carousel format. It includes:
- Optional title and description
- Carousel of promo items (images, headings, links)
- Keyboard and mouse wheel navigation
- Configurable number of columns
- Responsive design

## Usage

```typescript
import { Default as MultiPromo } from '@/components/multi-promo';

<MultiPromo 
  fields={{
    data: {
      datasource: {
        title: { jsonValue: titleField },
        description: { jsonValue: descriptionField },
        children: {
          results: promoItems
        }
      }
    }
  }}
  params={{
    numColumns: '3' // or '4'
  }}
/>
```

## Props Structure

```typescript
interface MultiPromoProps extends ComponentProps {
  params: {
    numColumns?: string; // '3' or '4'
  };
  fields: {
    data: {
      datasource: {
        title: { jsonValue: Field<string> };
        description?: { jsonValue: Field<string> };
        children: {
          results: MultiPromoItemProps[];
        };
      };
    };
  };
}

interface MultiPromoItemProps {
  heading: { jsonValue: Field<string> };
  image: { jsonValue: ImageField };
  link?: { jsonValue?: LinkField };
}
```

## Sitecore Template

### Component Template: Multi Promo

**Fields:**
- `Title` (Single-Line Text) - Section heading
- `Description` (Rich Text) - Supporting text

**Children:**
- `MultiPromoItem` template with:
  - `Heading` (Single-Line Text) - Item title
  - `Image` (Image) - Promo image
  - `Link` (General Link) - Item link

**Parameters:**
- `NumColumns` (Dropdown)
  - Values: `3` (default), `4`
  - Controls visible items per breakpoint

## Features

### 1. Carousel Navigation

Multiple navigation methods supported:

- **Mouse Wheel** - Scroll horizontally
- **Keyboard** - Arrow keys (Left/Right)
- **Touch** - Swipe on mobile devices
- **Smooth Scrolling** - Configurable scroll behavior

```typescript
// Mouse wheel handling
const debouncedHandleWheel = debounce({ delay: 100 }, (event: WheelEvent) => {
  if (event.deltaX > 0) {
    api.scrollNext();
  } else if (event.deltaX < 0) {
    api.scrollPrev();
  }
});

// Keyboard handling
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowLeft') api.scrollPrev();
  if (event.key === 'ArrowRight') api.scrollNext();
};
```

### 2. Column Configuration

The `numColumns` parameter controls how many items are visible:

```typescript
// 3 columns (default)
<MultiPromo params={{ numColumns: '3' }} />

// 4 columns
<MultiPromo params={{ numColumns: '4' }} />
```

**Responsive behavior:**
- Mobile: 1 item
- Tablet: 2 items
- Desktop: 3 or 4 items (based on param)

### 3. Accessibility

- ARIA live regions for screen readers
- Keyboard navigation support
- Focus management
- Skip snap option for smoother scrolling

```typescript
<div className="sr-only" aria-live="polite" aria-atomic="true">
  {announcement} {/* "Slide 1 of 5" */}
</div>
```

### 4. Infinite Loop

The carousel supports infinite looping:

```typescript
opts={{
  loop: true,
  skipSnaps: true,
  align: 'center',
}}
```

## Layout

```
┌─────────────────────────────────────────┐
│  Title                                   │
│  "Featured Products"                     │
│                                          │
│  Description                            │
│  "Check out our latest products"        │
├─────────────────────────────────────────┤
│  ┌──────┬──────┬──────┬──────┐        │
│  │[1]   │[2]   │[3]   │  ... │  ← Scroll │
│  └──────┴──────┴──────┴──────┘        │
└─────────────────────────────────────────┘
```

## Responsive Breakpoints

- **xs:** 1 item (full width)
- **sm:** 2 items (basis 3/4)
- **md:** 3 items (basis 31%)
- **lg:** 3 or 4 items (based on numColumns param)
- **xl:** 3 or 4 items

## Example Sitecore Item

```
Multi Promo Rendering
└── Datasource: "Featured Promos"
    ├── Title: "Featured Products"
    ├── Description: "Check out our latest offerings"
    └── Children:
        ├── Item 1:
        │   ├── Heading: "Product A"
        │   ├── Image: /media/product-a.jpg
        │   └── Link: /products/product-a
        ├── Item 2:
        │   ├── Heading: "Product B"
        │   └── ...
        └── Item 3:
            └── ...
```

## Code Example

```typescript
import { useState, useEffect, useRef } from 'react';
import { Text, RichText } from '@sitecore-content-sdk/nextjs';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { MultiPromoItem } from './MultiPromoItem.dev';

export const Default = ({ fields, params }) => {
  const { title, description, children } = fields?.data?.datasource ?? {};
  const { numColumns } = params ?? {};
  const [api, setApi] = useState<CarouselApi>();
  
  return (
    <div className="mx-auto max-w-screen-xl">
      {/* Header */}
      {title && (
        <Text tag="h2" field={title?.jsonValue} />
      )}
      {description && (
        <RichText field={description?.jsonValue} />
      )}
      
      {/* Carousel */}
      {children && (
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            {children.results.map((item, index) => (
              <CarouselItem
                key={index}
                className={cn({
                  'lg:basis-[31%]': numColumns === '3',
                  'xl:basis-[23%]': numColumns === '4',
                })}
              >
                <MultiPromoItem {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </div>
  );
};
```

## Carousel Item Component

The carousel renders `MultiPromoItem` components:

```typescript
interface MultiPromoItemProps {
  heading: { jsonValue: Field<string> };
  image: { jsonValue: ImageField };
  link?: { jsonValue?: LinkField };
}

const MultiPromoItem = ({ heading, image, link }) => (
  <div className="promo-card">
    <Image field={image.jsonValue} />
    <Text tag="h3" field={heading.jsonValue} />
    {link?.jsonValue && (
      <Link href={link.jsonValue.value.href}>
        Learn More
      </Link>
    )}
  </div>
);
```

## Styling

Uses Tailwind CSS with container queries:

```css
@container (min-width: 640px) {
  .promo-item {
    /* Tablet styles */
  }
}

@container (min-width: 1024px) {
  .promo-item {
    /* Desktop styles */
  }
}
```

## Animation

Smooth transitions between slides:

```typescript
<CarouselItem className="transition-opacity duration-300">
  {/* Content */}
</CarouselItem>
```

## Dependencies

- `embla-carousel-react` - Carousel functionality
- `radash` - Debounce utility
- `@sitecore-content-sdk/nextjs` - Sitecore SDK
- `tailwindcss` - Styling

## Best Practices

1. **Provide 4-6 items minimum** for good carousel experience
2. **Use high-quality images** (minimum 800x600px)
3. **Keep headings concise** (2-4 words)
4. **Always include links** for better UX
5. **Test keyboard navigation** for accessibility

## Troubleshooting

### Items not displaying
- Check `children.results` has data
- Verify images are published in Sitecore
- Check browser console for errors

### Keyboard navigation not working
- Ensure component has focus
- Check for event listener conflicts
- Verify Embla Carousel API is initialized

### Incorrect column count
- Check `numColumns` parameter value
- Verify responsive breakpoints
- Check CSS classes applied

## Performance

- **Virtual rendering** - Only renders visible items
- **Lazy loading** - Images load as needed
- **Debounced events** - Prevents excessive re-renders
- **Memoized components** - Reduces unnecessary updates

## Related Components

- [Promo Block](./promo-block.md) - Single promo item
- [Promo Animated](./promo-animated.md) - Animated promo
- [Card](./card.md) - Reusable card component

