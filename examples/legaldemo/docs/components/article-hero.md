# Article Hero Component

## Overview

The Article Hero component provides a full-width hero section for article and report pages. Features a background image, title, subtitle, category badge, date, and location information.

## Features

- Full-width hero with background image
- Gradient overlay for text readability
- Decorative brand-colored element
- Category badge
- Date and location display with icons
- Responsive height (500px mobile, 600px desktop)
- Clyde & Co styling

## Sitecore Template Setup

### Create Article Hero Template

**Template Name:** `ArticleHero`

**Fields:**
- `Category` (Single-Line Text)
  - Field Name: `category`
  - Required: No
  - Display: Uppercase with tracking
- `Title` (Single-Line Text)
  - Field Name: `title`
  - Required: Yes
- `Subtitle` (Single-Line Text)
  - Field Name: `subtitle`
  - Required: No
- `Date` (Single-Line Text)
  - Field Name: `date`
  - Required: No
  - Example: "22 May 2025"
- `Location` (Single-Line Text)
  - Field Name: `location`
  - Required: No
  - Example: "London, UK"
- `BackgroundImage` (Image)
  - Field Name: `backgroundImage`
  - Required: Yes

## Usage

1. Create a datasource item using the `ArticleHero` template
2. Add the component to your page placeholder (`headless-main`)
3. Assign the datasource to the component
4. Upload a background image
5. Fill in the title and other optional fields

## Component Parameters

No parameters are currently supported.

## Styling

- Background: Dark gradient overlay on image
- Decorative element: `#00677F` (brand teal) at 80% opacity
- Text color: White
- Category: White at 90% opacity, uppercase, tracking-wider
- Title: Large heading (4xl mobile, 6xl desktop)
- Font: Playfair Display (heading font)

## Example Content

**Category:** "Report"

**Title:** "Corporate Risk Radar 2025"

**Subtitle:** "Embedding resilience to navigate an evolving risk landscape"

**Date:** "22 May 2025"

**Location:** "London, UK"

**BackgroundImage:** High-quality hero image (recommended: 1920x600px or larger)



