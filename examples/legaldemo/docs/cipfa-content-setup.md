# CIPFA Content Setup Guide

This guide provides all the content and HTML needed to set up CIPFA components in Sitecore.

## Hero Carousel

### Updated Default Data

The HeroCarousel component now includes 5 slides with CIPFA content and placeholder images:

1. **Public Finance Live 2026** - Event promotion
2. **Developing tomorrow's public finance leaders** - Training
3. **Create the next generation of counter fraud investigators** - Qualifications
4. **ICAEW CIPFA Public Sector Sustainability Certificate** - Certificate
5. **Accelerated route to CPFA and ACA** - Qualifications

### Image Placeholders

The default slides use placeholder images from `via.placeholder.com` with CIPFA brand colors:
- Primary Blue: `#003366`
- Dark Blue: `#002850`

**Note**: Replace these placeholder images with actual CIPFA images in Sitecore. Recommended image size: 1920x1080px.

### Sitecore Setup

1. Create `HeroCarouselSlide` items for each slide
2. Add images to each slide item
3. Create a `HeroCarousel` datasource item
4. Add slides to the `slides` multi-list field on the datasource

## Rich Text Block - System Upgrade Notice

### HTML Content

Use this HTML in a **Rich Text Block** component:

```html
<div style="background-color: #F8F9FA; border-left: 4px solid #003366; padding: 24px; margin-bottom: 32px;">
  <h3 style="font-size: 1.25rem; font-weight: 400; margin-bottom: 16px; color: #212529;">System Upgrade Complete</h3>
  <p style="margin-bottom: 16px; color: #212529;">
    We have completed the work on upgrading our systems to make it easier for you to access CIPFA's services. MyCIPFA, student registration and membership applications are now available. As our system is new, we will continue to monitor in case of any issues. If there are any issues accessing MyCIPFA, the links below are available as an alternative.
  </p>
  <ul style="list-style-type: disc; list-style-position: inside; margin-bottom: 16px; color: #212529;">
    <li style="margin-bottom: 8px;">Students can access their classes and learning materials via <a href="https://www.cipfa.org/LMSLogin" style="color: #003366; text-decoration: underline;">www.cipfa.org/LMSLogin</a>.</li>
    <li style="margin-bottom: 8px;">Take the <a href="#" style="color: #003366; text-decoration: underline;">specimen test</a>, take the <a href="#" style="color: #003366; text-decoration: underline;">technical test</a> or <a href="#" style="color: #003366; text-decoration: underline;">schedule CIPFA exams</a>.</li>
  </ul>
  <p style="margin-bottom: 16px; color: #212529;">
    If you need support please contact CIPFA by phone <a href="tel:+442075435600" style="color: #003366; text-decoration: underline;">+44 (0)20 7543 5600</a> or email <a href="mailto:hello@cipfa.org" style="color: #003366; text-decoration: underline;">hello@cipfa.org</a>.
  </p>
  <p style="color: #212529;">
    Thank you for your patience while we make these improvements and we apologise for any inconvenience caused.
  </p>
</div>
```

### Sitecore Setup

1. Add a **Rich Text Block** component to your page
2. Paste the HTML above into the rich text field
3. The component will render with CIPFA styling

## Heading Text Component - "Who we are"

### Component Details

- **Component Name**: `heading-text`
- **Template Fields**: `heading` (Single-Line Text), `text` (Rich Text)

### Content

**Heading:**
```
Who we are
```

**Text (Rich Text HTML):**
```html
<p>The Chartered Institute of Public Finance and Accountancy (CIPFA) is a UK-based international accountancy membership and standard-setting body. We are the only such body globally dedicated to public financial management.</p>

<p>CIPFA believes that improving public services is the key to changing lives for the better and that good public financial management is central to achieving this ambition. Our educational and advisory services support our members, students and other public finance professionals throughout their careers — helping them add value to their teams and the organisations for which they work. Through our work, we help ensure public money is raised and spent with the highest degree of openness.</p>

<p>We are committed to making a real difference to the world we live in.</p>
```

### Plain Text Alternative

If HTML is not supported in your rich text field:

```
The Chartered Institute of Public Finance and Accountancy (CIPFA) is a UK-based international accountancy membership and standard-setting body. We are the only such body globally dedicated to public financial management.

CIPFA believes that improving public services is the key to changing lives for the better and that good public financial management is central to achieving this ambition. Our educational and advisory services support our members, students and other public finance professionals throughout their careers — helping them add value to their teams and the organisations for which they work. Through our work, we help ensure public money is raised and spent with the highest degree of openness.

We are committed to making a real difference to the world we live in.
```

### Sitecore Setup

1. Create a datasource item for the Heading Text component
2. Set the `heading` field to "Who we are"
3. Paste the HTML or plain text into the `text` rich text field
4. Assign the datasource to the component on your page

## Quick Reference

| Component | Content Type | Documentation |
|-----------|-------------|---------------|
| Hero Carousel | Multi-list of slides | `docs/components/HeroCarousel.md` |
| Rich Text Block | HTML content | `docs/cipfa-rich-text-content.md` |
| Heading Text | Heading + Rich Text | `docs/components/HeadingText.md` |

## Brand Colors Reference

- **Primary Blue**: `#003366`
- **Primary Hover**: `#002850`
- **Text**: `#212529`
- **Background**: `#F8F9FA`
- **White**: `#FFFFFF`

## Additional Resources

- [CIPFA Branding Guide](./cipfa-branding.md)
- [Hero Carousel Documentation](./components/HeroCarousel.md)
- [Heading Text Documentation](./components/HeadingText.md)
- [Rich Text Content](./cipfa-rich-text-content.md)
