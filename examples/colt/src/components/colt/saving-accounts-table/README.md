# Savings Accounts Table (Colt)

A table component for displaying savings accounts or product listings in a structured table format. Built with the Sitecore Content SDK, matching the Paragon Bank styling pattern.

## Who is this for?
- Content editors: how to author content and add account items to the table
- Junior developers: where data comes from and what props/fields exist

## What it does
- Displays a structured table with dark grey header and white rows
- Shows account/product information in columns: Name, Rates, Application Methods, and Action button
- Supports optional title and description above the table
- Uses dummy data when Sitecore data is not available (for development)

## Sitecore Templates

Create or verify these templates in XM Cloud:

### Datasource Template: `SavingAccountsTable`
**Template Name:** `SavingAccountsTable`

**Fields:**
- `Title` (Single-Line Text) - Optional table section heading
- `Description` (Single-Line Text) - Optional table description
- **Children:** Insert options -> `SavingAccountsTableRow`

**Template Location:** `/sitecore/templates/Project/Colt/SavingAccountsTable`

### Child Item Template: `SavingAccountsTableRow`
**Template Name:** `SavingAccountsTableRow`

**Fields:**
- `Account Name` (Single-Line Text) - Product/account name
- `AER Rate` (Single-Line Text) - AER percentage (e.g., "4.05%")
- `Annual Rate` (Single-Line Text) - Annual rate percentage (e.g., "4.05%")
- `Monthly Rate` (Single-Line Text) - Monthly rate percentage (e.g., "3.98%")
- `Application Methods` (Single-Line Text) - Comma-separated list (e.g., "Online, Post")
- `View Link` (General Link) - Link to account details page

**Template Location:** `/sitecore/templates/Project/Colt/SavingAccountsTableRow`

### Rendering Parameters Template

**Rendering Parameters for "SavingAccountsTable" rendering:**
- `useDummyValue` (Checkbox) - Check to use dummy data, uncheck to use Sitecore data (default: checked/true)
- `styles` (Single-Line Text) - Optional CSS classes for custom styling

**Template Location:** `/sitecore/layout/Renderings/Project/Colt/SavingAccountsTable` (or your rendering location)

### Supporting Templates
- **SavingAccountsTable Branch** - Branch template for creating new datasource items
- **SavingAccountsTable Folder** - Folder template for organizing table items

## Authoring steps (content editor)

1. Add the "SavingAccountsTable" rendering to a page
2. Set its datasource to an item based on the `SavingAccountsTable` template
3. Fill in the optional Title and Description fields
4. Under that datasource, add one or more child items based on `SavingAccountsTableRow`:
   - Fill Account Name (e.g., "1 Year Fixed Rate Cash ISA")
   - Fill AER Rate (e.g., "4.05%")
   - Fill Annual Rate (e.g., "4.05%")
   - Fill Monthly Rate (e.g., "3.98%")
   - Fill Application Methods (e.g., "Online, Post" - separate multiple methods with commas)
   - Set View Link to the account details page
5. (Optional) Rendering Parameters:
   - `useDummyValue`: Checkbox field - Check to use dummy data (defaults to checked/true), uncheck to use Sitecore data
   - `styles`: Add extra CSS classes for custom styling

## Props and fields (developer)

From `saving-accounts-table.props.tsx`:

**SavingsAccountsTableProps:**
- `params`
  - `useDummyValue?: boolean` - Checkbox field (defaults to true if not set)
  - `styles?: string` - Optional CSS classes
- `fields.data.datasource`
  - `title.jsonValue`: Field<string> - Optional table heading
  - `description?.jsonValue`: Field<string> - Optional table description
  - `children.results`: SavingsAccountItemProps[] - Array of account items

**SavingsAccountItemProps:**
- `accountName.jsonValue`: Field<string> - Product name
- `aerRate.jsonValue`: Field<string> - AER percentage
- `annualRate.jsonValue`: Field<string> - Annual rate percentage
- `monthlyRate.jsonValue`: Field<string> - Monthly rate percentage
- `applicationMethods.jsonValue`: Field<string> - Comma-separated application methods
- `viewLink.jsonValue`: LinkField - Link to account details

## How it gets items

The component reads items from Sitecore the same way as AccordionBlock and MultiPromo:

```typescript
const { title, description, children } = fields?.data?.datasource || {};
const accountItems = children?.results ?? [];
```

**Data flow:**
1. Sitecore Content SDK provides `fields.data.datasource` from the rendering's datasource
2. `children.results` contains all child items under the datasource
3. Each item in `results` must match `SavingsAccountItemProps` structure
4. Items are mapped to `SavingsAccountRow` components which render table rows
5. **Dummy data control:** The `useDummyValue` checkbox parameter controls whether to use dummy data (checked/true) or Sitecore data (unchecked/false)

**Key code location:**
- `SavingsAccountsTableDefault.dev.tsx` line 11-12: Extracts children from datasource
- `SavingsAccountsTableDefault.dev.tsx` line 15: Checks `useDummyValue` parameter
- `SavingsAccountsTableDefault.dev.tsx` line 18-144: Dummy data definition
- `SavingsAccountsTableDefault.dev.tsx` line 147: Uses dummy data or Sitecore data based on parameter
- `SavingsAccountsTableDefault.dev.tsx` line 182-184: Maps items to table rows

## Styling

The component matches Paragon Bank styling:
- **Header:** Dark grey background (`bg-gray-800`) with white text
- **Rows:** White background with grey borders
- **Buttons:** Green background (`bg-green-500`) with white text
- **Typography:** Clean, readable fonts with proper spacing

## Comparison with AccordionBlock

| Feature | AccordionBlock | Savings Accounts Table |
|---------|---------------|------------------------|
| **UI Pattern** | Collapsible accordion | Structured table |
| **Data Source** | `fields.data.datasource.children.results` | `fields.data.datasource.children.results` |
| **Child Template** | Accordion Item (heading + description) | SavingAccountsTableRow (6 fields) |
| **Use Case** | Q&A, expandable content | Product listings, account comparisons |

## XM Cloud connection

Configuration comes from `sitecore.config.ts` and environment variables. Check your `.env.local` file or hosting environment variables for Edge URL and Context ID.

## Quick tips

- **Dummy data control:** Use the `useDummyValue` rendering parameter (checkbox) to control data source:
  - Checked (default) = use dummy data - perfect for development and testing
  - Unchecked = use Sitecore data from the datasource
- **Application Methods:** Use comma-separated values (e.g., "Online, Post") - they'll be split and displayed on separate lines
- **Rates:** All rate fields accept percentage strings (e.g., "4.05%") - the component displays them as-is
- **If nothing shows:** Check the rendering's datasource and confirm child `SavingAccountsTableRow` items exist and are published
- **Responsive:** The table includes horizontal scroll on smaller screens via `overflow-x-auto`

## Component Registration

**Important:** After creating a new component, you must register it in `.sitecore/component-map.ts`:

1. Add the import at the top (alphabetical order):
   ```typescript
   import * as SavingAccountsTable from 'components/colt/saving-accounts-table/SavingAccountsTable';
   ```

2. Add it to the componentMap (alphabetical order):
   ```typescript
   ['SavingAccountsTable', SavingAccountsTable],
   ```

The component name in the map must match the rendering name in Sitecore.

## Template Naming Convention

**Current Template Names:**
- **`SavingAccountsTable`** - Main datasource template
- **`SavingAccountsTableRow`** - Child item template for table rows
- **`SavingAccountsTable Branch`** - Branch template for datasource items
- **`SavingAccountsTable Folder`** - Folder template for organization

