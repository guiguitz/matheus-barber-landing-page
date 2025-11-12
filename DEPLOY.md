# Deploy Guide - Matheus Costa Barber Landing Page

This document explains how to publish the landing page on the internet for free or paid.

## 🚀 Free Hosting Options

### 1. GitHub Pages (Recommended)

**Advantages**: Free, easy, automatic SSL, customizable domain

**Steps**:

1. Create an account on [GitHub](https://github.com) (if you don't have one yet)
2. Create a new repository (e.g.: `matheus-barber-landing`)
3. Upload all project files
4. Go to `Settings` > `Pages`
5. In "Source", select the `main` branch and `/ (root)` folder
6. Click "Save"
7. Wait a few minutes and access: `https://your-username.github.io/matheus-barber-landing`

**Custom Domain**:
- Configure a `CNAME` file with your domain
- Adjust your domain's DNS settings

```bash
# Git commands example
git init
git add .
git commit -m "Initial commit - Landing Page Matheus Costa"
git branch -M main
git remote add origin https://github.com/your-username/matheus-barber-landing.git
git push -u origin main
```

---

### 2. Netlify

**Advantages**: Automatic deploy, forms, free SSL, very easy

**Steps**:

1. Access [Netlify](https://www.netlify.com)
2. Create an account (you can use GitHub)
3. Click "Add new site" > "Deploy manually"
4. Drag the project folder to the upload area
5. Done! Your site will be online in seconds
6. URL: `https://your-site-name.netlify.app`

**Continuous Deploy with GitHub**:
1. Connect your GitHub repository
2. Every time you commit, the site updates automatically

**Custom Domain**:
- Go to `Domain settings` > `Add custom domain`
- Configure DNS in your domain provider

---

### 3. Vercel

**Advantages**: Fast deploy, automatic optimizations, analytics

**Steps**:

1. Access [Vercel](https://vercel.com)
2. Create an account (you can use GitHub)
3. Click "Add New Project"
4. Import your GitHub repository or upload
5. Configure (usually automatic for pure HTML)
6. Deploy! URL: `https://your-project.vercel.app`

---

### 4. Firebase Hosting

**Advantages**: Google infrastructure, global CDN, automatic SSL

**Steps**:

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize the project:
```bash
firebase init hosting
```

4. Configure:
   - Public directory: `.` (current folder)
   - Single-page app: `No`
   - Overwrite index.html: `No`

5. Deploy:
```bash
firebase deploy
```

6. URL: `https://your-project.web.app`

---

### 5. Cloudflare Pages

**Advantages**: Global CDN, SSL, Workers for extra features

**Steps**:

1. Access [Cloudflare Pages](https://pages.cloudflare.com)
2. Connect your GitHub repository
3. Configure the project (static HTML doesn't need build)
4. Automatic deploy!

---

## 💰 Paid Hosting Options (More Professional)

### 1. Hostinger
- **Price**: From $1.99/month
- **Includes**: Free domain, SSL, professional email
- **Ideal for**: Professional website with own domain

### 2. HostGator
- **Price**: From $2.75/month
- **Includes**: Free domain, SSL, cPanel
- **Ideal for**: Ease of use

### 3. Bluehost
- **Price**: From $2.95/month
- **Includes**: WordPress support, SSL, backup
- **Ideal for**: WordPress integration

---

## 🌐 Register Own Domain

### Domain Suggestions:
- `matheuscostabarber.com`
- `barbeiromatheuscosta.com`
- `matheusbarber.com`
- `matheuscostabarber.com.br` (for Brazil)

### Where to Register:
1. **GoDaddy** - From $12/year
2. **Namecheap** - From $8.88/year
3. **Google Domains** - From $12/year
4. **Registro.br** (.br domains) - ~$10/year

---

## 🔧 Post-Deploy Settings

### 1. Google Analytics
Add the tracking code in the `<head>` of `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Google Search Console
- Add your site to [Google Search Console](https://search.google.com/search-console)
- Verify the property
- Submit the sitemap (if you have one)

### 3. Facebook Pixel (Optional)
For Facebook/Instagram ads:

```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

---

## 📊 Post-Deploy Optimizations

### 1. Compress Images
Use online tools:
- [TinyPNG](https://tinypng.com)
- [Squoosh](https://squoosh.app)
- [ImageOptim](https://imageoptim.com)

### 2. Minify CSS and JS
```bash
# With npm
npm install -g clean-css-cli uglify-js

# Minify CSS
cleancss -o styles.min.css styles.css

# Minify JS
uglifyjs script.js -o script.min.js
```

### 3. Add Sitemap
Create a `sitemap.xml` file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2025-11-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 4. Robots.txt
Create a `robots.txt` file:

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

---

## 🔒 Security

### SSL/HTTPS
- **Free**: Let's Encrypt (included in GitHub Pages, Netlify, Vercel)
- Essential for SEO and visitor trust

### Security Headers
Configure on the server or use Cloudflare to add:
- X-Frame-Options
- X-Content-Type-Options
- Content-Security-Policy

---

## 📱 Test on Devices

Before publishing, test on:

1. **Desktop**: Chrome, Firefox, Safari, Edge
2. **Mobile**: iOS Safari, Chrome Android
3. **Tablet**: iPad, Android Tablet

**Testing Tools**:
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [PageSpeed Insights](https://pagespeed.web.dev)
- BrowserStack (to test on multiple devices)

---

## 🎯 Final Pre-Deploy Checklist

- [ ] All images are optimized
- [ ] WhatsApp and Instagram links are correct
- [ ] Calendly link is working
- [ ] Tested on mobile and desktop
- [ ] SEO meta tags are filled
- [ ] Favicon added (optional)
- [ ] Google Analytics configured
- [ ] SSL/HTTPS active
- [ ] Own domain configured (if applicable)
- [ ] Tested on different browsers

---

## 📞 Support

If you have questions about deployment, check the official documentation for each platform:

- [GitHub Pages Docs](https://docs.github.com/pages)
- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)
- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)

---

## 🎉 Post-Deploy

After deployment, share the link on:

1. Instagram profile (@matheuscosta_barber)
2. WhatsApp Status
3. Instagram Bio
4. Google My Business (if you have one)
5. Personal social networks

**Tip**: Create a QR Code of the site to add to business cards!

---

**Good luck with the website! 🚀💈**
