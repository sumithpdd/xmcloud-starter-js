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
   - **ComponentName**: `hero-carousel` ⚠️ **IMPORTANT: Must be kebab-case to match component map**
   - **Controller**: (leave empty for Next.js)
   - **Controller Action**: (leave empty)
   - **View**: (leave empty)
   - **Datasource Template**: Select `HeroCarousel` template
   - **Datasource Location**: `/sitecore/content/LegalDemo/Components/HeroCarousels`
   - **Placeholder**: `headless-main`
   - **Rendering Contents Resolver**: Set to `/sitecore/system/Modules/Layout Service/Rendering Contents Resolvers/Datasource Item Children Resolver` (see Step 2a below)

#### Step 2a: Configure Children Fetching (Choose One Method)

**Option A: Use Rendering Contents Resolver (Recommended - No GraphQL)**

1. In the rendering properties, find the **Rendering Contents Resolver** field
2. Set it to: `/sitecore/system/Modules/Layout Service/Rendering Contents Resolvers/Datasource Item Children Resolver`
3. This automatically includes all children of the datasource item
4. **Save the rendering**

**Option B: Add ComponentQuery GraphQL Query**

**Important**: If you prefer full control or need to filter children by template, add this GraphQL query to the `ComponentQuery` field:

```graphql
query HeroCarousel($datasource: String!, $language: String!) {
  datasource: item(path: $datasource, language: $language) {
    ... on HeroCarousel {
      id
    }
    children {
      results {
        ... on HeroCarouselSlide {
          title: Title {
            jsonValue
          }
          subtitle: Subtitle {
            jsonValue
          }
          description: Description {
            jsonValue
          }
          image: Image {
            jsonValue
          }
          link: Link {
            jsonValue
          }
          backgroundColor: BackgroundColor {
            jsonValue
          }
        }
      }
    }
  }
}
```

**Note**: Adjust field names (`Title`, `Subtitle`, etc.) to match your exact Sitecore template field names. For detailed instructions, see [Hero Carousel GraphQL Setup Guide](./hero-carousel-graphql-setup.md).

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

For detailed component documentation, see [Hero Carousel Component Documentation](./components/HeroCarousel.md).

## Products Section Component Setup

### Step 1: Create Templates

#### Products Section Template

1. Navigate to **Sitecore → Content → Templates**
2. Create a new template: `/sitecore/templates/Project/LegalDemo/ProductsSection`
3. Base template: `/sitecore/templates/System/Standard template` (or your custom base component template)

4. **Add the following fields:**

   | Field Name | Field Type | Section | Required | Description |
   |------------|------------|---------|----------|-------------|
   | `Title` | Single-Line Text | Data | No | Section heading (H2) |
   | `Subtitle` | Rich Text | Data | No | Section description/introduction |

#### Product Item Template

1. Navigate to **Sitecore → Content → Templates**
2. Create a new template: `/sitecore/templates/Project/LegalDemo/ProductItem`
3. Base template: `/sitecore/templates/System/Standard template` (or your custom base component template)

4. **Add the following fields:**

   | Field Name | Field Type | Section | Required | Description |
   |------------|------------|---------|----------|-------------|
   | `Title` | Single-Line Text | Data | Yes | Product name/title |
   | `Description` | Rich Text | Data | No | Product description |
   | `Link` | General Link | Data | No | Call-to-action link to product page |
   | `CTA Text` | Single-Line Text | Data | No | Custom text for CTA link (defaults to "Learn more") |

### Step 2: Create Rendering

1. Navigate to **Sitecore → Layout → Renderings**
2. Create a new rendering: `/sitecore/layout/Renderings/Project/LegalDemo/ProductsSection`
3. **Configure rendering:**
   - **Name**: Products Section
   - **Controller**: (leave empty for Next.js)
   - **Controller Action**: (leave empty)
   - **View**: (leave empty)
   - **Datasource Template**: Select `ProductsSection` template
   - **Datasource Location**: `/sitecore/content/LegalDemo/Components/ProductsSections`
   - **Placeholder**: `headless-main`

### Step 3: Register Component

The component should be automatically registered when you run:
```bash
npm run sitecore-tools:generate-map
```

Or it will be generated during build. Verify it exists in `.sitecore/component-map.ts`.

### Step 4: Create Content Items

1. Navigate to **Sitecore → Content → LegalDemo → Components**
2. Create a folder: `ProductsSections` (if it doesn't exist)
3. Create a new item:
   - **Template**: `ProductsSection`
   - **Name**: `Homepage Products Section`
   - **Location**: `/sitecore/content/LegalDemo/Components/ProductsSections`

4. **Fill in section fields:**
   - **Title**: `Our Products`
   - **Subtitle**: `Discover our range of services and solutions`

5. **Create product child items** under the Products Section item:
   - Right-click the Products Section item → Insert → Product Item
   - **Product 1:**
     - Name: `Disputes Funding`
     - Title: `Disputes Funding`
     - Description: `The smart choice for organisations to turn cases into cash flow`
     - Link: `/en/expertise/products/disputes-funding`
     - CTA Text: `Discover more`
   
   - **Product 2:**
     - Name: `Climate Change Quarterly`
     - Title: `Climate Change Quarterly`
     - Description: `Key updates on global climate litigation and regulations`
     - Link: `/en/expertise/products/climate-change-quarterly`
     - CTA Text: `Find out more`

### Step 5: Add Component to Page

1. Navigate to your page in **Experience Editor** or **Content Editor**
2. Select the `headless-main` placeholder
3. Click **Add Component** or use the component insertion button
4. Select **Products Section**
5. **Assign datasource**: Select `Homepage Products Section` (created in Step 4)

For detailed component documentation, see [Products Section Component Documentation](./components/products-section.md).

## Risk Areas Section Component Setup

### Step 1: Create Templates

#### Risk Areas Section Template

1. Navigate to **Sitecore → Content → Templates**
2. Create a new template: `/sitecore/templates/Project/LegalDemo/RiskAreasSection`
3. Base template: `/sitecore/templates/System/Standard template` (or your custom base component template)

4. **Add the following fields:**

   | Field Name | Field Type | Section | Required | Description |
   |------------|------------|---------|----------|-------------|
   | `Title` | Single-Line Text | Data | No | Section heading (H2) |
   | `Intro Text` | Rich Text | Data | No | Introduction/description text for the section |
   | `CTA Text` | Single-Line Text | Data | No | Text for the call-to-action button |
   | `CTA Link` | General Link | Data | No | Link for the call-to-action button |

#### Risk Area Item Template

1. Navigate to **Sitecore → Content → Templates**
2. Create a new template: `/sitecore/templates/Project/LegalDemo/RiskAreaItem`
3. Base template: `/sitecore/templates/System/Standard template` (or your custom base component template)

4. **Add the following fields:**

   | Field Name | Field Type | Section | Required | Description |
   |------------|------------|---------|----------|-------------|
   | `Title` | Single-Line Text | Data | Yes | Risk area name/title |
   | `Description` | Rich Text | Data | No | Risk area description |
   | `Image` | Image | Data | No | Featured image for the risk area card (recommended 4:3 aspect ratio) |
   | `Link` | General Link | Data | No | Link to risk area detail page |
   | `URL` | Single-Line Text | Data | No | Alternative URL field (fallback if Link not set) |

### Step 2: Create Rendering

1. Navigate to **Sitecore → Layout → Renderings**
2. Create a new rendering: `/sitecore/layout/Renderings/Project/LegalDemo/RiskAreasSection`
3. **Configure rendering:**
   - **Name**: Risk Areas Section
   - **Controller**: (leave empty for Next.js)
   - **Controller Action**: (leave empty)
   - **View**: (leave empty)
   - **Datasource Template**: Select `RiskAreasSection` template
   - **Datasource Location**: `/sitecore/content/LegalDemo/Components/RiskAreasSections`
   - **Placeholder**: `headless-main`

### Step 3: Register Component

The component should be automatically registered when you run:
```bash
npm run sitecore-tools:generate-map
```

Or it will be generated during build. Verify it exists in `.sitecore/component-map.ts`.

### Step 4: Create Content Items

1. Navigate to **Sitecore → Content → LegalDemo → Components**
2. Create a folder: `RiskAreasSections` (if it doesn't exist)
3. Create a new item:
   - **Template**: `RiskAreasSection`
   - **Name**: `Homepage Risk Areas Section`
   - **Location**: `/sitecore/content/LegalDemo/Components/RiskAreasSections`

4. **Fill in section fields:**
   - **Title**: `Risk Areas`
   - **Intro Text**: `Explore our comprehensive risk analysis across six key areas that impact businesses globally`
   - **CTA Text**: `View all six risks`
   - **CTA Link**: `/en/insights/risk-areas`

5. **Create risk area child items** under the Risk Areas Section item:
   - Right-click the Risk Areas Section item → Insert → Risk Area Item
   - **Risk Area 1:**
     - Name: `Economic Insights`
     - Title: `Economic Insights`
     - Description: `Risks arising from changes and uncertainties in the global economy`
     - Image: Upload/select an image (4:3 aspect ratio recommended)
     - Link: `/en/insights/risk-area/economic-insights`
   
   - **Risk Area 2:**
     - Name: `People Dynamics`
     - Title: `People Dynamics`
     - Description: `Steering the complexities of people management in business`
     - Image: Upload/select an image
     - Link: `/en/insights/risk-area/people-dynamics`
   
   - **Risk Area 3:**
     - Name: `Tech & AI Evolution`
     - Title: `Tech & AI Evolution`
     - Description: `Navigating the ever-evolving world of technology & data`
     - Image: Upload/select an image
     - Link: `/en/insights/risk-area/tech-ai-evolution`
   
   - **Risk Area 4:**
     - Name: `Geopolitical Outlook`
     - Title: `Geopolitical Outlook`
     - Description: `Addressing the consequences of a volatile geopolitical environment`
     - Image: Upload/select an image
     - Link: `/en/insights/risk-area/geopolitical-outlook`
   
   - **Risk Area 5:**
     - Name: `Regulatory Movement`
     - Title: `Regulatory Movement`
     - Description: `Charting differing international regulatory regimes and compliance`
     - Image: Upload/select an image
     - Link: `/en/insights/risk-area/regulatory-movement`
   
   - **Risk Area 6:**
     - Name: `Climate Change`
     - Title: `Climate Change`
     - Description: `Risks and liabilities arising from climate change and environmental issues`
     - Image: Upload/select an image
     - Link: `/en/insights/risk-area/climate-change`

### Step 5: Add Component to Page

1. Navigate to your page in **Experience Editor** or **Content Editor**
2. Select the `headless-main` placeholder
3. Click **Add Component** or use the component insertion button
4. Select **Risk Areas Section**
5. **Assign datasource**: Select `Homepage Risk Areas Section` (created in Step 4)

### Step 6: Image Optimization Tips

1. **Aspect Ratio**: Use 4:3 aspect ratio for consistent card heights (e.g., 800x600px, 1200x900px)
2. **Format**: Use WebP format when possible for better performance
3. **Size**: Optimize images before uploading (compress, resize to appropriate dimensions)
4. **Alt Text**: Always provide descriptive alt text for accessibility

For detailed component documentation, see [Risk Areas Section Component Documentation](./components/risk-areas-section.md).

## Component Registration Verification

After creating components, verify they are registered:

1. **Check component map file**: Open `.sitecore/component-map.ts` (if accessible)
2. **Run generation command**:
   ```bash
   npm run sitecore-tools:generate-map
   ```
3. **Verify in build output**: Check that components appear in build logs
4. **Test in Experience Editor**: Components should appear in the component picker

## General Component Setup Checklist

For any new component, follow this checklist:

- [ ] Create component template in Sitecore
- [ ] Create child item template (if needed)
- [ ] Add all required fields to templates
- [ ] Create rendering in Sitecore
- [ ] Configure datasource template and location
- [ ] Register component (auto-generated via build)
- [ ] Create content items with proper structure
- [ ] Test component in Experience Editor
- [ ] Verify component displays correctly on frontend
- [ ] Test responsive behavior
- [ ] Verify accessibility features
- [ ] Publish content items

## Field Reference Summary

### Products Section Fields

| Field Name | Sitecore Field Type | GraphQL Field Name | Notes |
|------------|---------------------|-------------------|-------|
| Title | Single-Line Text | `title` | Section heading |
| Subtitle | Rich Text | `subtitle` | Section description |
| Product Title | Single-Line Text | `title` | Required for products |
| Product Description | Rich Text | `description` | Product description |
| Product Link | General Link | `link` | CTA link |
| Product CTA Text | Single-Line Text | `ctaText` | Custom CTA text |

### Risk Areas Section Fields

| Field Name | Sitecore Field Type | GraphQL Field Name | Notes |
|------------|---------------------|-------------------|-------|
| Title | Single-Line Text | `title` | Section heading |
| Intro Text | Rich Text | `introText` | Introduction text |
| CTA Text | Single-Line Text | `ctaText` | Button text |
| CTA Link | General Link | `ctaLink` | Button link |
| Risk Area Title | Single-Line Text | `title` | Required for risk areas |
| Risk Area Description | Rich Text | `description` | Risk area description |
| Risk Area Image | Image | `image` | Featured image (4:3 ratio) |
| Risk Area Link | General Link | `link` | Detail page link |
| Risk Area URL | Single-Line Text | `url` | Alternative URL field |


