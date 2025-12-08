# CIPFA Branding Guide

## Overview
This document outlines the CIPFA branding colors and assets used throughout the legaldemo site.

## Brand Colors

### Primary Colors
- **Primary Blue**: `#007BFF` (rgb(0, 123, 255))
  - Used for: Primary buttons, links, accents, navigation elements
- **Primary Hover**: `#0066CC` (rgb(0, 102, 204))
  - Used for: Hover states on buttons and links

### Neutral Colors
- **Background**: `#FFFFFF` (White)
- **Foreground/Text**: `#312C62` (Purple - matches CIPFA website)
- **Secondary**: `#F8F9FA` (Light Gray)
- **Muted**: `#6C757D` (Medium Gray)

## Color Usage

### CSS Variables
All brand colors are defined in `src/assets/styles/globals.css`:
```css
--color-primary: rgb(0, 123, 255);
--color-primary-foreground: rgb(255, 255, 255);
--color-primary-hover: rgb(0, 102, 204);
--color-accent: rgb(0, 123, 255);
--color-ring: rgb(0, 123, 255);
```

### Tailwind Classes
Use Tailwind's color utilities with the brand colors:
- `bg-[#007BFF]` - Primary background (buttons, links)
- `text-[#007BFF]` - Primary text color (links)
- `text-[#312C62]` - Body text color (purple)
- `hover:bg-[#0066CC]` - Hover state

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

### Color Migration
- **Text Color**: `#212529` → **CIPFA**: `#312C62` (Purple)
- **Link/Button Color**: `#003366` → **CIPFA**: `#007BFF` (Blue)
- **Hover Color**: `#002850` → **CIPFA**: `#0066CC` (Darker Blue)

All color references have been systematically updated throughout the codebase.

## Brand Guidelines

For official CIPFA brand guidelines, logo usage, and color specifications, please contact:
- Email: hello@cipfa.org
- Phone: +44 (0)20 7543 5600

## References
- CIPFA Website: https://www.cipfa.org/
- Logo Directory: `src/assets/images/logos/README.md`
