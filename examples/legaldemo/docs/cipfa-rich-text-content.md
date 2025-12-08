# CIPFA Rich Text Content

This document contains HTML content for CIPFA components that can be used in Sitecore rich text fields.

## System Upgrade Notice

Use this HTML in a **Rich Text Block** component for the system upgrade announcement:

```html
<div class="bg-[#F8F9FA] border-l-4 border-[#003366] p-6 mb-8">
  <h3 class="text-xl font-heading font-normal mb-4 text-[#212529]">System Upgrade Complete</h3>
  <p class="mb-4 text-[#212529]">
    We have completed the work on upgrading our systems to make it easier for you to access CIPFA's services. MyCIPFA, student registration and membership applications are now available. As our system is new, we will continue to monitor in case of any issues. If there are any issues accessing MyCIPFA, the links below are available as an alternative.
  </p>
  <ul class="list-disc list-inside mb-4 space-y-2 text-[#212529]">
    <li>Students can access their classes and learning materials via <a href="https://www.cipfa.org/LMSLogin" class="text-[#003366] hover:underline">www.cipfa.org/LMSLogin</a>.</li>
    <li>Take the <a href="#" class="text-[#003366] hover:underline">specimen test</a>, take the <a href="#" class="text-[#003366] hover:underline">technical test</a> or <a href="#" class="text-[#003366] hover:underline">schedule CIPFA exams</a>.</li>
  </ul>
  <p class="mb-4 text-[#212529]">
    If you need support please contact CIPFA by phone <a href="tel:+442075435600" class="text-[#003366] hover:underline">+44 (0)20 7543 5600</a> or email <a href="mailto:hello@cipfa.org" class="text-[#003366] hover:underline">hello@cipfa.org</a>.
  </p>
  <p class="text-[#212529]">
    Thank you for your patience while we make these improvements and we apologise for any inconvenience caused.
  </p>
</div>
```

### Simplified Version (without custom classes)

If your rich text field doesn't support custom Tailwind classes, use this simpler version:

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

## Usage Instructions

1. **For Rich Text Block Component:**
   - Create or edit a Rich Text Block component in Sitecore
   - Paste the HTML content into the rich text field
   - The component will render the styled content

2. **Styling Notes:**
   - The first version uses Tailwind CSS classes (if your rich text renderer supports them)
   - The second version uses inline styles for maximum compatibility
   - Colors used: `#003366` (CIPFA primary blue), `#212529` (text), `#F8F9FA` (background)

3. **Links:**
   - Update the placeholder links (`#`) with actual URLs as needed
   - Phone and email links are already formatted correctly
