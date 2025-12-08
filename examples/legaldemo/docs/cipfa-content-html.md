# CIPFA Content HTML Reference

This document contains HTML snippets for rich text content based on the CIPFA website (https://www.cipfa.org/).

## System Upgrade Announcement

Use this HTML in a Rich Text field for the system upgrade announcement:

```html
<p>We have completed the work on upgrading our systems to make it easier for you to access CIPFA's services. MyCIPFA, student registration and membership applications are now available. As our system is new, we will continue to monitor in case of any issues. If there are any issues accessing MyCIPFA, the links below are available as an alternative.</p>

<p>Students can access their classes and learning materials via <a href="https://www.cipfa.org/LMSLogin">www.cipfa.org/LMSLogin</a>.</p>

<p>Take the specimen test, take the technical test or schedule CIPFA exams.</p>

<p>If you need support please contact CIPFA by phone <a href="tel:+442075435600">+44 (0)20 7543 5600</a> or email <a href="mailto:hello@cipfa.org">hello@cipfa.org</a>.</p>

<p>Thank you for your patience while we make these improvements and we apologise for any inconvenience caused.</p>
```

## Who We Are Section

Use this HTML in the Heading Text component's text field:

```html
<p>The Chartered Institute of Public Finance and Accountancy (CIPFA) is a UK-based international accountancy membership and standard-setting body. We are the only such body globally dedicated to public financial management.</p>

<p>CIPFA believes that improving public services is the key to changing lives for the better and that good public financial management is central to achieving this ambition. Our educational and advisory services support our members, students and other public finance professionals throughout their careers — helping them add value to their teams and the organisations for which they work. Through our work, we help ensure public money is raised and spent with the highest degree of openness.</p>

<p>We are committed to making a real difference to the world we live in.</p>
```

**Heading**: `Who we are`

## Usage Notes

1. **Rich Text Fields**: Paste the HTML directly into Sitecore's Rich Text field editor
2. **Links**: All links are properly formatted with `href` attributes
3. **Phone Numbers**: Use `tel:` protocol for phone links
4. **Email**: Use `mailto:` protocol for email links
5. **Paragraphs**: Each paragraph is wrapped in `<p>` tags for proper spacing

## Component Recommendations

- **System Upgrade Announcement**: Use `RichTextBlock` component
- **Who We Are**: Use `HeadingText` component with heading "Who we are" and the text content above
