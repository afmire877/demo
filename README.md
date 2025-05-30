# Nuxt + Sanity Property Cards Demo

A beautiful property listing demo built with Nuxt 3, Sanity CMS, and Tailwind CSS. This project demonstrates modern Jamstack development with static site generation, headless CMS integration, and responsive design.

## 🚀 Live Demo

- **Live Site**: [https://extraordinary-tanuki-7ae902.netlify.app/](https://extraordinary-tanuki-7ae902.netlify.app/)
- **GitHub Repository**: [https://github.com/afmire877/demo](https://github.com/afmire877/demo)

## ✨ Features

- 🏠 **Property Listings**: Responsive grid of property cards with images, prices, and features
- 📱 **Property Details**: Dynamic property pages with full descriptions and contact forms
- 🎨 **Modern UI**: Clean, accessible design with Tailwind CSS and Nuxt UI components
- 📧 **Contact Form**: Netlify Forms integration for lead capture
- ⚡ **Performance**: Static site generation with Lighthouse scores ≥ 90
- 🔍 **SEO Optimized**: Meta tags, structured data, and semantic HTML
- 📱 **Mobile First**: Fully responsive design for all devices
- 🎯 **Accessibility**: WAVE compliant with semantic HTML and ARIA labels

## 🛠 Tech Stack

- **Frontend**: Nuxt 3 + TypeScript
- **Styling**: Tailwind CSS + Nuxt UI
- **CMS**: Sanity v3 (headless CMS)
- **Deployment**: Netlify (with forms)
- **Code Quality**: ESLint + Prettier
- **Performance**: Static site generation + image optimization

## 📦 Quick Setup

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### 1. Clone and Install

```bash
git clone https://github.com/afmire877/demo.git
cd demo
pnpm install
```

### 2. Environment Setup

```bash
cp .env.example .env
```

Edit `.env` with your Sanity credentials:

```env
NUXT_SANITY_PROJECT_ID=your_sanity_project_id
NUXT_SANITY_DATASET=production
NUXT_SANITY_API_VERSION=2024-01-01
```

### 3. Run Development Server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
pnpm build
pnpm preview
```

### 5. Deploy to Netlify

```bash
pnpm generate
```

Upload the `.output/public` folder to Netlify or connect your GitHub repository for automatic deployments.

## 🎨 Sanity CMS Setup

### 1. Create Sanity Project

```bash
npm create sanity@latest
```

### 2. Property Schema

Create `schemas/property.js` in your Sanity studio:

```javascript
export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().positive()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(200)
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 6
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      price: 'price',
      media: 'image'
    },
    prepare(selection) {
      const {title, price} = selection
      return {
        title: title,
        subtitle: price ? `$${price.toLocaleString()}` : 'No price set'
      }
    }
  }
}
```

### 3. Add Sample Data

Create 3-5 property documents in your Sanity Studio with:
- Title, slug, price, location
- High-quality property images
- Compelling descriptions and features

## 📊 Performance

### Lighthouse Scores

![Lighthouse Score](./lighthouse-score.png)

- **Performance**: 100
- **Accessibility**: 91
- **Best Practices**: 100
- **SEO**: 100

### Build Performance

- **Build Time**: < 60 seconds on Netlify
- **Bundle Size**: < 500KB (gzipped)
- **Image Optimization**: Automatic WebP conversion
- **Static Generation**: All routes pre-rendered

## 🧪 Testing & Quality

### Run Linting

```bash
pnpm lint
```

### Code Formatting

```bash
pnpm format
```

### Accessibility Testing

- WAVE Web Accessibility Evaluator
- Lighthouse Accessibility Audit
- Keyboard Navigation Testing
- Screen Reader Testing

## 📁 Project Structure

```
nuxt-sanity-demo/
├── components/           # Vue components
│   ├── AppHeader.vue    # Navigation header
│   ├── AppFooter.vue    # Site footer
│   └── PropertyCard.vue # Property card component
├── pages/               # Nuxt pages (auto-routing)
│   ├── index.vue       # Home page with property grid
│   ├── contact.vue     # Contact form page
│   └── property/       # Dynamic property pages
│       └── [slug].vue  # Individual property details
├── server/              # API routes
│   └── api/
│       ├── properties.get.ts    # Fetch all properties
│       └── property/[slug].get.ts # Fetch single property
├── lib/                 # Utilities
│   └── sanity.ts       # Sanity client configuration
├── public/              # Static assets
├── nuxt.config.ts      # Nuxt configuration
└── package.json        # Dependencies and scripts
```

## 🚀 Deployment

### Netlify Deployment

1. **Connect Repository**: Link your GitHub repo to Netlify
2. **Build Settings**:
   - Build command: `pnpm generate`
   - Publish directory: `.output/public`
3. **Environment Variables**: Add your Sanity credentials
4. **Forms**: Enable Netlify Forms for contact form
5. **Deploy**: Automatic deployments on git push

### Environment Variables

```env
# Sanity Configuration
NUXT_SANITY_PROJECT_ID=your_project_id
NUXT_SANITY_DATASET=production
NUXT_SANITY_API_VERSION=2024-01-01

# Netlify Forms (optional)
NETLIFY_FORM_NAME=contact
```

## 🎯 Key Features Implemented

### ✅ Core Requirements

- [x] Static site generated by Nuxt 3
- [x] Property list and detail pages fed by Sanity CMS
- [x] Tailwind styling with modern UI components
- [x] Netlify deploy with preview builds
- [x] Contact form using Netlify Forms
- [x] Lighthouse score ≥ 90 for Performance, SEO, and Accessibility
- [x] Build time < 60s on Netlify
- [x] Code passes ESLint + Prettier
- [x] Semantic HTML and accessibility compliance

### 🎨 Design Features

- Modern gradient hero section
- Responsive property grid layout
- Hover effects and smooth transitions
- Loading states and error handling
- Mobile-first responsive design
- Consistent color scheme and typography

### 🔧 Technical Features

- TypeScript for type safety
- Composable API with useLazyFetch
- Dynamic routing with [slug] pages
- Image optimization with Nuxt Image
- SEO meta tags and structured data
- Error boundaries and fallback states

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Built by Ahmed Mire as a demonstration of modern Jamstack development.

---

**⭐ If you found this project helpful, please give it a star on GitHub!**
