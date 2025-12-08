# Article Content Component

## Overview

The Article Content component displays article content sections with a table of contents navigation. Perfect for long-form articles and reports.

## Features

- Table of contents with anchor links
- Multiple content sections
- Download button support (appears after first section)
- Rich text content
- Responsive typography
- Clyde & Co styling

## Sitecore Template Setup

### 1. Create Article Content Template

**Template Name:** `ArticleContent`

**Fields:**
- `DownloadButtonText` (Single-Line Text)
  - Field Name: `downloadButtonText`
  - Required: No
  - Default: "Download"
- `DownloadButtonLink` (General Link)
  - Field Name: `downloadButtonLink`
  - Required: No

### 2. Create Article Section Template

**Template Name:** `ArticleSection`

**Base Template:** Standard Template

**Fields:**
- `Title` (Single-Line Text)
  - Field Name: `title`
  - Required: Yes
- `Content` (Rich Text)
  - Field Name: `content`
  - Required: Yes
- `Id` (Single-Line Text)
  - Field Name: `id`
  - Required: No
  - Used for anchor links (auto-generated if not provided)

### 3. Configure Treelist Field

Add a Treelist field to `ArticleContent` template:
- `Children` (Treelist)
  - Field Name: `children`
  - Source: `/sitecore/templates/YourProject/ArticleSection`
  - Required: No

## Usage

1. Create a datasource item using the `ArticleContent` template
2. Add child items using the `ArticleSection` template
3. Optionally set `Id` field for custom anchor links (e.g., "introduction", "findings", "conclusion")
4. Add the component to your page placeholder (`headless-main`)
5. Assign the datasource to the component

## Component Parameters

No parameters are currently supported.

## Styling

- Background: White
- Border: `#E9ECEF` (light gray)
- Text color: `#212529` (dark gray)
- Link color: `#00677F` (brand teal)
- Button: `#00677F` background, white text
- Typography: Playfair Display for headings, Inter for body

## Example Content

**DownloadButtonText:** "Download Report"

**DownloadButtonLink:** `/reports/corporate-risk-radar-2025.pdf`

**Sections:**

1. **Introduction**
   - Id: "introduction"
   - Content: "This report presents findings from our annual survey..."

2. **Key Findings**
   - Id: "findings"
   - Content: "Our research reveals six key risk areas..."

3. **Conclusion**
   - Id: "conclusion"
   - Content: "Organizations must adapt to navigate these evolving risks..."

## Table of Contents

The table of contents is automatically generated from section titles. Clicking a link scrolls to the corresponding section with smooth scrolling and proper offset for fixed headers.



