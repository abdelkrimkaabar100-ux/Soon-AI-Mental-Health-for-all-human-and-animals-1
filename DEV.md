# 💻 Development Guide

## Local Development Setup

### Prerequisites
- **Modern Web Browser**: Chrome, Firefox, Safari, or Edge
- **Text Editor**: VS Code, Sublime Text, or any editor
- **Optional**: Node.js (for advanced setups)

### Quick Start (No Installation Required)

1. **Download/Clone Files**:
   - Get all files from this repository
   - Or download the ZIP and extract

2. **Generate Icons** (Optional for development):
   ```bash
   # On macOS/Linux
   chmod +x generate-icons.sh
   ./generate-icons.sh
   
   # On Windows (install ImageMagick first)
   generate-icons.sh
   ```

3. **Open in Browser**:
   - Simply double-click `index.html`
   - Or drag `index.html` into your browser
   - Your app runs locally! 🎉

### Using a Local Server (Recommended)

#### Option 1: Python (Built-in)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then visit: `http://localhost:8000`

#### Option 2: Node.js (if installed)
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server -p 8000
```
Visit: `http://localhost:8000`

#### Option 3: Live Server (VS Code Extension)
1. Install "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"
3. Auto-reloads on file changes

## 🛠️ Development Workflow

### File Structure
```
/
├── index.html          ← Main application (edit this)
├── manifest.json       ← PWA settings
├── sw.js              ← Service worker
├── _redirects         ← Netlify routing
├── generate-icons.sh  ← Icon generator
├── README.md          ← Documentation
├── DEPLOYMENT.md      ← Deployment guide
└── DEV.md            ← This file
```

### Making Changes

#### 1. **Update AI Model or API**
File: `index.html` (lines ~650-670)
```javascript
// Change model
const GROQ_MODEL = 'mixtral-8x7b-32768'; // or 'llama2-70b-4096'

// Change endpoint
const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
```

#### 2. **Modify System Prompt**
File: `index.html` (lines ~620-650)
```javascript
function getSoonPsySystemPrompt(userContext = {}) {
    // Edit this function to change AI behavior
    // Add new context fields or modify analysis approach
}
```

#### 3. **Update PWA Settings**
File: `manifest.json`
```json
{
  "name": "Your App Name",
  "short_name": "ShortName",
  "theme_color": "#2DCE89",
  // Modify these values
}
```

#### 4. **Modify UI Styles**
File: `index.html` (CSS section, lines ~50-400)
```css
:root {
  --primary: #2DCE89;        /* Change primary color */
  --accent-purple: #8965e0;  /* Change accent color */
  /* Edit color variables */
}
```

### Testing Your Changes

#### **1. Browser Testing**
- Save changes (Ctrl+S / Cmd+S)
- Refresh browser (F5)
- Test functionality:
  ```javascript
  // Test AI in browser console:
  document.getElementById('ai-input').value = "Test message";
  document.getElementById('ai-send').click();
  ```

#### **2. PWA Testing**
1. **Install Prompt**: Check for install icon in address bar
2. **Offline Mode**: 
   - Open DevTools (F12)
   - Go to Application → Service Workers
   - Check "Offline" checkbox
   - Refresh page
3. **Manifest Validation**:
   - Go to `chrome://flags` in Chrome
   - Enable "PWA" features if needed
   - Use Lighthouse PWA audit

#### **3. API Testing**
```javascript
// Test API directly in browser console:
async function testAPI() {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messages: [{ role: 'user', content: 'Hello' }],
      model: 'mixtral-8x7b-32768'
    })
  });
  console.log(await response.json());
}
testAPI();
```

### Debugging

#### **1. Console Logs**
```javascript
// Add debug output
console.log('Debug: User context', getUserContextData());
console.log('Debug: API call starting');
```

#### **2. Network Tab**
- Open DevTools (F12)
- Go to Network tab
- Filter by "XHR" or "Fetch"
- Check API requests

#### **3. Application Tab**
- DevTools → Application tab
- **Storage**: Check localStorage data
- **Service Workers**: Monitor PWA registration
- **Cache**: View cached resources

#### **4. Lighthouse Audit**
- DevTools → Lighthouse tab
- Select "Progressive Web App"
- Run audit
- Check scores and recommendations

### Common Issues & Solutions

#### **Issue: Changes Not Showing**
- **Solution**: Hard refresh (Ctrl+Shift+R)
- **Solution**: Clear browser cache
- **Solution**: Check if editing the correct file

#### **Issue: PWA Not Installing**
- **Solution**: Check manifest.json exists
- **Solution**: Verify all required icons
- **Solution**: Check manifest.json syntax

#### **Issue: AI Not Responding**
- **Solution**: Check API key validity
- **Solution**: Check browser console for errors
- **Solution**: Verify CORS settings
- **Solution**: Test API endpoint directly

#### **Issue: Service Worker Not Caching**
- **Solution**: Check DevTools → Application
- **Solution**: Verify sw.js syntax
- **Solution**: Test in Incognito mode

### Performance Testing

#### **1. Page Load Speed**
```javascript
// Measure load time
window.addEventListener('load', () => {
  const loadTime = performance.now();
  console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
});
```

#### **2. Memory Usage**
- DevTools → Performance tab
- Record while using the app
- Check for memory leaks

#### **3. Bundle Size**
- DevTools → Network tab
- Check total download size
- Optimize images and assets

### Code Quality

#### **1. HTML Validation**
- Use [W3C Validator](https://validator.w3.org/)
- Check for semantic HTML
- Ensure accessibility

#### **2. CSS Best Practices**
- Use CSS variables for theming
- Minimize selector complexity
- Group related styles

#### **3. JavaScript Best Practices**
- Use `const` and `let` instead of `var`
- Add error handling for API calls
- Use async/await for promises

### Browser Compatibility

#### **Supported Browsers**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

#### **PWA Support**
- ✅ Chrome (Desktop & Mobile)
- ✅ Edge
- ⚠️ Safari (Limited support)
- ❌ Internet Explorer

### Tips & Tricks

#### **1. Hot Reload**
Use Live Server in VS Code for instant updates

#### **2. Quick API Testing**
```javascript
// Quick test in browser console
const testMessage = "How does my sleep affect my mood?";
console.log('Testing:', testMessage);
// Then trigger AI send
```

#### **3. LocalStorage Inspection**
```javascript
// View all stored data
console.table({
  user: JSON.parse(localStorage.getItem('soon_user') || '{}'),
  sleep: JSON.parse(localStorage.getItem('soon_sleep') || '[]'),
  gratitude: JSON.parse(localStorage.getItem('soon_gratitude') || '[]')
});
```

#### **4. PWA Debugging**
```javascript
// Service worker registration status
navigator.serviceWorker.ready.then(registration => {
  console.log('SW registration:', registration);
});
```

---

**Happy Coding! 🚀**  
*Build something amazing for mental wellness!*
