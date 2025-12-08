# Search Component - Component Map Registration

## Component Map Entry

Add the following to your `.sitecore/component-map.ts` file:

```typescript
import * as Search from 'components/search/Search';

export const componentMap = [
  // ... other components
  ['Search', Search],
  // ... other components
];
```

## Alternative: Using the index export

If you prefer to use the index file:

```typescript
import { Search } from 'components/search';

export const componentMap = [
  // ... other components
  ['Search', Search],
  // ... other components
];
```

## Complete Example

```typescript
import * as HeadingText from 'components/HeadingText/HeadingText';
import * as Search from 'components/search/Search';

export const componentMap = [
  // ... other components
  ['HeadingText', HeadingText],
  ['Search', Search],
  // ... other components
];
```

## Notes

- The Search component doesn't require Sitecore fields as it uses dummy data from `searchData.ts`
- The component map uses an **array format** with tuples: `['ComponentName', ComponentImport]`
- The first element `'Search'` (the string) must match the rendering's **Component Name** field in Sitecore exactly
- The second element is the imported component (must export `Default`)
- Component names are case-sensitive - `'Search'` must match exactly

## Sitecore Rendering Configuration

When creating the rendering in Sitecore:
- **Rendering Name**: `Search`
- **Component Name**: `Search` (must match component map key)
- **Datasource Template**: Not required (component uses dummy data)
- **Datasource Location**: Not required
