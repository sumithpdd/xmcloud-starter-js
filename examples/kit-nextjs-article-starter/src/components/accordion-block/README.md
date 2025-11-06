# AccordionBlock (Article Starter)

A collapsible accordion component for displaying expandable Q&A sections or content. Built with Radix UI Accordion and the Sitecore Content SDK.

## Who is this for?
- Content editors: how to author content and set up accordion items
- Junior developers: where data comes from and what props/fields exist

## What it does
- Displays collapsible accordion sections (expand/collapse)
- Shows a main heading, description, and optional CTA link
- Each accordion item has a heading (trigger) and rich text description (content)
- In Experience Editor, all items stay open for easier editing
- Supports keyboard navigation (built into Radix UI)

## Sitecore data and templates

Create or verify these items in XM Cloud:

**Datasource template (e.g. "Accordion Block Data"):**
- `Heading` (Single-Line Text) - Main section heading
- `Description` (Single-Line Text) - Optional section description
- `Link` (General Link) - Optional call-to-action button
- **Children:** Insert options -> "Accordion Item"

**Child item template (e.g. "Accordion Item"):**
- `Heading` (Single-Line Text) - Accordion item title (clickable trigger)
- `Description` (Rich Text) - Content shown when expanded

## Authoring steps (content editor)

1. Add the "Accordion Block" rendering to a page
2. Set its datasource to an item based on "Accordion Block Data"
3. Fill in the main Heading, Description (optional), and Link (optional)
4. Under that datasource, add one or more "Accordion Item" children:
   - Fill Heading (this becomes the clickable accordion trigger)
   - Fill Description with rich text content (this shows when expanded)
5. (Optional) Rendering Parameters:
   - `styles`: Add extra CSS classes for custom styling

## Props and fields (developer)

From `accordion-block.props.tsx`:

**AccordionProps:**
- `fields.data.datasource`
  - `heading.jsonValue`: Field<string> - Main section heading
  - `description?.jsonValue`: Field<string> - Optional section description
  - `link.jsonValue`: LinkField - Optional CTA link
  - `children.results`: AccordionItemProps[] - Array of accordion items

**AccordionItemProps:**
- `heading.jsonValue`: Field<string> - Item title (accordion trigger)
- `description.jsonValue`: RichTextField - Expanded content

## How it gets items

The component reads items from Sitecore the same way as MultiPromo:

```typescript
const { children } = fields?.data?.datasource || {};
const accordionItems = children?.results ?? [];
```

**Data flow:**
1. Sitecore Content SDK provides `fields.data.datasource` from the rendering's datasource
2. `children.results` contains all child items under the datasource
3. Each item in `results` must match `AccordionItemProps` structure (heading + description)
4. Items are mapped to `AccordionBlockItem` components which render the accordion UI

**Key code location:**
- `AccordionBlockDefault.dev.tsx` line 12-13: Extracts children from datasource
- `AccordionBlockDefault.dev.tsx` line 51-53: Maps items to AccordionBlockItem components

## XM Cloud connection

Configuration comes from `sitecore.config.ts` and environment variables. Check your `.env.local` file or hosting environment variables for Edge URL and Context ID.

## Quick tips

- **If nothing shows:** Check the rendering's datasource and confirm child "Accordion Item" children exist and are published
- **In Experience Editor:** All accordion items stay open automatically so you can edit content easily
- **Rich text in descriptions:** Use the Rich Text field type for accordion item descriptions to support formatting, links, lists, etc.
- **Multiple items:** Add as many "Accordion Item" children as needed - they'll all render as separate accordion sections

