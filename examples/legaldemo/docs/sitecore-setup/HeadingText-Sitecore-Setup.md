# HeadingText Component - Sitecore Setup Guide

This guide provides step-by-step instructions for setting up the HeadingText component in Sitecore XM Cloud.

## Prerequisites

- Access to Sitecore XM Cloud
- Content Editor or Experience Editor access
- Understanding of Sitecore templates and renderings

## Step 1: Create the Template

### 1.1 Navigate to Templates

1. Open **Content Editor** in Sitecore
2. Navigate to: `/sitecore/templates/Project/legaldemo` (or your project folder)
3. Right-click on the folder → **Insert** → **Template**

### 1.2 Template Configuration

**Template Name**: `HeadingText`
**Template ID**: (Auto-generated, or use a specific GUID)

**Base Templates**:
- `/sitecore/templates/System/Standard template`
- `/sitecore/templates/System/Web/Standard Rendering Parameters`

### 1.3 Add Template Fields

Add the following fields to the template:

#### Field 1: Heading

- **Field Name**: `heading`
- **Field Type**: Single-Line Text
- **Section**: `Data`
- **Required**: No
- **Standard Values**: Leave empty

#### Field 2: Text

- **Field Name**: `text`
- **Field Type**: Rich Text
- **Section**: `Data`
- **Required**: No
- **Standard Values**: Leave empty

### 1.4 Template Structure

Your template should look like this:

```
HeadingText
└── Data (Section)
    ├── heading (Single-Line Text)
    └── text (Rich Text)
```

## Step 2: Create the Rendering

### 2.1 Navigate to Renderings

1. In **Content Editor**, navigate to: `/sitecore/layout/Renderings/Project/legaldemo`
2. Right-click on the folder → **Insert** → **Rendering**

### 2.2 Rendering Configuration

**Rendering Name**: `HeadingText`

**Rendering Fields**:
- **Item Name**: `HeadingText`
- **Path**: `/sitecore/layout/Renderings/Project/legaldemo/HeadingText`
- **Controller**: (Leave empty - this is a React component)
- **Controller Action**: (Leave empty)
- **View**: (Leave empty)
- **Model**: (Leave empty)

**Component Name**: `HeadingText` (must match the component map key)

### 2.3 Datasource Template

1. In the rendering item, find the **Datasource Template** field
2. Set it to: `/sitecore/templates/Project/legaldemo/HeadingText` (the template you created in Step 1)

### 2.4 Datasource Location

1. Navigate to: `/sitecore/content/legaldemo/Data` (or your data folder)
2. Right-click → **Insert** → **Folder**
3. Name it: `HeadingText`
4. In the rendering's **Datasource Location** field, set it to: `/sitecore/content/legaldemo/Data/HeadingText`

## Step 3: Register in Component Map

The component should be registered in `.sitecore/component-map.ts`:

```typescript
'HeadingText': {
  componentName: 'HeadingText',
  fields: {
    heading: { jsonValue: { value: '' } },
    text: { jsonValue: { value: '' } },
  },
},
```

**Note**: The component map key `'HeadingText'` must match the rendering's **Component Name** field.

## Step 4: Create Datasource Items

### 4.1 Create "Who we are" Datasource

1. Navigate to: `/sitecore/content/legaldemo/Data/HeadingText`
2. Right-click → **Insert** → **HeadingText**
3. Name: `Who we are`
4. Fill in the fields:

**Heading Field**:
```
Who we are
```

**Text Field** (Rich Text):
```html
<p>The Chartered Institute of Public Finance and Accountancy (CIPFA) is a UK-based international accountancy membership and standard-setting body. We are the only such body globally dedicated to public financial management.</p>

<p>CIPFA believes that improving public services is the key to changing lives for the better and that good public financial management is central to achieving this ambition. Our educational and advisory services support our members, students and other public finance professionals throughout their careers — helping them add value to their teams and the organisations for which they work. Through our work, we help ensure public money is raised and spent with the highest degree of openness.</p>

<p>We are committed to making a real difference to the world we live in.</p>
```

## Step 5: Add Component to a Page

### 5.1 Using Experience Editor

1. Navigate to your page in **Experience Editor**
2. Click on a placeholder (e.g., `headless-main`)
3. Click **Add Component** or **+** button
4. Select **HeadingText** from the component list
5. In the component properties, set the **Datasource** to your datasource item (e.g., `/sitecore/content/legaldemo/Data/HeadingText/Who we are`)
6. Click **OK**

### 5.2 Using Content Editor

1. Navigate to your page item in **Content Editor**
2. Go to the **Presentation** tab
3. Click **Details** on the layout
4. Click **Add** → **Rendering**
5. Select **HeadingText** rendering
6. Set the **Datasource** field to your datasource item
7. Click **OK**

## Step 6: Verify Component Map Registration

Check that the component is registered in `.sitecore/component-map.ts`:

```typescript
import * as HeadingText from 'components/HeadingText/HeadingText';

export const componentMap = {
  // ... other components
  'HeadingText': {
    componentName: 'HeadingText',
    fields: {
      heading: { jsonValue: { value: '' } },
      text: { jsonValue: { value: '' } },
    },
  },
  // ... other components
};
```

## Field Reference

| Field Name | Field Type | Description | Example |
|------------|------------|-------------|---------|
| `heading` | Single-Line Text | Main heading text | "Who we are" |
| `text` | Rich Text | Body content with HTML support | See HTML example above |

## Troubleshooting

### Component Not Appearing

1. **Check Component Map**: Verify `HeadingText` is registered in `.sitecore/component-map.ts`
2. **Check Rendering Name**: Ensure the rendering's **Component Name** matches the component map key
3. **Check Datasource**: Verify the datasource item is assigned to the rendering
4. **Clear Cache**: Clear Sitecore cache and rebuild the Next.js application

### Fields Not Showing

1. **Check Template**: Verify the template has `heading` and `text` fields
2. **Check Field Names**: Field names are case-sensitive - must be exactly `heading` and `text`
3. **Check Datasource Template**: Ensure the rendering's datasource template is set correctly

### Content Not Displaying

1. **Check Datasource**: Verify the datasource item is assigned
2. **Check Field Values**: Ensure fields have content in the datasource item
3. **Check Browser Console**: Look for errors in the browser developer console

## Example: Complete Setup Checklist

- [ ] Template created: `HeadingText`
- [ ] Template fields added: `heading` (Single-Line Text), `text` (Rich Text)
- [ ] Rendering created: `HeadingText`
- [ ] Rendering Component Name set to: `HeadingText`
- [ ] Rendering Datasource Template set to: `HeadingText` template
- [ ] Rendering Datasource Location set to: `/sitecore/content/legaldemo/Data/HeadingText`
- [ ] Component registered in `.sitecore/component-map.ts`
- [ ] Datasource item created: `Who we are`
- [ ] Datasource fields populated
- [ ] Component added to page with datasource assigned
- [ ] Component displays correctly on frontend

## Related Documentation

- [HeadingText Component Documentation](../components/HeadingText.md)
- [CIPFA Content Setup Guide](../cipfa-content-setup.md)
- [Component Map Reference](../.sitecore/component-map.ts)
