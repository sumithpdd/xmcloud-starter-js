# Insights Section Component

## Overview

The Insights Section component displays a grid of insight articles with images, categories, titles, and dates. Perfect for showcasing blog posts, articles, and thought leadership content.

## Features

- Responsive grid layout (1 column mobile, 2 columns tablet, 3 columns desktop)
- Article cards with images
- Category and subcategory support
- Date display
- Hover effects with image zoom
- Clyde & Co styling

## Sitecore Template Setup

### 1. Create Insights Section Template

**Template Name:** `InsightsSection`

**Fields:**
- `Title` (Single-Line Text)
  - Field Name: `title`
  - Required: No

### 2. Create Insight Item Template

**Template Name:** `InsightItem`

**Base Template:** Standard Template

**Fields:**
- `Category` (Single-Line Text)
  - Field Name: `category`
  - Required: Yes
- `SubCategory` (Single-Line Text)
  - Field Name: `subCategory`
  - Required: No
- `Title` (Single-Line Text)
  - Field Name: `title`
  - Required: Yes
- `Date` (Single-Line Text)
  - Field Name: `date`
  - Required: Yes
  - Example: "22 May 2025"
- `Image` (Image)
  - Field Name: `image`
  - Required: Yes
- `Url` (Single-Line Text)
  - Field Name: `url`
  - Required: Yes
  - Example: "/insights/water-scarcity"

### 3. Configure Treelist Field

Add a Treelist field to `InsightsSection` template:
- `Children` (Treelist)
  - Field Name: `children`
  - Source: `/sitecore/templates/YourProject/InsightItem`
  - Required: No

## Usage

1. Create a datasource item using the `InsightsSection` template
2. Add child items using the `InsightItem` template
3. Add the component to your page placeholder (`headless-main`)
4. Assign the datasource to the component

## Component Parameters

No parameters are currently supported.

## Styling

- Background: White
- Card border: `#E9ECEF` (light gray)
- Category text: `#00677F` (brand teal)
- Title text: `#212529` (dark gray)
- Date text: `#6C757D` (muted gray)
- Hover: Card shadow and image zoom effect

## Example Content

**Title:** "Latest Insights"

**Insight Items:**
1. **Water Scarcity**
   - Category: "Water Scarcity"
   - Date: "22 May 2025"
   - URL: "/insights/water-scarcity"

2. **Beyond the flames: Lithium batteries**
   - Category: "Podcast"
   - SubCategory: "Regulatory movement | Insurance"
   - Date: "22 May 2025"
   - URL: "/insights/lithium-batteries"

3. **Climate Litigation & Greenwashing**
   - Category: "Commercial Disputes"
   - Date: "27 May 2025"
   - URL: "/insights/climate-litigation"



