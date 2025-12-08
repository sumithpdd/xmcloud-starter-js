# CIPFA Branding Guide

## Overview
This document outlines the CIPFA branding colors and assets used throughout the legaldemo site.

## Brand Colors

### Primary Colors
- **Primary Blue**: `#003366` (rgb(0, 51, 102))
  - Used for: Primary buttons, links, accents, navigation elements
- **Primary Hover**: `#002850` (rgb(0, 40, 80))
  - Used for: Hover states on buttons and links

### Neutral Colors
- **Background**: `#FFFFFF` (White)
- **Foreground/Text**: `#212529` (Dark Gray)
- **Secondary**: `#F8F9FA` (Light Gray)
- **Muted**: `#6C757D` (Medium Gray)

## Color Usage

### CSS Variables
All brand colors are defined in `src/assets/styles/globals.css`:
```css
--color-primary: rgb(0, 51, 102);
--color-primary-foreground: rgb(255, 255, 255);
--color-primary-hover: rgb(0, 40, 80);
--color-accent: rgb(0, 51, 102);
--color-ring: rgb(0, 51, 102);
```

### Tailwind Classes
Use Tailwind's color utilities with the brand colors:
- `bg-[#003366]` - Primary background
- `text-[#003366]` - Primary text color
- `hover:bg-[#002850]` - Hover state

## Logo

### Location
The CIPFA logo should be placed in:
```
src/assets/images/logos/cipfa-logo.svg
```
or
```
src/assets/images/logos/cipfa-logo.png
```

### Download Instructions
1. Visit https://www.cipfa.org/
2. Right-click on the CIPFA logo in the header
3. Save the image as `cipfa-logo.svg` (preferred) or `cipfa-logo.png`
4. Place the file in `src/assets/images/logos/`

### Usage in Components
```tsx
import Image from 'next/image';

<Image 
  src="/assets/images/logos/cipfa-logo.svg" 
  alt="CIPFA" 
  width={200} 
  height={60}
/>
```

## Components Updated

The following components have been updated with CIPFA branding:

- ✅ `HeroCarousel` - Updated all color references
- ✅ `HeroCarouselSlide` - Updated button and text colors
- ✅ `ProductsSection` - Updated link and hover colors
- ✅ `ArticleContent` - Updated button colors
- ✅ `ArticleHero` - Updated accent color
- ✅ `IntroSection` - Updated text highlight colors
- ✅ `InsightsSection` - Updated link colors
- ✅ `RiskAreasSection` - Updated button and link colors
- ✅ `Button` component - Updated all variants
- ✅ Global CSS - Updated link colors

## Migration Notes

### Old Colors (Clyde & Co)
- Primary: `#00677F` → **CIPFA**: `#003366`
- Hover: `#005267` → **CIPFA**: `#002850`

All color references have been systematically updated throughout the codebase.

## Brand Guidelines

For official CIPFA brand guidelines, logo usage, and color specifications, please contact:
- Email: hello@cipfa.org
- Phone: +44 (0)20 7543 5600

## References
- CIPFA Website: https://www.cipfa.org/
- Logo Directory: `src/assets/images/logos/README.md`
