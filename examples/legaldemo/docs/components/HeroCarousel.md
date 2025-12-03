# Hero Carousel Component

## Overview

The Hero Carousel component is a full-width, responsive carousel designed for hero sections on landing pages. It supports multiple slides with rich content including images, titles, subtitles, descriptions, and call-to-action links. Built using `embla-carousel-react` for smooth animations and touch support.

## Component Location

- **Path**: `src/components/HeroCarousel/`
- **Files**:
  - `HeroCarousel.tsx` - Main component implementation
  - `HeroCarousel.props.ts` - TypeScript interfaces and prop definitions

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

## Sitecore Configuration

### Component Template Structure

Create a component template in Sitecore with the following structure:

#### 1. Hero Carousel Template

**Template Name**: `HeroCarousel`

**Fields**:
- No direct fields needed on the template itself (uses child items)

**Base Template**: Standard template or your base component template

#### 2. Hero Carousel Slide Template

**Template Name**: `HeroCarouselSlide`

**Fields**:

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| `Title` | Single-Line Text | Yes | Main heading for the slide (rendered as H1) |
| `Subtitle` | Single-Line Text | No | Small text displayed above the title (uppercase, smaller font) |
| `Description` | Rich Text | No | Detailed description text below the title |
| `Image` | Image | No | Background image for the slide |
| `Link` | General Link | No | Call-to-action link button |
| `Background Color` | Single-Line Text | No | CSS class name for background color (e.g., "bg-gray-900", "bg-blue-500") |

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
├── Slide 1 (HeroCarouselSlide template)
│   ├── Title: "Insurance Emerging Risk uncovered"
│   ├── Subtitle: "Expertise"
│   ├── Description: "Navigate the risks shaping tomorrow's insurance landscape"
│   ├── Image: [Hero image]
│   └── Link: [Link to /insights/emerging-risks]
├── Slide 2 (HeroCarouselSlide template)
│   ├── Title: "Risk Quarterly"
│   ├── Subtitle: "Insights"
│   ├── Description: "Leading voices delivering the latest insight"
│   ├── Image: [Hero image]
│   └── Link: [Link to /insights/risk-quarterly]
└── Slide 3 (HeroCarouselSlide template)
    ├── Title: "Corporate Risk Radar 2025"
    ├── Subtitle: "Reports"
    ├── Description: "Research-led report capturing cross-sector perspectives..."
    ├── Image: [Hero image]
    └── Link: [Link to /reports/...]
```

## Usage in XM Cloud

### Adding the Component to a Page

1. **Navigate to your page** in Sitecore Experience Editor or Content Editor
2. **Select the placeholder** where you want to add the carousel (typically `headless-main`)
3. **Click "Add Component"** or use the component insertion button
4. **Select "Hero Carousel"** from the component list
5. **Assign a datasource** - Create or select a Hero Carousel item
6. **Add slides** - Create child items using the `HeroCarouselSlide` template under the datasource item

### Configuring Component Parameters

1. **Select the Hero Carousel component** on your page
2. **Open the component properties** (right-click → Properties or use the properties panel)
3. **Navigate to the "Parameters" section**
4. **Configure parameters**:
   - Set `autoplay` to `true` or `false`
   - Set `autoplayInterval` (e.g., `5000` for 5 seconds)
   - Set `showDots` to `true` or `false`
   - Set `showArrows` to `true` or `false`

### Creating Slides

1. **Navigate to your Hero Carousel datasource item**
2. **Create child items** using the `HeroCarouselSlide` template
3. **Fill in the fields** for each slide:
   - **Title** (required): Main heading
   - **Subtitle** (optional): Small text above title
   - **Description** (optional): Rich text description
   - **Image** (optional): Background image
   - **Link** (optional): Call-to-action button link
   - **Background Color** (optional): CSS class for background

### Best Practices

1. **Image Optimization**: Use optimized images (WebP format recommended) for better performance
2. **Content Length**: Keep titles concise (ideally under 60 characters)
3. **Slide Count**: Limit to 3-5 slides for optimal user experience
4. **Autoplay**: Consider disabling autoplay if slides contain important information users need to read
5. **Accessibility**: Always provide alt text for images
6. **Mobile**: Test on mobile devices to ensure text is readable over background images

## Styling

The component uses Tailwind CSS classes and can be customized by:

1. **Modifying the component code** in `HeroCarousel.tsx`
2. **Using CSS classes** in the `Background Color` field (must be Tailwind classes)
3. **Adding custom CSS** to your global stylesheet

### Default Styling

- **Background**: Dark gray (`bg-gray-900`) by default
- **Text Color**: White text for contrast
- **Image Overlay**: 40% opacity with dark overlay (50% black)
- **Minimum Height**: 600px on desktop
- **Responsive**: Adapts to mobile, tablet, and desktop breakpoints

## Technical Details

### Dependencies

- `embla-carousel-react` - Carousel functionality
- `@sitecore-content-sdk/nextjs` - Sitecore integration
- `lucide-react` - Icons (via carousel component)
- `next/link` - Next.js routing

### Component Props Interface

```typescript
interface HeroCarouselProps {
  fields: {
    data: {
      datasource: {
        children?: {
          results?: HeroCarouselSlide[];
        };
      };
    };
  };
  params: {
    autoplay?: boolean;
    autoplayInterval?: number;
    showDots?: boolean;
    showArrows?: boolean;
  };
}
```

### Field Access Pattern

The component accesses fields using the Sitecore Content SDK pattern:

```typescript
const { children } = fields?.data?.datasource ?? {};
const slides = children?.results ?? [];
```

Each slide field is accessed via `jsonValue`:

```typescript
title?.jsonValue?.value
image?.jsonValue?.value?.src
link?.jsonValue?.value?.href
```

## Troubleshooting

### Component Not Displaying

1. **Check datasource**: Ensure the component has a datasource assigned
2. **Check child items**: Verify at least one `HeroCarouselSlide` child item exists
3. **Check fields**: Ensure required fields (Title) are filled in
4. **Check component map**: Verify the component is registered in `.sitecore/component-map.ts`

### Images Not Showing

1. **Check image field**: Verify the Image field has an image selected
2. **Check image path**: Ensure images are uploaded to Sitecore Media Library
3. **Check permissions**: Verify media library permissions allow public access

### Autoplay Not Working

1. **Check parameter**: Verify `autoplay` parameter is set to `true`
2. **Check editing mode**: Autoplay is disabled in editing mode
3. **Check interval**: Verify `autoplayInterval` is a valid number (milliseconds)

### Navigation Not Working

1. **Check parameters**: Verify `showDots` and/or `showArrows` are set to `true`
2. **Check slide count**: Navigation only appears when there are 2+ slides
3. **Check JavaScript**: Ensure JavaScript is enabled in the browser

## Examples

### Example 1: Basic Carousel

```
Hero Carousel Item
├── Slide 1
│   ├── Title: "Welcome to Our Site"
│   ├── Description: "Discover our services"
│   └── Link: /services
└── Slide 2
    ├── Title: "Latest News"
    ├── Description: "Stay updated"
    └── Link: /news
```

### Example 2: Full-Featured Carousel

```
Hero Carousel Item
├── Slide 1
│   ├── Title: "Insurance Emerging Risk"
│   ├── Subtitle: "Expertise"
│   ├── Description: "Navigate the risks shaping tomorrow's insurance landscape"
│   ├── Image: hero-insurance.jpg
│   ├── Link: /insights/emerging-risks
│   └── Background Color: bg-gray-900
└── Slide 2
    ├── Title: "Risk Quarterly"
    ├── Subtitle: "Insights"
    ├── Description: "Leading voices delivering the latest insight"
    ├── Image: hero-risk-quarterly.jpg
    ├── Link: /insights/risk-quarterly
    └── Background Color: bg-blue-900
```

## Related Components

- `Hero` - Alternative hero component (static, non-carousel)
- `MultiPromo` - Multi-item promotional carousel
- `TestimonialCarousel` - Testimonial carousel component

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Sitecore XM Cloud documentation
3. Check component code comments in `HeroCarousel.tsx`


