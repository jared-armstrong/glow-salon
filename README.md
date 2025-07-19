# Glow Salon & Spa Website

A modern, responsive website for Glow Salon & Spa, a premier hair and nail salon located in Carmel, Indiana. Built with Astro, React, and Tailwind CSS.

## 🌟 About Glow Salon & Spa

Glow Salon & Spa offers a comprehensive range of beauty services including:

- **Hair Services**: Haircuts, highlights, balayage, keratin treatments, hair extensions, and more
- **Nail Services**: Manicures, pedicures, gel and dip services
- **Additional Services**: Waxing, makeup application, and bridal services
- **Product Recommendations**: Curated selection of professional beauty products and salon essentials

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Individual Service Pages**: Dedicated pages for each service category (hair, nails, makeup, bridal)
- **Product Recommendations**: Amazon affiliate product showcase with professional beauty products
- **Service Menu**: Comprehensive pricing and service information
- **Contact Integration**: Phone booking and contact form functionality
- **SEO Optimized**: Built with search engine optimization in mind
- **Fast Performance**: Static site generation for optimal loading speeds
- **Image Optimization**: WebP format for better resource efficiency and loading times

## 🛠️ Tech Stack

- **[Astro](https://astro.build/)** - Static site generator
- **[React](https://reactjs.org/)** - Interactive components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Nodemailer](https://nodemailer.com/)** - Email functionality
- **[Resend](https://resend.com/)** - Email delivery service

## 📁 Project Structure

```
glow-salon/
├── public/                 # Static assets
│   └── products/          # Product images (WebP format)
├── src/
│   ├── assets/            # Images and media files
│   │   └── products/      # Product images (WebP format)
│   ├── components/        # Reusable UI components
│   │   ├── buttons/       # Button components
│   │   ├── service-pricing/ # Pricing components
│   │   ├── salon-services/ # Service page components
│   │   └── salon-products/ # Product recommendation components
│   ├── layouts/           # Page layouts
│   ├── pages/             # Astro pages
│   │   ├── services/      # Individual service pages
│   │   │   ├── hair.astro
│   │   │   ├── nails.astro
│   │   │   ├── makeup.astro
│   │   │   └── bridal.astro
│   │   └── products/      # Product recommendations
│   │       └── recommendations.astro
│   ├── styles/            # Global styles
│   └── utils/             # Utility functions
├── astro.config.mjs       # Astro configuration
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd glow-salon
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Email configuration (if using contact form)
   EMAIL_SERVICE=your-email-service
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-email-password
   ```

4. **Start the development server**
   ```bash
   pnpm run dev
   ```

   The site will be available at `http://localhost:4321`

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server |
| `pnpm run build` | Build for production |
| `pnpm run preview` | Preview production build |
| `pnpm run astro` | Run Astro CLI commands |

## 🎨 Customization

### Adding New Services

1. Create a new service page in `src/pages/services/` (e.g., `waxing.astro`)
2. Use the `ServicePage` component from `src/components/salon-services/ServicePage.astro`
3. Define your service array with pricing information
4. The page will automatically generate with proper SEO and styling

### Adding Product Recommendations

1. Add product images to `src/assets/products/` (use WebP format for optimization)
2. Edit `src/pages/products/recommendations.astro` to add new products
3. Include affiliate links and SEO-friendly alt text
4. Products will be displayed using the `ProductsPage` component

### Styling

- Global styles are in `src/styles/`
- Component-specific styles use Astro's scoped CSS
- Tailwind CSS classes are used throughout for consistent styling

### Content Management

- **Homepage**: Edit `src/pages/index.astro` and its imported components
- **Services**: Each service category has its own page in `src/pages/services/`
- **Products**: Update the products array in `src/pages/products/recommendations.astro`
- **Contact**: Update contact information in `src/pages/contact.astro`

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile (up to 768px)
- Tablet (768px - 1024px)
- Desktop (1024px+)

## 🔧 Configuration

### Astro Configuration (`astro.config.mjs`)

- **Site URL**: Configured for production deployment
- **Integrations**: 
  - Sitemap generation
  - Tailwind CSS
  - Partytown for analytics

### SEO

- Meta tags are configured for each page
- Sitemap is automatically generated
- Open Graph tags for social media sharing
- Individual service pages have dedicated SEO optimization

## 📧 Contact Form

The contact form includes:
- Name, email, and message fields
- Email validation
- Integration with email services (Nodemailer/Resend)

## 🛍️ Product Recommendations

The product recommendations page features:
- Curated selection of professional beauty products
- Amazon affiliate links for monetization
- High-quality product images in WebP format
- SEO-optimized product descriptions
- Responsive grid layout

## 🚀 Deployment

### Build for Production

```bash
pnpm run build
```

The built site will be in the `dist/` directory.

### Deployment Options

- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Use GitHub Actions for deployment
- **Traditional hosting**: Upload the `dist/` folder to your web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Contact

**Glow Salon & Spa**
- **Phone**: (317) 846-3073
- **Location**: Carmel, Indiana
- **Website**: https://www.glowsalonwestclay.com/

---

Built with ❤️ for Glow Salon & Spa
