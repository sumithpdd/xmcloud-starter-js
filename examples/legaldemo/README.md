# Legal Demo - Sitecore XM Cloud Starter (NextJS)

## Overview
Legal Demo is a professional legal firm website template built to showcase XM Cloud capabilities using the Content SDK. This site mimics the structure and components of a modern legal firm website, featuring carousels, article listings, and content management capabilities.

## Developer Expectations:
* Tailwind-based styling (Shadcn)
* Personalized homepage via URL parameters
* Modular components for reuse
* Localization support for English (en) and Canadian English (en-CA)

## Preconditions
1. You have deployed your XM Cloud environment already. If not follow this link: [Deploy a Project and Environment](https://doc.sitecore.com/xmc/en/developers/xm-cloud/deploy-a-project-and-environment.html)

## Build and run site locally
1. Clone the repository (if not yet done) 
    ```git clone https://github.com/Sitecore/xmcloud-starter-js```
2. Starting from the root of the repository navigate to site app folder
    ```cd examples\legaldemo\```
3. Copy the environment file ```.env.remote.example```
4. Rename the copied file to ```.env.local```
5. Edit ```.env.local``` and provide a value for ```SITECORE_EDGE_CONTEXT_ID```, ```NEXT_PUBLIC_DEFAULT_SITE_NAME``` (set to `legaldemo`), ```NEXT_PUBLIC_SITECORE_EDGE_CONTEXT_ID```, ```SITECORE_EDITING_SECRET```. (More info: [Environment variables in XM Cloud](https://doc.sitecore.com/xmc/en/developers/xm-cloud/get-the-environment-variables-for-a-site.html))

6. Install dependencies:
   from ```legaldemo``` run ```npm install```
7. Run the site locally: 
    ```npm run dev```
8. Access the site:
Visit http://localhost:3000 in your browser.

## Add Editing host to XM Cloud
If you have not enabled the split deployment feature your edting hosts are automatically created based on the xmcloud.build.json if enabled is set to true. The following steps are not required. Only if you have enabled the split deployment feature, continue with the next steps.

1. Go to Sitecore Cloud Portal https://portal.sitecorecloud.io
2. Open XM Cloud Deploy
3. Select Project that has been deployed
4. Switch to tab "Editing Hosts"
5. Click "Add editing host"
6. Provide Editing host name  ```legaldemo``` as per xmcloud.build.json
7. Check if the link to authoring environment is set correctly (should be by default)
8.  Check if the source code provider is set correctly (should be by default)
9. Check if the GitHub Account is set correctly (should be by default)
10. Check if repository is set correctly (should be by default)
11. Check if Branch is set correctly (should be by default)
12. Set the Auto deploy option (recommended)
13. No custom environment variables are required
14. Click "Save"
15. On the new new editing host click the ... and hit "Build and deploy"

Additional Info: You do not have to create rendering host items in XM Cloud as those are created automatically for you when creating a rendering host. Mapping of sites using site templates to editing hosts is also done automatically.

## Components

This project includes a comprehensive set of components designed for legal firm websites, styled to match the Clyde & Co design system.

### Hero Carousel Component

A full-width, responsive carousel component designed for hero sections. Supports multiple slides with images, titles, subtitles, descriptions, and call-to-action links.

**Features:**
- Multiple slides with customizable content
- Autoplay functionality (configurable)
- Navigation arrows and dot indicators
- Responsive design
- Full Sitecore XM Cloud integration

**Documentation:** See [Hero Carousel Component Documentation](./docs/components/hero-carousel.md) for detailed setup instructions, Sitecore field requirements, and usage examples.

### Products Section Component

Displays a grid of product offerings with titles, descriptions, and call-to-action links. Designed for showcasing services, products, or offerings in a clean, card-based layout.

**Features:**
- Responsive 2-column grid layout (mobile stacks to single column)
- Product cards with hover effects and transitions
- Section title and subtitle support
- Customizable CTA text and links
- Full Sitecore XM Cloud integration
- Editing mode support
- Fallback default content for disconnected mode

**Documentation:** See [Products Section Component Documentation](./docs/components/products-section.md) for detailed setup instructions, Sitecore field requirements, and usage examples.

### Insights Section Component

Displays a grid of insight articles with images, categories, titles, and dates.

**Features:**
- Responsive 3-column grid (2 columns on tablet, 3 on desktop)
- Article cards with images
- Category and subcategory support
- Date display
- Hover effects

**Sitecore Fields:**
- `Title` (Single-Line Text) - Section heading
- `Children` (Treelist) - Insight items with:
  - `Category` (Single-Line Text)
  - `SubCategory` (Single-Line Text, optional)
  - `Title` (Single-Line Text)
  - `Date` (Single-Line Text)
  - `Image` (Image)
  - `Url` (Single-Line Text) - Link URL

### Intro Section Component

A simple text section with highlighted key phrases, perfect for homepage introductions.

**Features:**
- Large heading text
- Rich text support with HTML spans for highlighting
- Max-width container for readability

**Sitecore Fields:**
- `Heading` (Rich Text) - Main heading text (supports HTML spans with `text-[#00677F]` class for highlighting)

### Risk Areas Section Component

Displays a grid of risk category cards with images, titles, descriptions, and links. Includes a section header with title, intro text, and a call-to-action button, followed by a responsive grid of risk area cards.

**Features:**
- Responsive grid layout (1 column mobile, 2 columns tablet, 3 columns desktop)
- Risk area cards with images and hover effects
- Section header with title, intro text, and CTA button
- Image hover effects with scale animation
- Full Sitecore XM Cloud integration
- Editing mode support
- Fallback default content for disconnected mode

**Documentation:** See [Risk Areas Section Component Documentation](./docs/components/risk-areas-section.md) for detailed setup instructions, Sitecore field requirements, and usage examples.

### Article Hero Component

A hero section for article/report pages with background image, title, subtitle, category, date, and location.

**Features:**
- Full-width hero with background image
- Gradient overlay
- Decorative element
- Category badge
- Date and location display

**Sitecore Fields:**
- `Category` (Single-Line Text) - Article category
- `Title` (Single-Line Text) - Article title
- `Subtitle` (Single-Line Text) - Article subtitle
- `Date` (Single-Line Text) - Publication date
- `Location` (Single-Line Text) - Article location
- `BackgroundImage` (Image) - Hero background image

### Article Content Component

Displays article content sections with table of contents navigation.

**Features:**
- Table of contents with anchor links
- Multiple content sections
- Download button support
- Rich text content

**Sitecore Fields:**
- `DownloadButtonText` (Single-Line Text) - Download button text
- `DownloadButtonLink` (General Link) - Download button link
- `Children` (Treelist) - Content sections with:
  - `Title` (Single-Line Text) - Section heading
  - `Content` (Rich Text) - Section content
  - `Id` (Single-Line Text) - Anchor ID (optional)

## Component Documentation

Detailed documentation for all custom components is available in the [docs/components](./docs/components/) directory:

### Quick Reference

- [Components Reference Table](./docs/components/components-reference-table.md) - Comprehensive table with all component details, fields, and setup requirements

### Component Documentation

- [Hero Carousel](./docs/components/hero-carousel.md) - Full-width carousel component
- [Products Section](./docs/components/products-section.md) - Product offerings grid
- [Risk Areas Section](./docs/components/risk-areas-section.md) - Risk category cards with images and CTA button
- [Insights Section](./docs/components/insights-section.md) - Article/insight grid
- [Intro Section](./docs/components/intro-section.md) - Homepage introduction text
- [Article Hero](./docs/components/article-hero.md) - Article page hero section
- [Article Content](./docs/components/article-content.md) - Article content with TOC

## Sitecore Setup Guide

For step-by-step instructions on setting up components in Sitecore XM Cloud, see the [Sitecore Setup Guide](./docs/sitecore-setup.md). This guide includes:

- Template creation instructions for all components
- Field configuration and requirements
- Content item setup and structure
- Component registration and verification
- Troubleshooting tips and best practices

### Component Registration

Components can be registered automatically or manually:

- **Automatic Registration**: Components are automatically registered during the build process. See the [Component Registration Guide](./docs/component-registration-guide.md) for details.
- **Manual Registration**: To register only specific components and exclude unwanted ones, see the [Manual Component Map Setup Guide](./docs/manual-component-map-setup.md).

## Additional Resources

[Sitecore Content SDK Documentation](https://doc.sitecore.com/xmc/en/developers/content-sdk/sitecore-content-sdk-for-xm-cloud.html)
