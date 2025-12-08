# Styling Guide - Clyde & Co Theme

This document outlines the color scheme, typography, and styling guidelines used in the Legal Demo site, matching the [Clyde & Co website](https://www.clydeco.com/en).

## Color Palette

### Primary Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Brand Primary** | `#00677F` | `rgb(0, 103, 127)` | Primary buttons, links, accents |
| **Brand Primary Hover** | `#005267` | `rgb(0, 83, 107)` | Hover states for primary elements |
| **Dark Background** | `#141414` | `rgb(20, 20, 20)` | Hero carousel backgrounds, footer |
| **Text Primary** | `#212529` | `rgb(33, 37, 41)` | Body text, headings |
| **Text Secondary** | `#141414` | `rgb(20, 20, 20)` | Dark text elements |

### Neutral Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **White** | `#FFFFFF` | `rgb(255, 255, 255)` | Backgrounds, button text |
| **Light Gray** | `#F8F9FA` | `rgb(248, 249, 250)` | Secondary backgrounds |
| **Border Gray** | `#E9ECEF` | `rgb(233, 236, 239)` | Borders, dividers |
| **Muted Text** | `#6C757D` | `rgb(108, 117, 125)` | Muted text, placeholders |

## Typography

### Font Families

#### Heading Font: Playfair Display
- **Source**: Google Fonts (via Next.js)
- **Fallback**: "PMN Caecilia W02", Georgia, serif
- **Usage**: All headings (h1-h6)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Note**: PMN Caecilia W02 is the original Clyde & Co font (Adobe Typekit), Playfair Display is used as a close alternative

#### Body Font: Inter
- **Source**: Google Fonts (via Next.js)
- **Fallback**: System fonts (-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif)
- **Usage**: Body text, buttons, navigation
- **Weights**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Typography Scale

| Element | Font Size (Mobile) | Font Size (Desktop) | Font Weight | Line Height | Letter Spacing |
|---------|-------------------|---------------------|-------------|-------------|----------------|
| **H1** | 2.25rem (36px) | 4.5rem (72px) | 300 (Light) | 1.32 | 0.81px |
| **H2** | 2rem (32px) | 3rem (48px) | 400 (Regular) | 1.2 | Normal |
| **H3** | 1.75rem (28px) | 2rem (32px) | 400 (Regular) | 1.3 | Normal |
| **Body** | 1rem (16px) | 1rem (16px) | 400 (Regular) | 1.5 | Normal |
| **Small Text** | 0.875rem (14px) | 0.875rem (14px) | 400 (Regular) | 1.4 | Normal |
| **Button** | 0.9375rem (15px) | 1rem (16px) | 500 (Medium) | 1.5 | Normal |

### Hero Carousel Typography

- **Subtitle**: 0.75rem (12px) / 0.875rem (14px) - Uppercase, tracking 0.15em
- **Title (H1)**: 2.25rem (36px) to 4.5rem (72px) - Font weight 300, letter-spacing 0.81px
- **Description**: 1rem (16px) to 1.25rem (20px) - Line height 1.5

## Component Styling

### Buttons

#### Primary Button
```css
background-color: #00677F;
color: #FFFFFF;
border-radius: 0px; /* Square corners */
padding: 12px 32px;
font-weight: 500;
```

#### Secondary Button (Outline)
```css
background-color: transparent;
color: #00677F;
border: 1px solid #00677F;
border-radius: 0px;
padding: 12px 32px;
```

#### White Button (Hero Carousel)
```css
background-color: #FFFFFF;
color: #141414;
border-radius: 0px;
padding: 16px 32px;
font-weight: 500;
```

### Hero Carousel

- **Background**: `#141414` (dark gray/black)
- **Text Color**: White (`#FFFFFF`)
- **Gradient Overlay**: `from-[#141414]/95 via-[#141414]/75 to-transparent` (left to right)
- **Content Alignment**: Left-aligned
- **Minimum Height**: 70vh

### Header

- **Background**: White (`#FFFFFF`)
- **Border**: `#E9ECEF` (light gray)
- **Shadow**: Subtle shadow-sm
- **Height**: 96px
- **Logo**: Responsive sizing (h-8 md:h-10)

### Footer

- **Background**: `#141414` (dark)
- **Text Color**: White (`#FFFFFF`)
- **Border Top**: `rgba(255, 255, 255, 0.1)`

### Page Background

- **Main Background**: White (`#FFFFFF`)
- **Text Color**: `#212529` (dark gray)

## CSS Variables

The color scheme is defined in `src/assets/styles/globals.css`:

```css
--color-primary: rgb(0, 103, 127);
--color-primary-hover: rgb(0, 83, 107);
--color-foreground: rgb(33, 37, 41);
--color-background: rgb(255, 255, 255);
--color-border: rgb(233, 236, 239);
```

## Usage Examples

### Hero Carousel Button
```tsx
<Button 
  variant="default" 
  className="bg-white text-[#141414] hover:bg-white/95 font-medium px-8 py-4 rounded-none border-0"
>
  Learn More
</Button>
```

### Primary Link
```tsx
<a href="/link" className="text-[#00677F] hover:text-[#005267] font-medium">
  Link Text
</a>
```

### Heading
```tsx
<h1 className="font-heading text-4xl font-light leading-[1.32] tracking-[0.81px] text-white md:text-5xl lg:text-6xl">
  Heading Text
</h1>
```

## Logo Files

Logo files are available in the `public/` directory:
- `logo--dark.svg` - SVG format (recommended)
- `logo--dark.png` - PNG format (fallback)

## Responsive Breakpoints

The site uses Tailwind's default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Accessibility

- **Color Contrast**: All text meets WCAG AA standards
- **Focus States**: Visible focus rings using `#00677F` color
- **Font Sizes**: Minimum 16px for body text
- **Interactive Elements**: Clear hover and focus states

## References

- [Clyde & Co Website](https://www.clydeco.com/en)
- [Playfair Display Font](https://fonts.google.com/specimen/Playfair+Display)
- [Inter Font](https://fonts.google.com/specimen/Inter)



