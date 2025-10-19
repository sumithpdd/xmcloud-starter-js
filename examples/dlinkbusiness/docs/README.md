# D-Link Business Sitecore JSS Project Documentation

## Overview

This is a **Sitecore Content SDK Next.js** project specifically designed for D-Link's business and enterprise customers. It showcases professional networking solutions, enterprise-grade products, and business-focused features with a sophisticated, corporate design.

## Project Architecture

### Technology Stack
- **Framework**: Next.js 15.3.2 with React 19.1.0
- **CMS**: Sitecore XM Cloud
- **Content SDK**: @sitecore-content-sdk/nextjs v1.0.0
- **Styling**: Tailwind CSS v4.1.11
- **UI Components**: Radix UI primitives
- **Animation**: Framer Motion v12.23.0
- **Language**: TypeScript v5.8.3

### Project Structure
```
examples/dLinkBusiness/
├── src/
│   ├── components/          # React components
│   ├── lib/                 # Configuration and utilities
│   ├── pages/               # Next.js pages
│   ├── assets/              # Static assets and styles
│   └── types/               # TypeScript type definitions
├── sitecore.config.ts       # Sitecore configuration
├── package.json             # Dependencies and scripts
└── docs/                    # Project documentation
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Sitecore XM Cloud instance
- Sitecore API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd examples/dLinkBusiness
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env.local` file in the project root:
   ```env
   SITECORE_API_HOST=https://your-sitecore-instance.com
   SITECORE_API_KEY=your-api-key
   SITECORE_SITE_NAME=dlinkbusiness
   SITECORE_LANGUAGE=en
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run prettier` | Format code with Prettier |
| `npm run sitecore-tools:build` | Build Sitecore components |
| `npm run sitecore-tools:generate-map` | Generate component map |

## Sitecore Components

### Core Components

#### 1. GlobalHeaderDefault
**Purpose**: Main site navigation and header for business customers
**Data Template**: `GlobalHeader`
**Fields**:
- `logo` (ImageField) - Site logo
- `primaryNavigationLinks` (Array) - Main navigation links
- `headerContact` (LinkField) - Contact link

**Features**:
- D-Link business navigation structure
- Dropdown menus for enterprise solutions
- Mobile-responsive design
- Language selector (GB|EN)
- Professional styling

#### 2. GlobalFooter
**Purpose**: Site footer with business navigation links
**Data Template**: `GlobalFooter`
**Fields**:
- `footerLogo` (ImageField) - Footer logo
- `footerCopyright` (TextField) - Copyright text
- `footerSocialLinks` (Array) - Social media links
- `footerPromoTitle` (TextField) - Promotional title
- `footerPromoDescription` (TextField) - Promotional description
- `footerPromoLink` (LinkField) - Promotional link

**Features**:
- Complete D-Link business navigation structure
- Enterprise support links
- Professional footer design
- Legal compliance links

#### 3. Hero
**Purpose**: Business-focused hero sections
**Data Template**: `Hero`
**Fields**:
- `titleRequired` (TextField) - Main headline
- `descriptionOptional` (TextField) - Description text
- `linkOptional` (LinkField) - Call-to-action link
- `heroVideoOptional1` (LinkField) - Background video
- `heroImageOptional1` (ImageField) - Background image

**Features**:
- Enterprise-focused messaging
- Professional video/image backgrounds
- Business CTA buttons
- Corporate styling

#### 4. Logo
**Purpose**: D-Link business logo component
**Data Template**: `Logo`
**Fields**:
- `logo` (ImageField) - Logo image

**Features**:
- Professional D-Link branding
- Scalable SVG fallback
- Multiple size variants (sm, md, lg)
- Business-appropriate styling

### Business-Specific Components

#### 5. BusinessHomePage
**Purpose**: Complete business home page layout
**Data Template**: `BusinessHomePage`
**Fields**:
- `title` (TextField) - Page title
- `subtitle` (TextField) - Page subtitle
- `description` (TextField) - Page description
- `ctaText` (TextField) - CTA button text
- `ctaHref` (TextField) - CTA button link

**Features**:
- Enterprise solution showcase
- Business product categories
- Professional consultation CTAs
- Corporate design elements

#### 6. ProductShowcase
**Purpose**: Business product showcase sections
**Data Template**: `ProductShowcase`
**Fields**:
- `title` (TextField) - Section title
- `description` (TextField) - Section description
- `products` (Array) - Product items
  - `name` (TextField) - Product name
  - `description` (TextField) - Product description
  - `image` (ImageField) - Product image
  - `link` (LinkField) - Product link
  - `features` (Array) - Product features

#### 7. EnterpriseSolutions
**Purpose**: Enterprise solution highlights
**Data Template**: `EnterpriseSolutions`
**Fields**:
- `title` (TextField) - Section title
- `solutions` (Array) - Solution items
  - `title` (TextField) - Solution title
  - `description` (TextField) - Solution description
  - `icon` (ImageField) - Solution icon
  - `benefits` (Array) - Solution benefits
  - `cta` (LinkField) - Solution CTA

#### 8. BusinessCaseStudies
**Purpose**: Customer success stories and case studies
**Data Template**: `BusinessCaseStudies`
**Fields**:
- `title` (TextField) - Section title
- `caseStudies` (Array) - Case study items
  - `company` (TextField) - Company name
  - `industry` (TextField) - Industry type
  - `challenge` (TextField) - Business challenge
  - `solution` (TextField) - D-Link solution
  - `results` (TextField) - Business results
  - `image` (ImageField) - Case study image
  - `logo` (ImageField) - Company logo

#### 9. TechnicalSpecifications
**Purpose**: Technical product specifications
**Data Template**: `TechnicalSpecifications`
**Fields**:
- `title` (TextField) - Section title
- `specifications` (Array) - Specification items
  - `category` (TextField) - Specification category
  - `items` (Array) - Specification items
    - `name` (TextField) - Specification name
    - `value` (TextField) - Specification value

#### 10. BusinessSupport
**Purpose**: Business support and services
**Data Template**: `BusinessSupport`
**Fields**:
- `title` (TextField) - Section title
- `services` (Array) - Support services
  - `name` (TextField) - Service name
  - `description` (TextField) - Service description
  - `icon` (ImageField) - Service icon
  - `link` (LinkField) - Service link

### Layout Components

#### 11. Container Components
**Purpose**: Layout containers for business content
**Data Templates**: Various container templates
- `container-business-grid` - Business product grid
- `container-solution-layout` - Solution showcase layout
- `container-case-study` - Case study layout
- `container-technical-specs` - Technical specifications layout

#### 12. BusinessPageHeader
**Purpose**: Business page headers
**Data Template**: `BusinessPageHeader`
**Fields**:
- `title` (TextField) - Page title
- `subtitle` (TextField) - Page subtitle
- `breadcrumbs` (Array) - Breadcrumb navigation
- `image` (ImageField) - Header image
- `video` (LinkField) - Header video

### Interactive Components

#### 13. ProductComparison
**Purpose**: Business product comparison tool
**Data Template**: `ProductComparison`
**Fields**:
- `title` (TextField) - Comparison title
- `products` (Array) - Products to compare
  - `name` (TextField) - Product name
  - `specifications` (Array) - Product specs
  - `image` (ImageField) - Product image
  - `link` (LinkField) - Product link

#### 14. BusinessContactForm
**Purpose**: Business inquiry contact form
**Data Template**: `BusinessContactForm`
**Fields**:
- `title` (TextField) - Form title
- `description` (TextField) - Form description
- `fields` (Array) - Form fields
  - `name` (TextField) - Field name
  - `type` (TextField) - Field type
  - `required` (CheckboxField) - Required field
  - `options` (Array) - Field options (for dropdowns)

#### 15. SolutionSelector
**Purpose**: Business solution recommendation tool
**Data Template**: `SolutionSelector`
**Fields**:
- `title` (TextField) - Selector title
- `questions` (Array) - Assessment questions
  - `question` (TextField) - Question text
  - `options` (Array) - Answer options
  - `weight` (NumberField) - Question weight
- `solutions` (Array) - Available solutions
  - `name` (TextField) - Solution name
  - `description` (TextField) - Solution description
  - `criteria` (Array) - Solution criteria

### Media Components

#### 16. BusinessVideo
**Purpose**: Business-focused video content
**Data Template**: `BusinessVideo`
**Fields**:
- `title` (TextField) - Video title
- `description` (TextField) - Video description
- `video` (LinkField) - Video source
- `poster` (ImageField) - Video poster
- `transcript` (RichTextField) - Video transcript
- `duration` (TextField) - Video duration

#### 17. TechnicalDiagram
**Purpose**: Technical architecture diagrams
**Data Template**: `TechnicalDiagram`
**Fields**:
- `title` (TextField) - Diagram title
- `description` (TextField) - Diagram description
- `image` (ImageField) - Diagram image
- `interactive` (CheckboxField) - Interactive diagram
- `layers` (Array) - Diagram layers (for interactive)

### Navigation Components

#### 18. BusinessNavigation
**Purpose**: Business-focused navigation menu
**Data Template**: `BusinessNavigation`
**Fields**:
- `title` (TextField) - Navigation title
- `sections` (Array) - Navigation sections
  - `name` (TextField) - Section name
  - `items` (Array) - Section items
    - `title` (TextField) - Item title
    - `url` (TextField) - Item URL
    - `description` (TextField) - Item description

#### 19. SolutionBreadcrumbs
**Purpose**: Solution-focused breadcrumb navigation
**Data Template**: `SolutionBreadcrumbs`
**Fields**:
- `items` (Array) - Breadcrumb items
  - `title` (TextField) - Item title
  - `url` (TextField) - Item URL
  - `type` (TextField) - Item type (solution, product, etc.)

### Utility Components

#### 20. BusinessMetadata
**Purpose**: Business page metadata and SEO
**Data Template**: `BusinessMetadata`
**Fields**:
- `title` (TextField) - Page title
- `metadataTitle` (TextField) - SEO title
- `metadataDescription` (TextField) - Meta description
- `metadataKeywords` (TextField) - Meta keywords
- `businessType` (TextField) - Business type (B2B, Enterprise)
- `industry` (TextField) - Target industry

#### 21. BusinessButton
**Purpose**: Business-focused button component
**Data Template**: `BusinessButton`
**Fields**:
- `buttonLink` (LinkField) - Button link
- `text` (TextField) - Button text
- `style` (Enum) - Button style (primary, secondary, outline)
- `size` (Enum) - Button size (small, medium, large)
- `icon` (Enum) - Button icon
- `businessContext` (TextField) - Business context

## Data Templates

### Required Sitecore Templates

The following data templates need to be created in Sitecore for the business project:

1. **GlobalHeader** - Business site header template
2. **GlobalFooter** - Business site footer template  
3. **Hero** - Business hero section template
4. **Logo** - Business logo component template
5. **BusinessHomePage** - Business home page template
6. **ProductShowcase** - Product showcase template
7. **EnterpriseSolutions** - Enterprise solutions template
8. **BusinessCaseStudies** - Case studies template
9. **TechnicalSpecifications** - Technical specs template
10. **BusinessSupport** - Business support template
11. **Container** - Business layout container templates
12. **BusinessPageHeader** - Business page header template
13. **ProductComparison** - Product comparison template
14. **BusinessContactForm** - Business contact form template
15. **SolutionSelector** - Solution selector template
16. **BusinessVideo** - Business video template
17. **TechnicalDiagram** - Technical diagram template
18. **BusinessNavigation** - Business navigation template
19. **SolutionBreadcrumbs** - Solution breadcrumbs template
20. **BusinessMetadata** - Business metadata template
21. **BusinessButton** - Business button template

### Business-Specific Field Types

- **BusinessTextField** - Business-focused text input
- **IndustryField** - Industry selection dropdown
- **CompanySizeField** - Company size selection
- **SolutionTypeField** - Solution type selection
- **TechnicalSpecField** - Technical specification input
- **CaseStudyField** - Case study content
- **BusinessContactField** - Business contact information
- **SolutionCriteriaField** - Solution criteria input

## Styling and Theming

### D-Link Business Brand Colors
- **Primary Blue**: `#0051ff` (Professional blue)
- **Accent Green**: `#c8ff00` (Success/positive green)
- **Background**: `#ffffff` (Clean white)
- **Text**: `#000000` (Professional black)
- **Secondary Gray**: `#f5f5f5` (Light gray backgrounds)
- **Border Gray**: `#d4d4d4` (Subtle borders)

### Business Typography
- **Font Family**: Inter, Segoe UI, Roboto, sans-serif
- **Headings**: Bold weights for authority
- **Body Text**: Regular weights for readability
- **Technical Text**: Monospace for specifications

### Professional Design Elements
- **Clean Layouts**: Minimal, professional design
- **Consistent Spacing**: Uniform margins and padding
- **Subtle Shadows**: Professional depth and hierarchy
- **Corporate Imagery**: Business-appropriate visuals

## Business Features

### Enterprise Solutions
- **Network Infrastructure**: Switches, routers, wireless
- **Cloud Management**: Nuclias cloud platform
- **IP Surveillance**: Business security solutions
- **Industry Solutions**: M2M, D-ECS, industrial switches

### Business Support
- **Technical Support**: Enterprise-grade support
- **Professional Services**: Implementation and consulting
- **Training Programs**: Technical training and certification
- **Warranty Services**: Extended warranty options

### Content Management
- **Case Studies**: Customer success stories
- **Technical Documentation**: Detailed specifications
- **Solution Guides**: Implementation guides
- **White Papers**: Technical and business insights

## Development Guidelines

### Business Component Development
1. **Professional Standards**: Maintain corporate design standards
2. **Accessibility**: Ensure WCAG compliance for business users
3. **Performance**: Optimize for business users with high expectations
4. **Security**: Implement appropriate security measures
5. **Scalability**: Design for enterprise-level traffic

### Business Content Strategy
1. **Technical Accuracy**: Ensure all technical information is accurate
2. **Professional Tone**: Maintain professional, authoritative voice
3. **Business Value**: Focus on business benefits and ROI
4. **Industry Relevance**: Tailor content to specific industries
5. **Compliance**: Ensure regulatory compliance where applicable

## Deployment

### Production Build
```bash
npm run build
```

### Business Environment Variables
Ensure the following environment variables are set in production:
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

### Business-Specific Issues

1. **Performance Issues**
   - Check CDN configuration
   - Optimize business images and videos
   - Implement proper caching strategies
   - Monitor enterprise traffic patterns

2. **Content Management Issues**
   - Verify business content permissions
   - Check multi-language content setup
   - Ensure technical content accuracy
   - Validate business workflow processes

3. **Integration Issues**
   - Test CRM integrations
   - Verify analytics tracking
   - Check business form submissions
   - Validate enterprise user authentication

### Business Support Resources
- [Sitecore Content SDK Documentation](https://doc.sitecore.com/xmc/en/developers/content-sdk/index.html)
- [D-Link Business Solutions](https://www.dlink.com/en/business)
- [Enterprise Support Portal](https://support.dlink.com)
- [Technical Documentation](https://docs.dlink.com)

## Contributing

### Business Development Standards
1. Follow enterprise coding standards
2. Implement proper error handling
3. Write comprehensive business documentation
4. Test with business user scenarios
5. Ensure accessibility compliance
6. Maintain professional code quality

### Business Content Guidelines
1. Use professional, authoritative tone
2. Focus on business value and ROI
3. Ensure technical accuracy
4. Follow industry best practices
5. Maintain brand consistency

## License

This project is licensed under the Apache-2.0 License.

## Business Contact

For business inquiries and enterprise support:
- **Email**: business@dlink.com
- **Phone**: +1-800-DLINK-BIZ
- **Website**: https://www.dlink.com/en/business
