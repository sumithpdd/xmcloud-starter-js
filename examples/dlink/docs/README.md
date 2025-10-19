# D-Link Sitecore JSS Project Documentation

## Overview

This is a **Sitecore Content SDK Next.js** project that demonstrates how to build a modern, headless website using Sitecore XM Cloud and Next.js. The project showcases D-Link's networking products and solutions with a professional, responsive design.

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
examples/dlink/
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
   cd examples/dlink
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
   SITECORE_SITE_NAME=dlink
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

#### 1. GlobalHeader
**Purpose**: Main site navigation and header
**Data Template**: `GlobalHeader`
**Fields**:
- `logo` (ImageField) - Site logo
- `headerContact` (LinkField) - Contact link
- `children.results` (Array) - Navigation links

**Features**:
- D-Link branded navigation structure
- Dropdown menus for product categories
- Mobile-responsive design
- Language selector (GB|EN)

#### 2. GlobalFooter
**Purpose**: Site footer with navigation links
**Data Template**: `GlobalFooter`
**Fields**:
- `footerLogo` (ImageField) - Footer logo
- `footerCopyright` (TextField) - Copyright text
- `footerSocialLinks` (Array) - Social media links
- `footerPromoTitle` (TextField) - Promotional title
- `footerPromoDescription` (TextField) - Promotional description
- `footerPromoLink` (LinkField) - Promotional link

**Features**:
- Complete D-Link navigation structure
- Social media integration
- Legal links (Privacy, Terms, etc.)
- Responsive grid layout

#### 3. Hero
**Purpose**: Main hero section for pages
**Data Template**: `Hero`
**Fields**:
- `titleRequired` (TextField) - Main headline
- `descriptionOptional` (TextField) - Description text
- `linkOptional` (LinkField) - Call-to-action link
- `heroVideoOptional1` (LinkField) - Background video
- `heroImageOptional1` (ImageField) - Background image

**Features**:
- Full-screen hero layout
- Video/image background support
- Responsive typography
- Call-to-action buttons

#### 4. Logo
**Purpose**: Brand logo component
**Data Template**: `Logo`
**Fields**:
- `logo` (ImageField) - Logo image

**Features**:
- Scalable SVG fallback
- Multiple size variants (sm, md, lg)
- D-Link brand colors

### Layout Components

#### 5. Container Components
**Purpose**: Layout containers with different column configurations
**Data Templates**: Various container templates
- `container-25252525` - 4 equal columns
- `container-303030` - 3 equal columns  
- `container-3070` - 30/70 split
- `container-4060` - 40/60 split
- `container-5050` - 50/50 split
- `container-6040` - 60/40 split
- `container-6321` - 6/3/2/1 split
- `container-70` - 70/30 split
- `container-7030` - 70/30 split
- `container-full-bleed` - Full width
- `container-full-width` - Full width with padding

#### 6. PageHeader
**Purpose**: Page title and metadata
**Data Template**: `PageHeader`
**Fields**:
- `title` (TextField) - Page title
- `description` (TextField) - Page description
- `image` (ImageField) - Header image
- `video` (LinkField) - Header video

### Content Components

#### 7. TextBanner
**Purpose**: Text-based promotional banners
**Data Template**: `TextBanner`
**Fields**:
- `heading` (TextField) - Banner heading
- `description` (TextField) - Banner description
- `link` (LinkField) - Primary link
- `link2` (LinkField) - Secondary link
- `image` (ImageField) - Banner image

#### 8. CtaBanner
**Purpose**: Call-to-action promotional banners
**Data Template**: `CtaBanner`
**Fields**:
- `title` (TextField) - Banner title
- `description` (TextField) - Banner description
- `link` (LinkField) - CTA link
- `image` (ImageField) - Banner image
- `colorScheme` (Enum) - Color scheme variant

#### 9. Card
**Purpose**: Content cards for product features
**Data Template**: `Card`
**Fields**:
- `title` (TextField) - Card title
- `description` (TextField) - Card description
- `image` (ImageField) - Card image
- `link` (LinkField) - Card link

#### 10. RichTextBlock
**Purpose**: Rich text content blocks
**Data Template**: `RichTextBlock`
**Fields**:
- `content` (RichTextField) - Rich text content

### Interactive Components

#### 11. AccordionBlock
**Purpose**: Collapsible content sections
**Data Template**: `AccordionBlock`
**Fields**:
- `title` (TextField) - Accordion title
- `items` (Array) - Accordion items
  - `title` (TextField) - Item title
  - `content` (RichTextField) - Item content

#### 12. TestimonialCarousel
**Purpose**: Customer testimonial carousel
**Data Template**: `TestimonialCarousel`
**Fields**:
- `title` (TextField) - Carousel title
- `items` (Array) - Testimonial items
  - `quote` (TextField) - Testimonial quote
  - `author` (TextField) - Author name
  - `role` (TextField) - Author role
  - `image` (ImageField) - Author image

#### 13. LogoTabs
**Purpose**: Tabbed content with logos
**Data Template**: `LogoTabs`
**Fields**:
- `title` (TextField) - Tabs title
- `items` (Array) - Tab items
  - `logo` (ImageField) - Tab logo
  - `title` (TextField) - Tab title
  - `content` (RichTextField) - Tab content
  - `cta` (LinkField) - Tab CTA

### Media Components

#### 14. Image
**Purpose**: Image display with optimization
**Data Template**: `Image`
**Fields**:
- `image` (ImageField) - Image source
- `alt` (TextField) - Alt text
- `caption` (TextField) - Image caption
- `targetUrl` (LinkField) - Image link

#### 15. Video
**Purpose**: Video player component
**Data Template**: `Video`
**Fields**:
- `video` (LinkField) - Video source
- `poster` (ImageField) - Video poster
- `title` (TextField) - Video title
- `description` (TextField) - Video description

#### 16. MediaSection
**Purpose**: Combined image/video sections
**Data Template**: `MediaSection`
**Fields**:
- `image` (ImageField) - Image source
- `video` (LinkField) - Video source
- `title` (TextField) - Media title
- `description` (TextField) - Media description

### Navigation Components

#### 17. Navigation (SXA)
**Purpose**: Site navigation menu
**Data Template**: `Navigation`
**Fields**:
- `title` (TextField) - Navigation title
- `navigationTitle` (TextField) - Display title
- `href` (TextField) - Link URL
- `children` (Array) - Child navigation items

#### 18. Breadcrumbs
**Purpose**: Page breadcrumb navigation
**Data Template**: `Breadcrumbs`
**Fields**:
- `items` (Array) - Breadcrumb items
  - `title` (TextField) - Item title
  - `url` (TextField) - Item URL

#### 19. SecondaryNavigation
**Purpose**: Secondary navigation menu
**Data Template**: `SecondaryNavigation`
**Fields**:
- `title` (TextField) - Navigation title
- `items` (Array) - Navigation items
  - `title` (TextField) - Item title
  - `url` (TextField) - Item URL

### Utility Components

#### 20. SiteMetadata
**Purpose**: Page metadata and SEO
**Data Template**: `SiteMetadata`
**Fields**:
- `title` (TextField) - Page title
- `metadataTitle` (TextField) - SEO title
- `metadataDescription` (TextField) - Meta description
- `metadataKeywords` (TextField) - Meta keywords

#### 21. ButtonComponent
**Purpose**: Reusable button component
**Data Template**: `ButtonComponent`
**Fields**:
- `buttonLink` (LinkField) - Button link
- `icon` (Enum) - Button icon
- `iconClassName` (TextField) - Icon CSS class
- `variant` (Enum) - Button style variant
- `size` (Enum) - Button size

## Data Templates

### Required Sitecore Templates

The following data templates need to be created in Sitecore:

1. **GlobalHeader** - Site header template
2. **GlobalFooter** - Site footer template  
3. **Hero** - Hero section template
4. **Logo** - Logo component template
5. **Container** - Layout container templates
6. **PageHeader** - Page header template
7. **TextBanner** - Text banner template
8. **CtaBanner** - CTA banner template
9. **Card** - Content card template
10. **RichTextBlock** - Rich text template
11. **AccordionBlock** - Accordion template
12. **TestimonialCarousel** - Testimonial carousel template
13. **LogoTabs** - Logo tabs template
14. **Image** - Image component template
15. **Video** - Video component template
16. **MediaSection** - Media section template
17. **Navigation** - Navigation template
18. **Breadcrumbs** - Breadcrumbs template
19. **SecondaryNavigation** - Secondary navigation template
20. **SiteMetadata** - Site metadata template
21. **ButtonComponent** - Button component template

### Field Types Used

- **TextField** - Single-line text input
- **RichTextField** - Rich text editor
- **ImageField** - Image picker
- **LinkField** - Link picker
- **ReferenceField** - Content reference
- **CheckboxField** - Boolean checkbox
- **DropdownField** - Dropdown selection
- **NumberField** - Numeric input
- **DateField** - Date picker

## Styling and Theming

### D-Link Brand Colors
- **Primary Blue**: `#0051ff` (hsl(221, 83%, 53%))
- **Accent Green**: `#c8ff00` (hsl(60, 100%, 50%))
- **Background**: `#ffffff` (White)
- **Text**: `#000000` (Black)
- **Gray Scale**: Various shades for UI elements

### Typography
- **Font Family**: Inter, Segoe UI, Roboto, sans-serif
- **Headings**: Bold weights for impact
- **Body Text**: Regular weights for readability

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: 
  - `sm`: 640px
  - `md`: 768px  
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px

## Development Guidelines

### Component Development
1. **Use TypeScript**: All components should be written in TypeScript
2. **Follow Props Pattern**: Define clear interfaces for component props
3. **Handle Missing Fields**: Always check for field existence before rendering
4. **Use Sitecore Components**: Prefer Sitecore field components over manual rendering
5. **Implement Error Boundaries**: Handle component failures gracefully

### Code Standards
1. **Naming Conventions**:
   - Components: PascalCase (`GlobalHeader`)
   - Files: PascalCase (`GlobalHeader.tsx`)
   - Props: camelCase (`isPageEditing`)
   - Constants: UPPER_SNAKE_CASE (`API_ENDPOINT`)

2. **File Organization**:
   - Group related functionality in feature directories
   - Keep components co-located with their styles and tests
   - Export public APIs through index.ts files

3. **Performance**:
   - Use React.memo for expensive components
   - Implement proper loading states
   - Optimize images using Next.js Image component
   - Cache expensive operations appropriately

## Deployment

### Production Build
```bash
npm run build
```

### Environment Variables
Ensure the following environment variables are set in production:
- `SITECORE_API_HOST`
- `SITECORE_API_KEY`
- `SITECORE_SITE_NAME`
- `SITECORE_LANGUAGE`

### Hosting Platforms
This project can be deployed to:
- Vercel
- Netlify
- Azure Static Web Apps
- AWS Amplify
- Any platform supporting Next.js

## Troubleshooting

### Common Issues

1. **Build Errors**
   - Check TypeScript configuration
   - Verify all dependencies are installed
   - Ensure Sitecore configuration is correct

2. **Runtime Errors**
   - Check environment variables
   - Verify Sitecore API connectivity
   - Check component field mappings

3. **Styling Issues**
   - Verify Tailwind CSS configuration
   - Check CSS class names
   - Ensure proper CSS imports

### Support Resources
- [Sitecore Content SDK Documentation](https://doc.sitecore.com/xmc/en/developers/content-sdk/index.html)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Contributing

1. Follow the established coding standards
2. Write clear commit messages
3. Test components thoroughly
4. Update documentation when adding new features
5. Use TypeScript for all new code

## License

This project is licensed under the Apache-2.0 License.
