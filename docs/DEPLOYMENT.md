# Deployment Guide

This guide covers all aspects of deploying the Glow Salon & Spa website to production.

## 🚀 Pre-Deployment Checklist

Before deploying, ensure the following:

### Code Quality
- [ ] All tests pass (if applicable)
- [ ] Code is linted and formatted
- [ ] No console errors in development
- [ ] All images are optimized
- [ ] Environment variables are configured

### Content Review
- [ ] All service prices are current
- [ ] Contact information is accurate
- [ ] Business hours are correct
- [ ] Images are high quality and relevant
- [ ] Meta descriptions are optimized

### Performance
- [ ] Images are compressed and in WebP format
- [ ] CSS and JS are minified
- [ ] Lazy loading is implemented
- [ ] Core Web Vitals are acceptable

## 🏗️ Build Process

### Local Build Testing

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview the build locally
npm run preview
```

### Build Output

The build process creates a `dist/` directory containing:
- Static HTML files
- Optimized CSS and JavaScript
- Compressed images
- Sitemap and robots.txt
- Other static assets

## 🌐 Deployment Options

### 1. Netlify (Recommended)

#### Automatic Deployment
1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 or higher

#### Manual Deployment
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

#### Environment Variables
Set these in Netlify dashboard:
```env
EMAIL_SERVICE=your-email-service
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
```

### 2. Vercel

#### Automatic Deployment
1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Astro configuration
3. Deploy automatically on push to main branch

#### Manual Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### 3. GitHub Pages

#### Using GitHub Actions
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 4. Traditional Web Hosting

#### Upload Process
1. Build the project: `npm run build`
2. Upload contents of `dist/` folder to your web server
3. Ensure proper file permissions
4. Configure web server for SPA routing

#### Server Configuration
```apache
# Apache .htaccess
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [QSA,L]
```

```nginx
# Nginx configuration
location / {
    try_files $uri $uri/ /index.html;
}
```

## 🔧 Environment Configuration

### Production Environment Variables

Create a `.env.production` file:

```env
# Site Configuration
SITE_URL=https://www.glowsalonwestclay.com
NODE_ENV=production

# Email Configuration
EMAIL_SERVICE=your-email-service
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password

# Analytics (if using)
GOOGLE_ANALYTICS_ID=your-ga-id
```

### Astro Configuration

Update `astro.config.mjs` for production:

```javascript
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';

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
  build: {
    assets: 'assets',
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
  },
});
```

## 📊 Post-Deployment Verification

### 1. Functionality Testing
- [ ] Homepage loads correctly
- [ ] All pages are accessible
- [ ] Contact form works
- [ ] Phone links function
- [ ] Images load properly
- [ ] Navigation works

### 2. Performance Testing
- [ ] Page load times are acceptable
- [ ] Core Web Vitals are good
- [ ] Images are optimized
- [ ] CSS/JS is minified

### 3. SEO Verification
- [ ] Sitemap is accessible
- [ ] Meta tags are correct
- [ ] Open Graph tags work
- [ ] Robots.txt is present

### 4. Mobile Testing
- [ ] Responsive design works
- [ ] Touch interactions work
- [ ] Images scale properly
- [ ] Text is readable

## 🔍 Monitoring and Analytics

### Google Analytics Setup
1. Create a Google Analytics property
2. Add tracking code to the site
3. Set up goals and conversions
4. Monitor performance metrics

### Performance Monitoring
- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Set up uptime monitoring
- Track user engagement

## 🔄 Continuous Deployment

### GitHub Actions Workflow
```yaml
name: Deploy Website

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v2.0
        with:
          publish-dir: './dist'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: "Deploy from GitHub Actions"
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 🛡️ Security Considerations

### HTTPS
- Ensure SSL certificate is installed
- Redirect HTTP to HTTPS
- Use secure cookies if applicable

### Content Security Policy
Add CSP headers to prevent XSS attacks:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';">
```

### Environment Variables
- Never commit sensitive data to version control
- Use environment variables for configuration
- Rotate secrets regularly

## 🔧 Troubleshooting

### Common Deployment Issues

#### Build Failures
- Check Node.js version compatibility
- Verify all dependencies are installed
- Review build logs for specific errors

#### 404 Errors
- Ensure proper routing configuration
- Check file paths and case sensitivity
- Verify server configuration

#### Performance Issues
- Optimize images and assets
- Enable compression
- Use CDN for static assets
- Implement caching strategies

### Rollback Strategy
1. Keep previous deployments available
2. Use feature flags for major changes
3. Have a quick rollback process
4. Test rollback procedures regularly

## 📞 Support and Maintenance

### Regular Maintenance Tasks
- [ ] Update dependencies monthly
- [ ] Review and update content
- [ ] Monitor performance metrics
- [ ] Backup data regularly
- [ ] Test functionality after updates

### Emergency Procedures
1. Identify the issue
2. Assess impact
3. Implement fix or rollback
4. Communicate with stakeholders
5. Document the incident

## 📚 Additional Resources

- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/)
- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Pages Documentation](https://pages.github.com/) 