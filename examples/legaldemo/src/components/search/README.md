# Search Component

A comprehensive search component for CIPFA that provides autocomplete suggestions, search results, and featured answers.

## Features

- **Search Input with Autocomplete**: Real-time search suggestions as you type
- **Search Results**: Display results with category paths, dates, and descriptions
- **Featured Answers**: Highlighted answers for common questions
- **Sorting**: Sort by relevance or date
- **CIPFA Dummy Content**: Pre-populated with CIPFA-related content

## Usage

```tsx
import { Search } from '@/components/search';

export default function SearchPage() {
  return <Search />;
}
```

## Component Structure

- `Search.tsx` - Main component that orchestrates search input and results
- `SearchInput.tsx` - Search input field with autocomplete suggestions
- `SearchResults.tsx` - Display search results with sorting and featured answers
- `searchData.ts` - CIPFA dummy content data
- `search.types.ts` - TypeScript type definitions

## Styling

The component uses CIPFA brand colors:
- Primary: `#007BFF` (blue)
- Hover: `#0066CC` (darker blue)
- Text: `#312C62` (purple)
- Background: White with gray accents

## Data Structure

Search results include:
- Title
- Description
- Category path (breadcrumb navigation)
- Date (formatted in multiple ways)
- Category tags
- Featured flag (for highlighted answers)
- Relevance score (for sorting)
