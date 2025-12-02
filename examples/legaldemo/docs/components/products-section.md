# Products Section Component

## Overview

The Products Section component displays a grid of product offerings with titles, descriptions, and call-to-action links. It's designed for showcasing legal products and services.

## Features

- Responsive 2-column grid layout (stacks on mobile)
- Product cards with hover effects
- Customizable CTA text and links
- Fallback content for disconnected mode
- Clyde & Co styling (brand colors, typography)

## Sitecore Template Setup

### 1. Create Products Section Template

**Template Name:** `ProductsSection`

**Fields:**
- `Title` (Single-Line Text)
  - Field Name: `title`
  - Required: No
- `Subtitle` (Rich Text)
  - Field Name: `subtitle`
  - Required: No

### 2. Create Product Item Template

**Template Name:** `ProductItem`

**Base Template:** Standard Template

**Fields:**
- `Title` (Single-Line Text)
  - Field Name: `title`
  - Required: Yes
- `Description` (Rich Text)
  - Field Name: `description`
  - Required: Yes
- `Link` (General Link)
  - Field Name: `link`
  - Required: No
- `CtaText` (Single-Line Text)
  - Field Name: `ctaText`
  - Required: No
  - Default: "Learn more"

### 3. Configure Treelist Field

Add a Treelist field to `ProductsSection` template:
- `Children` (Treelist)
  - Field Name: `children`
  - Source: `/sitecore/templates/YourProject/ProductItem`
  - Required: No

## Usage

1. Create a datasource item using the `ProductsSection` template
2. Add child items using the `ProductItem` template
3. Add the component to your page placeholder (`headless-main`)
4. Assign the datasource to the component

## Component Parameters

No parameters are currently supported.

## Styling

The component uses Clyde & Co brand colors:
- Background: `#F8F9FA` (light gray)
- Card background: White
- Primary text: `#212529` (dark gray)
- Secondary text: `#6C757D` (muted gray)
- Links/Accents: `#00677F` (brand teal)
- Hover: `#005267` (darker teal)

## Example Content

**Title:** "Our Product Offerings"

**Subtitle:** "Discover our latest legal products designed to help you navigate risk."

**Product Items:**
1. **Disputes Funding**
   - Description: "The smart choice for organisations to turn cases into cash flow"
   - Link: `/expertise/products/disputes-funding`
   - CTA: "Discover more"

2. **Climate Change Quarterly**
   - Description: "Key updates on global climate litigation and regulations"
   - Link: `/expertise/products/climate-change-quarterly`
   - CTA: "Find out more"

