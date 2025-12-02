# Intro Section Component

## Overview

The Intro Section component displays a large heading with highlighted key phrases. Perfect for homepage introductions and key messaging.

## Features

- Large heading text (responsive sizing)
- Rich text support with HTML spans for highlighting
- Max-width container for readability
- Clyde & Co typography (Playfair Display heading font)

## Sitecore Template Setup

### Create Intro Section Template

**Template Name:** `IntroSection`

**Fields:**
- `Heading` (Rich Text)
  - Field Name: `heading`
  - Required: Yes
  - Supports HTML spans with `text-[#00677F]` class for highlighting

## Usage

1. Create a datasource item using the `IntroSection` template
2. Add the component to your page placeholder (`headless-main`)
3. Assign the datasource to the component
4. Enter your heading text in the `Heading` field

## Highlighting Text

To highlight specific phrases in the heading, wrap them in a span with the `text-[#00677F]` class:

```html
Where there is opportunity, there is risk. <span class="text-[#00677F]">As the business landscape constantly evolves,</span> you need a legal partner with an in-depth understanding <span class="text-[#00677F]">of how to best address and navigate the risks you face.</span>
```

## Component Parameters

No parameters are currently supported.

## Styling

- Background: White
- Text color: `#212529` (dark gray)
- Highlighted text: `#00677F` (brand teal)
- Font: Playfair Display (heading font)
- Font sizes:
  - Mobile: 3xl (30px)
  - Tablet: 4xl (36px)
  - Desktop: 5xl (48px)

## Example Content

**Heading:**
"Where there is opportunity, there is risk. <span class="text-[#00677F]">As the business landscape constantly evolves,</span> you need a legal partner with an in-depth understanding <span class="text-[#00677F]">of how to best address and navigate the risks you face.</span>"


