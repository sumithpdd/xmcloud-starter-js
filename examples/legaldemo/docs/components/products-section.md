# Products Section Component

## Overview

The Products Section component displays a grid of product offerings with titles, descriptions, and call-to-action links. It's designed for showcasing services, products, or offerings in a clean, card-based layout. The component supports both Sitecore content and fallback default content.

## Component Location

- **Path**: `src/components/products-section/`
- **Files**:
  - `ProductsSection.tsx` - Main component implementation
  - `products-section.props.ts` - TypeScript interfaces and prop definitions

## Features

- ✅ Responsive 2-column grid layout (mobile stacks to single column)
- ✅ Section title and subtitle support
- ✅ Product cards with title, description, and CTA links
- ✅ Full Sitecore XM Cloud integration
- ✅ Editing mode support with Sitecore Link component
- ✅ Fallback default content when no Sitecore content is available
- ✅ Hover effects and transitions
- ✅ Accessible semantic HTML structure

## Sitecore Configuration

### Component Template Structure

Create a component template in Sitecore with the following structure:

#### 1. Products Section Template

**Template Name**: `ProductsSection`

**Fields**:

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| `Title` | Single-Line Text | No | Section heading (rendered as H2) |
| `Subtitle` | Rich Text | No | Section description/introduction text |

**Base Template**: Standard template or your base component template

#### 2. Product Item Template

**Template Name**: `ProductItem`

**Fields**:

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| `Title` | Single-Line Text | Yes | Product name/title |
| `Description` | Rich Text | No | Product description |
| `Link` | General Link | No | Call-to-action link to product page |
| `CTA Text` | Single-Line Text | No | Custom text for CTA link (defaults to "Learn more") |

**Base Template**: Standard template or your base component template

### Sitecore Item Structure

```
Products Section (ProductsSection template)
├── Title: "Our Products"
├── Subtitle: "Discover our range of services and solutions"
├── Product 1 (ProductItem template)
│   ├── Title: "Disputes Funding"
│   ├── Description: "The smart choice for organisations to turn cases into cash flow"
│   ├── Link: /expertise/products/disputes-funding
│   └── CTA Text: "Discover more"
├── Product 2 (ProductItem template)
│   ├── Title: "Climate Change Quarterly"
│   ├── Description: "Key updates on global climate litigation and regulations"
│   ├── Link: /expertise/products/climate-change-quarterly
│   └── CTA Text: "Find out more"
└── Product 3 (ProductItem template)
    ├── Title: "Product Name"
    ├── Description: "Product description"
    ├── Link: /path/to/product
    └── CTA Text: "Learn more"
```

## Usage in XM Cloud

### Adding the Component to a Page

1. **Navigate to your page** in Sitecore Experience Editor or Content Editor
2. **Select the placeholder** where you want to add the section (typically `headless-main`)
3. **Click "Add Component"** or use the component insertion button
4. **Select "Products Section"** from the component list
5. **Assign a datasource** - Create or select a Products Section item
6. **Add product items** - Create child items using the `ProductItem` template under the datasource item

### Creating Product Items

1. **Navigate to your Products Section datasource item**
2. **Create child items** using the `ProductItem` template
3. **Fill in the fields** for each product:
   - **Title** (required): Product name
   - **Description** (optional): Product description
   - **Link** (optional): Link to product detail page
   - **CTA Text** (optional): Custom CTA text (defaults to "Learn more")

### Best Practices

1. **Content Organization**: Group related products together
2. **Link Structure**: Use consistent URL patterns for product links
3. **Description Length**: Keep descriptions concise (2-3 sentences)
4. **Image Consideration**: Currently supports text-only cards; images can be added via template extension
5. **Accessibility**: Ensure link text is descriptive and meaningful

## Styling

The component uses Tailwind CSS classes and can be customized by:

1. **Modifying the component code** in `ProductsSection.tsx`
2. **Using CSS classes** via the `styles` parameter (if supported)
3. **Adding custom CSS** to your global stylesheet

### Default Styling

- **Background**: Light gray (`bg-[#F8F9FA]`)
- **Card Background**: White with border
- **Hover Effect**: Shadow elevation on hover
- **Text Colors**: Dark gray for titles, medium gray for descriptions
- **Link Color**: Teal (`#00677F`) with darker hover state
- **Spacing**: Generous padding and margins for readability

## Technical Details

### Dependencies

- `@sitecore-content-sdk/nextjs` - Sitecore integration
- `next/link` - Next.js routing
- `lucide-react` - ChevronRight icon
- `@/lib/utils` - Utility functions (cn)

### Component Props Interface

```typescript
interface ProductsSectionProps {
  fields: {
    data: {
      datasource: {
        title?: { jsonValue: Field<string> };
        subtitle?: { jsonValue: Field<string> };
        children?: {
          results?: ProductItem[];
        };
      };
    };
  };
  params: {
    styles?: string;
    [key: string]: any;
  };
}
```

### Field Access Pattern

The component accesses fields using the Sitecore Content SDK pattern:

```typescript
const { title, subtitle, children } = fields?.data?.datasource ?? {};
const products = children?.results ?? [];
```

Each product field is accessed via `jsonValue`:

```typescript
product.title?.jsonValue?.value
product.description?.jsonValue?.value
product.link?.jsonValue?.value?.href
product.ctaText?.jsonValue?.value
```

### Default Content

The component includes fallback default products that display when no Sitecore content is available:

- Disputes Funding
- Climate Change Quarterly

## Troubleshooting

### Component Not Displaying

1. **Check datasource**: Ensure the component has a datasource assigned
2. **Check child items**: Verify at least one `ProductItem` child item exists
3. **Check fields**: Ensure required fields (Title for products) are filled in
4. **Check component map**: Verify the component is registered in `.sitecore/component-map.ts`

### Products Not Showing

1. **Check child items**: Verify product items exist under datasource
2. **Check template**: Ensure product items use `ProductItem` template
3. **Check required fields**: Verify `Title` field is filled in for each product
4. **Check permissions**: Verify content items are published

### Links Not Working

1. **Check link field**: Verify Link field has a valid URL or internal link
2. **Check URL format**: Ensure URLs are properly formatted
3. **Check routing**: Verify Next.js routes match the link paths

## Examples

### Example 1: Basic Products Section

```
Products Section Item
├── Title: "Our Services"
├── Subtitle: "Explore what we offer"
├── Product 1
│   ├── Title: "Service A"
│   ├── Description: "Description of service"
│   └── Link: /services/service-a
└── Product 2
    ├── Title: "Service B"
    ├── Description: "Description of service"
    └── Link: /services/service-b
```

### Example 2: Full-Featured Products Section

```
Products Section Item
├── Title: "Legal Solutions"
├── Subtitle: "Comprehensive legal services for your business needs"
├── Product 1
│   ├── Title: "Disputes Funding"
│   ├── Description: "The smart choice for organisations to turn cases into cash flow"
│   ├── Link: /expertise/products/disputes-funding
│   └── CTA Text: "Discover more"
└── Product 2
    ├── Title: "Climate Change Quarterly"
    ├── Description: "Key updates on global climate litigation and regulations"
    ├── Link: /expertise/products/climate-change-quarterly
    └── CTA Text: "Find out more"
```

## Related Components

- `RiskAreasSection` - Similar card-based grid layout for risk areas
- `InsightsSection` - Article/insight grid component
- `MultiPromo` - Multi-item promotional component

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Sitecore XM Cloud documentation
3. Check component code comments in `ProductsSection.tsx`
