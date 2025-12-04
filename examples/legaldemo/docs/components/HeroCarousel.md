# Hero Carousel Component

## Overview

The Hero Carousel component is a full-width, responsive carousel designed for hero sections on landing pages. It supports multiple slides with rich content including images, titles, subtitles, descriptions, and call-to-action links. Built using `embla-carousel-react` for smooth animations and touch support.

## Component Location

- **Path**: `src/components/HeroCarousel/`
- **Files**:
  - `HeroCarousel.tsx` - Main component implementation
  - `HeroCarousel.props.ts` - TypeScript interfaces and prop definitions
  - `HeroCarouselSlide.tsx` - Individual slide component (for list item selection)
  - `HeroCarouselSlide.props.ts` - Slide component props

## Features

- ✅ Multiple slides with customizable content
- ✅ Autoplay functionality (configurable)
- ✅ Navigation arrows (configurable)
- ✅ Dot indicators for slide navigation
- ✅ Slide counter display
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Full Sitecore XM Cloud integration
- ✅ Editing mode support
- ✅ Keyboard navigation support
- ✅ Touch/swipe support (via Embla Carousel)
- ✅ Accessible (ARIA labels and semantic HTML)
- ✅ Multi-list field support for slide selection

## Sitecore Configuration

### Component Template Structure

#### 1. Hero Carousel Template

**Template Name**: `HeroCarousel`

**Fields**:
- `slides` (Multi-List) - References to `HeroCarouselSlide` items

**Base Template**: Standard template or your base component template

#### 2. Hero Carousel Slide Template

**Template Name**: `HeroCarouselSlide`

**Fields** (case-sensitive - must match exactly):

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| `Title` | Single-Line Text | Yes | Main heading for the slide (rendered as H1) |
| `Subtitle` | Single-Line Text | No | Small text displayed above the title (uppercase, smaller font) |
| `Description` | Rich Text | No | Detailed description text below the title |
| `Image` | Image | No | Background image for the slide |
| `Link` | General Link | No | Call-to-action link button |
| `BackgroundColor` | Single-Line Text | No | CSS class name for background color (e.g., "bg-white", "bg-gray-900") |

**Important**: Field names are case-sensitive and must match exactly: `Title`, `Subtitle`, `Description`, `Image`, `Link`, `BackgroundColor` (with capital letters as shown).

**Base Template**: Standard template or your base component template

### Component Parameters

The component supports the following parameters that can be configured in Sitecore:

| Parameter Name | Type | Default | Description |
|----------------|------|---------|-------------|
| `autoplay` | Boolean | `true` | Enable/disable automatic slide rotation |
| `autoplayInterval` | Number | `5000` | Time in milliseconds between slide transitions (when autoplay is enabled) |
| `showDots` | Boolean | `true` | Show/hide dot navigation indicators |
| `showArrows` | Boolean | `true` | Show/hide previous/next arrow buttons |

### Sitecore Item Structure

```
Hero Carousel (HeroCarousel template)
├── slides (Multi-List field)
│   ├── Slide 1 (HeroCarouselSlide item)
│   │   ├── Title: "Insurance Emerging Risk uncovered"
│   │   ├── Subtitle: "Expertise"
│   │   ├── Description: "Navigate the risks shaping tomorrow's insurance landscape"
│   │   ├── Image: [Hero image]
│   │   ├── Link: [Link to /insights/emerging-risks]
│   │   └── BackgroundColor: "bg-white"
│   ├── Slide 2 (HeroCarouselSlide item)
│   │   ├── Title: "Risk Quarterly"
│   │   ├── Subtitle: "Insights"
│   │   └── ...
│   └── Slide 3 (HeroCarouselSlide item)
│       └── ...
```

## Usage in XM Cloud

### Step 1: Create Slide Content Items

1. **Create slide items** using the `HeroCarouselSlide` template
2. **Fill in the fields** for each slide:
   - **Title** (required): Main heading
   - **Subtitle** (optional): Small text above title
   - **Description** (optional): Rich text description
   - **Image** (optional): Background image
   - **Link** (optional): Call-to-action button link
   - **BackgroundColor** (optional): CSS class for background

### Step 2: Create Hero Carousel Datasource

1. **Create a datasource item** using the `HeroCarousel` template
2. **Open the `slides` Multi-List field**
3. **Select multiple slide items** you created in Step 1
4. **Save the datasource item**

### Step 3: Add Component to Page

1. **Navigate to your page** in Sitecore Experience Editor or Content Editor
2. **Select the placeholder** where you want to add the carousel (typically `headless-main`)
3. **Click "Add Component"** or use the component insertion button
4. **Select "Hero Carousel"** from the component list
5. **Assign the datasource** created in Step 2

### Step 4: Configure Component Parameters

1. **Select the Hero Carousel component** on your page
2. **Open the component properties** (right-click → Properties or use the properties panel)
3. **Navigate to the "Parameters" section**
4. **Configure parameters**:
   - Set `autoplay` to `true` or `false`
   - Set `autoplayInterval` (e.g., `5000` for 5 seconds)
   - Set `showDots` to `true` or `false`
   - Set `showArrows` to `true` or `false`

### Step 5: Component Registration

Ensure the component is registered in `.sitecore/component-map.ts`:

```typescript
import * as HeroCarousel from 'components/HeroCarousel/HeroCarousel';
// ...
['hero-carousel', HeroCarousel],  // Key must match rendering's ComponentName (kebab-case)
```

**Important**: The rendering's `ComponentName` field in Sitecore must be `hero-carousel` (kebab-case), not `HeroCarousel` (PascalCase).

## Data Fetching Configuration

The Hero Carousel uses a **Multi-List field** approach, which means slides are selected via a multi-list field rather than fetched as children. This approach:

- ✅ No GraphQL queries needed
- ✅ No Rendering Contents Resolver needed
- ✅ Simple field-based selection
- ✅ Easy to reorder slides

The component automatically fetches slide data from the multi-list field references.

## Troubleshooting

### Component Not Displaying

1. **Check datasource**: Ensure the component has a datasource assigned
2. **Check slides field**: Verify the `slides` multi-list field has items selected
3. **Check fields**: Ensure required fields (`Title`) are filled in slide items
4. **Check component map**: Verify the component is registered in `.sitecore/component-map.ts`
5. **Check component name**: Verify rendering's `ComponentName` is `hero-carousel` (kebab-case)

### Component Name Mismatch

**Problem**: The rendering's `componentName` doesn't match the component map key.

**Debug Output Shows**:
```javascript
rendering: {
  componentName: 'HeroCarousel',  // ❌ PascalCase
  dataSource: '/sitecore/content/.../HeroCarousel'
}
```

**Solution**:
1. Open your Hero Carousel rendering in Sitecore Content Editor
2. Navigate to: `/sitecore/layout/Renderings/Project/LegalDemo/HeroCarousel`
3. Find the **`ComponentName`** field
4. Change it from `HeroCarousel` to `hero-carousel` (kebab-case)
5. Save the rendering

**Why**: The component map uses kebab-case keys like `['hero-carousel', HeroCarousel]`, so the rendering's `componentName` must match exactly.

### Slides Not Showing

1. **Check multi-list field**: Verify the `slides` field on the datasource has items selected
2. **Check slide items**: Ensure slide items exist and are published
3. **Check field names**: Verify field names match exactly (case-sensitive): `Title`, `Subtitle`, `Description`, `Image`, `Link`, `BackgroundColor`
4. **Check browser console**: Look for debug output showing `slidesCount` and `slides` array

### Images Not Showing

1. **Check image field**: Verify the `Image` field has an image selected (note: capital `I`)
2. **Check image path**: Ensure images are uploaded to Sitecore Media Library
3. **Check permissions**: Verify media library permissions allow public access
4. **Check next.config.js**: Ensure Sitecore hostname is configured in `images.remotePatterns`

### Field Names Not Matching

**Problem**: Field names are case-sensitive and must match the Sitecore template exactly.

**Solution**: 
- Template fields: `Title`, `Subtitle`, `Description`, `Image`, `Link`, `BackgroundColor`
- Code uses: `Title`, `Subtitle`, `Description`, `Image`, `Link`, `BackgroundColor`
- If your template uses different casing, update the code to match

### Autoplay Not Working

1. **Check parameter**: Verify `autoplay` parameter is set to `true`
2. **Check editing mode**: Autoplay is disabled in editing mode
3. **Check interval**: Verify `autoplayInterval` is a valid number (milliseconds)

### Navigation Not Working

1. **Check parameters**: Verify `showDots` and/or `showArrows` are set to `true`
2. **Check slide count**: Navigation only appears when there are 2+ slides
3. **Check JavaScript**: Ensure JavaScript is enabled in the browser

## Technical Details

### Dependencies

- `embla-carousel-react` - Carousel functionality
- `@sitecore-content-sdk/nextjs` - Sitecore integration
- `lucide-react` - Icons (via carousel component)
- `next/link` - Next.js routing

### Component Props Interface

```typescript
export interface HeroCarouselSlide {
  id?: string;
  name?: string;
  url?: string;
  displayName?: string;
  fields?: {
    Title?: { jsonValue: Field<string> };
    Subtitle?: { jsonValue: Field<string> };
    Description?: { jsonValue: Field<string> };
    Image?: { jsonValue: ImageField };
    Link?: { jsonValue: LinkField };
    BackgroundColor?: { jsonValue: Field<string> };
  };
}

export interface HeroCarouselFields {
  fields: {
    data: {
      datasource?: {
        slides?: HeroCarouselSlide[];
      };
    };
  };
}

export type HeroCarouselProps = ComponentProps &
  HeroCarouselFields & {
    params: HeroCarouselParams;
  };
```

### Field Access Pattern

The component accesses slides from the multi-list field:

```typescript
const { slides: slidesField } = fields?.data?.datasource || {};
const slidesFromDatasource = slidesField ?? [];
```

Each slide field is accessed via `jsonValue`:

```typescript
Title?.jsonValue?.value
Image?.jsonValue?.value?.src
Link?.jsonValue?.value?.href
```

**Important**: Field names are case-sensitive and must match Sitecore template exactly: `Title`, `Subtitle`, `Description`, `Image`, `Link`, `BackgroundColor`.

## Styling

The component uses Tailwind CSS classes and can be customized by:

1. **Modifying the component code** in `HeroCarousel.tsx`
2. **Using CSS classes** in the `BackgroundColor` field (must be Tailwind classes)
3. **Adding custom CSS** to your global stylesheet

### Default Styling

- **Background**: White (`bg-white`) by default
- **Text Color**: Dark gray (`#212529`) for text
- **Accent Color**: Teal (`#00677F`) for buttons and accents
- **Image Overlay**: Gradient overlay from white/95% to transparent
- **Minimum Height**: 70vh on desktop
- **Responsive**: Adapts to mobile, tablet, and desktop breakpoints

## Best Practices

1. **Image Optimization**: Use optimized images (WebP format recommended) for better performance
2. **Content Length**: Keep titles concise (ideally under 60 characters)
3. **Slide Count**: Limit to 3-5 slides for optimal user experience
4. **Autoplay**: Consider disabling autoplay if slides contain important information users need to read
5. **Accessibility**: Always provide alt text for images
6. **Mobile**: Test on mobile devices to ensure text is readable over background images
7. **Field Names**: Always use exact field names matching your Sitecore template (case-sensitive)

## Examples

### Example 1: Basic Carousel

```
Hero Carousel Item (datasource)
├── slides (Multi-List)
│   ├── Slide 1
│   │   ├── Title: "Welcome to Our Site"
│   │   ├── Description: "Discover our services"
│   │   └── Link: /services
│   └── Slide 2
│       ├── Title: "Latest News"
│       ├── Description: "Stay updated"
│       └── Link: /news
```

### Example 2: Full-Featured Carousel

```
Hero Carousel Item (datasource)
├── slides (Multi-List)
│   ├── Slide 1
│   │   ├── Title: "Insurance Emerging Risk"
│   │   ├── Subtitle: "Expertise"
│   │   ├── Description: "Navigate the risks shaping tomorrow's insurance landscape"
│   │   ├── Image: hero-insurance.jpg
│   │   ├── Link: /insights/emerging-risks
│   │   └── BackgroundColor: bg-white
│   └── Slide 2
│       ├── Title: "Risk Quarterly"
│       ├── Subtitle: "Insights"
│       ├── Description: "Leading voices delivering the latest insight"
│       ├── Image: hero-risk-quarterly.jpg
│       ├── Link: /insights/risk-quarterly
│       └── BackgroundColor: bg-white
```

## Quick Checklist

- [ ] `HeroCarouselSlide` template created with fields: `Title`, `Subtitle`, `Description`, `Image`, `Link`, `BackgroundColor`
- [ ] `HeroCarousel` template created with `slides` Multi-List field
- [ ] Slide content items created using `HeroCarouselSlide` template
- [ ] Datasource item created with slides selected in `slides` field
- [ ] Rendering `ComponentName` field = `hero-carousel` (kebab-case)
- [ ] Component map has `['hero-carousel', HeroCarousel]` entry
- [ ] Component added to page with datasource assigned
- [ ] All items are published
- [ ] Sitecore cache cleared (if possible)

## Related Components

- `HeroCarouselSlide` - Individual slide component (for list item selection)
- `Hero` - Alternative hero component (static, non-carousel)
- `MultiPromo` - Multi-item promotional carousel
- `TestimonialCarousel` - Testimonial carousel component

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Sitecore XM Cloud documentation
3. Check component code comments in `HeroCarousel.tsx`
4. Check browser console for debug output (in development mode)
