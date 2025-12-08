# Styling Deployment Guide

This guide explains where styling is added in the codebase and how to ensure your styling changes are visible in Sitecore XM Cloud.

## Where Styling is Added

### 1. Component-Level Styling (Tailwind CSS Classes)

Styling is added directly in your React components using Tailwind CSS utility classes. These classes are defined inline in the JSX:

**Example from `ProductsSection.tsx`:**
```tsx
<section
  data-component="ProductsSection"
  className={cn('py-16 md:py-24 bg-white', params?.styles)}
>
  <div className="container mx-auto px-4 max-w-screen-xl">
    {/* Component content */}
  </div>
</section>
```

**Example from `RiskAreasSection.tsx`:**
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  <article className="bg-white rounded-none overflow-hidden hover:shadow-lg">
    {/* Card content */}
  </article>
</div>
```

### 2. Global CSS Files

Global styles are defined in:
- **`src/pages/globals.css`** - Main global styles file imported in `_app.tsx`
- **`src/assets/styles/globals.css`** - Tailwind theme configuration with CSS variables

These files contain:
- Tailwind CSS imports
- Base styles for typography, colors, spacing
- Custom utility classes
- Theme variables (colors, fonts, spacing, etc.)

### 3. Tailwind Configuration

Tailwind CSS is configured in:
- **`src/assets/tailwind.config.cjs`** - Tailwind configuration file

## How Styling Works

1. **Development (Local)**: 
   - Tailwind CSS processes utility classes during development
   - Styles are injected via JavaScript in development mode
   - Changes are visible immediately with hot reload

2. **Production (Sitecore)**:
   - Tailwind CSS compiles all used utility classes into optimized CSS
   - CSS is bundled with JavaScript during `next build`
   - Bundled CSS is deployed to Sitecore XM Cloud

## Why Styling Might Not Appear in Sitecore

### Common Issues

1. **Build Not Run**: CSS is only compiled during the build process
2. **Deployment Not Completed**: Changes need to be deployed to Sitecore
3. **Browser Cache**: Old CSS might be cached in your browser
4. **Sitecore Cache**: Sitecore might be serving cached assets

## Steps to Ensure Styling Appears in Sitecore

### Step 1: Verify Your Changes Locally

First, ensure your styling works locally:

```bash
cd examples/legaldemo
npm run dev
```

Visit `http://localhost:3000` and verify your styling changes are visible.

### Step 2: Build Your Application

Build the application to compile Tailwind CSS:

```bash
cd examples/legaldemo
npm run build
```

This command:
- Compiles Tailwind CSS classes into optimized CSS
- Bundles CSS with JavaScript
- Creates production-ready assets in `.next/` directory

**Important**: The build process scans your components for Tailwind classes and only includes the CSS for classes that are actually used (tree-shaking).

### Step 3: Verify Build Output

Check that CSS files are generated:

```bash
# Check for CSS files in build output
ls -la .next/static/css/
```

You should see files like:
- `_app-[hash].css` - Contains your compiled Tailwind CSS

### Step 4: Deploy to Sitecore XM Cloud

Deploy your changes to Sitecore:

1. **Commit and Push Changes**:
   ```bash
   git add .
   git commit -m "Update component styling"
   git push
   ```

2. **Deploy via XM Cloud Deploy Portal**:
   - Log into [XM Cloud Deploy](https://deploy.sitecorecloud.io/)
   - Create a new deployment or trigger an existing deployment
   - The deployment will:
     - Run `npm run build` (as defined in `xmcloud.build.json`)
     - Deploy the built application to your XM Cloud environment

3. **Wait for Deployment to Complete**:
   - Monitor the deployment status in the Deploy Portal
   - Ensure the build completes successfully
   - Check for any build errors in the deployment logs

### Step 5: Clear Caches

After deployment, clear caches:

1. **Browser Cache**:
   - Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
   - Or open DevTools → Network tab → Check "Disable cache"

2. **Sitecore Cache** (if you have access):
   - Clear Sitecore cache via Sitecore Desktop
   - Or restart the rendering host if possible

### Step 6: Verify in Sitecore

1. **Check Experience Editor**:
   - Open your page in Sitecore Experience Editor
   - Verify styling is applied correctly

2. **Check Preview Mode**:
   - Preview your page in Sitecore
   - Verify styling matches local development

3. **Check Published Site**:
   - Visit the published site URL
   - Verify styling is correct

## Troubleshooting

### Styling Still Not Appearing

1. **Check Build Logs**:
   - Review deployment logs in XM Cloud Deploy Portal
   - Look for Tailwind CSS compilation errors
   - Check for missing dependencies

2. **Verify Tailwind Classes Are Used**:
   - Ensure Tailwind classes are actually in your component code
   - Check that classes aren't dynamically generated (Tailwind can't detect these)
   - Use full class names, not concatenated strings

   ```tsx
   // ❌ Bad - Tailwind can't detect this
   const className = `text-${color}-500`;
   
   // ✅ Good - Use full class names
   const className = color === 'blue' ? 'text-blue-500' : 'text-red-500';
   ```

3. **Check Tailwind Configuration**:
   - Verify `tailwind.config.cjs` includes your component paths
   - Ensure content paths are correct:
     ```js
     content: [
       './src/**/*.{js,ts,jsx,tsx}',
     ]
     ```

4. **Verify CSS Import**:
   - Check that `globals.css` is imported in `_app.tsx`
   - Ensure CSS files are not excluded from build

5. **Check for CSS Conflicts**:
   - Use browser DevTools to inspect elements
   - Check if styles are being overridden
   - Look for CSS specificity issues

### Build Errors

If you encounter build errors:

1. **Missing Dependencies**:
   ```bash
   npm install
   ```

2. **TypeScript Errors**:
   ```bash
   npm run type-check
   ```

3. **Linting Errors**:
   ```bash
   npm run lint
   npm run fix
   ```

## Quick Reference

| Task | Command |
|------|---------|
| Run locally | `npm run dev` |
| Build for production | `npm run build` |
| Check linting | `npm run lint` |
| Fix linting | `npm run fix` |
| Type check | `npm run type-check` |

## Best Practices

1. **Always Build Before Deploying**: Run `npm run build` locally to catch issues early
2. **Test Locally First**: Verify styling works in development before deploying
3. **Use Tailwind Classes**: Prefer Tailwind utility classes over custom CSS
4. **Check Build Output**: Verify CSS files are generated correctly
5. **Clear Caches**: Always clear browser cache after deployment
6. **Monitor Deployments**: Check deployment logs for errors

## Related Documentation

- [Testing Linting Locally](./testing-linting-locally.md)
- [Component Development Guide](./components/README.md)
- [Sitecore Setup Guide](./sitecore-setup.md)

