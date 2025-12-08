# CIPFA System Upgrade Notice - HTML

This document provides the HTML content for the system upgrade notice that matches the CIPFA website styling and uses CIPFA brand colors.

## HTML Content

Use this HTML in a **Rich Text Block** component:

```html
<hr style="border: 1px solid #003366; margin: 24px 0;">
<p style="color: #212529; font-size: 16px; line-height: 24px; margin-bottom: 16px;">We have completed the work on upgrading our systems to make it easier for you to access CIPFA's services. MyCIPFA, student registration and membership applications are now available. As our system is new, we will continue to monitor in case of any issues. If there are any issues accessing MyCIPFA, the links below are available as an alternative.</p>
<p style="color: #212529; font-size: 16px; line-height: 24px; margin-bottom: 16px;">Students can access their classes and learning materials via <a href="https://www.cipfa.org/LMSLogin" style="color: #003366; text-decoration: none;">www.cipfa.org/LMSLogin</a>.</p>
<p style="color: #212529; font-size: 16px; line-height: 24px; margin-bottom: 16px;"><a href="https://id.rogoserver.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Drogo-classic%26redirect_uri%3Dhttps%253A%252F%252Fcipfaexam.rogoserver.com%252Fsignin-oidc%26response_type%3Dcode%2520id_token%26scope%3Dopenid%2520profile%26state%3DOpenIdConnect.AuthenticationProperties%253DUbzc09V2T9v-mBiJ-fblRTulbQNr60eEHjW6hfQip1fLro2T_NISb5cOq5oSKIUFJ5mzzIv5y1XOs1I8lqxk5TO764NWmBMRFi_kjHjC0p1hh2y-e3tdq5zlecJn0KcTvudb0ysHPnjs-8WAAoPaVjbdsRH4aQnv0aug62kq_g3atkIQBKALpLKJAUsyiQRY0NGt2tJw2gofJr9R0kQxqVLrx3Ur7qTOXQgrWTPuaRc%26response_mode%3Dform_post%26nonce%3D638991642845836985.ZDAyNGNjYWEtYTg0Zi00MjI1LThmNTYtMDY3MWEwZjdiMWI1NmUwNmVkYjItYjY0MS00YzYyLWFlYTItZjFkYjUwMmZhMDM0%26collegeId%3D1467%26rogoReturnUrl%3D%252F%26post_logout_redirect_uri%3Dhttps%253A%252F%252Fcipfaexam.rogoserver.com%26x-client-SKU%3DID_NET472%26x-client-ver%3D8.14.0.0" target="_blank" rel="noopener noreferrer" style="color: #003366; text-decoration: none;">Take the specimen test, take the technical test or schedule CIPFA exams.</a></p>
<p style="color: #212529; font-size: 16px; line-height: 24px; margin-bottom: 16px;">If you need support please contact CIPFA by phone <a href="tel:+442075435600" style="color: #003366; text-decoration: none;">+44 (0)20 7543 5600</a> or email <a href="mailto:hello@cipfa.org" style="color: #003366; text-decoration: none;">hello@cipfa.org</a>.</p>
<p style="color: #212529; font-size: 16px; line-height: 24px; margin-bottom: 16px;">Thank you for your patience while we make these improvements and we apologise for any inconvenience caused.</p>
<hr style="border: 1px solid #003366; margin: 24px 0;">
```

## Simplified Version (Without Inline Styles)

If your rich text editor strips inline styles, use this version with CSS classes (requires Tailwind CSS support):

```html
<hr class="border-t border-[#003366] my-6">
<p class="text-[#212529] text-base leading-6 mb-4">We have completed the work on upgrading our systems to make it easier for you to access CIPFA's services. MyCIPFA, student registration and membership applications are now available. As our system is new, we will continue to monitor in case of any issues. If there are any issues accessing MyCIPFA, the links below are available as an alternative.</p>
<p class="text-[#212529] text-base leading-6 mb-4">Students can access their classes and learning materials via <a href="https://www.cipfa.org/LMSLogin" class="text-[#003366] no-underline hover:underline">www.cipfa.org/LMSLogin</a>.</p>
<p class="text-[#212529] text-base leading-6 mb-4"><a href="https://id.rogoserver.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Drogo-classic%26redirect_uri%3Dhttps%253A%252F%252Fcipfaexam.rogoserver.com%252Fsignin-oidc%26response_type%3Dcode%2520id_token%26scope%3Dopenid%2520profile%26state%3DOpenIdConnect.AuthenticationProperties%253DUbzc09V2T9v-mBiJ-fblRTulbQNr60eEHjW6hfQip1fLro2T_NISb5cOq5oSKIUFJ5mzzIv5y1XOs1I8lqxk5TO764NWmBMRFi_kjHjC0p1hh2y-e3tdq5zlecJn0KcTvudb0ysHPnjs-8WAAoPaVjbdsRH4aQnv0aug62kq_g3atkIQBKALpLKJAUsyiQRY0NGt2tJw2gofJr9R0kQxqVLrx3Ur7qTOXQgrWTPuaRc%26response_mode%3Dform_post%26nonce%3D638991642845836985.ZDAyNGNjYWEtYTg0Zi00MjI1LThmNTYtMDY3MWEwZjdiMWI1NmUwNmVkYjItYjY0MS00YzYyLWFlYTItZjFkYjUwMmZhMDM0%26collegeId%3D1467%26rogoReturnUrl%3D%252F%26post_logout_redirect_uri%3Dhttps%253A%252F%252Fcipfaexam.rogoserver.com%26x-client-SKU%3DID_NET472%26x-client-ver%3D8.14.0.0" target="_blank" rel="noopener noreferrer" class="text-[#003366] no-underline hover:underline">Take the specimen test, take the technical test or schedule CIPFA exams.</a></p>
<p class="text-[#212529] text-base leading-6 mb-4">If you need support please contact CIPFA by phone <a href="tel:+442075435600" class="text-[#003366] no-underline hover:underline">+44 (0)20 7543 5600</a> or email <a href="mailto:hello@cipfa.org" class="text-[#003366] no-underline hover:underline">hello@cipfa.org</a>.</p>
<p class="text-[#212529] text-base leading-6 mb-4">Thank you for your patience while we make these improvements and we apologise for any inconvenience caused.</p>
<hr class="border-t border-[#003366] my-6">
```

## Color Reference

- **Text Color**: `#212529` (Dark Gray - CIPFA standard text color)
- **Link Color**: `#003366` (CIPFA Primary Blue)
- **Link Hover**: `#002850` (CIPFA Primary Hover - applied via CSS)
- **Separator**: `#003366` (CIPFA Primary Blue)

## Structure

The HTML follows the CIPFA website structure:
1. **Horizontal Rule** - Separator line at the top (CIPFA brand blue)
2. **Paragraph 1** - Main announcement text
3. **Paragraph 2** - LMS Login link
4. **Paragraph 3** - Exam scheduling link (opens in new tab)
5. **Paragraph 4** - Contact information (phone and email links)
6. **Paragraph 5** - Closing statement
7. **Horizontal Rule** - Separator line at the bottom (CIPFA brand blue)

## Usage Instructions

1. **For Rich Text Block Component:**
   - Create or edit a Rich Text Block component in Sitecore
   - Paste the HTML content (first version with inline styles) into the rich text field
   - The component will render with CIPFA styling

2. **Link URLs:**
   - LMS Login: `https://www.cipfa.org/LMSLogin`
   - Exam Scheduling: Long URL (preserved from CIPFA website)
   - Phone: `tel:+442075435600`
   - Email: `mailto:hello@cipfa.org`

3. **Accessibility:**
   - External links include `target="_blank" rel="noopener noreferrer"` for security
   - Phone and email links use proper `tel:` and `mailto:` protocols

## Notes

- The separator lines (`<hr>`) match the CIPFA website's visual separation
- All links use CIPFA brand blue (`#003366`) for consistency
- Text uses the standard CIPFA text color (`#212529`)
- The structure matches the live CIPFA website exactly
