# Component Data Structures

This document explains the data structures used in the Colt application and how Sitecore data is passed to React components.

## Table of Contents

1. [Overview](#overview)
2. [Sitecore Field Types](#sitecore-field-types)
3. [Component Props Structure](#component-props-structure)
4. [Common Patterns](#common-patterns)
5. [Field Type Examples](#field-type-examples)

## Overview

Every component in the Colt application receives data from Sitecore through a standardized props structure. Understanding these data structures is crucial for working with components.

## Sitecore Field Types

### Basic Fields

#### `Field<string>` - Text Field
Simple text content that supports inline editing in Experience Editor.

```typescript
interface ComponentProps {
  fields: {
    title: Field<string>;
  };
}

// Usage
const { title } = fields;
console.log(title.value); // "My Title"

// Rendering with inline editing
<Text tag="h1" field={title} />
```

**Sitecore Template:**
- Single-Line Text
- Multi-Line Text

#### `ImageField` - Image Field
Image data with optimization support.

```typescript
interface ComponentProps {
  fields: {
    image: ImageField;
  };
}

// Usage
const { image } = fields;
image.value?.src     // "/-/media/image.jpg"
image.value?.alt     // "Alt text"
image.value?.width    // 1920
image.value?.height  // 1080

// Rendering
<Image field={image} />
```

**Sitecore Template:**
- Image

#### `LinkField` - Link Field
Link data with URL, text, and target properties.

```typescript
interface ComponentProps {
  fields: {
    link: LinkField;
  };
}

// Usage
const { link } = fields;
link.value?.href   // "/en/about"
link.value?.text   // "Learn More"
link.value?.target // "_blank"
```

**Sitecore Template:**
- General Link

#### `RichTextField` - Rich Text Field
Rich text content with HTML support.

```typescript
interface ComponentProps {
  fields: {
    description: RichTextField;
  };
}

// Usage
<RichText field={description} />
```

**Sitecore Template:**
- Rich Text

## Component Props Structure

### Standard Props Structure

Every component receives:

```typescript
{
  fields: {
    // Content from Sitecore
  },
  params: {
    // Rendering parameters
  },
  rendering: {
    // Rendering metadata
  }
}
```

### Examples by Component Type

#### Simple Component

```typescript
// accordion-block/accordion-block.props.tsx
export interface AccordionProps extends ComponentProps {
  fields: {
    data: {
      datasource: {
        heading: { jsonValue: Field<string> };
        description?: { jsonValue: Field<string> };
        children: {
          results: AccordionItemProps[];
        };
      };
    };
  };
}
```

**Sitecore Structure:**
```
AccordionBlock Rendering
└── Datasource Item
    ├── Heading (Text)
    ├── Description (Text)
    └── Children
        └── Child Items
            ├── Heading (Text)
            └── Description (Rich Text)
```

#### Complex Component with Parameters

```typescript
// hero/hero.props.ts
export interface HeroProps extends ComponentProps {
  params: {
    colorScheme?: 'primary' | 'secondary' | 'tertiary';
  };
  fields: {
    titleRequired: Field<string>;
    descriptionOptional?: Field<string>;
    linkOptional?: LinkField;
    heroImageOptional1?: ImageField;
    heroVideoOptional1?: LinkField;
  };
}
```

**Key Points:**
- `params` = Rendering parameters set in Sitecore
- `fields` = Content fields from Sitecore item
- `params.colorScheme` = Can be changed in Experience Editor

#### Component with External Fields

```typescript
// page-header/page-header.props.ts
export interface PageHeaderProps extends ComponentProps {
  fields: {
    data: {
      datasource: {
        imageRequired: { jsonValue: ImageField };
      };
      externalFields: {
        pageTitle: { jsonValue: Field<string> };
        pageHeaderTitle: { jsonValue: Field<string> };
        pageSubtitle: { jsonValue: Field<string> };
      };
    };
  };
}
```

**Sitecore Structure:**
```
PageHeader Rendering
├── Datasource Item
│   └── Image (from datasource)
└── External Fields (from page context)
    ├── Page Title
    ├── Page Header Title
    └── Page Subtitle
```

## Common Patterns

### Pattern 1: Datasource Component

Components that use a datasource item:

```typescript
interface ComponentProps {
  fields: {
    data: {
      datasource: {
        title: { jsonValue: Field<string> };
        image: { jsonValue: ImageField };
      };
    };
  };
}

// Usage
const { title, image } = fields.data.datasource;
```

**When to use:**
- Component needs its own content item
- Content can be reused across pages
- Example: PromoBlock, Hero

### Pattern 2: Inline Component

Components that inherit data from page:

```typescript
interface ComponentProps {
  fields: {
    heading: Field<string>;
    text: Field<string>;
  };
}

// Usage
const { heading, text } = fields;
```

**When to use:**
- Simple components with few fields
- Content specific to one page
- Example: TextBanner, RichTextBlock

### Pattern 3: Child Items Component

Components that manage a collection:

```typescript
interface ComponentProps {
  fields: {
    data: {
      datasource: {
        title: { jsonValue: Field<string> };
        children: {
          results: ChildItem[];
        };
      };
    };
  };
}

// Usage
const { children } = fields.data.datasource;
children.results.map(item => (
  <ChildComponent key={item.id} {...item} />
));
```

**When to use:**
- Lists and carousels
- Tabbed content
- Example: MultiPromo, AccordionBlock

### Pattern 4: External Fields Component

Components that use page context:

```typescript
interface ComponentProps {
  fields: {
    data: {
      datasource: { /* ... */ };
      externalFields: {
        pageTitle: { jsonValue: Field<string> };
      };
    };
  };
}

// Usage
const { pageTitle } = fields.data.externalFields;
```

**When to use:**
- Need page-level data
- SEO metadata
- Example: PageHeader, SiteMetadata

## Field Type Examples

### Example 1: Single Field

```typescript
// button-component
interface ButtonProps {
  fields: {
    buttonText: Field<string>;
    buttonLink: LinkField;
  };
}

// Sitecore
// └── ButtonText (Text)
// └── ButtonLink (Link)
```

### Example 2: Optional Fields

```typescript
// text-banner
interface TextBannerProps {
  fields: {
    heading: Field<string>;           // Required
    description?: Field<string>;        // Optional
    link?: LinkField;                  // Optional
  };
}

// Usage with optional chaining
const description = fields.description?.value;
```

### Example 3: Nested Data

```typescript
// multi-promo
interface MultiPromoProps {
  fields: {
    data: {
      datasource: {
        title: { jsonValue: Field<string> };
        children: {
          results: Array<{
            heading: { jsonValue: Field<string> };
            image: { jsonValue: ImageField };
            link?: { jsonValue?: LinkField };
          }>;
        };
      };
    };
  };
}

// Usage
const { title, children } = fields.data.datasource;
{children.results.map(item => (
  <div key={item.id}>
    <Text field={item.heading.jsonValue} />
    <Image field={item.image.jsonValue} />
  </div>
))}
```

### Example 4: With Parameters

```typescript
// hero
interface HeroProps {
  params: {
    colorScheme?: 'primary' | 'secondary' | 'tertiary';
  };
  fields: {
    titleRequired: Field<string>;
    descriptionOptional?: Field<string>;
  };
}

// Usage
const { colorScheme } = params;
const heroClass = colorScheme === 'primary' ? 'bg-blue' : 'bg-gray';
```

## Field Naming Conventions

### Suffix Convention

Fields are named with suffixes indicating their type:

- `Required` - Mandatory field
- `Optional` - Optional field
- `Optional1`, `Optional2` - Multiple optional variants

Examples:
- `titleRequired` - Must have a value
- `descriptionOptional` - May be empty
- `heroImageOptional1` - First optional image
- `heroImageOptional2` - Second optional image

### Data Access Patterns

```typescript
// Pattern 1: Direct access
const { title } = fields;

// Pattern 2: Datasource access
const { title } = fields.data.datasource;

// Pattern 3: External fields access
const { pageTitle } = fields.data.externalFields;

// Pattern 4: Child results access
const { children } = fields.data.datasource;
children.results.map(item => item.heading.jsonValue);
```

## Type Definitions

### Import These Types

```typescript
import {
  Field,
  ImageField,
  LinkField,
  RichTextField,
  ComponentRendering
} from '@sitecore-content-sdk/nextjs';

import { ComponentProps } from '@/lib/component-props';
```

### Common Type Combinations

```typescript
// Text + Link
interface Props {
  fields: {
    text: Field<string>;
    link: LinkField;
  };
}

// Image + Text
interface Props {
  fields: {
    image: ImageField;
    caption: Field<string>;
  };
}

// Multiple Images
interface Props {
  fields: {
    image1?: ImageField;
    image2?: ImageField;
    image3?: ImageField;
  };
}
```

## Debugging Props

### Console Logging

```typescript
const Component = ({ fields, params }) => {
  console.log('Fields:', fields);
  console.log('Params:', params);
  
  return <div>...</div>;
};
```

### Debugging Component

```typescript
import { NoDataFallback } from '@/utils/NoDataFallback';

const Component = ({ fields }) => {
  if (!fields || !fields.title) {
    return <NoDataFallback componentName="Component" />;
  }
  
  return <div>...</div>;
};
```

## Best Practices

1. **Always define props interface** - TypeScript types prevent errors
2. **Use optional chaining** - Handle missing data gracefully
3. **Check for data existence** - Show fallbacks when data is missing
4. **Follow naming conventions** - Use Required/Optional suffixes
5. **Use Sitecore components** - Text, Image, Link for editing support

