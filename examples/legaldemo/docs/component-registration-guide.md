# Component Registration Guide

This guide explains how components are automatically registered in the Legal Demo site and how to verify registration.

## Component Registration Methods

Components can be registered in two ways:

1. **Automatic Registration** - Uses the build process to scan and register all components
2. **Manual Registration** - Manually edit the component map file to include only specific components

**Note**: If you want to register only specific components and exclude unwanted ones, use the [Manual Component Map Setup Guide](./manual-component-map-setup.md).

## Automatic Component Registration

Components in the Legal Demo can be automatically registered through the Sitecore Content SDK build process. However, this will include all components in the `src/components` directory.

### How It Works

1. **Component Discovery**: The build process scans the `src/components` directory
2. **Component Map Generation**: Components are automatically added to `.sitecore/component-map.ts`
3. **Registration**: Components are registered with their file paths and export names

### Component Map Location

- **File**: `.sitecore/component-map.ts`
- **Auto-generated**: Yes (do not manually edit)
- **Generated during**: Build process or via CLI command

## Generating Component Map

### During Build

The component map is automatically generated when you run:

```bash
npm run build
```

### Manual Generation

To manually generate the component map:

```bash
npm run sitecore-tools:generate-map
```

### Development Mode

The component map is typically generated automatically in development mode, but you can force regeneration:

```bash
npm run dev
```

## Component Registration Requirements

For a component to be automatically registered, it must:

1. **Be in the correct location**: `src/components/[component-name]/`
2. **Have a default export**: Export a component named `Default`
3. **Follow naming convention**: Folder name should match component name (kebab-case)
4. **Have proper structure**: Component file should be `[ComponentName].tsx`

### Example Component Structure

```
src/components/
└── products-section/
    ├── ProductsSection.tsx        (exports Default)
    └── products-section.props.ts
```

## Newly Created Components

The following components have been recently added and should be automatically registered:

### 1. Hero Carousel
- **Path**: `src/components/HeroCarousel/HeroCarousel.tsx`
- **Export**: `Default`
- **Template**: `HeroCarousel`
- **Child Template**: `HeroCarouselSlide`

### 2. Products Section
- **Path**: `src/components/products-section/ProductsSection.tsx`
- **Export**: `Default`
- **Template**: `ProductsSection`
- **Child Template**: `ProductItem`

### 3. Risk Areas Section
- **Path**: `src/components/risk-areas-section/RiskAreasSection.tsx`
- **Export**: `Default`
- **Template**: `RiskAreasSection`
- **Child Template**: `RiskAreaItem`

## Verifying Component Registration

### Method 1: Check Component Map File

1. Navigate to `.sitecore/component-map.ts`
2. Search for your component name
3. Verify it's listed with the correct import path

**Note**: The component map file may be filtered in some IDEs. If you can't see it, use Method 2 or 3.

### Method 2: Check Build Output

1. Run the build command:
   ```bash
   npm run build
   ```
2. Check the build output for component registration messages
3. Look for any errors related to component registration

### Method 3: Test in Experience Editor

1. Open Sitecore Experience Editor
2. Navigate to a page
3. Click "Add Component"
4. Look for your component in the component picker
5. If it appears, it's registered correctly

### Method 4: Check Browser Console

1. Open your site in the browser
2. Open browser developer tools (F12)
3. Check the console for component-related errors
4. Components should load without errors

## Troubleshooting Component Registration

### Component Not Appearing in Experience Editor

1. **Check component structure**:
   - Verify component is in `src/components/[name]/`
   - Verify component exports `Default`
   - Check file naming matches folder name

2. **Regenerate component map**:
   ```bash
   npm run sitecore-tools:generate-map
   ```

3. **Check build errors**:
   ```bash
   npm run build
   ```
   Look for TypeScript or import errors

4. **Verify Sitecore configuration**:
   - Check rendering is created in Sitecore
   - Verify datasource template is set
   - Check placeholder settings

### Component Map Not Updating

1. **Clear build cache**:
   ```bash
   rm -rf .next
   npm run build
   ```

2. **Check file permissions**:
   - Ensure `.sitecore/component-map.ts` is writable
   - Check `.gitignore` doesn't exclude it incorrectly

3. **Verify CLI config**:
   - Check `sitecore.cli.config.ts` includes your component path
   - Verify `componentMap.paths` includes `src/components`

### TypeScript Errors in Component Map

1. **Check component exports**:
   - Ensure component uses `export const Default`
   - Verify no circular dependencies

2. **Check imports**:
   - Verify all imports are correct
   - Check for missing dependencies

3. **Run type check**:
   ```bash
   npm run type-check
   ```

## Component Map Configuration

The component map generation is configured in `sitecore.cli.config.ts`:

```typescript
componentMap: {
  paths: ['src/components'],
  // Exclude content-sdk auxillary components
  exclude: ['src/components/content-sdk/*'],
}
```

### Adding Custom Paths

If you need to include components from other directories:

```typescript
componentMap: {
  paths: ['src/components', 'src/custom-components'],
  exclude: ['src/components/content-sdk/*'],
}
```

## Best Practices

1. **Follow naming conventions**: Use kebab-case for folder names
2. **Export Default**: Always export component as `Default`
3. **Keep structure consistent**: Follow the established component structure
4. **Test after changes**: Verify component appears in Experience Editor
5. **Don't manually edit**: Never manually edit `.sitecore/component-map.ts`

## Manual Component Map Setup

If you need to register only specific components and exclude unwanted ones, see the [Manual Component Map Setup Guide](./manual-component-map-setup.md) for step-by-step instructions on manually editing the component map file.

## Related Documentation

- [Manual Component Map Setup Guide](./manual-component-map-setup.md) - Manual registration instructions
- [Sitecore Setup Guide](./sitecore-setup.md) - Step-by-step component setup
- [Component Documentation](./components/README.md) - Detailed component docs
- [Hero Carousel Documentation](./components/HeroCarousel.md)
- [Products Section Documentation](./components/products-section.md)
- [Risk Areas Section Documentation](./components/risk-areas-section.md)

## Support

If you encounter issues with component registration:

1. Check the troubleshooting section above
2. Review component code structure
3. Verify Sitecore configuration
4. Check build logs for errors
5. Review Sitecore Content SDK documentation
