# Quick Reference Card

Quick reference guide for common tasks in the Colt application.

## 🚀 Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Check for linting errors
npm run lint:fix         # Fix linting errors
npm run prettier         # Format code

# Sitecore Tools
npm run sitecore-tools:generate-map        # Generate component map
npm run sitecore-tools:generate-map:watch   # Watch mode
```

## 📂 Common File Locations

```
src/components/          # All components
src/components/*/        # Individual component folder
src/lib/component-props/ # Component props types
src/types/              # TypeScript types
src/utils/              # Helper utilities
sitecore.config.ts       # Sitecore configuration
sitecore.cli.config.ts  # CLI configuration
.env.local              # Environment variables
```

## 🔧 Common Patterns

### Component Structure

```typescript
// Component folder structure
component-name/
├── index.tsx                  # Export file
├── ComponentName.tsx          # Main component
├── ComponentName.props.tsx    # Props interface
└── ComponentNameDefault.dev.tsx  # Dev variant
```

### Component Props

```typescript
interface ComponentProps {
  fields: {
    // Sitecore fields
  };
  params: {
    // Rendering parameters
  };
  rendering: {
    // Rendering metadata
  };
}
```

### Using Sitecore Fields

```typescript
import { Text, RichText, Image } from '@sitecore-content-sdk/nextjs';
import { useSitecore } from '@sitecore-content-sdk/nextjs';

const Component = ({ fields, params }) => {
  const { page } = useSitecore();
  const isEditing = page.mode.isEditing;
  
  return (
    <>
      <Text tag="h1" field={fields.title} />
      <RichText field={fields.description} />
      <Image field={fields.image} />
    </>
  );
};
```

## 📝 Field Naming Conventions

```typescript
// Required fields
titleRequired: Field<string>;
imageRequired: ImageField;

// Optional fields
descriptionOptional?: Field<string>;
linkOptional?: LinkField;

// Multiple variants
imageOptional1?: ImageField;
imageOptional2?: ImageField;
```

## 🎨 Styling Patterns

### Using CVA (Class Variance Authority)

```typescript
import { cva } from 'class-variance-authority';

const buttonVariants = cva('button', {
  variants: {
    variant: {
      primary: 'bg-blue text-white',
      secondary: 'bg-gray text-black',
    },
    size: {
      sm: 'text-sm px-2 py-1',
      md: 'text-md px-4 py-2',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
```

### Tailwind with cn utility

```typescript
import { cn } from '@/lib/utils';

<div className={cn(
  'base-classes',
  condition && 'conditional-class',
  variantClass
)} />
```

## 🔍 Common Imports

```typescript
// Sitecore SDK
import { 
  Text, RichText, Image, Link, useSitecore,
  Field, ImageField, LinkField 
} from '@sitecore-content-sdk/nextjs';

// Components
import { ComponentProps } from '@/lib/component-props';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { cn } from '@/lib/utils';

// UI Components
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion } from '@/components/ui/accordion';

// Icons
import { Play, Pause, ChevronDown } from 'lucide-react';
```

## 🎯 Common Tasks

### Adding a New Component

1. Create folder: `src/components/my-component/`
2. Create props file: `my-component.props.tsx`
3. Create component: `MyComponent.tsx`
4. Run: `npm run sitecore-tools:generate-map`
5. Import in Sitecore

### Debugging Props

```typescript
const Component = ({ fields, params }) => {
  console.log('Fields:', fields);
  console.log('Params:', params);
  
  // Check for missing data
  if (!fields || !fields.title) {
    return <NoDataFallback componentName="MyComponent" />;
  }
  
  return <div>...</div>;
};
```

### Handling Edit Mode

```typescript
const { page } = useSitecore();
const isEditing = page.mode.isEditing;

// Show placeholder in edit mode
if (isEditing && !content) {
  return <EmptyState message="Add content" />;
}
```

### Conditional Rendering

```typescript
// Has data or editing
{(title?.value || isPageEditing) && (
  <Text tag="h1" field={title} />
)}

// Has data
{link && (
  <Link href={link.value.href}>
    {link.value.text}
  </Link>
)}

// Optional field
{descriptionOptional?.value && (
  <Text tag="p" field={descriptionOptional} />
)}
```

## 📊 Sitecore Field Types

```typescript
Field<string>          // Text (Single/Multi-line)
ImageField             // Image
LinkField              // Link
RichTextField          // Rich Text
Field<number>          // Number
Field<boolean>         // Checkbox
Field<string[]>        // Multilist
```

## 🌐 Common Sitecore Tasks

### Sitecore Template Setup

1. Create Component Template
2. Add fields (match props)
3. Create Rendering
4. Configure Placeholder
5. Add to Layout

### Using Datasource

```typescript
// In component
const { datasource } = fields.data;

// In Sitecore
// 1. Add rendering to page
// 2. Select "Set Datasource"
// 3. Choose/create datasource item
```

## 🐛 Common Issues

### Component Not Showing
- Check component is registered: `.sitecore/component-map.ts`
- Verify Sitecore rendering name matches
- Run `npm run sitecore-tools:generate-map`

### Data Not Displaying
- Check Sitecore item has data
- Verify template fields match props
- Use `console.log` to inspect props
- Check for null/undefined values

### Build Errors
- Run `npm run lint` to find errors
- Check TypeScript types
- Verify all imports exist
- Check for syntax errors

## 📚 Resources

- [Getting Started](./getting-started.md)
- [Architecture Guide](./sitecore-jss-architecture.md)
- [Data Structures](./data-structures.md)
- [Components](./components/)
- [Official Sitecore Docs](https://doc.sitecore.com/xmc/)

## 💡 Tips

1. **Always use TypeScript** - Types catch errors early
2. **Check props first** - Understanding data structure is key
3. **Use console.log** - Debug props in development
4. **Test in Edit mode** - Ensure content editors can edit
5. **Follow patterns** - Copy existing component structure
6. **Keep it simple** - Start simple, add complexity later

## 🎓 Learning Path

1. Read [Getting Started](./getting-started.md)
2. Review existing components
3. Copy a simple component
4. Modify it
5. Create your own
6. Reference this card often

---

Keep this handy! 📌

