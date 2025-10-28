# Accordion Block Component

Expandable accordion sections with heading and rich text description.

## Overview

The Accordion Block component displays collapsible sections that can be expanded to reveal additional content. Each accordion has:
- A main heading and description for the section
- Multiple accordion items (heading + description)
- Smooth expand/collapse animations
- Keyboard navigation support

## Usage

```typescript
import { Default as AccordionBlock } from '@/components/accordion-block';

<AccordionBlock 
  fields={{
    data: {
      datasource: {
        heading: { jsonValue: headingField },
        description: { jsonValue: descriptionField },
        link: { jsonValue: linkField },
        children: {
          results: accordionItems
        }
      }
    }
  }}
/>
```

## Props Structure

```typescript
interface AccordionProps extends ComponentProps {
  fields: {
    data: {
      datasource?: {
        heading: { jsonValue: Field<string> };
        description?: { jsonValue: Field<string> };
        link: { jsonValue: LinkField };
        children: {
          results: AccordionItemProps[];
        };
      };
    };
  };
}

interface AccordionItemProps {
  heading: { jsonValue: Field<string> };
  description: { jsonValue: RichTextField };
}
```

## Sitecore Template

### Component Template: Accordion Block

**Fields:**
- `Heading` (Single-Line Text) - Section heading
- `Description` (Multi-Line Text) - Section description
- `Link` (General Link) - Optional call-to-action

**Children:**
- `AccordionItem` template with:
  - `Heading` (Single-Line Text) - Accordion item title
  - `Description` (Rich Text) - Expanded content

## Features

### 1. Collapsible Items

Each accordion item can be expanded/collapsed:

```typescript
const [openItems, setOpenItems] = useState<string[]>([]);

const toggleItem = (itemId: string) => {
  setOpenItems(prev => 
    prev.includes(itemId)
      ? prev.filter(id => id !== itemId)
      : [...prev, itemId]
  );
};
```

### 2. Keyboard Navigation

Full keyboard support for accessibility:

- **Enter/Space** - Toggle open/closed
- **Arrow Up** - Focus previous item
- **Arrow Down** - Focus next item
- **Home** - Focus first item
- **End** - Focus last item

### 3. Animation

Smooth expand/collapse animations:

```typescript
<motion.div
  initial={false}
  animate={{ height: isOpen ? 'auto' : 0 }}
  transition={{ duration: 0.3 }}
>
  <RichText field={description} />
</motion.div>
```

### 4. Multiple Open Items

Users can open multiple items simultaneously:

```typescript
// Allow multiple open
<Accordion type="multiple" />

// Single item open at a time
<Accordion type="single" />
```

## Layout

```
┌─────────────────────────────────────┐
│ Section Heading                      │
│ Description text goes here...        │
│                                      │
│ ═════════════════════════════════╗  │
│ Accordion Item 1              [▼]│  │
│ ═════════════════════════════════╝  │
│   Rich text content when expanded   │
│                                      │
│ ═════════════════════════════════╗  │
│ Accordion Item 2              [▶]│  │
│ ═════════════════════════════════╝  │
│                                      │
│ ┌────────────────────────────────┐  │
│ │ Learn More Link →              │  │
│ └────────────────────────────────┘  │
└─────────────────────────────────────┘
```

## Example Sitecore Item

```
Accordion Block Rendering
└── Datasource: "FAQ"
    ├── Heading: "Frequently Asked Questions"
    ├── Description: "Find answers to common questions"
    ├── Link: /contact
    └── Children:
        ├── Accordion Item 1:
        │   ├── Heading: "How do I get started?"
        │   └── Description: "Rich text answer..."
        ├── Accordion Item 2:
        │   ├── Heading: "What's included?"
        │   └── Description: "Rich text answer..."
        └── Accordion Item 3:
            └── ...
```

## Code Example

```typescript
import { useState } from 'react';
import { Text, RichText } from '@sitecore-content-sdk/nextjs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export const Default = ({ fields }) => {
  const { heading, description, link, children } = 
    fields?.data?.datasource || {};
  
  return (
    <section className="accordion-block">
      {/* Header */}
      <div>
        <Text tag="h2" field={heading?.jsonValue} />
        <Text tag="p" field={description?.jsonValue} />
      </div>
      
      {/* Accordion Items */}
      <Accordion type="multiple">
        {children?.results?.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>
              <Text tag="h3" field={item.heading?.jsonValue} />
            </AccordionTrigger>
            <AccordionContent>
              <RichText field={item.description?.jsonValue} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      {/* Footer Link */}
      {link && (
        <div>
          <Link href={link.jsonValue.value.href}>
            Learn More
          </Link>
        </div>
      )}
    </section>
  );
};
```

## Using Radix UI

The component uses Radix UI's Accordion primitives:

```typescript
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion';

// Styled with Tailwind
<AccordionRoot type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Header</AccordionTrigger>
    <AccordionContent>Content</AccordionContent>
  </AccordionItem>
</AccordionRoot>
```

## Accessibility

### ARIA Attributes

- `aria-controls` - Links trigger to content
- `aria-expanded` - Indicates open/closed state
- `aria-label` - Descriptive labels

### Keyboard Support

- **Tab** - Navigate between items
- **Space/Enter** - Toggle current item
- **Arrow keys** - Navigate items

## Styling

Uses Tailwind CSS with accordion variants:

```typescript
const accordionVariants = cva('accordion', {
  variants: {
    variant: {
      default: 'border-gray-200',
      outlined: 'border-2 border-gray-300',
    },
  },
});
```

## Best Practices

1. **Keep headings concise** - 3-7 words work best
2. **Use clear descriptions** - Rich text for formatting
3. **Limit items** - 5-10 items ideal, max 15
4. **Provide fallback link** - Helpful for additional info
5. **Test keyboard nav** - Critical for accessibility

## Performance

- **Memoized components** - Prevents unnecessary re-renders
- **Lazy animations** - Only animates on open
- **Optimized state** - Minimal re-renders on toggle

## Troubleshooting

### Items not expanding
- Check `children.results` has data
- Verify Accordion component is initialized
- Check for JavaScript errors

### Animation not working
- Verify Framer Motion is installed
- Check CSS transitions enabled
- Test reduced-motion preference

### Keyboard navigation broken
- Ensure component has focus
- Check ARIA attributes set correctly
- Verify event handlers attached

## Related Components

- [Text Banner](./text-banner.md) - Similar text content
- [Vertical Image Accordion](./vertical-image-accordion.md) - Image-based accordion

