# Colt - XM Cloud Demo Site (NextJS)

## Overview
Colt is a modern, component-rich Next.js application built with Sitecore XM Cloud and the Sitecore Content SDK. This demo site showcases enterprise-grade components, advanced site architecture, and seamless integration with Sitecore's headless CMS capabilities.

## Key Features

- 🎨 **Tailwind CSS** - Modern utility-first styling with Shadcn UI components
- 🧩 **40+ Custom Components** - Modular, reusable components for enterprise websites
- 🔄 **Sitecore Content SDK** - Seamless integration with Sitecore XM Cloud
- 🌐 **JSS Architecture** - Follows Sitecore JSS (JavaScript Services) patterns
- 📱 **Responsive Design** - Mobile-first approach with container queries
- 🎭 **Dark Mode** - Built-in theme switching support
- ⚡ **Next.js 15** - Latest features with App Router and Server Components support
- 🎬 **Animations** - Smooth transitions powered by Framer Motion
- ♿ **Accessibility** - WCAG compliant with ARIA support

## Documentation

📖 **For detailed documentation, see the [docs folder](./docs/):**
- [Getting Started Guide](./docs/getting-started.md) - Quick start for developers
- [Component Documentation](./docs/components/) - Complete component reference
- [Sitecore JSS Architecture](./docs/sitecore-jss-architecture.md) - Understanding the JSS structure
- [Data Structures](./docs/data-structures.md) - Component data structure guide

## Quick Start

### Prerequisites
1. You have deployed your XM Cloud environment already. If not, follow this link: [Deploy a Project and Environment](https://doc.sitecore.com/xmc/en/developers/xm-cloud/deploy-a-project-and-environment.html)
2. Node.js 18+ installed
3. npm or yarn package manager

### Build and Run Locally

1. Clone the repository (if not yet done) 
    ```bash
    git clone https://github.com/Sitecore/xmcloud-starter-js
    ```

2. Navigate to the colt project folder
    ```bash
    cd examples/colt
    ```

3. Copy the environment file
    ```bash
    cp .env.remote.example .env.local
    ```

4. Edit `.env.local` and provide values for:
   - `SITECORE_EDGE_CONTEXT_ID`
   - `NEXT_PUBLIC_DEFAULT_SITE_NAME`
   - `NEXT_PUBLIC_SITECORE_EDGE_CONTEXT_ID`
   - `SITECORE_EDITING_SECRET`
   
   More info: [Environment variables in XM Cloud](https://doc.sitecore.com/xmc/en/developers/xm-cloud/get-the-environment-variables-for-a-site.html)

5. Install dependencies
    ```bash
    npm install
    ```

6. Run the development server
    ```bash
    npm run dev
    ```

7. Access the site at http://localhost:3000

## Project Structure

```
colt/
├── src/
│   ├── components/         # React components (40+ components)
│   │   ├── accordion-block/
│   │   ├── hero/
│   │   ├── multi-promo/
│   │   └── ... (see docs for full list)
│   ├── lib/                # Utility libraries
│   ├── pages/              # Next.js pages
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Helper utilities
├── docs/                   # Documentation
├── public/                 # Static assets
└── .sitecore/             # Generated Sitecore files
```

## Available Components

The application includes 40+ custom components organized by functionality:

### Layout Components
- Hero, Page Header, Container (multiple variations)
- Global Header, Global Footer
- Secondary Navigation

### Content Components
- Article Header, Article Listing
- Rich Text Block, Text Banner
- Promo Block, Multi Promo
- Promo Animated, Promo Tabs

### Interactive Components
- Accordion Block, Testimonial Carousel
- Logo Tabs, Vertical Image Accordion
- Floating Dock, Subscription Banner

### Media Components
- Image, Video, Media Section
- Background Thumbnail
- Animated Section

[View complete component list](./docs/components/)

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix linting issues
- `npm run prettier` - Format code with Prettier

## Tech Stack

- **Framework**: Next.js 15.3.2
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 4.1.11
- **UI Components**: Shadcn UI, Radix UI
- **CMS**: Sitecore XM Cloud
- **Animations**: Framer Motion
- **Icons**: Lucide React, Font Awesome
- **Forms**: React Hook Form, Zod
- **State Management**: React Context
- **Localization**: next-localization

## Resources

- [Sitecore Content SDK Documentation](https://doc.sitecore.com/xmc/en/developers/content-sdk/sitecore-content-sdk-for-xm-cloud.html)
- [Next.js Documentation](https://nextjs.org/docs)
- [Sitecore XM Cloud](https://www.sitecore.com/products/xm-cloud)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is licensed under the Apache-2.0 License.
