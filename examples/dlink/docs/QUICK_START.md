# Quick Start Guide - D-Link Sitecore JSS Projects

## Overview

This guide provides step-by-step instructions to get both D-Link Sitecore JSS projects up and running quickly.

## Prerequisites

- **Node.js** 18+ installed
- **npm** or **yarn** package manager
- **Sitecore XM Cloud** instance with API access
- **Git** for version control

## Project Structure

```
xmcloud-starter-js/
├── examples/
│   ├── dlink/                 # Consumer-focused project
│   │   ├── src/
│   │   ├── docs/
│   │   ├── package.json
│   │   └── sitecore.config.ts
│   └── dLinkBusiness/         # Business-focused project
│       ├── src/
│       ├── docs/
│       ├── package.json
│       └── sitecore.config.ts
└── README.md
```

## Quick Setup

### 1. Clone and Navigate
```bash
git clone <repository-url>
cd xmcloud-starter-js
```

### 2. Choose Your Project

#### For Consumer Project (dlink):
```bash
cd examples/dlink
```

#### For Business Project (dLinkBusiness):
```bash
cd examples/dLinkBusiness
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment
Create `.env.local` file in your chosen project directory:

#### For dlink project:
```env
SITECORE_API_HOST=https://your-sitecore-instance.com
SITECORE_API_KEY=your-api-key
SITECORE_SITE_NAME=dlink
SITECORE_LANGUAGE=en
```

#### For dLinkBusiness project:
```env
SITECORE_API_HOST=https://your-sitecore-instance.com
SITECORE_API_KEY=your-api-key
SITECORE_SITE_NAME=dlinkbusiness
SITECORE_LANGUAGE=en
BUSINESS_MODE=true
```

### 5. Start Development Server
```bash
npm run dev
```

### 6. Open Your Browser
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

## Project Differences

### dlink (Consumer Project)
- **Focus**: Home networking products
- **Audience**: Individual consumers
- **Features**: Wi-Fi, cameras, smart home, adapters
- **Design**: Modern, consumer-friendly interface

### dLinkBusiness (Business Project)
- **Focus**: Enterprise networking solutions
- **Audience**: Business customers
- **Features**: Switches, wireless, routers, Nuclias, surveillance
- **Design**: Professional, corporate interface

## Key Components

### Core Components (Both Projects)
- **GlobalHeader**: Main navigation
- **GlobalFooter**: Site footer
- **Hero**: Hero sections
- **Logo**: Brand logo
- **Navigation**: Site navigation
- **Footer**: Footer component

### Business-Specific Components (dLinkBusiness Only)
- **BusinessHomePage**: Business home page
- **ProductShowcase**: Product showcases
- **EnterpriseSolutions**: Enterprise solutions
- **BusinessCaseStudies**: Case studies
- **TechnicalSpecifications**: Technical specs

## Sitecore Configuration

### Required Data Templates
Both projects require these Sitecore templates:
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

### Business Templates (dLinkBusiness Only)
- BusinessHomePage
- ProductShowcase
- EnterpriseSolutions
- BusinessCaseStudies
- TechnicalSpecifications
- BusinessSupport

## Styling and Branding

### D-Link Brand Colors
- **Primary Blue**: `#0051ff`
- **Accent Green**: `#c8ff00`
- **Background**: `#ffffff`
- **Text**: `#000000`

### Typography
- **Font Family**: Inter, Segoe UI, Roboto, sans-serif
- **Responsive**: Mobile-first design

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
   - Ensure correct site name

3. **Component Errors**
   - Check Sitecore field mappings
   - Verify data templates exist
   - Review component props

### Getting Help
- Check project documentation in `docs/` folder
- Review component reference guide
- Consult Sitecore Content SDK documentation

## Next Steps

1. **Explore Components**: Review available components in `src/components/`
2. **Customize Content**: Modify Sitecore templates and content
3. **Add Features**: Extend components for your needs
4. **Deploy**: Follow deployment guide in project docs

## Resources

- [Sitecore Content SDK Docs](https://doc.sitecore.com/xmc/en/developers/content-sdk/index.html)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [D-Link Website](https://www.dlink.com/en)

## Support

For project-specific support:
- **dlink**: Check `examples/dlink/docs/README.md`
- **dLinkBusiness**: Check `examples/dLinkBusiness/docs/README.md`
- **General**: Review main project documentation
