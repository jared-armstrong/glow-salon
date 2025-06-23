# Development Guide

This document provides detailed information for developers working on the Glow Salon & Spa website.

## 🏗️ Architecture Overview

The website is built using **Astro** as the main framework, with **React** components for interactive elements and **Tailwind CSS** for styling. The architecture follows a component-based approach with clear separation of concerns.

### Key Technologies

- **Astro 5.10.0** - Static site generator
- **React 19.0.0** - Interactive components
- **Tailwind CSS 4.0.12** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Nodemailer** - Email functionality
- **Resend** - Email delivery service

## 📁 File Structure Deep Dive

```
src/
├── assets/                 # Static assets (images, fonts, etc.)
├── components/            # Reusable UI components
│   ├── buttons/          # Button components
│   │   ├── BookingButtonGroup.astro
│   │   └── HomeButton.astro
│   ├── service-pricing/  # Service pricing components
│   │   └── PricingSection.astro
│   ├── Card.astro        # Generic card component
│   ├── ContactForm.astro # Contact form component
│   ├── Footer.astro      # Site footer
│   ├── Header.astro      # Site header/navigation
│   ├── LandingSection.astro # Hero section
│   └── SalonServices.astro # Services showcase
├── layouts/              # Page layouts
│   └── Layout.astro     # Main layout component
├── pages/               # Astro pages (routes)
│   ├── services/        # Service-specific pages
│   ├── contact.astro    # Contact page
│   ├── index.astro      # Homepage
│   └── services.astro   # Services page
├── styles/              # Global styles
└── utils/               # Utility functions
```

## 🎨 Component Architecture

### Layout Components

#### `Layout.astro`
The main layout wrapper that provides:
- HTML structure
- Meta tags
- SEO optimization
- Global styles

#### `Header.astro`
Site navigation component with:
- Logo/branding
- Navigation menu
- Mobile responsiveness
- Contact information

#### `Footer.astro`
Site footer with:
- Contact information
- Social media links
- Business hours
- Copyright information

### Page Components

#### `LandingSection.astro`
Hero section featuring:
- Background image
- Call-to-action button
- Responsive design
- Phone booking integration

#### `SalonServices.astro`
Services showcase with:
- Service categories
- Pricing information
- Booking buttons
- Visual appeal

### Interactive Components

#### `ContactForm.astro`
Contact form with:
- Form validation
- Email integration
- Success/error handling
- Responsive design

#### `BookingButtonGroup.astro`
Booking buttons with:
- Phone call integration
- Consistent styling
- Multiple placement options

## 🎯 Development Workflow

### 1. Setting Up Development Environment

```bash
# Clone the repository
git clone <repository-url>
cd glow-salon

# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. Making Changes

#### Adding New Pages
1. Create a new `.astro` file in `src/pages/`
2. Import the `Layout` component
3. Add your content
4. Update navigation if needed

#### Creating New Components
1. Create a new `.astro` file in `src/components/`
2. Use scoped styles for component-specific CSS
3. Export the component
4. Import and use in pages

#### Modifying Services
1. Edit the service arrays in `src/pages/services.astro`
2. Update pricing information
3. Add new service categories if needed

### 3. Styling Guidelines

#### Tailwind CSS Usage
- Use Tailwind utility classes for styling
- Follow mobile-first responsive design
- Maintain consistent spacing and typography

#### Custom CSS
- Use Astro's scoped styles for component-specific CSS
- Keep global styles minimal
- Follow BEM methodology for custom classes

### 4. Testing

#### Manual Testing Checklist
- [ ] Homepage loads correctly
- [ ] Services page displays all services
- [ ] Contact form works
- [ ] Phone links function
- [ ] Responsive design on all devices
- [ ] Images load properly
- [ ] Navigation works correctly

#### Browser Testing
Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Configuration Files

### `astro.config.mjs`
```javascript
export default defineConfig({
  site: "https://www.glowsalonwestclay.com/",
  base: "/",
  output: "static",
  integrations: [
    sitemap(), 
    tailwindcss(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      }
    })
  ],
});
```

### `package.json` Scripts
- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build
- `astro` - Run Astro CLI commands

## 📱 Responsive Design

### Breakpoints
- **Mobile**: Up to 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Responsive Components
All components are designed to be responsive:
- Flexible layouts using CSS Grid and Flexbox
- Mobile-first approach
- Touch-friendly interactions
- Optimized images for different screen sizes

## 🚀 Performance Optimization

### Image Optimization
- Use WebP format for images
- Implement lazy loading
- Optimize image sizes for different devices
- Use appropriate `alt` tags for accessibility

### Code Optimization
- Minimize JavaScript bundles
- Use Astro's static generation
- Optimize CSS with Tailwind's purge
- Implement proper caching strategies

## 🔍 SEO Best Practices

### Meta Tags
Each page includes:
- Title tag
- Meta description
- Open Graph tags
- Twitter Card tags

### Structured Data
- Implement schema markup for business information
- Add local business schema
- Include service schema where appropriate

### Sitemap
- Automatically generated by Astro
- Includes all pages
- Updated on each build

## 📧 Email Integration

### Contact Form Setup
1. Configure email service in `.env`
2. Set up Nodemailer or Resend
3. Test email delivery
4. Implement error handling

### Environment Variables
```env
EMAIL_SERVICE=your-email-service
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
```

## 🐛 Debugging

### Common Issues

#### Build Errors
- Check for missing dependencies
- Verify TypeScript types
- Ensure all imports are correct

#### Styling Issues
- Check Tailwind CSS configuration
- Verify responsive breakpoints
- Test on different browsers

#### Email Issues
- Verify environment variables
- Check email service configuration
- Test with different email providers

### Debug Tools
- Browser developer tools
- Astro dev tools
- TypeScript compiler
- ESLint for code quality

## 📚 Additional Resources

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing Guidelines

1. Follow the existing code style
2. Test changes on multiple devices
3. Update documentation when needed
4. Use descriptive commit messages
5. Create feature branches for new work

## 📞 Support

For development questions or issues:
- Check the documentation
- Review existing code examples
- Contact the development team
- Create an issue in the repository 