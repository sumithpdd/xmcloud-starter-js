# Sitecore Setup Guide - Legal Demo

This guide provides step-by-step instructions for setting up components in Sitecore XM Cloud for the Legal Demo site.

## Hero Carousel Component Setup

### Step 1: Create Templates

#### Hero Carousel Template

1. Navigate to **Sitecore → Content → Templates**
2. Create a new template: `/sitecore/templates/Project/LegalDemo/HeroCarousel`
3. Base template: `/sitecore/templates/System/Standard template` (or your custom base component template)
4. No fields needed on this template (uses child items)

#### Hero Carousel Slide Template

1. Navigate to **Sitecore → Content → Templates**
2. Create a new template: `/sitecore/templates/Project/LegalDemo/HeroCarouselSlide`
3. Base template: `/sitecore/templates/System/Standard template` (or your custom base component template)

4. **Add the following fields:**

   | Field Name | Field Type | Section | Required | Description |
   |------------|------------|---------|----------|-------------|
   | `Title` | Single-Line Text | Data | Yes | Main heading (H1) |
   | `Subtitle` | Single-Line Text | Data | No | Small text above title |
   | `Description` | Rich Text | Data | No | Detailed description |
   | `Image` | Image | Data | No | Background image |
   | `Link` | General Link | Data | No | Call-to-action link |
   | `Background Color` | Single-Line Text | Data | No | CSS class (e.g., "bg-gray-900") |

### Step 2: Create Rendering

1. Navigate to **Sitecore → Layout → Renderings**
2. Create a new rendering: `/sitecore/layout/Renderings/Project/LegalDemo/HeroCarousel`
3. **Configure rendering:**
   - **Name**: Hero Carousel
   - **Controller**: (leave empty for Next.js)
   - **Controller Action**: (leave empty)
   - **View**: (leave empty)
   - **Datasource Template**: Select `HeroCarousel` template
   - **Datasource Location**: `/sitecore/content/LegalDemo/Components/HeroCarousels`
   - **Placeholder**: `headless-main`

### Step 3: Register Component

The component should be automatically registered when you run:
```bash
npm run sitecore-tools:generate-map
```

Or it will be generated during build. Verify it exists in `.sitecore/component-map.ts`.

### Step 4: Create Content Items

1. Navigate to **Sitecore → Content → LegalDemo → Components**
2. Create a folder: `HeroCarousels` (if it doesn't exist)
3. Create a new item:
   - **Template**: `HeroCarousel`
   - **Name**: `Homepage Hero Carousel`
   - **Location**: `/sitecore/content/LegalDemo/Components/HeroCarousels`

4. **Create slide child items** under the Hero Carousel item:
   - Right-click the Hero Carousel item → Insert → Hero Carousel Slide
   - **Slide 1:**
     - Name: `Slide 1 - Insurance Emerging Risk`
     - Title: `Insurance Emerging Risk uncovered`
     - Subtitle: `Expertise`
     - Description: `Navigate the risks shaping tomorrow's insurance landscape`
     - Image: Upload/select an image
     - Link: `/en/insights/emerging-risks`
   
   - **Slide 2:**
     - Name: `Slide 2 - Risk Quarterly`
     - Title: `Risk Quarterly`
     - Subtitle: `Insights`
     - Description: `Leading voices delivering the latest insight`
     - Image: Upload/select an image
     - Link: `/en/insights/risk-quarterly`
   
   - **Slide 3:**
     - Name: `Slide 3 - Corporate Risk Radar`
     - Title: `Corporate Risk Radar 2025`
     - Subtitle: `Reports`
     - Description: `Research-led report capturing cross-sector perspectives from 400+ global leaders on risks and opportunities in the coming years`
     - Image: Upload/select an image
     - Link: `/en/reports/2025/10-october/corporate-risk-radar-2025-embedding-resilience-to`

### Step 5: Add Component to Page

1. Navigate to your homepage in **Experience Editor** or **Content Editor**
2. Select the `headless-main` placeholder
3. Click **Add Component** or use the component insertion button
4. Select **Hero Carousel**
5. **Assign datasource**: Select `Homepage Hero Carousel` (created in Step 4)
6. **Configure parameters** (optional):
   - `autoplay`: `true`
   - `autoplayInterval`: `5000`
   - `showDots`: `true`
   - `showArrows`: `true`

### Step 6: Configure Component Parameters

1. **In Experience Editor:**
   - Select the Hero Carousel component
   - Click the component properties icon
   - Navigate to **Parameters** tab
   - Set parameter values

2. **In Content Editor:**
   - Navigate to the page item
   - Select the rendering in the **Layout** section
   - Edit rendering parameters

## Field Reference

### Hero Carousel Slide Fields

| Field Name | Sitecore Field Type | GraphQL Field Name | Notes |
|------------|---------------------|-------------------|-------|
| Title | Single-Line Text | `title` | Required field, rendered as H1 |
| Subtitle | Single-Line Text | `subtitle` | Optional, displayed above title |
| Description | Rich Text | `description` | Optional, supports HTML formatting |
| Image | Image | `image` | Optional, used as background |
| Link | General Link | `link` | Optional, CTA button link |
| Background Color | Single-Line Text | `backgroundColor` | Optional, CSS class name |

### Component Parameters

| Parameter | Type | Default | GraphQL Name |
|-----------|------|---------|--------------|
| autoplay | Boolean | true | `autoplay` |
| autoplayInterval | Number | 5000 | `autoplayInterval` |
| showDots | Boolean | true | `showDots` |
| showArrows | Boolean | true | `showArrows` |

## Troubleshooting

### Component Not Appearing

1. **Check component registration:**
   - Verify component exists in `.sitecore/component-map.ts`
   - Run `npm run sitecore-tools:generate-map` to regenerate

2. **Check datasource:**
   - Ensure datasource is assigned
   - Verify datasource item exists and has child items

3. **Check placeholder:**
   - Verify component is added to correct placeholder (`headless-main`)
   - Check placeholder settings in Layout

### Slides Not Displaying

1. **Check child items:**
   - Verify slide items exist under datasource
   - Ensure slide items use `HeroCarouselSlide` template

2. **Check required fields:**
   - Verify `Title` field is filled in for each slide
   - Check field names match exactly (case-sensitive)

3. **Check permissions:**
   - Verify content items are published
   - Check user has read permissions

### Images Not Showing

1. **Check image field:**
   - Verify image is selected in Image field
   - Ensure image is uploaded to Media Library

2. **Check image path:**
   - Verify media library path is accessible
   - Check image URL in browser developer tools

3. **Check image format:**
   - Supported formats: JPG, PNG, WebP, SVG
   - Recommended: WebP for better performance

## Best Practices

1. **Content Organization:**
   - Create a dedicated folder for Hero Carousels
   - Use descriptive names for carousel items
   - Group related slides together

2. **Performance:**
   - Optimize images before uploading (compress, resize)
   - Use WebP format when possible
   - Limit to 3-5 slides per carousel

3. **Content Strategy:**
   - Keep titles concise (under 60 characters)
   - Use compelling, action-oriented descriptions
   - Ensure CTA links are relevant and working

4. **Accessibility:**
   - Always provide alt text for images
   - Ensure sufficient color contrast
   - Test keyboard navigation

## Next Steps

After setting up the Hero Carousel:

1. **Test the component** in Experience Editor
2. **Publish the content** items
3. **Verify on frontend** that carousel displays correctly
4. **Test responsive behavior** on mobile, tablet, and desktop
5. **Configure additional carousels** for other pages as needed

For detailed component documentation, see [Hero Carousel Component Documentation](./components/hero-carousel.md).


