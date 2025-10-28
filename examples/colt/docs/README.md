# Colt Documentation

Welcome to the Colt documentation! This guide helps developers understand the Colt application, its components, and the Sitecore JSS architecture.

## 📚 Documentation Index

### Getting Started
- **[Getting Started Guide](./getting-started.md)** - New to Colt? Start here!
  - Project overview
  - Key concepts
  - Common tasks
  - Quick reference

### Architecture
- **[Sitecore JSS Architecture](./sitecore-jss-architecture.md)** - Deep dive into JSS
  - Architecture layers
  - Component registration
  - Data flow
  - Rendering modes
  - Best practices

### Data Structures
- **[Data Structures](./data-structures.md)** - Understanding component data
  - Sitecore field types
  - Component props structure
  - Common patterns
  - Field type examples
  - Type definitions

### Components
- **[Component Documentation](./components/)** - All components
  - [Component Index](./components/README.md)
  - [Hero](./components/hero.md)
  - [Carousel (Hero)](./components/carousel.md)
  - [Header](./components/header.md)
  - [Multi Promo](./components/multi-promo.md)
  - [Page Header](./components/page-header.md)
  - [Accordion Block](./components/accordion-block.md)
  - And 35+ more components...

## 🎯 Quick Links

| Resource | Description |
|----------|-------------|
| [Getting Started](./getting-started.md) | Learn the basics |
| [Components](./components/) | Browse all components |
| [Architecture](./sitecore-jss-architecture.md) | Understand JSS |
| [Data Structures](./data-structures.md) | Component data guide |

## 🚀 Quick Start

1. **Set up environment**
   ```bash
   cd examples/colt
   cp .env.remote.example .env.local
   # Edit .env.local with your values
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Read the docs**
   - Start with [Getting Started](./getting-started.md)
   - Review [Architecture](./sitecore-jss-architecture.md)
   - Browse [Components](./components/)

## 📖 Learning Path

### For Junior Developers

**Day 1: Setup & Basics**
1. Read [Getting Started](./getting-started.md)
2. Set up local environment
3. Run the application
4. Explore the codebase

**Day 2: Architecture**
1. Read [Sitecore JSS Architecture](./sitecore-jss-architecture.md)
2. Understand data flow
3. Learn component registration
4. Review key files

**Day 3: Data & Components**
1. Read [Data Structures](./data-structures.md)
2. Understand field types
3. Review component props
4. Practice reading component code

**Day 4: Building Components**
1. Choose a simple component
2. Read its documentation
3. Modify it
4. Create your own

**Day 5: Advanced Topics**
1. Add new components
2. Work with datasources
3. Handle edit mode
4. Optimize performance

## 🔍 Documentation Features

### ✅ What's Covered

- **Complete Component Reference** - All 40+ components documented
- **Architecture Guide** - Deep dive into JSS patterns
- **Data Structures** - Component props explained
- **Getting Started** - Quick start for new developers
- **Code Examples** - Real-world examples
- **Best Practices** - Tips and guidelines
- **Troubleshooting** - Common issues and solutions

### 📝 Component Documentation Includes

Each component doc includes:
- Overview and purpose
- Props structure
- Sitecore template definition
- Usage examples
- Features and capabilities
- Layout diagrams
- Code examples
- Best practices
- Troubleshooting

## 🛠️ Technology Stack

- **Framework**: Next.js 15.3.2
- **UI**: React 19.1.0
- **Styling**: Tailwind CSS 4.1.11
- **CMS**: Sitecore XM Cloud
- **SDK**: Sitecore Content SDK
- **TypeScript**: Full type safety
- **Animations**: Framer Motion
- **UI Components**: Shadcn UI, Radix UI

## 📂 Project Structure

```
colt/
├── docs/                    # Documentation
│   ├── getting-started.md  # Quick start guide
│   ├── sitecore-jss-architecture.md  # JSS guide
│   ├── data-structures.md   # Data guide
│   └── components/          # Component docs
├── src/
│   ├── components/           # React components
│   ├── lib/                  # Utilities
│   ├── pages/                # Next.js pages
│   ├── hooks/                # Custom hooks
│   └── utils/                # Helpers
├── public/                   # Static assets
└── .sitecore/               # Generated files
```

## 💡 Tips for Reading Docs

1. **Start with Getting Started** - Build foundational knowledge
2. **Reference Architecture Guide** - Understand the big picture
3. **Browse Components** - See examples in action
4. **Check Data Structures** - Understand component data
5. **Use Search** - Find specific topics quickly

## ❓ Need Help?

- **Component Issues**: Check component-specific docs
- **Architecture Questions**: Read Sitecore JSS Architecture
- **Data Questions**: Review Data Structures
- **General Questions**: See Getting Started

## 📊 Component Categories

### Layout Components (8)
- Hero, Page Header, Containers
- Global Header/Footer
- Secondary Navigation

### Content Components (10)
- Article Header/Listing
- Rich Text Block
- Text Banner, Promo Blocks
- Multi Promo, Promo Tabs

### Interactive Components (6)
- Accordion Block
- Testimonial Carousel
- Logo Tabs
- Vertical Image Accordion

### Media Components (5)
- Image, Video
- Media Section
- Background Thumbnail

### Navigation Components (5)
- Global Header/Footer
- Breadcrumbs
- Secondary Navigation

### Special Components (6)
- Alert Banner
- Site Metadata
- Theme Components
- Animation Wrappers

**Total: 40+ Components**

## 🔗 External Resources

- [Sitecore Content SDK Docs](https://doc.sitecore.com/xmc/en/developers/content-sdk/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Sitecore XM Cloud](https://www.sitecore.com/products/xm-cloud)

## 📝 Contributing

When adding new components:
1. Follow existing patterns
2. Document props structure
3. Include usage examples
4. Add to component index
5. Update this README if needed

## 🎓 Learning Resources

1. **Official Docs** - Sitecore Content SDK documentation
2. **Code Examples** - Review existing components
3. **Patterns Guide** - Architecture documentation
4. **Best Practices** - Embedded in component docs

---

Happy coding! 🚀

