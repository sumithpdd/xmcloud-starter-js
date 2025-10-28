# Sitecore JSS Architecture Guide

This document explains how Sitecore JSS (JavaScript Services) works in the Colt application.

## Table of Contents

1. [Overview](#overview)
2. [Architecture Layers](#architecture-layers)
3. [Component Registration](#component-registration)
4. [Data Flow](#data-flow)
5. [Rendering Modes](#rendering-modes)
6. [Pages and Layouts](#pages-and-layouts)

## Overview

Sitecore JSS is a headless CMS approach where:

- **Sitecore XM Cloud** acts as the content management backend
- **Next.js** serves as the presentation layer (headless frontend)
- **Content SDK** connects them via GraphQL/REST APIs

This decoupled architecture allows:
- Content editors to work independently in Sitecore
- Developers to build frontends with modern JavaScript frameworks
- Full-stack teams to work in parallel

## Architecture Layers

### 1. Sitecore XM Cloud (Backend)

```
Sitecore XM Cloud
├── Content Items (Pages, Components, Assets)
├── Templates (Data Schemas)
├── Layout Service (Renders Layout Data)
└── Edge API (Content API)
```

**Key Concepts:**
- **Items**: Content stored in Sitecore (pages, components, media)
- **Templates**: Define data structure (fields, types)
- **Renderings**: Configure how components appear on pages
- **Layouts**: Define page structure and component placement

### 2. Next.js Application (Frontend)

```
Next.js App
├── Pages ([[...path]].tsx)
├── Components (React Components)
├── getStaticProps (Data Fetching)
└── Component Map (Component Registry)
```

**Key Files:**
- `pages/[[...path]].tsx` - Dynamic page handler
- `src/components/` - React components
- `sitecore.config.ts` - Sitecore configuration
- `.sitecore/component-map.ts` - Auto-generated component mapping

### 3. Content SDK (Bridge)

```
Content SDK
├── getPage() - Fetch page data
├── getDictionary() - Fetch translations
└── getComponentData() - Fetch component data
```

The SDK connects to Sitecore Edge API and provides:
- Type-safe data access
- Caching strategies
- Error handling
- Preview/Edit mode support

## Component Registration

### Automatic Component Discovery

Components are automatically discovered and registered during build:

```bash
npm run sitecore-tools:generate-map
```

This generates `.sitecore/component-map.ts`:

```typescript
export default {
  'accordion-block': () => import('src/components/accordion-block'),
  'hero': () => import('src/components/hero'),
  'multi-promo': () => import('src/components/multi-promo'),
  // ... more components
};
```

### Naming Convention

For a component to be discovered:

1. **Folder name** = component name (kebab-case)
2. **Props file** = `[component-name].props.ts` or `.tsx`
3. **Main component** = `[ComponentName].tsx`

Example:
```
hero/
├── hero.props.ts    ✓
├── Hero.tsx         ✓
└── HeroDefault.dev.tsx
```

## Data Flow

### Page Request Flow

```
1. User Request
   ↓
2. Next.js Route Handler ([[...path]].tsx)
   ↓
3. getStaticProps
   ↓
4. SDK.getPage() → Sitecore Edge API
   ↓
5. Receive Layout Data
   ↓
6. Render with SitecoreProvider
   ↓
7. Component Map resolves components
   ↓
8. Components receive props
   ↓
9. React renders UI
```

### Component Data Flow

```
Sitecore Item
    ↓
Template Fields
    ↓
Edge API Response
    ↓
Component Props Interface
    ↓
Component Component
    ↓
React Rendering
```

### Example: Hero Component

```typescript
// 1. Sitecore Template Definition
Hero Template:
  - titleRequired (Single-Line Text)
  - descriptionOptional (Multi-Line Text)
  - linkOptional (General Link)

// 2. Props Interface
interface HeroProps {
  fields: {
    titleRequired: Field<string>;
    descriptionOptional?: Field<string>;
    linkOptional?: LinkField;
  };
  params: {
    colorScheme: string;
  };
}

// 3. Component Receives Data
<Hero 
  fields={{ titleRequired, descriptionOptional, linkOptional }}
  params={{ colorScheme: 'primary' }}
/>

// 4. Component Renders
export const Hero = ({ fields, params }) => {
  const { titleRequired, descriptionOptional, linkOptional } = fields;
  // Render UI
};
```

## Rendering Modes

### 1. Normal Mode (Production)

```typescript
// Fully rendered on server
// No edit/preview capabilities
page.mode.isNormal === true
```

### 2. Edit Mode (Experience Editor)

```typescript
// Inline editing enabled
// Components show edit frames
page.mode.isEditing === true
```

### 3. Preview Mode

```typescript
// Preview unpublished changes
page.mode.isPreview === true
```

### Detecting Mode

```typescript
import { useSitecore } from '@sitecore-content-sdk/nextjs';

const MyComponent = () => {
  const { page } = useSitecore();
  const isEditing = page.mode.isEditing;
  
  // Show/hide elements based on mode
  if (isEditing) {
    // Show edit controls
  }
};
```

## Pages and Layouts

### Dynamic Page Handling

```
pages/[[...path]].tsx
```

This catch-all route handles all Sitecore pages:

```typescript
export const getStaticPaths = async () => {
  // Fetch all page paths from Sitecore
  const paths = await client.getPagePaths(sites);
  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async (context) => {
  // Fetch page data from Sitecore
  const page = await client.getPage(path);
  
  return {
    props: {
      page,
      componentProps: await client.getComponentData(page.layout, components)
    }
  };
};
```

### Layout Data Structure

```typescript
page = {
  siteName: 'colt',
  language: 'en',
  itemId: '...',
  layout: {
    sitecore: {
      route: {
        name: 'Home',
        placeholders: {
          'main': [
            {
              componentName: 'hero',
              fields: { ... },
              params: { ... }
            },
            // ... more components
          ]
        }
      }
    }
  }
}
```

### Placeholders

Placeholders define where components can be added:

```typescript
<Placeholder 
  name="main" 
  rendering={route}
  // Components are automatically rendered here
/>
```

## Key Files

### sitecore.config.ts

```typescript
export default defineConfig({
  // Configure Sitecore integration
  api: {
    // API settings
  }
});
```

### sitecore.cli.config.ts

```typescript
export default defineCliConfig({
  build: {
    commands: [
      generateMetadata(),      // Create metadata files
      generateSites(),         // Generate site config
      extractFiles(),          // Extract Sitecore files
      writeImportMap()        // Create component map
    ]
  }
});
```

### component-map.ts (Generated)

```typescript
// Auto-generated file mapping components
export default {
  'component-name': () => import('src/components/component-name')
};
```

## Best Practices

### 1. Always Use TypeScript Props

```typescript
// Good ✓
interface ComponentProps {
  fields: ComponentFields;
  params: ComponentParams;
}

// Bad ✗
const Component = ({ fields, params }: any) => { }
```

### 2. Handle Missing Data

```typescript
if (!fields || !fields.title) {
  return <NoDataFallback componentName="Hero" />;
}
```

### 3. Support Edit Mode

```typescript
const { page } = useSitecore();
const isEditing = page.mode.isEditing;

// Show fallbacks for editors
if (isEditing && !content) {
  return <EmptyState />;
}
```

### 4. Use Sitecore Text Component

```typescript
import { Text } from '@sitecore-content-sdk/nextjs';

// Enables inline editing
<Text tag="h1" field={fields.title} />
```

## Troubleshooting

### Component Not Appearing

1. Check component folder name matches Sitecore
2. Run `npm run sitecore-tools:generate-map`
3. Verify props interface matches Sitecore template

### Data Not Showing

1. Check Sitecore item has data
2. Verify template fields match props
3. Use console.log to inspect props

### Build Errors

1. Run `npm run lint` to check for errors
2. Verify all imports are correct
3. Check TypeScript types match

