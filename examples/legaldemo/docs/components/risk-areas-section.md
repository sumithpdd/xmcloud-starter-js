# Risk Areas Section Component

## Overview

The Risk Areas Section component displays a grid of risk category cards with images, titles, descriptions, and links. It's designed for showcasing different risk areas or categories in an engaging, visual card-based layout. The component includes a section header with title, intro text, and a call-to-action button, followed by a responsive grid of risk area cards.

## Component Location

- **Path**: `src/components/risk-areas-section/`
- **Files**:
  - `RiskAreasSection.tsx` - Main component implementation
  - `risk-areas-section.props.ts` - TypeScript interfaces and prop definitions

## Features

- ✅ Responsive grid layout (1 column mobile, 2 columns tablet, 3 columns desktop)
- ✅ Section header with title, intro text, and CTA button
- ✅ Risk area cards with images, titles, and descriptions
- ✅ Image hover effects with scale animation
- ✅ Full Sitecore XM Cloud integration
- ✅ Editing mode support with Sitecore components
- ✅ Fallback default content when no Sitecore content is available
- ✅ Accessible semantic HTML structure
- ✅ Card hover effects and transitions

## Sitecore Configuration

### Component Template Structure

Create a component template in Sitecore with the following structure:

#### 1. Risk Areas Section Template

**Template Name**: `RiskAreasSection`

**Fields**:

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| `Title` | Single-Line Text | No | Section heading (rendered as H2) |
| `Intro Text` | Rich Text | No | Introduction/description text for the section |
| `CTA Text` | Single-Line Text | No | Text for the call-to-action button |
| `CTA Link` | General Link | No | Link for the call-to-action button |

**Base Template**: Standard template or your base component template

#### 2. Risk Area Item Template

**Template Name**: `RiskAreaItem`

**Fields**:

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| `Title` | Single-Line Text | Yes | Risk area name/title |
| `Description` | Rich Text | No | Risk area description |
| `Image` | Image | No | Featured image for the risk area card |
| `Link` | General Link | No | Link to risk area detail page |
| `URL` | Single-Line Text | No | Alternative URL field (fallback if Link not set) |

**Base Template**: Standard template or your base component template

### Sitecore Item Structure

```
Risk Areas Section (RiskAreasSection template)
├── Title: "Risk Areas"
├── Intro Text: "Explore our comprehensive risk analysis across six key areas"
├── CTA Text: "View all six risks"
├── CTA Link: /insights/risk-areas
├── Risk Area 1 (RiskAreaItem template)
│   ├── Title: "Economic Insights"
│   ├── Description: "Risks arising from changes and uncertainties in the global economy"
│   ├── Image: economic-insights.jpg
│   └── Link: /insights/risk-area/economic-insights
├── Risk Area 2 (RiskAreaItem template)
│   ├── Title: "People Dynamics"
│   ├── Description: "Steering the complexities of people management in business"
│   ├── Image: people-dynamics.jpg
│   └── Link: /insights/risk-area/people-dynamics
└── Risk Area 3 (RiskAreaItem template)
    ├── Title: "Tech & AI Evolution"
    ├── Description: "Navigating the ever-evolving world of technology & data"
    ├── Image: tech-ai-evolution.jpg
    └── Link: /insights/risk-area/tech-ai-evolution
```

## Usage in XM Cloud

### Adding the Component to a Page

1. **Navigate to your page** in Sitecore Experience Editor or Content Editor
2. **Select the placeholder** where you want to add the section (typically `headless-main`)
3. **Click "Add Component"** or use the component insertion button
4. **Select "Risk Areas Section"** from the component list
5. **Assign a datasource** - Create or select a Risk Areas Section item
6. **Add risk area items** - Create child items using the `RiskAreaItem` template under the datasource item

### Creating Risk Area Items

1. **Navigate to your Risk Areas Section datasource item**
2. **Create child items** using the `RiskAreaItem` template
3. **Fill in the fields** for each risk area:
   - **Title** (required): Risk area name
   - **Description** (optional): Risk area description
   - **Image** (optional): Featured image (recommended 4:3 aspect ratio)
   - **Link** (optional): Link to risk area detail page
   - **URL** (optional): Alternative URL if not using Link field

### Configuring Section Header

1. **Edit the Risk Areas Section item**
2. **Fill in header fields**:
   - **Title**: Section heading
   - **Intro Text**: Introduction text (supports rich text formatting)
   - **CTA Text**: Button text (e.g., "View all six risks")
   - **CTA Link**: Link for the button

### Best Practices

1. **Image Optimization**: Use optimized images (WebP format recommended) with 4:3 aspect ratio
2. **Content Length**: Keep descriptions concise (2-3 sentences)
3. **Card Count**: Display 6-9 cards for optimal layout (3x2 or 3x3 grid)
4. **Image Quality**: Use high-quality images that represent each risk area clearly
5. **Link Structure**: Use consistent URL patterns for risk area links
6. **Accessibility**: Always provide alt text for images

## Styling

The component uses Tailwind CSS classes and can be customized by:

1. **Modifying the component code** in `RiskAreasSection.tsx`
2. **Using CSS classes** via the `styles` parameter (if supported)
3. **Adding custom CSS** to your global stylesheet

### Default Styling

- **Background**: Light gray (`bg-[#F8F9FA]`)
- **Card Background**: White with border
- **Image Aspect Ratio**: 4:3 ratio for consistent card heights
- **Hover Effects**: 
  - Card: Shadow elevation
  - Image: Scale up (105%) with smooth transition
  - Title: Color change to teal (`#00677F`)
- **Text Colors**: 
  - Titles: Dark gray (`#212529`)
  - Descriptions: Medium gray (`#6C757D`)
  - Links: Teal (`#00677F`)
- **Button**: Teal background with darker hover state
- **Spacing**: Generous padding and margins for readability

## Technical Details

### Dependencies

- `@sitecore-content-sdk/nextjs` - Sitecore integration
- `next/link` - Next.js routing
- `lucide-react` - ChevronRight icon
- `@/components/ui/button` - Button component
- `@/lib/utils` - Utility functions (cn)

### Component Props Interface

```typescript
interface RiskAreasSectionProps {
  fields: {
    data: {
      datasource: {
        title?: { jsonValue: Field<string> };
        introText?: { jsonValue: Field<string> };
        ctaText?: { jsonValue: Field<string> };
        ctaLink?: { jsonValue: LinkField };
        children?: {
          results?: RiskAreaItem[];
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
const { title, introText, ctaText, ctaLink, children } = fields?.data?.datasource ?? {};
const riskAreas = children?.results ?? [];
```

Each risk area field is accessed via `jsonValue`:

```typescript
risk.title?.jsonValue?.value
risk.description?.jsonValue?.value
risk.image?.jsonValue?.value?.src
risk.link?.jsonValue?.value?.href
```

### Default Content

The component includes fallback default risk areas that display when no Sitecore content is available:

1. Economic Insights
2. People Dynamics
3. Tech & AI Evolution
4. Geopolitical Outlook
5. Regulatory Movement
6. Climate Change

## Troubleshooting

### Component Not Displaying

1. **Check datasource**: Ensure the component has a datasource assigned
2. **Check child items**: Verify at least one `RiskAreaItem` child item exists
3. **Check fields**: Ensure required fields (Title for risk areas) are filled in
4. **Check component map**: Verify the component is registered in `.sitecore/component-map.ts`

### Risk Areas Not Showing

1. **Check child items**: Verify risk area items exist under datasource
2. **Check template**: Ensure risk area items use `RiskAreaItem` template
3. **Check required fields**: Verify `Title` field is filled in for each risk area
4. **Check permissions**: Verify content items are published

### Images Not Showing

1. **Check image field**: Verify Image field has an image selected
2. **Check image path**: Ensure images are uploaded to Sitecore Media Library
3. **Check permissions**: Verify media library permissions allow public access
4. **Check aspect ratio**: Images will be cropped to 4:3 aspect ratio

### CTA Button Not Working

1. **Check CTA Link field**: Verify CTA Link field has a valid link
2. **Check CTA Text**: Verify CTA Text is filled in
3. **Check link format**: Ensure link is properly formatted

## Examples

### Example 1: Basic Risk Areas Section

```
Risk Areas Section Item
├── Title: "Risk Areas"
├── Intro Text: "Explore our risk analysis"
├── Risk Area 1
│   ├── Title: "Economic Insights"
│   ├── Description: "Economic risk description"
│   └── Link: /insights/risk-area/economic-insights
└── Risk Area 2
    ├── Title: "People Dynamics"
    ├── Description: "People risk description"
    └── Link: /insights/risk-area/people-dynamics
```

### Example 2: Full-Featured Risk Areas Section

```
Risk Areas Section Item
├── Title: "Risk Areas"
├── Intro Text: "Explore our comprehensive risk analysis across six key areas that impact businesses globally"
├── CTA Text: "View all six risks"
├── CTA Link: /insights/risk-areas
├── Risk Area 1
│   ├── Title: "Economic Insights"
│   ├── Description: "Risks arising from changes and uncertainties in the global economy"
│   ├── Image: economic-insights.jpg
│   └── Link: /insights/risk-area/economic-insights
└── Risk Area 2
    ├── Title: "People Dynamics"
    ├── Description: "Steering the complexities of people management in business"
    ├── Image: people-dynamics.jpg
    └── Link: /insights/risk-area/people-dynamics
```

## Related Components

- `ProductsSection` - Similar card-based grid layout for products
- `InsightsSection` - Article/insight grid component
- `HeroCarousel` - Hero carousel component

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Sitecore XM Cloud documentation
3. Check component code comments in `RiskAreasSection.tsx`
