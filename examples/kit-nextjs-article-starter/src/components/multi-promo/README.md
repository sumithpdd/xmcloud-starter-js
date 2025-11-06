# MultiPromo (Article Starter)

A simple promo carousel for showcasing multiple cards (image, title, link). Built with the Sitecore Content SDK and a reusable `Carousel` UI.

## Who is this for?
- Content editors: how to author content and set parameters
- Junior developers: where data comes from and what props/params exist

## What it does
- Renders a horizontal carousel of promo items
- Supports keyboard (← →) and horizontal mouse wheel navigation
- Announces slide changes for accessibility

## Sitecore data and templates
Create or verify these items in XM Cloud:
- Datasource template (e.g. “Multi Promo Data”)
  - Title: Single-Line Text
  - Description: Rich Text (optional)
  - Children: insert options -> “Promo Item”
- Child item template (e.g. “Promo Item”)
  - Heading: Single-Line Text
  - Image: Image
  - Link: General Link (optional)

Authoring steps (content editor):
1. Add the “Multi Promo” rendering to a page.
2. Set its datasource to an item based on “Multi Promo Data”.
3. Fill Title/Description.
4. Under that datasource, add one or more “Promo Item” children and fill Heading, Image, Link.
5. (Optional) Rendering Parameters:
   - numColumns: choose “3” or “4” to change layout density
   - styles: add extra CSS classes; if it contains `position-…`, those classes control positioning

## Props and parameters (developer)
From `multi-promo.props.tsx`:
- params
  - numColumns?: string ("3" | "4")
  - styles?: string (optional CSS classes)
- fields.data.datasource
  - title.jsonValue: Text
  - description?.jsonValue: Rich Text
  - children.results: MultiPromoItemProps[]
- MultiPromoItemProps
  - heading.jsonValue: Text
  - image.jsonValue: Image
  - link?.jsonValue: Link (optional)

## Where content comes from
- The component reads `fields.data.datasource` via the Sitecore Content SDK.
- Each child in `children.results` renders a promo card using `MultiPromoItem.dev`.

## XM Cloud connection
This example reads configuration from `sitecore.config.ts` and environment variables (context ID, Edge URL, site name, etc.). Ensure your `.env` or hosting env provides these values so content resolves.

**Current XM Cloud Instance:**
- **Organization:** Sales Engineers 12 (`org_BMSdm6mLMr270Wnk`)
- **Project ID:** `6owLXpDvzI4hC2o6si3WF0`
- **Environment ID:** `51BbcgtiENXLk0Y1AlZb31`
- **Developer Settings:** [View in XM Cloud Deploy](https://deploy.sitecorecloud.io/projects/6owLXpDvzI4hC2o6si3WF0/environments/51BbcgtiENXLk0Y1AlZb31/developer-settings?organization=org_BMSdm6mLMr270Wnk)

To find your Edge URL and Context ID, check the environment variables in the Developer Settings link above or in your `.env.local` file.

## Quick tips
- If nothing shows: check the rendering’s datasource and confirm child items exist and are published.
- In Experience Editor, empty fields still render their editing chrome so you can add content.
- Use `numColumns` to increase or reduce how many cards fit per row on larger screens.

