# Risk Areas Section Component

## Overview

The Risk Areas Section component displays a grid of risk area cards with images, titles, descriptions, and links. Perfect for showcasing key risk categories.

## Features

- Responsive 3-column grid (2 columns tablet, 3 columns desktop)
- Risk area cards with images
- Introductory text section
- Call-to-action button
- Hover effects with image zoom
- Clyde & Co styling

## Sitecore Template Setup

### 1. Create Risk Areas Section Template

**Template Name:** `RiskAreasSection`

**Fields:**
- `Title` (Single-Line Text)
  - Field Name: `title`
  - Required: No
- `IntroText` (Rich Text)
  - Field Name: `introText`
  - Required: No
- `CtaText` (Single-Line Text)
  - Field Name: `ctaText`
  - Required: No
  - Default: "View all six risks"
- `CtaLink` (General Link)
  - Field Name: `ctaLink`
  - Required: No

### 2. Create Risk Area Item Template

**Template Name:** `RiskAreaItem`

**Base Template:** Standard Template

**Fields:**
- `Title` (Single-Line Text)
  - Field Name: `title`
  - Required: Yes
- `Description` (Rich Text)
  - Field Name: `description`
  - Required: Yes
- `Image` (Image)
  - Field Name: `image`
  - Required: Yes
- `Link` (General Link)
  - Field Name: `link`
  - Required: No
- `Url` (Single-Line Text)
  - Field Name: `url`
  - Required: No (alternative to Link field)

### 3. Configure Treelist Field

Add a Treelist field to `RiskAreasSection` template:
- `Children` (Treelist)
  - Field Name: `children`
  - Source: `/sitecore/templates/YourProject/RiskAreaItem`
  - Required: No

## Usage

1. Create a datasource item using the `RiskAreasSection` template
2. Add child items using the `RiskAreaItem` template
3. Add the component to your page placeholder (`headless-main`)
4. Assign the datasource to the component

## Component Parameters

No parameters are currently supported.

## Styling

- Background: `#F8F9FA` (light gray)
- Card background: White
- Card border: `#E9ECEF` (light gray)
- Title text: `#212529` (dark gray)
- Description text: `#6C757D` (muted gray)
- CTA link: `#00677F` (brand teal)
- Button: `#00677F` background, white text

## Example Content

**Title:** "Emerging and evolving risks"

**IntroText:**
"With nearly a century of experience at the heart of global commerce, we are experts in managing risk and handling new complexities..."

**Risk Area Items:**
1. **Economic Insights**
   - Description: "Risks arising from changes and uncertainties in the global economy"
   - URL: "/insights/risk-area/economic-insights"

2. **People Dynamics**
   - Description: "Steering the complexities of people management in business"
   - URL: "/insights/risk-area/people-dynamics"

3. **Tech & AI Evolution**
   - Description: "Navigating the ever-evolving world of technology & data"
   - URL: "/insights/risk-area/tech-ai-evolution"

4. **Geopolitical Outlook**
   - Description: "Addressing the consequences of a volatile geopolitical environment"
   - URL: "/insights/risk-area/geopolitical-outlook"

5. **Regulatory Movement**
   - Description: "Charting differing international regulatory regimes and compliance"
   - URL: "/insights/risk-area/regulatory-movement"

6. **Climate Change**
   - Description: "Risks and liabilities arising from climate change and environmental issues"
   - URL: "/insights/risk-area/climate-change"

