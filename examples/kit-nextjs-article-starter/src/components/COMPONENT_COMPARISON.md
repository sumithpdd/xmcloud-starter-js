# Component Comparison: AccordionBlock vs MultiPromo

This document compares how AccordionBlock and MultiPromo components work, their templates, and how they get items from Sitecore XM Cloud.

## Quick Comparison Table

| Feature | AccordionBlock | MultiPromo |
|---------|---------------|------------|
| **UI Pattern** | Collapsible accordion (expand/collapse) | Horizontal carousel (scrollable cards) |
| **UI Library** | Radix UI Accordion | Custom Carousel component |
| **Main Use Case** | Q&A sections, expandable content | Promotional cards, featured items |
| **Items Display** | Vertical stack, expandable | Horizontal scroll, visible cards |
| **Editing Mode** | All items forced open | Normal carousel behavior |

## How They Get Items (Same Pattern!)

Both components use **identical data fetching patterns** from Sitecore:

### Data Structure
```typescript
fields.data.datasource.children.results[]
```

### Code Comparison

**AccordionBlock** (`AccordionBlockDefault.dev.tsx`):
```typescript
const { heading, description, link, children } = fields?.data?.datasource || {};
const accordionItems = children?.results ?? [];
```

**MultiPromo** (`MultiPromo.tsx`):
```typescript
const { children } = fields?.data?.datasource ?? {};
const { title, description } = fields?.data?.datasource || {};
// Later: children?.results?.map((item: MultiPromoItemProps, index: number) => ...)
```

**Key Point:** Both read from `fields.data.datasource.children.results` - this is the standard Sitecore Content SDK pattern for child items.

## Template Comparison

### AccordionBlock Templates

**Datasource Template: "Accordion Block Data"**
- `Heading` (Single-Line Text) - Main section title
- `Description` (Single-Line Text) - Optional section description  
- `Link` (General Link) - Optional CTA button
- **Children:** Insert options allow "Accordion Item"

**Child Template: "Accordion Item"**
- `Heading` (Single-Line Text) - Accordion trigger text
- `Description` (Rich Text) - Expanded content

### MultiPromo Templates

**Datasource Template: "Multi Promo Data"**
- `Title` (Single-Line Text) - Main section title
- `Description` (Rich Text) - Optional section description
- **Children:** Insert options allow "Promo Item"

**Child Template: "Promo Item"**
- `Heading` (Single-Line Text) - Card title
- `Image` (Image) - Card image
- `Link` (General Link) - Optional card link

### Template Differences

| Field | AccordionBlock | MultiPromo |
|-------|---------------|------------|
| **Main Title Field** | `Heading` | `Title` |
| **Main Description** | Single-Line Text | Rich Text |
| **Child Title** | `Heading` | `Heading` |
| **Child Content** | Rich Text (`Description`) | Image + Link |
| **Child Media** | None | Image field required |
| **CTA Link** | At datasource level | At child item level |

## Props Structure Comparison

### AccordionBlock Props

```typescript
interface AccordionFields {
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

type AccordionItemProps = {
  heading: { jsonValue: Field<string> };
  description: { jsonValue: RichTextField };
};
```

### MultiPromo Props

```typescript
interface MultiPromoFields {
  data: {
    datasource: {
      title: { jsonValue: Field<string> };
      description?: { jsonValue: Field<string> };
      children?: {
        results: MultiPromoItemProps[];
      };
    };
  };
}

type MultiPromoItemProps = {
  heading: { jsonValue: Field<string> };
  image: { jsonValue: ImageField };
  link?: { jsonValue?: LinkField };
};
```

## Rendering Parameters

### AccordionBlock
- `styles` (string) - Optional CSS classes

### MultiPromo
- `numColumns` (string) - "3" or "4" to control layout density
- `styles` (string) - Optional CSS classes (supports `position-*` classes)

## How Items Are Rendered

### AccordionBlock
- Maps `children.results` to `AccordionBlockItem` components
- Each item renders as an accordion section (trigger + content)
- In editing mode: All items forced open (`value={accordionItemValues}`)
- Uses Radix UI's `type="multiple"` to allow multiple items open

### MultiPromo
- Maps `children.results` to `MultiPromoItem` components wrapped in `CarouselItem`
- Each item renders as a card (image + heading + link)
- Carousel handles scrolling, keyboard navigation, and accessibility
- No special editing mode behavior

## Data Flow Summary

Both components follow this flow:

1. **Sitecore Rendering** → Set datasource to a content item
2. **Content SDK** → Provides `fields.data.datasource` object
3. **Component Code** → Extracts `children.results` array
4. **Child Items** → Each item in `results` matches the child template structure
5. **Rendering** → Maps each item to a UI component (AccordionBlockItem or MultiPromoItem)

## When to Use Which?

**Use AccordionBlock when:**
- You need expandable/collapsible content
- Content is text-heavy (Q&A, FAQs, detailed explanations)
- Users need to see multiple sections at once (can expand multiple)
- No images needed per item

**Use MultiPromo when:**
- You need visual cards with images
- Content is promotional or feature highlights
- Horizontal scrolling is appropriate
- Each item needs an image and optional link
- You want a carousel/slider experience

## Common Patterns

Both components:
- ✅ Read from `fields.data.datasource.children.results`
- ✅ Support optional main title/description
- ✅ Use Sitecore Content SDK (`@sitecore-content-sdk/nextjs`)
- ✅ Support Experience Editor editing
- ✅ Have fallback UI when no data (`NoDataFallback`)
- ✅ Use `useSitecore()` hook to detect editing mode

## XM Cloud Connection

Both components connect to the same XM Cloud instance:

- **Organization:** Sales Engineers 12 (`org_BMSdm6mLMr270Wnk`)
- **Project ID:** `6owLXpDvzI4hC2o6si3WF0`
- **Environment ID:** `51BbcgtiENXLk0Y1AlZb31`
- **Developer Settings:** [View in XM Cloud Deploy](https://deploy.sitecorecloud.io/projects/6owLXpDvzI4hC2o6si3WF0/environments/51BbcgtiENXLk0Y1AlZb31/developer-settings?organization=org_BMSdm6mLMr270Wnk)

