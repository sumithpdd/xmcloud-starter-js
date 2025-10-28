# Header Component

Global navigation header component with logo, navigation menu, language selector, search, and call-to-action button. Based on the Colt DCS website design.

## Overview

The Header component is a sticky navigation bar that appears at the top of every page. It includes:
- Company logo with link to homepage
- Primary navigation menu with dropdown support
- Search functionality
- Language selector with flag images
- Careers link
- Call-to-action button
- Mobile-responsive hamburger menu

## Usage

```typescript
import Header from '@/components/colt/header';

<Header 
  fields={{
    logo: imageField,
    ctaText: { value: 'Get a quote' },
    ctaLink: { value: { href: '/contact', text: 'Get a quote' } },
    navigationItems: [
      {
        id: 'nav-1',
        fields: {
          title: { value: 'Data Centres' },
          link: { value: { href: '/data-centres', text: 'Data Centres' } }
        }
      },
      // ... more navigation items
    ],
    languages: [
      { code: 'en-GB', name: 'English', flagUrl: 'https://flagcdn.com/w40/gb.png' },
      { code: 'jp', name: 'Japanese', flagUrl: 'https://flagcdn.com/w40/jp.png' }
    ]
  }}
/>
```

## Props Structure

```typescript
interface NavigationItem {
  id: string;
  fields: {
    title: Field<string>;
    link?: LinkField;
  };
}

interface LanguageOption {
  code: string;
  name: string;
  flagUrl?: string;
}

interface HeaderProps extends ComponentProps {
  fields: {
    logo?: ImageField;
    ctaText?: Field<string>;
    ctaLink?: LinkField;
    navigationItems?: NavigationItem[];
    languages?: LanguageOption[];
  };
}
```

## Sitecore Template

### Component Template: Header

**Template Fields:**
- `Logo` (Image) - Company logo image
  - Recommended path: `/-/media/Project/colt/imgi_1_colt-logo-white`
  - Dimensions: 122px × 40px
  - Format: SVG (white logo for dark background)
- `CTAText` (Single-Line Text) - Button text (e.g., "Get a quote")
- `CTALink` (General Link) - Call-to-action button destination
- `NavigationItems` (Multilist) - List of navigation items
- `Languages` (Multilist or Custom) - Available language options

**Datasource Template: Navigation Item**

- `Title` (Single-Line Text) - Navigation label
- `Link` (General Link) - Optional destination URL
- `Children` (Child Items) - Optional sub-menu items

## Features

### 1. Sticky Navigation

The header remains fixed at the top of the page while scrolling:

```typescript
<header className="sticky top-0 z-50 bg-[#00BFA5] shadow-sm">
```

### 2. Logo with Homepage Link

The logo links back to the homepage:

```typescript
<a href="/" className="flex items-center">
  {props.fields?.logo ? (
    <Image field={props.fields.logo} className="h-[40px] w-[122px]" />
  ) : (
    <img
      src="/-/media/Project/colt/imgi_1_colt-logo-white"
      alt="Colt Data Centre Services"
      className="h-[40px] w-[122px]"
    />
  )}
</a>
```

### 3. Navigation Menu

Primary navigation items with dropdown arrow indicators:

```typescript
<nav className="hidden lg:flex items-center gap-8">
  {props.fields?.navigationItems?.map((item) => (
    <div key={item.id} className="relative group">
      {item.fields?.link?.value?.href ? (
        <a href={item.fields.link.value.href}>
          <Text field={item.fields.title} />
        </a>
      ) : (
        <button>
          <Text field={item.fields.title} />
        </button>
      )}
    </div>
  ))}
</nav>
```

Default navigation items (if no datasource):
- Data Centres
- Developments
- Solutions
- Sustainability
- About
- Media Room
- Contact

### 4. Language Selector

Dropdown selector with flag images for multi-language support:

```typescript
const defaultLanguages: LanguageOption[] = [
  { code: 'en-GB', name: 'English', flagUrl: 'https://flagcdn.com/w40/gb.png' },
  { code: 'jp', name: 'Japanese', flagUrl: 'https://flagcdn.com/w40/jp.png' },
  { code: 'de', name: 'German', flagUrl: 'https://flagcdn.com/w40/de.png' },
  { code: 'fr', name: 'French', flagUrl: 'https://flagcdn.com/w40/fr.png' },
];
```

### 5. Search Functionality

Search icon button for site search:

```typescript
<button className="text-white hover:text-white/80">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
</button>
```

### 6. Careers Link

Direct link to careers page:

```typescript
<Link href="/careers" className="text-sm text-white hover:text-white/80">
  Careers
</Link>
```

### 7. Call-to-Action Button

Prominent CTA button with configurable text and link:

```typescript
{props.fields?.ctaText && props.fields?.ctaLink ? (
  <a
    href={props.fields.ctaLink.value?.href}
    className="bg-[#6B46C1] hover:bg-[#5A3BA8] text-white px-6 py-2 rounded transition-colors"
  >
    <Text field={props.fields.ctaText} />
  </a>
) : (
  <button className="bg-[#6B46C1] hover:bg-[#5A3BA8] text-white px-6 py-2 rounded transition-colors">
    Get a quote
  </button>
)}
```

### 8. Mobile Menu

Responsive hamburger menu for mobile devices:

```typescript
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

<button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
  {/* Hamburger icon */}
</button>
```

## Layout

```
┌──────────────────────────────────────────────────────────┐
│  Sticky Header (z-50, bg-[#00BFA5])                     │
│  ┌────────────────────────────────────────────────────┐ │
│  │ Container (max-width, px-4)                        │ │
│  │  ┌──────────┬────────────────────────┬──────────┐ │ │
│  │  │ Logo      │ Navigation             │ Actions  │ │ │
│  │  │ [122×40]  │ Items (lg:flex)        │ (lg)     │ │ │
│  │  │ Home Link │                        │          │ │ │
│  │  └──────────┴────────────────────────┴──────────┘ │ │
│  │  ┌────────────────────────────────────────────┐     │ │
│  │  │ Mobile Menu (lg:hidden)                 │     │ │
│  │  │ - All navigation items                 │     │ │
│  │  │ - Careers link                         │     │ │
│  │  │ - Language selector                    │     │ │
│  │  │ - CTA button                           │     │ │
│  │  └────────────────────────────────────────────┘     │ │
│  └────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘

Desktop Layout (lg+):
┌─────────────────────────────────────────────────────────┐
│ [Logo] Data Centres [Arrow]  ...  [Search] [Careers]   │
│                          [🌐 English↓] [Get a quote]   │
└─────────────────────────────────────────────────────────┘

Mobile Layout:
┌──────────────────────────────────────┐
│ [Logo]                    [☰ Menu]  │
│ ───────────────────────────────────── │
│ │ Data Centres →                    │
│ │ Developments →                    │
│ │ Solutions →                       │
│ │ Sustainability →                  │
│ │ About →                           │
│ │ Media Room →                      │
│ │ Contact →                         │
│ │ Careers                           │
│ │ 🌐 English →                      │
│ │ [Get a quote]                    │
│ └────────────────────────────────────│
└──────────────────────────────────────┘
```

## Examples

### Example 1: Basic Header with Navigation

```typescript
{
  fields: {
    logo: {
      value: {
        src: '/-/media/Project/colt/imgi_1_colt-logo-white',
        alt: 'Colt Data Centre Services'
      }
    },
    ctaText: { value: 'Get a quote' },
    ctaLink: { 
      value: { 
        href: '/contact', 
        text: 'Get a quote' 
      } 
    },
    navigationItems: [
      {
        id: 'nav-1',
        fields: {
          title: { value: 'Data Centres' },
          link: { value: { href: '/data-centres', text: 'Data Centres' } }
        }
      },
      {
        id: 'nav-2',
        fields: {
          title: { value: 'Solutions' },
          link: { value: { href: '/solutions', text: 'Solutions' } }
        }
      }
    ]
  }
}
```

### Example 2: With Custom Languages

```typescript
{
  fields: {
    logo: logofield,
    ctaText: { value: 'Get a quote' },
    ctaLink: ctaLinkField,
    languages: [
      { code: 'en-GB', name: 'English', flagUrl: 'https://flagcdn.com/w40/gb.png' },
      { code: 'jp', name: 'Japanese', flagUrl: 'https://flagcdn.com/w40/jp.png' },
      { code: 'de', name: 'German', flagUrl: 'https://flagcdn.com/w40/de.png' },
      { code: 'fr', name: 'French', flagUrl: 'https://flagcdn.com/w40/fr.png' }
    ]
  }
}
```

### Example 3: Minimal Header

```typescript
{
  fields: {
    logo: logofield
    // Uses default navigation items and languages
  }
}
```

## Styling

The component uses Tailwind CSS with Colt brand colors:

```typescript
// Header background (Colt Teal)
header className="sticky top-0 z-50 bg-[#00BFA5] shadow-sm"

// Logo dimensions (from website)
className="h-[40px] w-[122px]"

// Navigation text
className="text-white hover:text-white/80 transition-colors"

// Search button
className="text-white hover:text-white/80"

// CTA Button
className="bg-[#6B46C1] hover:bg-[#5A3BA8] text-white px-6 py-2 rounded transition-colors"

// Mobile menu button
className="lg:hidden text-white hover:text-white/80"

// Language dropdown
className="absolute right-0 mt-2 bg-white rounded shadow-lg min-w-[160px] py-2 z-50"

// Language option
className="w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-gray-100"
```

## Brand Colors

- **Header Background:** `#00BFA5` (Colt Teal)
- **CTA Button:** `#6B46C1` (Purple)
- **CTA Button Hover:** `#5A3BA8` (Dark Purple)
- **Text:** `#FFFFFF` (White)
- **Language Dropdown:** White background

## Responsive Behavior

### Desktop (lg breakpoint and above, ≥1024px)

- All navigation items visible in horizontal menu
- Search, Careers, Language, and CTA visible on right side
- Logo visible on left
- Language dropdown on hover/click

### Mobile (< lg breakpoint, <1024px)

- Logo and hamburger menu button visible
- Full navigation menu hidden, opens from side
- All actions moved to mobile menu
- Language selector in mobile menu
- CTA button full-width in mobile menu

## Dependencies

- `next/link` - Client-side navigation
- `react` - Hooks (useState, useEffect, useRef)
- `@sitecore-content-sdk/nextjs` - Sitecore SDK
- **External:** `flagcdn.com` - Flag images for language selector

## Accessibility

- All interactive elements have proper ARIA labels
- Keyboard navigation supported
- Mobile menu toggle has descriptive label
- Language dropdown is keyboard accessible
- Search button labeled appropriately
- Color contrast meets WCAG AA standards
- Click-outside handling for language dropdown

## Performance

- Logo image should be optimized SVG
- Flag images loaded from CDN (flagcdn.com)
- Language dropdown uses proper event cleanup
- State management optimized with useRef
- No unnecessary re-renders

## Best Practices

1. **Logo Sizing** - Always use `h-[40px] w-[122px]` for proper proportions
2. **Navigation Depth** - Limit to 2-3 levels maximum
3. **Language Options** - Provide flags for all available languages
4. **CTA Text** - Keep concise, 3-5 words max
5. **Mobile Menu** - Test all menu items on touch devices
6. **Search** - Implement search modal/page for actual functionality
7. **Accessibility** - Test keyboard navigation and screen readers

## State Management

### Language Selector State

```typescript
const [isLanguageOpen, setIsLanguageOpen] = useState(false);
const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
const languageRef = useRef<HTMLDivElement>(null);

// Close dropdown when clicking outside
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
      setIsLanguageOpen(false);
    }
  };

  if (isLanguageOpen) {
    document.addEventListener('mousedown', handleClickOutside);
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [isLanguageOpen]);
```

### Mobile Menu State

```typescript
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
```

## Troubleshooting

### Logo not displaying

- Check Sitecore media library path
- Verify logo path in Sitecore field
- Ensure logo file exists and is accessible
- Check fallback image path

### Language selector not working

- Verify `languages` field has data
- Check flag URLs are accessible
- Test click-outside handler
- Verify z-index conflicts

### Mobile menu not opening

- Check Tailwind responsive classes
- Verify state management
- Test touch/click events
- Check for JavaScript errors

### Navigation items not showing

- Verify datasource is connected
- Check field names match props interface
- Ensure items exist in Sitecore
- Test fallback navigation

### CTA button not visible

- Check `ctaText` and `ctaLink` fields
- Verify button styling
- Test z-index conflicts
- Check responsive classes

## Related Components

- [Footer](./footer.md) - Global footer component
- [Navigation](./navigation.md) - Secondary navigation
- [Logo](./logo.md) - Reusable logo component

## Implementation Steps

1. **Create Sitecore Template:**
   - Header component template
   - Navigation Item child template
   - Add logo image field
   - Configure CTA fields

2. **Add to Layout:**
   - Insert rendering in layout template
   - Configure datasource
   - Set up navigation items

3. **Configure Content:**
   - Upload logo to media library
   - Create navigation items
   - Set up CTA link
   - Configure languages

4. **Test Responsive:**
   - Test desktop layout
   - Test mobile menu
   - Test language selector
   - Test all links

## Example Sitecore Item Structure

```
Header Rendering (on layout)
├── Logo: /-/media/Project/colt/imgi_1_colt-logo-white
├── CTAText: "Get a quote"
├── CTALink: General Link to /contact
└── NavigationItems: Multilist
    ├── Data Centres
    │   ├── Title: "Data Centres"
    │   └── Link: General Link to /data-centres
    ├── Developments
    │   ├── Title: "Developments"
    │   └── Link: General Link to /developments
    ├── Solutions
    │   ├── Title: "Solutions"
    │   └── Link: General Link to /solutions
    ├── Sustainability
    │   ├── Title: "Sustainability"
    │   └── Link: General Link to /sustainability
    ├── About
    │   ├── Title: "About"
    │   └── Link: General Link to /about
    ├── Media Room
    │   ├── Title: "Media Room"
    │   └── Link: General Link to /media-room
    └── Contact
        ├── Title: "Contact"
        └── Link: General Link to /contact
```

## Notes

- Based on [Colt DCS homepage](https://www.coltdatacentres.net/en-GB) header design
- Logo should always use white version for dark header background
- Language selector uses external CDN for flags (flagcdn.com)
- Search functionality requires additional implementation
- Mobile menu animations can be enhanced with Framer Motion

---

**Last Updated:** Based on [Colt DCS website](https://www.coltdatacentres.net/en-GB) header implementation
