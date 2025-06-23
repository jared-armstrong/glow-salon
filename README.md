# Glow Salon & Spa Website

A modern, responsive website for Glow Salon & Spa, a premier hair and nail salon located in Carmel, Indiana. Built with Astro, React, and Tailwind CSS.

## 🌟 About Glow Salon & Spa

Glow Salon & Spa offers a comprehensive range of beauty services including:

- **Hair Services**: Haircuts, highlights, balayage, keratin treatments, hair extensions, and more
- **Nail Services**: Manicures, pedicures, gel and dip services
- **Additional Services**: Waxing, makeup application, and bridal services

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Service Menu**: Comprehensive pricing and service information
- **Contact Integration**: Phone booking and contact form functionality
- **SEO Optimized**: Built with search engine optimization in mind
- **Fast Performance**: Static site generation for optimal loading speeds

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
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # Reusable UI components
│   │   ├── buttons/       # Button components
│   │   └── service-pricing/ # Pricing components
│   ├── layouts/           # Page layouts
│   ├── pages/             # Astro pages
│   │   └── services/      # Service-specific pages
│   ├── styles/            # Global styles
│   └── utils/             # Utility functions
├── astro.config.mjs       # Astro configuration
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd glow-salon
   ```

2. **Install dependencies**
   ```bash
   npm install
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
   npm run dev
   ```

   The site will be available at `http://localhost:4321`

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro` | Run Astro CLI commands |

## 🎨 Customization

### Adding New Services

1. Edit `src/pages/services.astro` to add new service categories
2. Update the service arrays with new offerings
3. The pricing will automatically be displayed using the `PricingSection` component

### Styling

- Global styles are in `src/styles/`
- Component-specific styles use Astro's scoped CSS
- Tailwind CSS classes are used throughout for consistent styling

### Content Management

- **Homepage**: Edit `src/pages/index.astro` and its imported components
- **Services**: Modify the service arrays in `src/pages/services.astro`
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

## 📧 Contact Form

The contact form includes:
- Name, email, and message fields
- Email validation
- Integration with email services (Nodemailer/Resend)

## 🚀 Deployment

### Build for Production

```bash
npm run build
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
