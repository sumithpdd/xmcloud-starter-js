# Heading Text Component

A simple component for displaying a heading and rich text content, perfect for introductory sections like "Who we are".

## Component Details

- **Component Name**: `heading-text`
- **File Location**: `src/components/heading-text/HeadingText.tsx`
- **Props Interface**: `src/components/heading-text/heading-text.props.ts`

## Sitecore Template Setup

### Template Fields

Create a template with the following fields:

1. **Heading** (Single-Line Text)
   - Field Name: `heading`
   - Required: No

2. **Text** (Rich Text)
   - Field Name: `text`
   - Required: No

### Component Map Registration

The component should already be registered in `.sitecore/component-map.ts`:

```typescript
'heading-text': {
  componentName: 'HeadingText',
  fields: {
    heading: { jsonValue: { value: '' } },
    text: { jsonValue: { value: '' } },
  },
},
```

## Usage Example: "Who we are" Section

### Sitecore Content Item

1. Create a datasource item with:
   - **Heading**: `Who we are`
   - **Text**: (See HTML below)

### Rich Text Content for "Who we are"

Use this HTML in the `text` rich text field:

```html
<p>The Chartered Institute of Public Finance and Accountancy (CIPFA) is a UK-based international accountancy membership and standard-setting body. We are the only such body globally dedicated to public financial management.</p>

<p>CIPFA believes that improving public services is the key to changing lives for the better and that good public financial management is central to achieving this ambition. Our educational and advisory services support our members, students and other public finance professionals throughout their careers — helping them add value to their teams and the organisations for which they work. Through our work, we help ensure public money is raised and spent with the highest degree of openness.</p>

<p>We are committed to making a real difference to the world we live in.</p>
```

### Plain Text Version (if HTML is not supported)

If your rich text field doesn't support HTML, use plain text:

```
The Chartered Institute of Public Finance and Accountancy (CIPFA) is a UK-based international accountancy membership and standard-setting body. We are the only such body globally dedicated to public financial management.

CIPFA believes that improving public services is the key to changing lives for the better and that good public financial management is central to achieving this ambition. Our educational and advisory services support our members, students and other public finance professionals throughout their careers — helping them add value to their teams and the organisations for which they work. Through our work, we help ensure public money is raised and spent with the highest degree of openness.

We are committed to making a real difference to the world we live in.
```

## Component Features

- **Responsive Design**: Text scales appropriately on mobile, tablet, and desktop
- **Centered Layout**: Content is centered with a max-width container
- **Typography**: Uses the site's heading and prose styles
- **Editing Mode Support**: Shows fields in Sitecore Experience Editor even when empty

## Styling

The component uses:
- Background: White (`bg-white`)
- Padding: `py-16 md:py-24` (responsive vertical padding)
- Max Width: `max-w-4xl` for content
- Text Color: `#212529` (dark gray)
- Heading: `text-3xl md:text-4xl lg:text-5xl` (responsive heading sizes)

## Default Data

The component does not have default data. It will show a "No Data" fallback if no datasource is assigned.

## Related Components

- **Rich Text Block**: For rich text content without a heading
- **Intro Section**: For homepage introduction sections with more complex layouts
