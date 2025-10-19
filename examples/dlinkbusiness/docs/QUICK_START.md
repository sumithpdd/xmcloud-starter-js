# Quick Start Guide - D-Link Business Sitecore JSS Project

## Overview

This guide provides step-by-step instructions to get the D-Link Business Sitecore JSS project up and running quickly for enterprise customers.

## Prerequisites

- **Node.js** 18+ installed
- **npm** or **yarn** package manager
- **Sitecore XM Cloud** instance with API access
- **Git** for version control
- **Business Sitecore License** (for enterprise features)

## Project Structure

```
examples/dLinkBusiness/
├── src/
│   ├── components/           # React components
│   ├── lib/                  # Configuration and utilities
│   ├── pages/                # Next.js pages
│   ├── assets/               # Static assets and styles
│   └── types/                # TypeScript type definitions
├── docs/                     # Project documentation
├── package.json              # Dependencies and scripts
└── sitecore.config.ts        # Sitecore configuration
```

## Quick Setup

### 1. Clone and Navigate
```bash
git clone <repository-url>
cd xmcloud-starter-js/examples/dLinkBusiness
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create `.env.local` file in the project directory:

```env
SITECORE_API_HOST=https://your-sitecore-instance.com
SITECORE_API_KEY=your-api-key
SITECORE_SITE_NAME=dlinkbusiness
SITECORE_LANGUAGE=en
BUSINESS_MODE=true
ENTERPRISE_FEATURES=true
```

### 4. Start Development Server
```bash
npm run dev
```

### 5. Open Your Browser
Navigate to `http://localhost:3000`

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run prettier` | Format code |
| `npm run sitecore-tools:build` | Build Sitecore components |
| `npm run sitecore-tools:generate-map` | Generate component map |

## Business Project Features

### Enterprise Solutions
- **Network Infrastructure**: Switches, routers, wireless
- **Cloud Management**: Nuclias cloud platform
- **IP Surveillance**: Business security solutions
- **Industry Solutions**: M2M, D-ECS, industrial switches

### Business Components
- **BusinessHomePage**: Complete business home page
- **ProductShowcase**: Enterprise product showcases
- **EnterpriseSolutions**: Solution highlights
- **BusinessCaseStudies**: Customer success stories
- **TechnicalSpecifications**: Detailed product specs
- **BusinessSupport**: Professional support services

### Professional Features
- **Business Navigation**: Enterprise-focused menu structure
- **Case Studies**: Customer success stories
- **Technical Documentation**: Detailed specifications
- **Professional Contact Forms**: Business inquiry forms
- **Solution Selector**: Business solution recommendation tool

## Sitecore Configuration

### Required Data Templates

#### Core Templates
- GlobalHeader
- GlobalFooter
- Hero
- Logo
- TextBanner
- CtaBanner
- Card
- RichTextBlock
- AccordionBlock
- TestimonialCarousel
- Image
- Video
- Navigation
- SiteMetadata
- ButtonComponent

#### Business-Specific Templates
- BusinessHomePage
- ProductShowcase
- EnterpriseSolutions
- BusinessCaseStudies
- TechnicalSpecifications
- BusinessSupport
- ProductComparison
- BusinessContactForm
- SolutionSelector
- BusinessVideo
- TechnicalDiagram
- BusinessNavigation
- SolutionBreadcrumbs
- BusinessMetadata
- BusinessButton

### Business Field Types
- BusinessTextField
- IndustryField
- CompanySizeField
- SolutionTypeField
- TechnicalSpecField
- CaseStudyField
- BusinessContactField
- SolutionCriteriaField

## Styling and Branding

### D-Link Business Brand Colors
- **Primary Blue**: `#0051ff` (Professional blue)
- **Accent Green**: `#c8ff00` (Success/positive green)
- **Background**: `#ffffff` (Clean white)
- **Text**: `#000000` (Professional black)
- **Secondary Gray**: `#f5f5f5` (Light gray backgrounds)

### Professional Design Elements
- **Clean Layouts**: Minimal, professional design
- **Consistent Spacing**: Uniform margins and padding
- **Subtle Shadows**: Professional depth and hierarchy
- **Corporate Imagery**: Business-appropriate visuals

## Business Integration

### CRM Integration
- Salesforce integration for lead management
- Microsoft Dynamics integration
- Custom CRM API endpoints

### Analytics and Tracking
- Business conversion tracking
- Enterprise user behavior analytics
- ROI measurement tools
- Business intelligence dashboards

### Content Management
- Multi-language support for global business
- Role-based content access
- Business content workflows
- Approval processes for technical content

## Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Environment Issues**
   - Verify `.env.local` file exists
   - Check Sitecore API credentials
   - Ensure correct site name (`dlinkbusiness`)
   - Verify business mode is enabled

3. **Business Component Errors**
   - Check business-specific field mappings
   - Verify enterprise templates exist
   - Review business component props
   - Ensure proper business permissions

4. **Performance Issues**
   - Check CDN configuration
   - Optimize business images and videos
   - Implement proper caching strategies
   - Monitor enterprise traffic patterns

### Business-Specific Troubleshooting

1. **Content Management Issues**
   - Verify business content permissions
   - Check multi-language content setup
   - Ensure technical content accuracy
   - Validate business workflow processes

2. **Integration Issues**
   - Test CRM integrations
   - Verify analytics tracking
   - Check business form submissions
   - Validate enterprise user authentication

## Deployment

### Production Build
```bash
npm run build
```

### Business Environment Variables
Ensure these are set in production:
- `SITECORE_API_HOST`
- `SITECORE_API_KEY`
- `SITECORE_SITE_NAME=dlinkbusiness`
- `SITECORE_LANGUAGE=en`
- `BUSINESS_MODE=true`
- `ENTERPRISE_FEATURES=true`

### Business Hosting Requirements
- **High Availability**: 99.9% uptime SLA
- **Performance**: Sub-2 second load times
- **Security**: SSL/TLS encryption
- **Scalability**: Handle enterprise traffic
- **Monitoring**: Business-grade monitoring and analytics

## Next Steps

1. **Explore Business Components**: Review available components in `src/components/`
2. **Configure Business Templates**: Set up enterprise data templates
3. **Customize Business Content**: Modify content for your business needs
4. **Integrate CRM**: Connect with your business CRM system
5. **Deploy**: Follow business deployment guide

## Resources

- [Sitecore Content SDK Docs](https://doc.sitecore.com/xmc/en/developers/content-sdk/index.html)
- [D-Link Business Solutions](https://www.dlink.com/en/business)
- [Enterprise Support Portal](https://support.dlink.com)
- [Technical Documentation](https://docs.dlink.com)

## Business Support

For business-specific support:
- **Email**: business@dlink.com
- **Phone**: +1-800-DLINK-BIZ
- **Website**: https://www.dlink.com/en/business
- **Documentation**: Check `docs/README.md` for detailed information
