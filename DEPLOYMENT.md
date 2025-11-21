# 🚀 Netlify Deployment Guide

## Quick Deploy to Netlify

### Method 1: Drag & Drop (Fastest)
1. **Prepare your files**:
   ```
   /
   ├── index.html
   ├── manifest.json
   ├── sw.js
   ├── _redirects
   ├── icon-192x192.png  ← Generate these first
   ├── icon-512x512.png  ← Generate these first
   └── favicon.ico       ← Generate these first
   ```

2. **Generate Icons**:
   ```bash
   chmod +x generate-icons.sh
   ./generate-icons.sh
   ```

3. **Deploy**:
   - Go to [Netlify.com](https://netlify.com)
   - Click "Add new site" → "Deploy manually"
   - Drag your entire folder to the deployment area
   - Wait for upload and deployment (usually 30-60 seconds)
   - Your app is live! 🎉

### Method 2: Git Integration (Recommended)
1. **Create Git Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Soon Mental Wellness App"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to Netlify dashboard
   - Click "Add new site" → "Import from Git"
   - Choose your Git provider (GitHub, GitLab, Bitbucket)
   - Select your repository
   - Deploy settings:
     - **Build command**: (leave empty)
     - **Publish directory**: (leave empty, use root)

3. **Deploy**: Netlify will automatically detect and deploy

## 🔧 Post-Deployment Configuration

### 1. **Verify PWA Installation**
1. Visit your deployed site
2. Look for install prompt in browser address bar
3. Click "Install" or "Add to Home Screen"
4. Test if app works offline

### 2. **Test API Integration**
1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Test AI interaction:
   ```javascript
   // Type in the AI chat:
   "How are my wellness metrics looking?"
   ```
4. Check for any API errors in console

### 3. **Mobile Testing**
- **iOS Safari**: Tap Share → Add to Home Screen
- **Android Chrome**: Tap menu → Add to Home Screen
- **Desktop Chrome**: Click install icon in address bar

### 4. **Offline Testing**
1. Go online to load the app
2. Disable internet connection
3. Try navigating the app
4. Re-enable connection to sync data

## 📱 Custom Domain Setup (Optional)

### Using Netlify Subdomain
- Netlify automatically provides: `https://random-name.netlify.app`
- You can rename it in site settings

### Using Custom Domain
1. **In Netlify**:
   - Go to Site settings → Domain management
   - Add custom domain (e.g., `soon.yourname.com`)
   - Note the DNS records Netlify provides

2. **In Your Domain Provider**:
   - Add CNAME record pointing to your Netlify subdomain
   - Or use Netlify's DNS integration

## 🔒 Security Headers (Recommended)

Create `netlify.toml` in your root for better security:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; media-src 'self' https://www.soundhelix.com; connect-src 'self' https://api.groq.com;"

[[headers]]
  for = "/sw.js"
  [headers.values]
    Cache-Control = "no-cache"
```

## 🚨 Troubleshooting

### Issue: PWA Not Installing
- **Check**: Ensure `manifest.json` is at root
- **Check**: All required icons exist
- **Check**: Browser supports PWA (Chrome, Edge, Safari)

### Issue: AI Not Responding
- **Check**: Browser console for errors
- **Check**: API key is valid
- **Check**: CORS settings (Netlify should handle this)

### Issue: Offline Mode Not Working
- **Check**: Service worker is registered (Dev Tools → Application)
- **Check**: Cache is populated (Dev Tools → Storage)

### Issue: 404 Errors on Refresh
- **Check**: `_redirects` file is present
- **Check**: File has correct format: `/*    /index.html   200`

## 📊 Analytics & Monitoring

### Netlify Analytics
- Built-in analytics in Netlify dashboard
- Page views, unique visitors, bandwidth

### Error Monitoring
```javascript
// Add to index.html for error tracking
window.addEventListener('error', function(e) {
  console.error('JavaScript Error:', e.error);
});
```

## 🔄 Continuous Deployment

### Auto-Deploy from Git
1. Push changes to your Git repository
2. Netlify automatically builds and deploys
3. Custom domain updates automatically
4. Preview deployments for pull requests

### Branch Deploys
- **main**: Production site
- **staging**: Staging environment
- **feature branches**: Preview deployments

## 🎯 Performance Optimization

### Enable Compression
Netlify automatically enables:
- Gzip compression for text files
- Brotli compression (modern browsers)
- Image optimization

### CDN
- Global CDN distribution
- Automatic asset optimization
- Smart caching rules

## 📞 Support

### Netlify Support
- [Netlify Docs](https://docs.netlify.com/)
- [Community Forum](https://community.netlify.com/)

### PWA Testing Tools
- [PWA Builder](https://www.pwabuilder.com/)
- [Lighthouse PWA Audit](https://developers.google.com/web/tools/lighthouse)

---

**🚀 Your app is now live on Netlify with full PWA capabilities!**
