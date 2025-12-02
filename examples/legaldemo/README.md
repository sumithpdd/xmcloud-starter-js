# Legal Demo - Sitecore XM Cloud Starter (NextJS)

## Overview
Legal Demo is a professional legal firm website template built to showcase XM Cloud capabilities using the Content SDK. This site mimics the structure and components of a modern legal firm website, featuring carousels, article listings, and content management capabilities.

## Developer Expectations:
* Tailwind-based styling (Shadcn)
* Personalized homepage via URL parameters
* Modular components for reuse
* Localization support for English (en) and Canadian English (en-CA)

## Preconditions
1. You have deployed your XM Cloud environment already. If not follow this link: [Deploy a Project and Environment](https://doc.sitecore.com/xmc/en/developers/xm-cloud/deploy-a-project-and-environment.html)

## Build and run site locally
1. Clone the repository (if not yet done) 
    ```git clone https://github.com/Sitecore/xmcloud-starter-js```
2. Starting from the root of the repository navigate to site app folder
    ```cd examples\legaldemo\```
3. Copy the environment file ```.env.remote.example```
4. Rename the copied file to ```.env.local```
5. Edit ```.env.local``` and provide a value for ```SITECORE_EDGE_CONTEXT_ID```, ```NEXT_PUBLIC_DEFAULT_SITE_NAME``` (set to `legaldemo`), ```NEXT_PUBLIC_SITECORE_EDGE_CONTEXT_ID```, ```SITECORE_EDITING_SECRET```. (More info: [Environment variables in XM Cloud](https://doc.sitecore.com/xmc/en/developers/xm-cloud/get-the-environment-variables-for-a-site.html))

6. Install dependencies:
   from ```legaldemo``` run ```npm install```
7. Run the site locally: 
    ```npm run dev```
8. Access the site:
Visit http://localhost:3000 in your browser.

## Add Editing host to XM Cloud
If you have not enabled the split deployment feature your edting hosts are automatically created based on the xmcloud.build.json if enabled is set to true. The following steps are not required. Only if you have enabled the split deployment feature, continue with the next steps.

1. Go to Sitecore Cloud Portal https://portal.sitecorecloud.io
2. Open XM Cloud Deploy
3. Select Project that has been deployed
4. Switch to tab "Editing Hosts"
5. Click "Add editing host"
6. Provide Editing host name  ```legaldemo``` as per xmcloud.build.json
7. Check if the link to authoring environment is set correctly (should be by default)
8.  Check if the source code provider is set correctly (should be by default)
9. Check if the GitHub Account is set correctly (should be by default)
10. Check if repository is set correctly (should be by default)
11. Check if Branch is set correctly (should be by default)
12. Set the Auto deploy option (recommended)
13. No custom environment variables are required
14. Click "Save"
15. On the new new editing host click the ... and hit "Build and deploy"

Additional Info: You do not have to create rendering host items in XM Cloud as those are created automatically for you when creating a rendering host. Mapping of sites using site templates to editing hosts is also done automatically.

## Components

### Hero Carousel Component

A full-width, responsive carousel component designed for hero sections. Supports multiple slides with images, titles, subtitles, descriptions, and call-to-action links.

**Features:**
- Multiple slides with customizable content
- Autoplay functionality (configurable)
- Navigation arrows and dot indicators
- Responsive design
- Full Sitecore XM Cloud integration

**Documentation:** See [Hero Carousel Component Documentation](./docs/components/hero-carousel.md) for detailed setup instructions, Sitecore field requirements, and usage examples.

**Quick Setup:**
1. Create a `HeroCarousel` template in Sitecore
2. Create a `HeroCarouselSlide` template with fields: Title, Subtitle, Description, Image, Link, Background Color
3. Add the component to your page placeholder (`headless-main`)
4. Create child slide items under the datasource

For complete setup instructions and field requirements, see the [component documentation](./docs/components/hero-carousel.md).

## Component Documentation

Detailed documentation for all custom components is available in the [docs/components](./docs/components/) directory:

- [Hero Carousel](./docs/components/hero-carousel.md) - Full-width carousel component

## Sitecore Setup Guide

For step-by-step instructions on setting up components in Sitecore XM Cloud, see the [Sitecore Setup Guide](./docs/sitecore-setup.md). This guide includes:

- Template creation instructions
- Field configuration
- Content item setup
- Component registration
- Troubleshooting tips

## Additional Resources

[Sitecore Content SDK Documentation](https://doc.sitecore.com/xmc/en/developers/content-sdk/sitecore-content-sdk-for-xm-cloud.html)
