# Manual Component Map Setup Guide

This guide explains how to manually add the new components to the component map file instead of using the auto-generation command, which includes unwanted components.

## Quick Reference

**Add these imports** (around line 68):
```typescript
import * as HeroCarousel from 'components/HeroCarousel/HeroCarousel';
import * as ProductsSection from 'components/products-section/ProductsSection';
import * as RiskAreasSection from 'components/risk-areas-section/RiskAreasSection';
```

**Add these entries** to the components array (around line 139):
```typescript
['hero-carousel', HeroCarousel],
['products-section', ProductsSection],
['risk-areas-section', RiskAreasSection],
```

## Why Manual Setup?

The command `npm run sitecore-tools:generate-map` automatically scans all components in `src/components` and adds them to the component map. If you only want specific components registered, you need to manually edit the component map file.

## Component Map Location

- **File**: `.sitecore/component-map.ts`
- **Path**: `examples/legaldemo/.sitecore/component-map.ts`

## Manual Component Map Code

Add the following imports and entries to your existing `.sitecore/component-map.ts` file:

### 1. Add Imports (around line 68)

Add these import statements with your other component imports:

```typescript
import * as HeroCarousel from 'components/HeroCarousel/HeroCarousel';
import * as ProductsSection from 'components/products-section/ProductsSection';
import * as RiskAreasSection from 'components/risk-areas-section/RiskAreasSection';
```

### 2. Add to Components Array (around line 139)

Add these entries to your components array:

```typescript
['hero-carousel', HeroCarousel],
['products-section', ProductsSection],
['risk-areas-section', RiskAreasSection],
```

### Complete Example

Your component map file should have imports like:

```typescript
// ... other imports ...
import * as HeroCarousel from 'components/HeroCarousel/HeroCarousel';
import * as ProductsSection from 'components/products-section/ProductsSection';
import * as RiskAreasSection from 'components/risk-areas-section/RiskAreasSection';
```

And in the components array/object:

```typescript
// ... other components ...
['hero-carousel', HeroCarousel],
['products-section', ProductsSection],
['risk-areas-section', RiskAreasSection],
```

## Step-by-Step Instructions

### Step 1: Locate the Component Map File

1. Navigate to `examples/legaldemo/.sitecore/`
2. Open `component-map.ts` in your editor

**Note**: If the file doesn't exist, create it in the `.sitecore/` directory.

### Step 2: Add Component Imports

1. **Locate the import section** (around line 68 or where other component imports are)
2. **Add the three import statements**:
   ```typescript
   import * as HeroCarousel from 'components/HeroCarousel/HeroCarousel';
   import * as ProductsSection from 'components/products-section/ProductsSection';
   import * as RiskAreasSection from 'components/risk-areas-section/RiskAreasSection';
   ```

### Step 3: Add to Components Array

1. **Locate the components array/object** (around line 139 or where components are registered)
2. **Add the three component entries**:
   ```typescript
   ['hero-carousel', HeroCarousel],
   ['products-section', ProductsSection],
   ['risk-areas-section', RiskAreasSection],
   ```
3. **Save the file**

### Step 4: Verify the Setup

1. **Check for TypeScript errors**:
   ```bash
   npm run type-check
   ```

2. **Test the build**:
   ```bash
   npm run build
   ```

3. **Verify in Experience Editor**:
   - Open Sitecore Experience Editor
   - Navigate to a page
   - Click "Add Component"
   - Verify only the three new components appear:
     - Hero Carousel
     - Products Section
     - Risk Areas Section

## Adding Additional Components Manually

If you need to add more components later, follow this pattern:

### 1. Add the Import

Add the import statement with other component imports:

```typescript
import * as YourComponentName from 'components/your-component-folder/YourComponentName';
```

### 2. Add to Components Array

Add the entry to the components array:

```typescript
['your-component-name', YourComponentName], // Add here
```

### Important Notes

- **Component Key**: Use kebab-case matching the folder name (e.g., `hero-carousel`, `products-section`)
- **Import Path**: Use relative path `'components/...'` (not `@/components/...`)
- **Import Style**: Use `import * as ComponentName` (not `import { Default as }`)
- **Array Format**: Components are added as array entries `['component-name', ComponentName]`
- **Export Name**: Components must export `Default` (e.g., `export const Default`)
- **File Naming**: Component file should be `[ComponentName].tsx`

## Component Details

### Hero Carousel
- **Folder**: `src/components/HeroCarousel/`
- **File**: `HeroCarousel.tsx`
- **Key**: `'hero-carousel'` (component key remains kebab-case for Sitecore compatibility)
- **Template**: `HeroCarousel`

### Products Section
- **Folder**: `src/components/products-section/`
- **File**: `ProductsSection.tsx`
- **Key**: `'products-section'`
- **Template**: `ProductsSection`

### Risk Areas Section
- **Folder**: `src/components/risk-areas-section/`
- **File**: `RiskAreasSection.tsx`
- **Key**: `'risk-areas-section'`
- **Template**: `RiskAreasSection`

## Troubleshooting

### TypeScript Errors

If you get import errors:

1. **Check component exports**: Ensure each component exports `Default`:
   ```typescript
   export const Default: React.FC<ComponentProps> = ({ fields, params }) => {
     // component code
   };
   ```

2. **Verify file paths**: Ensure the import paths use `'components/...'` format (relative path, not `@/components/...`)

3. **Check import style**: Use `import * as ComponentName` format, not named imports

### Components Not Appearing in Experience Editor

1. **Check component map**: Verify the component key matches the Sitecore rendering name
2. **Check Sitecore rendering**: Ensure rendering exists in Sitecore with matching name
3. **Clear cache**: Restart the development server
4. **Check build**: Ensure build completes without errors

### Build Errors

If the build fails:

1. **Check imports**: Verify all import paths are correct
2. **Check exports**: Ensure all components export `Default`
3. **Run type check**: `npm run type-check` to see specific errors
4. **Check dependencies**: Ensure all component dependencies are installed

## Preventing Auto-Generation

To prevent accidentally overwriting your manual component map:

1. **Document the manual setup**: Add a comment at the top of the file
2. **Update team documentation**: Inform team members not to run `npm run sitecore-tools:generate-map`
3. **Add to .gitignore considerations**: The component map should be committed (it's in `.gitignore` exceptions)
4. **Create a script**: Consider creating a custom script that only adds specific components

## Alternative: Selective Auto-Generation

If you want to use auto-generation but exclude certain components, you can update `sitecore.cli.config.ts`:

```typescript
componentMap: {
  paths: ['src/components'],
  exclude: [
    'src/components/content-sdk/*',
    'src/components/ui/*',
    'src/components/lib/*',
    // Add other paths to exclude
  ],
}
```

However, this still requires the auto-generation command and may include other components you don't want.

## Other Available Components

There are 7 other components available that export `Default`:
- GlobalHeader
- GlobalFooter
- ArticleContent
- ArticleHero
- InsightsSection
- IntroSection
- VerticalImageAccordion

For a complete list and instructions on adding them, see [All Available Components](./all-available-components.md).

## Related Documentation

- [All Available Components](./all-available-components.md) - Complete list of all components
- [Component Registration Guide](./component-registration-guide.md) - General registration information
- [Sitecore Setup Guide](./sitecore-setup.md) - Component setup in Sitecore
- [Components Reference Table](./components/components-reference-table.md) - Component details
