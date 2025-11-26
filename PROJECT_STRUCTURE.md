# Sri Maa App - Project Structure & Implementation Guide

## Overview
React Native app built with Ignite boilerplate for Sri Sri Maa Anandamayee and Sri Sri Anandamayee Sangha.

## ✅ Completed Components

### 1. Type Definitions (`app/models/types.ts`)
- Complete TypeScript interfaces for all data models
- Ashram, Book, Photo, Event, Post, Saying types
- Institution, Guidance, FAQ, About content types
- Theme configuration and notification types
- API response and cache metadata types

### 2. Zustand State Management (`app/store/`)
- **useAppStore.ts**: Global app state, config, admin mode
- **useThemeStore.ts**: Dynamic theming with festival themes
- **useContentStore.ts**: All content data (ashrams, books, photos, etc.)
- **useOfflineStore.ts**: Offline mode, downloads, cache management
- **useNotificationStore.ts**: Notification preferences and state

### 3. Service Layer (`app/services/`)
- **apiService.ts**: Network requests, JSON endpoint fetching
- **cacheService.ts**: AsyncStorage wrapper, cache management
- **notificationService.ts**: Expo Notifications integration (ready for OneSignal/FCM)
- **syncService.ts**: Coordinates data sync between API and cache

### 4. Mock Data (`assets/mock-data/`)
- ashrams.json (sample created)
- TODO: Create remaining mock data files

## 📋 TODO: Implementation Steps

### Step 1: Create Remaining Mock Data Files

Create in `assets/mock-data/`:

```bash
books.json          # Book library data
photos.json         # Photo gallery data
events.json         # Events calendar data
posts.json          # Feed posts data
sayings.json        # Daily sayings data
institutions.json   # Institutions list
guidance.json       # Guidance sections & FAQs
about.json          # About content
theme.json          # Theme configurations
```

**Sample structure for each file is documented below.**

### Step 2: Implement Theme System

Create `app/theme/useCustomTheme.ts`:
```typescript
import { useThemeStore } from "../store/useThemeStore"

export const useCustomTheme = () => {
  const { currentTheme } = useThemeStore()
  return currentTheme
}
```

### Step 3: Create Navigation Structure

Update `app/navigators/AppNavigator.tsx`:
```typescript
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Tab Navigator with 5 tabs:
// - Home (with feed, saying of the day)
// - Ashrams (list + details)
// - Library (books + reader)
// - Events (calendar + details)
// - More (about, guidance, institutions, settings, admin)
```

### Step 4: Create Reusable UI Components

In `app/components/`:
```
Card.tsx               # Generic card component
SayingCard.tsx         # Saying of the day display
PostCard.tsx           # Feed post card
EventCard.tsx          # Event calendar card
AshramCard.tsx         # Ashram list item
BookCard.tsx           # Book library item
PhotoGridItem.tsx      # Photo gallery item
LoadingSpinner.tsx     # Loading indicator
EmptyState.tsx         # Empty state message
RefreshButton.tsx      # Pull to refresh button
```

### Step 5: Implement Screens

Create screen files in `app/screens/`:

**Home Tab:**
- `HomeScreen.tsx` - Main feed with saying + posts

**Ashrams Tab:**
- `AshramsListScreen.tsx` - List of all ashrams
- `AshramDetailScreen.tsx` - Individual ashram details

**Library Tab:**
- `LibraryScreen.tsx` - Books list
- `BookDetailScreen.tsx` - Book info
- `BookReaderScreen.tsx` - In-app reader

**Events Tab:**
- `EventsScreen.tsx` - Calendar view
- `EventDetailScreen.tsx` - Event details

**More Tab:**
- `MoreMenuScreen.tsx` - Menu list
- `AboutScreen.tsx` - About Maa & Sangha
- `GuidanceScreen.tsx` - Guidance for new devotees
- `InstitutionsScreen.tsx` - Institutions list
- `PhotosScreen.tsx` - Photo gallery
- `PhotoViewerScreen.tsx` - Full-screen viewer
- `SettingsScreen.tsx` - App settings
- `AdminScreen.tsx` - Admin panel
- `OfflineScreen.tsx` - Downloaded items

### Step 6: Install Missing Dependencies

```bash
cd SriMaa
npm install expo-notifications
```

### Step 7: Update App Entry Point

Modify `app/app.tsx` to:
1. Initialize notification service
2. Initialize theme system
3. Perform initial data sync
4. Handle first launch

## 🗂️ Mock Data File Structures

### books.json
```json
[
  {
    "id": "book_001",
    "title": "Matri Vani - Volume I",
    "author": "Compiled by devotees",
    "language": "English",
    "description": "Collection of Sri Sri Maa's teachings and conversations",
    "coverImageUrl": "https://placeholder.com/book1.jpg",
    "category": "Teachings",
    "pdfUrl": "https://example.com/matri-vani-1.pdf",
    "isDownloaded": false
  }
]
```

### photos.json
```json
[
  {
    "id": "photo_001",
    "imageUrl": "https://placeholder.com/maa1.jpg",
    "title": "Sri Maa in Vrindavan",
    "description": "Maa during her visit to Vrindavan in 1960",
    "location": "Vrindavan",
    "date": "1960-05-15",
    "tags": ["Vrindavan", "Darshan"],
    "isCached": false
  }
]
```

### events.json
```json
[
  {
    "id": "event_001",
    "title": "Sri Maa Janmotsav",
    "description": "Celebration of Sri Maa's birth anniversary",
    "location": "Kankhal Ashram",
    "startDate": "2025-04-30T06:00:00Z",
    "endDate": "2025-04-30T20:00:00Z",
    "isOnline": false,
    "isPhysical": true,
    "tags": ["Festival", "Janmotsav"]
  }
]
```

### posts.json
```json
[
  {
    "id": "post_001",
    "type": "Daily",
    "title": "Morning Reflection",
    "body": "Remember Maa in every breath...",
    "imageUrl": "https://placeholder.com/post1.jpg",
    "tags": ["Reflection"],
    "category": "Daily",
    "timestamp": "2025-01-15T06:00:00Z",
    "isRead": false
  }
]
```

### sayings.json
```json
[
  {
    "id": "saying_001",
    "quote": "The purpose of life is to realize the Self. That is the primary objective.",
    "source": "Matri Vani, Volume I",
    "date": "2025-01-15",
    "imageUrl": null
  }
]
```

### institutions.json
```json
[
  {
    "id": "inst_001",
    "name": "Shree Shree Anandamayee Kanyapeeth",
    "category": "Kanyapeeth",
    "description": "Girls' residential school",
    "location": "Dehradun, Uttarakhand",
    "contact": {
      "phone": "+91-xxx-xxx-xxxx",
      "email": "kanyapeeth@example.com"
    }
  }
]
```

### guidance.json
```json
{
  "sections": [
    {
      "id": "guide_001",
      "title": "Who is Sri Sri Maa?",
      "content": "# Who is Sri Sri Maa?\n\nSri Sri Anandamayee Maa...",
      "order": 1
    }
  ],
  "faqs": [
    {
      "id": "faq_001",
      "question": "How can I visit an ashram?",
      "answer": "Contact the ashram in advance...",
      "category": "Visiting"
    }
  ]
}
```

### about.json
```json
[
  {
    "id": "about_001",
    "section": "sri_maa",
    "title": "Life of Sri Sri Maa",
    "content": "# Sri Sri Anandamayee Maa\n\nBorn in 1896...",
    "lastUpdated": "2025-01-01"
  }
]
```

### theme.json
```json
{
  "version": "1.0",
  "defaultTheme": {
    "id": "default",
    "name": "Default",
    "colors": {
      "primary": "#8B4513",
      "accent": "#DAA520",
      "background": "#FFF5E6",
      "surface": "#FFFFFF",
      "text": "#2C1810",
      "textSecondary": "#6B5447",
      "border": "#D4C4B0"
    },
    "gradients": {
      "primary": ["#8B4513", "#A0522D"],
      "background": ["#FFF5E6", "#FFE4B5"]
    }
  },
  "festivalThemes": [
    {
      "id": "janmotsav",
      "name": "Janmotsav",
      "startDate": "2025-04-29",
      "endDate": "2025-05-01",
      "colors": {
        "primary": "#FF6B35",
        "accent": "#F7931E",
        "background": "#FFF8E7",
        "surface": "#FFFFFF",
        "text": "#2C1810",
        "textSecondary": "#6B5447",
        "border": "#FFD6A5"
      },
      "bannerImageUrl": "https://placeholder.com/janmotsav-banner.jpg"
    }
  ]
}
```

## 🎯 Key Features Implementation Notes

### Dynamic Theming
- Theme is fetched from `theme.json`
- Checks current date against festival theme dates
- Auto-applies festival theme when in date range
- Supports light/dark mode toggle
- All screens use theme colors from `useCustomTheme()` hook

### Offline Mode
- On app launch, attempts to sync from API
- If offline, loads from AsyncStorage cache
- Cache expiration times configurable per data type
- Pull-to-refresh triggers sync
- Downloaded books/PDFs stored locally

### Notifications
- Daily saying notification at configured time
- New post notifications
- Event reminders (1 hour before)
- Uses Expo Notifications (local)
- Ready for OneSignal/FCM integration (see TODOs in notificationService.ts)

### Admin Panel
- Secret key protection (configured in useAppStore)
- Simple form to create posts/events/sayings
- POSTs to configurable admin endpoint
- Currently simulates backend (console logs)
- Easy to replace with real API calls

### Feed/Posts
- Home screen shows last 7 posts
- Pull-to-refresh fetches new posts
- Marks posts as read when viewed
- Badge shows unread count

### Ashrams Directory
- Search by name/location
- Filter by tags
- "Open in Maps" button
- Contact details (call/email)

### Library
- Book cards with covers
- Filter by language/category
- In-app reader for formatted content
- PDF viewer for PDF files
- Download for offline

### Photo Gallery
- Grid view with lazy loading
- Full-screen viewer with swipe
- Save offline option
- Filter by tags

### Events Calendar
- Upcoming/past sections
- Add to native calendar button
- Event reminders via notifications

## 📦 File Locations Reference

```
SriMaa/
├── app/
│   ├── models/
│   │   └── types.ts ✅
│   ├── store/
│   │   ├── index.ts ✅
│   │   ├── useAppStore.ts ✅
│   │   ├── useThemeStore.ts ✅
│   │   ├── useContentStore.ts ✅
│   │   ├── useOfflineStore.ts ✅
│   │   └── useNotificationStore.ts ✅
│   ├── services/
│   │   ├── api/
│   │   │   └── apiService.ts ✅
│   │   ├── cache/
│   │   │   └── cacheService.ts ✅
│   │   ├── notifications/
│   │   │   └── notificationService.ts ✅
│   │   └── sync/
│   │       └── syncService.ts ✅
│   ├── components/ (TODO)
│   ├── screens/ (TODO)
│   ├── navigators/ (TODO - update existing)
│   └── theme/ (TODO - add custom theme hook)
├── assets/
│   └── mock-data/
│       ├── ashrams.json ✅
│       └── [other mock files] (TODO)
└── PROJECT_STRUCTURE.md ✅
```

## 🚀 Next Steps to Complete the App

1. **Create all mock data JSON files** using structures above
2. **Implement navigation** (bottom tabs + stacks)
3. **Create reusable UI components**
4. **Build all screen components**
5. **Update app.tsx** to initialize services
6. **Test data flow** (API → Cache → Store → UI)
7. **Add splash screen** with "ॐ श्री आनन्दमयी नमः"
8. **Replace placeholder URLs** with real data sources
9. **Deploy mock data** to GitHub Pages/Cloudflare
10. **Test offline mode** thoroughly

## 🔑 Configuration Points

All configurable in `useAppStore.ts`:
- **apiBaseUrl**: Change to your CDN/GitHub Pages URL
- **adminSecretKey**: Change to secure key
- **endpoints**: Customize JSON file names/paths

## 📱 App Flow

1. **Launch** → Splash screen
2. **Initialize** → Notifications, Theme, Data sync
3. **First Launch** → Show welcome/guidance screen
4. **Home Tab** → Saying + Feed
5. **Bottom Nav** → Easy access to all sections
6. **Background Sync** → Auto-refresh on app resume
7. **Offline** → Cached data always available

## 🎨 UI/UX Guidelines

- **Colors**: Warm, devotional (maroons, golds, creams)
- **Typography**: Nunito/Poppins equivalents
- **Spacing**: Generous, comfortable
- **Animations**: Subtle, smooth (React Native Reanimated)
- **Icons**: Simple, meaningful
- **Images**: High-quality, respectful

## 📝 Admin Workflow

1. Open app → More → Admin
2. Enter secret key
3. Create post/event/saying
4. Submit (currently logs to console)
5. TODO: Connect to real backend (Cloudflare Worker/Apps Script/Firebase)

## 🔒 Security Notes

- Admin key stored in app config (for demo)
- For production: Use proper auth (Firebase Auth, etc.)
- No sensitive data in app
- All content is public

## ⚡ Performance Considerations

- Lazy load images (expo-image with caching)
- Paginate long lists (FlatList with pagination)
- Limit cached posts to last 30
- Compress images before upload
- Use CDN for static assets

## 🧪 Testing Checklist

- [ ] App launches successfully
- [ ] Data syncs from mock URLs
- [ ] Offline mode works
- [ ] Theme switches correctly
- [ ] Notifications fire
- [ ] Navigation flows smoothly
- [ ] Search/filter works
- [ ] Downloads work
- [ ] Admin panel validates key
- [ ] Add to calendar works

## 📚 Resources & Links

- React Native: https://reactnative.dev
- Ignite: https://github.com/infinitered/ignite
- Zustand: https://github.com/pmndrs/zustand
- React Navigation: https://reactnavigation.org
- Expo Notifications: https://docs.expo.dev/versions/latest/sdk/notifications/

---

**Ready to build! Follow the TODO steps above to complete implementation.**
