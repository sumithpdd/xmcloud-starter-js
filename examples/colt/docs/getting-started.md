# Getting Started with Colt

This guide will help junior developers get started with the Colt project and understand how to work with the Sitecore JSS (JavaScript Services) architecture.

## What is Sitecore JSS?

Sitecore JSS (JavaScript Services) is a decoupled CMS architecture where:
- **Content** lives in Sitecore XM Cloud (the CMS)
- **Presentation** is built in React/Next.js (this codebase)
- Both are connected through the Sitecore Content SDK

This allows content editors to use Sitecore's editing tools while developers build the frontend independently.

## Project Overview

The Colt project is a Next.js application that:
1. Retrieves content from Sitecore XM Cloud
2. Renders it using React components
3. Provides editing capabilities via Sitecore Experience Editor

## Key Concepts

### Components

Components are the building blocks of the application. Each component:
- Lives in `src/components/[component-name]/`
- Has a TypeScript props interface
- Can be added to pages in Sitecore
- Receives data from Sitecore

Example:
```
src/components/hero/
  ├── hero.props.ts      # TypeScript interface
  ├── Hero.tsx          # React component
  └── HeroDefault.dev.tsx  # Development variant
```

### Data Flow

```
Sitecore XM Cloud
    ↓
Content API (GraphQL)
    ↓
getStaticProps (Next.js)
    ↓
Component Props
    ↓
React Component
```

### Component Props

Every component receives props in this structure:

```typescript
{
  fields: {
    // Content from Sitecore
    title: Field<string>;
    description: Field<string>;
    // ...
  },
  params: {
    // Rendering parameters
    colorScheme: 'primary' | 'secondary';
    // ...
  },
  rendering: {
    // Rendering metadata
    componentName: string;
    // ...
  }
}
```

## Folder Structure

```
src/
├── components/           # React components
│   └── [component-name]/
│       ├── *.props.ts   # TypeScript interfaces
│       └── *.tsx        # React components
├── lib/                 # Utilities and helpers
├── pages/               # Next.js pages
├── hooks/               # Custom React hooks
├── types/               # Shared TypeScript types
└── utils/               # Helper functions
```

## Common Tasks

### Adding a New Component

1. Create a folder in `src/components/[component-name]/`
2. Create a props file: `[component-name].props.tsx`
3. Create the component: `[ComponentName].tsx`
4. Export it from the folder (create `index.tsx`)
5. Run `npm run sitecore-tools:generate-map` to register it

### Editing an Existing Component

1. Find the component in `src/components/[component-name]/`
2. Edit the `.tsx` file
3. Update props if needed in `*.props.tsx`

### Working with Sitecore Data

Components receive Sitecore data via props. Common fields include:

- `Field<string>` - Text content
- `ImageField` - Image with src, alt, etc.
- `LinkField` - Links with url, text, target
- `RichTextField` - Rich text content

### Development Mode

```bash
npm run dev
```

This starts the Next.js dev server with hot reload. Changes to components will reflect immediately.

### Building for Production

```bash
npm run build
```

This generates an optimized production build.

## Next Steps

- Read [Sitecore JSS Architecture](./sitecore-jss-architecture.md) for deeper understanding
- Check [Component Documentation](./components/) for available components
- Review [Data Structures](./data-structures.md) for component data formats

## Tips for Junior Developers

1. **Start with existing components** - Don't create new ones until you understand the pattern
2. **Use TypeScript** - The project is fully typed, use it to your advantage
3. **Check the props file first** - Always look at `*.props.tsx` to understand available data
4. **Console.log is your friend** - Log props to see what data you're receiving
5. **Follow the patterns** - Each component follows similar structure

