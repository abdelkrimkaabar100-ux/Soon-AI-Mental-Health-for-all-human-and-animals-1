# Soon - Mental Wellness Companion (Refactored)

A comprehensive mental health and wellness web application refactored to use Groq API, featuring contextual AI memory, gratitude journaling, and PWA capabilities for Netlify deployment.

## 🚀 Key Updates

### 1. **API Migration: Gemini → Groq**
- ✅ Replaced Google Gemini API with Groq API
- ✅ Using `mixtral-8x7b-32768` model for optimal performance
- ✅ Enhanced API integration with proper error handling
- ✅ **API Key**: `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`

### 2. **Enhanced Contextual Memory System**
The AI now analyzes multiple data points for personalized insights:
- **Mood Tracking**: Current and historical mood states
- **Sleep Data**: User's sleep duration with correlations to mental health
- **Exercise Data**: Physical activity impact on psychological well-being
- **Rest/Break Data**: Break time analysis for stress management
- **Pet Companion Data**: Pet sleep hours and activities for empathy
- **Gratitude Journal**: Positive thinking reinforcement

### 3. **New Gratitude Feature**
- 🆕 **Gratitude Journal**: Daily gratitude entries (1-3 items)
- 🆕 **Statistics Tracking**: Weekly and total gratitude counts
- 🆕 **AI Integration**: Gratitude data included in psychological analysis
- 🆕 **Positive Reinforcement**: AI reinforces positive thinking patterns

### 4. **Progressive Web App (PWA)**
- 📱 **Installable**: Add to home screen on mobile and desktop
- 🔄 **Offline Support**: Service worker with caching strategy
- 📱 **App-like Experience**: Standalone display mode
- 🔔 **Push Notifications Ready**: Framework for future notifications
- ⚡ **Background Sync**: Data synchronization when offline

### 5. **Netlify Deployment Ready**
- 🔧 **_redirects file**: SPA routing support
- 📁 **Proper folder structure**: All files at root level
- 🚀 **Zero-configuration deployment**: Drag and drop to Netlify

## 📁 File Structure

```
/
├── index.html              # Main application (refactored)
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker for PWA
├── _redirects              # Netlify SPA routing
├── generate-icons.sh       # Icon generation script
└── README.md              # This file
```

## 🛠️ Setup Instructions

### 1. **Generate PWA Icons**
```bash
chmod +x generate-icons.sh
./generate-icons.sh
```

This creates:
- `icon-192x192.png` - 192x192 PWA icon
- `icon-512x512.png` - 512x512 PWA icon
- `favicon.ico` - Multi-size favicon

### 2. **Deploy to Netlify**
1. **Drag & Drop Method**:
   - Go to [Netlify](https://netlify.com)
   - Drag the entire folder to the deployment area
   - Your app will be live instantly!

2. **Git Integration**:
   - Push files to a Git repository
   - Connect repository to Netlify
   - Automatic deployments on push

### 3. **Verify PWA Installation**
- Visit your deployed site
- Look for the "Add to Home Screen" prompt
- Test offline functionality by going offline

## 🎯 Key Features

### **Enhanced AI Analysis**
```javascript
// The AI now receives comprehensive user context:
{
  mood: "excellent|good|neutral|bad|terrible",
  sleepHours: 8,
  exerciseMinutes: 30,
  restMinutes: 60,
  petSleepHours: 12,
  gratitudeEntries: [
    { content: "Family support", date: "2025-11-21" },
    { content: "Good health", date: "2025-11-20" }
  ]
}
```

### **Gratitude Journal Integration**
- Daily gratitude tracking with AI analysis
- Statistics: weekly count and total entries
- Positive thinking reinforcement
- Contextual psychological insights

### **PWA Capabilities**
- **Offline Support**: Core functionality works without internet
- **Fast Loading**: Cached resources for quick startup
- **Native Feel**: App-like experience with splash screen
- **Install Prompts**: Automatic prompts for app installation

## 🔧 Technical Changes

### **API Integration**
```javascript
// Old: Gemini API
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

// New: Groq API
const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = 'mixtral-8x7b-32768';
```

### **Contextual System Prompt**
The AI receives a dynamic system prompt including:
- Current user state data
- Historical patterns
- Pet companion information
- Gratitude entries
- Sleep/exercise/rest correlations

### **Service Worker Features**
- **Cache Strategy**: Cache-first for static assets
- **Background Sync**: Offline data synchronization
- **Push Notifications**: Framework for future features
- **Update Management**: Automatic cache updates

## 🌟 Benefits of Refactoring

1. **Faster API Responses**: Groq is optimized for speed
2. **Better Personalization**: Contextual AI with comprehensive data
3. **Offline Capability**: PWA works without internet
4. **Native App Experience**: Install and use like a native app
5. **Future-Proof**: Modern web standards and practices

## 📊 Data Privacy

- **Local Storage**: All user data stored locally in browser
- **No Server Storage**: User data never leaves their device
- **API Only**: Only interactions sent to Groq for AI analysis
- **Encrypted**: Service worker uses HTTPS for security

## 🚀 Deployment Checklist

- [ ] Run icon generation script
- [ ] Copy generated icons to root directory
- [ ] Verify _redirects file is present
- [ ] Test PWA manifest.json validation
- [ ] Deploy to Netlify
- [ ] Test offline functionality
- [ ] Verify app installation on mobile/desktop
- [ ] Test AI responses with contextual data

## 🔮 Future Enhancements

1. **Push Notifications**: Daily mood reminders and insights
2. **Advanced Analytics**: Mood pattern recognition
3. **Social Features**: Share positive insights (opt-in)
4. **Export Data**: Download personal wellness data
5. **Meditation Library**: Extended guided sessions

## 📞 Support

For technical issues or questions:
- Check browser console for errors
- Verify PWA installation in browser settings
- Test offline mode by disabling internet
- Ensure all files are deployed correctly

---

**Made with ❤️ for mental wellness**  
*Deploy your improved mental wellness companion to Netlify today!*
