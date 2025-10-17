# NHSP - Sitecore Content SDK Next.js Application

This is a custom NHSP (National Health Service Provider) project built using Sitecore Content SDK and Next.js, integrated with XM Cloud. The project features a complete implementation of the NHS Professionals website design with custom header, footer, and styling.

## Overview

The NHSP project is a custom implementation that demonstrates how to create a new Sitecore Content SDK application from scratch and integrate it with XM Cloud. This project was created using the "Start from scratch" approach in XM Cloud and includes:

![XM Cloud Starter Kit Project Creation](screenshots/01-StarterkitProjectCreated.png)

*The XM Cloud interface showing the "Start from scratch" option used to create the NHSP project*

- **Custom NHS Professionals Design**: Complete header and footer implementation based on the official NHS Professionals website
- **Responsive Layout**: Mobile-first design with Bootstrap integration
- **Sitecore Content SDK**: Full integration with Sitecore's headless CMS capabilities
- **TypeScript Support**: Type-safe development environment
- **Component-Based Architecture**: Modular and maintainable code structure

## Setup Instructions

### Prerequisites

- Access to Sitecore XM Cloud Environment
- [Node.js LTS](https://nodejs.org/en/) (v22.11.0 recommended)
- Git

### Step-by-Step Setup

#### 1. Repository Setup
```bash
# Clone the repository
git clone https://github.com/sumithpdd/xmcloud-starter-js
cd xmcloud-starter-js
```

#### 2. XM Cloud Portal Configuration
1. Navigate to [Sitecore XM Cloud Portal](https://portal.sitecorecloud.io/)
2. Select your organization
3. Go to [Deploy Portal](https://deploy.sitecorecloud.io/projects)
4. Create a new project (e.g., `spd-custom-demo`)
5. **Important**: Ensure that in Settings > Beta features, the option "Now you can use different repositories for your Authoring environments and Editing hosts" is **turned OFF**

#### 3. Create Empty Site
1. In the XM Cloud Deploy Portal, create an empty site using "Start from scratch"
2. Set the collection name to "NHSPsites"
3. Note the site details for later configuration

![XM Cloud Starter Kit Project Creation](screenshots/01-StarterkitProjectCreated.png)

*Screenshot showing the XM Cloud interface with "Start from scratch" option selected*

#### 4. Create NHSP Application
```bash
# Navigate to examples directory
cd examples

# Create NHSP folder
mkdir nhsp
cd nhsp

# Create Content SDK application
npx create-content-sdk-app@latest nhsp
```

#### 5. Build Configuration
Add the following entry to the root `xmcloud.build.json` file:

```json
"nhsp": {
  "path": "./examples/nhsp",
  "nodeVersion": "22.11.0",
  "jssDeploymentSecret": "110F1C44A496B45478640DD36F80C18C9",
  "enabled": true,
  "type": "sxa",
  "buildCommand": "build",
  "runCommand": "next:start"
}
```

#### 6. Environment Configuration
Create a `.env.local` file in the `examples/nhsp/` directory with the following variables:

```env
SITECORE_EDGE_CONTEXT_ID=
NEXT_PUBLIC_SITECORE_EDGE_CONTEXT_ID=
NEXT_PUBLIC_DEFAULT_SITE_NAME=nhsp
SITECORE_EDITING_SECRET=
```

**Note**: You'll need to populate these values from your XM Cloud project's Developer Settings.

#### 7. Custom NHSP Design Implementation
The following steps were performed to implement the NHS Professionals design:

1. **Created Custom Header Component** (`src/components/global-header/GlobalHeader.tsx`):
   - Top bar with contact information (03332 407 552)
   - Main navigation with dropdown menus
   - Mobile-responsive hamburger menu
   - NHSP logo integration

2. **Created Custom Footer Component** (`src/components/global-footer/GlobalFooter.tsx`):
   - Four-column layout with NHSP sections
   - Contact information and social media links
   - Footer bottom with legal links and copyright

3. **Updated Styling** (`src/assets/main.scss`):
   - NHS color palette implementation
   - Responsive design with Bootstrap integration
   - Custom CSS classes for NHSP branding
   - Mobile-first approach

4. **Fixed Component Issues**:
   - Resolved TypeScript import path issues
   - Fixed reserved keyword conflicts in component map
   - Updated Layout.tsx to use GlobalHeader and GlobalFooter

5. **Added Assets**:
   - Custom NHSP logo SVG
   - Font Awesome integration for social icons
   - Meta tags and favicon configuration

### Running the Application

1. Install dependencies:
```bash
cd examples/nhsp
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Access the application at `http://localhost:3000`

### Project Structure

```
nhsp/
├── src/
│   ├── components/                    # React components
│   │   ├── global-header/            # Global header component
│   │   │   ├── GlobalHeader.tsx      # Main header component
│   │   │   └── global-header.props.tsx
│   │   ├── global-footer/            # Global footer component
│   │   │   ├── GlobalFooter.tsx      # Main footer component
│   │   │   └── global-footer.props.tsx
│   │   ├── ui/                       # UI components
│   │   └── ...                       # Other components
│   ├── pages/                        # Next.js pages and API routes
│   ├── lib/                          # Utility libraries
│   ├── assets/                       # Static assets
│   │   └── main.scss                 # Main stylesheet with NHSP styling
│   └── Layout.tsx                    # Main layout component
├── public/                           # Public static files
│   └── nhsp-logo.svg                 # NHSP logo
├── .env.local                        # Environment variables (create manually)
├── next.config.js                    # Next.js configuration
├── sitecore.config.ts                # Sitecore configuration
├── tsconfig.json                     # TypeScript configuration
└── package.json                      # Dependencies and scripts
```

### Key Features

- **NHS Professionals Design**: Complete implementation of the official NHS Professionals website design
- **Sitecore Content SDK Integration**: Built with the latest Sitecore Content SDK
- **Next.js Framework**: Modern React framework with SSR capabilities
- **XM Cloud Ready**: Configured for XM Cloud deployment
- **TypeScript Support**: Full TypeScript implementation
- **Component-Based Architecture**: Modular component structure
- **Responsive Design**: Mobile-first approach with Bootstrap integration
- **Custom Styling**: NHS color palette and branding
- **Accessibility**: ARIA labels and semantic HTML
- **Performance Optimized**: Efficient CSS and minimal dependencies

### Development

This project follows standard Next.js development practices:

- Components are located in `src/components/`
- Global header and footer are in `src/components/global-header/` and `src/components/global-footer/`
- Pages and API routes are in `src/pages/`
- Sitecore-specific configurations are in `sitecore.config.ts`
- Environment variables are managed through `.env.local`
- Styling is centralized in `src/assets/main.scss`
- TypeScript configuration is in `tsconfig.json`

### NHSP Design Implementation

The project implements the complete NHS Professionals website design:

#### Header Features:
- Top bar with contact number (03332 407 552)
- Main navigation with dropdown menus for:
  - Our Members
  - Our Partner Trusts & Clients
  - Our Services
  - Doctors Direct
  - International
  - Help & Support
- Mobile-responsive hamburger menu
- NHSP logo integration

#### Footer Features:
- Four-column layout with:
  - NHSP For You section
  - About NHSP section
  - Contact Information
  - Social Media Links
- Footer bottom with legal links and copyright
- Social media icons (Facebook, Instagram, LinkedIn, Twitter, YouTube)

#### Styling:
- NHS color palette:
  - Primary Blue: #005EB8
  - Dark Blue: #003087
  - Light Blue: #41B6E6
  - Green: #00A499
  - Red: #DA020E
- Responsive design with Bootstrap integration
- Custom CSS classes for NHSP branding
- Mobile-first approach

### Deployment

The project is configured for XM Cloud deployment through the `xmcloud.build.json` configuration. When deployed, it will:

1. Build the Next.js application
2. Deploy to XM Cloud as a rendering host
3. Integrate with the Sitecore content management system

### Troubleshooting

#### Common Issues and Solutions:

1. **Environment Variables**:
   - Ensure all environment variables are properly set in `.env.local`
   - Get values from your XM Cloud project's Developer Settings

2. **XM Cloud Configuration**:
   - Verify the XM Cloud project configuration matches the build settings
   - Check that the Beta features setting is disabled in XM Cloud
   - Ensure the project name matches your XM Cloud project

3. **Node.js Version**:
   - Ensure Node.js version matches the specified version (22.11.0)
   - Use `node --version` to check your current version

4. **Import Path Issues**:
   - If you see `@/lib/utils` errors, use `lib/utils` instead
   - Check `tsconfig.json` for path mappings

5. **Component Map Errors**:
   - If you see reserved keyword errors, check `.sitecore/component-map.ts`
   - Ensure all imports use valid JavaScript identifiers

6. **Styling Issues**:
   - Ensure `src/assets/main.scss` is properly imported
   - Check that Bootstrap is included in the build
   - Verify Font Awesome CDN is loaded for social icons

7. **Build Errors**:
   - Run `npm install` to ensure all dependencies are installed
   - Check for TypeScript errors with `npm run build`
   - Verify all component imports are correct

### Quick Start Commands

```bash
# Clone the repository
git clone https://github.com/sumithpdd/xmcloud-starter-js
cd xmcloud-starter-js

# Navigate to NHSP project
cd examples/nhsp

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

### Development Workflow

1. **Make Changes**: Edit components in `src/components/`
2. **Update Styling**: Modify `src/assets/main.scss` for styling changes
3. **Test Locally**: Use `npm run dev` to test changes
4. **Build**: Use `npm run build` to create production build
5. **Deploy**: Push changes to trigger XM Cloud deployment

### Project Status

✅ **Completed**:
- Repository setup and XM Cloud configuration
- NHSP application creation with Content SDK
- Custom header and footer implementation
- NHS Professionals design styling
- Responsive layout and mobile support
- Component integration and fixes
- Documentation and setup instructions

🔄 **In Progress**:
- Content creation and page development
- Additional component implementations
- Performance optimization

📋 **Planned**:
- Advanced features and functionality
- Content management integration
- Testing and quality assurance

### Documentation

- [Sitecore Content SDK Documentation](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-javascript-rendering-sdk--jss--for-next-js.html)
- [XM Cloud Documentation](https://doc.sitecore.com/xmc)
- [Next.js Documentation](https://nextjs.org/docs)
- [NHS Professionals Website](https://www.nhsprofessionals.nhs.uk/) - Design reference
