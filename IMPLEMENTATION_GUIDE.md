# Sri Maa App - Complete Implementation Guide

## 🎯 What Has Been Built

This starter project provides a **production-ready foundation** for the Sri Maa app with:

### ✅ Complete Foundation
1. **Type System** - Full TypeScript definitions for all data models
2. **State Management** - Zustand stores for app, theme, content, offline, and notifications
3. **Service Layer** - API, caching, notifications, and sync services
4. **Mock Data** - Sample JSON files ready to be populated
5. **Project Structure** - Clean architecture with clear separation of concerns

### 📂 File Structure

```
SriMaa/
├── app/
│   ├── models/
│   │   └── types.ts                    ✅ All TypeScript type definitions
│   │
│   ├── store/                          ✅ Zustand state management
│   │   ├── index.ts
│   │   ├── useAppStore.ts              → Global app state & config
│   │   ├── useThemeStore.ts            → Dynamic theming
│   │   ├── useContentStore.ts          → All content data
│   │   ├── useOfflineStore.ts          → Offline & downloads
│   │   └── useNotificationStore.ts     → Notification preferences
│   │
│   ├── services/                       ✅ Business logic layer
│   │   ├── api/
│   │   │   └── apiService.ts           → Network requests
│   │   ├── cache/
│   │   │   └── cacheService.ts         → AsyncStorage wrapper
│   │   ├── notifications/
│   │   │   └── notificationService.ts  → Expo Notifications
│   │   └── sync/
│   │       └── syncService.ts          → Data synchronization
│   │
│   ├── components/                     ⏳ TODO: UI components
│   ├── screens/                        ⏳ TODO: Screen components
│   ├── navigators/                     ⏳ TODO: Update navigation
│   └── theme/                          ⏳ TODO: Custom theme hook
│
└── assets/
    └── mock-data/                      ⏳ Partially complete
        ├── ashrams.json                ✅ Sample data
        ├── theme.json                  ✅ Theme config
        ├── sayings.json                ✅ Sample sayings
        ├── books.json                  ⏳ TODO
        ├── photos.json                 ⏳ TODO
        ├── events.json                 ⏳ TODO
        ├── posts.json                  ⏳ TODO
        ├── institutions.json           ⏳ TODO
        ├── guidance.json               ⏳ TODO
        └── about.json                  ⏳ TODO
```

## 🚀 Quick Start

### 1. Install Additional Dependencies

```bash
cd SriMaa
npm install expo-notifications
npx expo install expo-notifications expo-device
```

### 2. Create Missing Mock Data Files

Copy the templates below to create the remaining mock data files in `assets/mock-data/`:

#### `books.json`
```json
[
  {
    "id": "book_001",
    "title": "Matri Vani - Volume I",
    "author": "Compiled by devotees",
    "language": "English",
    "description": "Collection of Sri Sri Maa's teachings and conversations",
    "coverImageUrl": "https://via.placeholder.com/150x200/8B4513/FFFFFF?text=Matri+Vani+I",
    "category": "Teachings",
    "pdfUrl": "https://example.com/matri-vani-1.pdf",
    "isDownloaded": false
  },
  {
    "id": "book_002",
    "title": "Mother As Revealed To Me",
    "author": "Bhaiji (Jyotish Chandra Ray)",
    "language": "English",
    "description": "Personal account of Sri Maa's life and teachings by her close disciple",
    "coverImageUrl": "https://via.placeholder.com/150x200/8B4513/FFFFFF?text=Mother+As+Revealed",
    "category": "Biography",
    "pdfUrl": "https://example.com/mother-revealed.pdf",
    "isDownloaded": false
  }
]
```

#### `photos.json`
```json
[
  {
    "id": "photo_001",
    "imageUrl": "https://via.placeholder.com/800x600/8B4513/FFFFFF?text=Sri+Maa+in+Vrindavan",
    "title": "Sri Maa in Vrindavan",
    "description": "Maa during her visit to the holy land of Vrindavan",
    "location": "Vrindavan",
    "date": "1960-05-15",
    "tags": ["Vrindavan", "Darshan"],
    "isCached": false
  },
  {
    "id": "photo_002",
    "imageUrl": "https://via.placeholder.com/800x600/8B4513/FFFFFF?text=Kankhal+Ashram",
    "title": "Kankhal Ashram",
    "description": "The sacred Samadhi shrine at Kankhal",
    "location": "Kankhal",
    "tags": ["Kankhal", "Samadhi", "Ashram"],
    "isCached": false
  }
]
```

#### `events.json`
```json
[
  {
    "id": "event_001",
    "title": "Sri Maa Janmotsav 2025",
    "description": "Celebration of Sri Sri Maa's birth anniversary with special satsangs, kirtan, and prasad distribution",
    "location": "Kankhal Ashram, Haridwar",
    "startDate": "2025-04-30T06:00:00Z",
    "endDate": "2025-04-30T20:00:00Z",
    "isOnline": true,
    "isPhysical": true,
    "livestreamUrl": "https://example.com/live",
    "tags": ["Festival", "Janmotsav", "Kankhal"]
  },
  {
    "id": "event_002",
    "title": "Monthly Satsang",
    "description": "Regular monthly gathering for kirtan, meditation, and discourse",
    "location": "Varanasi Ashram",
    "startDate": "2025-02-15T17:00:00Z",
    "endDate": "2025-02-15T19:00:00Z",
    "isOnline": false,
    "isPhysical": true,
    "tags": ["Satsang", "Regular"]
  }
]
```

#### `posts.json`
```json
[
  {
    "id": "post_001",
    "type": "Daily",
    "title": "Morning Reflection",
    "body": "Remember Maa in every breath. Let every action be an offering to the Divine.",
    "imageUrl": "https://via.placeholder.com/400x300/DAA520/FFFFFF?text=Morning+Light",
    "tags": ["Reflection", "Daily"],
    "category": "Daily",
    "timestamp": "2025-01-15T06:00:00Z",
    "isRead": false
  },
  {
    "id": "post_002",
    "type": "Teaching",
    "title": "The Path of Devotion",
    "body": "Maa always emphasized that the path of pure devotion (bhakti) is the simplest and most direct way to realize God.",
    "tags": ["Teaching", "Bhakti"],
    "category": "Teaching",
    "timestamp": "2025-01-14T10:00:00Z",
    "isRead": false
  },
  {
    "id": "post_003",
    "type": "Bhajan",
    "title": "Hari Naam Sankirtan",
    "body": "Join us for kirtan every evening at 6 PM. Singing the divine names together creates a powerful spiritual atmosphere.",
    "attachments": [
      {
        "type": "audio",
        "url": "https://example.com/bhajan.mp3",
        "title": "Hari Naam Kirtan Recording"
      }
    ],
    "tags": ["Bhajan", "Kirtan"],
    "category": "Bhajan",
    "timestamp": "2025-01-13T18:00:00Z",
    "isRead": false
  }
]
```

#### `institutions.json`
```json
[
  {
    "id": "inst_001",
    "name": "Shree Shree Anandamayee Kanyapeeth",
    "category": "Kanyapeeth",
    "description": "A residential school for girls providing modern education along with spiritual training and character development",
    "location": "Dehradun, Uttarakhand, India",
    "contact": {
      "phone": "+91-135-xxx-xxxx",
      "email": "kanyapeeth@anandamayee.org",
      "address": "Kishenpur, Dehradun, Uttarakhand 248001"
    },
    "photoUrl": "https://via.placeholder.com/400x300/8B4513/FFFFFF?text=Kanyapeeth"
  },
  {
    "id": "inst_002",
    "name": "Shree Shree Anandamayee Sangha Hospital",
    "category": "Hospital",
    "description": "Charitable hospital providing medical care to devotees and local community",
    "location": "Kankhal, Haridwar",
    "contact": {
      "phone": "+91-xxx-xxx-xxxx",
      "email": "hospital@anandamayee.org"
    }
  },
  {
    "id": "inst_003",
    "name": "Shree Shree Anandamayee Vidyapeeth",
    "category": "Vidyapeeth",
    "description": "Educational institution dedicated to traditional Vedic learning and Sanskrit studies",
    "location": "Varanasi, Uttar Pradesh",
    "contact": {
      "email": "vidyapeeth@anandamayee.org"
    }
  }
]
```

#### `guidance.json`
```json
{
  "sections": [
    {
      "id": "guide_001",
      "title": "Who is Sri Sri Maa Anandamayee?",
      "content": "# Who is Sri Sri Maa Anandamayee?\n\nSri Sri Anandamayee Ma (1896-1982) was one of the greatest spiritual luminaries of modern India. Born as Nirmala Sundari in East Bengal (now Bangladesh), she manifested divine qualities from early childhood.\n\n## Life Overview\n\n- **Birth**: April 30, 1896, in Kheora, East Bengal\n- **Mahasamadhi**: August 27, 1982, in Dehradun\n- **Lifespan**: 86 years of divine play (lila)\n\nMaa never had a human guru and attained the highest states of consciousness spontaneously. Her life was a continuous manifestation of divine bliss (ananda), hence the name \"Anandamayee\" meaning \"permeated with bliss.\"\n\n## Teachings\n\nMaa's teachings emphasized:\n- Universal love and compassion\n- The importance of spiritual practice (sadhana)\n- Finding one's own path to the Divine\n- Service to all beings\n- The unity of all religions",
      "order": 1
    },
    {
      "id": "guide_002",
      "title": "How to Begin Your Spiritual Journey",
      "content": "# Beginning Your Spiritual Journey\n\n## Daily Practices\n\n1. **Morning Prayer**: Start your day remembering the Divine\n2. **Japa**: Repetition of a divine name or mantra\n3. **Meditation**: Even 10-15 minutes daily\n4. **Satsang**: Spiritual company and discussion\n5. **Service**: Selfless service to others\n\n## Approaching Maa\n\nMaa welcomed everyone regardless of background. You can:\n- Visit any ashram for darshan\n- Read her teachings\n- Attend satsangs\n- Practice her guidance in daily life\n\n## No Rigid Rules\n\nMaa never imposed rigid practices. She would say: \"As is your aspiration, so is the way.\"",
      "order": 2
    },
    {
      "id": "guide_003",
      "title": "Visiting an Ashram",
      "content": "# How to Visit an Ashram\n\n## Before Your Visit\n\n1. Contact the ashram in advance\n2. Inform them of your intended dates\n3. Ask about accommodation if needed\n4. Understand the daily schedule\n\n## What to Bring\n\n- Simple, modest clothing\n- Any required medicines\n- Minimal luggage\n- Open heart and mind\n\n## Ashram Etiquette\n\n- Maintain silence in meditation areas\n- Follow the daily routine\n- Participate in community activities\n- Respect all residents and visitors\n- Keep the premises clean\n\n## Photography\n\nPhotography is generally not allowed inside the Samadhi shrine or during intimate gatherings. Always ask permission.",
      "order": 3
    }
  ],
  "faqs": [
    {
      "id": "faq_001",
      "question": "Do I need to follow a specific religion to visit?",
      "answer": "No. Maa welcomed people of all faiths. The ashrams are open to sincere seekers regardless of religious background.",
      "category": "General"
    },
    {
      "id": "faq_002",
      "question": "Can I stay at an ashram?",
      "answer": "Most ashrams have guest rooms available with prior arrangement. Contact the ashram directly to inquire about availability and any required donations.",
      "category": "Visiting"
    },
    {
      "id": "faq_003",
      "question": "What is diksha and how do I receive it?",
      "answer": "Diksha is spiritual initiation. Currently, the Sangha's spiritual head provides guidance on diksha. Contact the main office for more information about the process.",
      "category": "Spiritual Practice"
    },
    {
      "id": "faq_004",
      "question": "Are there any fees to visit ashrams?",
      "answer": "No fixed fees. Ashrams run on voluntary donations. You may contribute according to your capacity and willingness.",
      "category": "Visiting"
    },
    {
      "id": "faq_005",
      "question": "Can I volunteer at the ashram?",
      "answer": "Yes, most ashrams welcome volunteers for seva (service). This can include kitchen work, maintenance, gardening, or other activities. Speak with the ashram management.",
      "category": "Volunteering"
    }
  ]
}
```

#### `about.json`
```json
[
  {
    "id": "about_001",
    "section": "sri_maa",
    "title": "Life of Sri Sri Maa Anandamayee",
    "content": "# Sri Sri Maa Anandamayee\n\n## Early Life\n\nBorn on April 30, 1896, as Nirmala Sundari in the village of Kheora in East Bengal (now Bangladesh), Maa manifested extraordinary spiritual qualities from her very birth.\n\n## Divine Manifestation\n\nFrom early childhood, Maa would often enter into states of samadhi (spiritual absorption). She never had a human guru and her spiritual unfoldment was spontaneous and self-initiated.\n\n## Life's Work\n\nMaa traveled extensively throughout India, establishing numerous ashrams and inspiring millions of devotees. She never founded a formal religious organization, yet the Sangha organically formed around her to preserve and spread her teachings.\n\n## Mahasamadhi\n\nOn August 27, 1982, at Dehradun, Maa left her physical form at the age of 86, but her presence continues to guide devotees worldwide.",
    "imageUrl": "https://via.placeholder.com/600x400/8B4513/FFFFFF?text=Sri+Maa",
    "lastUpdated": "2025-01-01T00:00:00Z"
  },
  {
    "id": "about_002",
    "section": "sangha",
    "title": "Shree Shree Anandamayee Sangha",
    "content": "# Shree Shree Anandamayee Sangha\n\n## Formation\n\nThe Sangha was formed by Maa's devoted disciples to preserve her teachings and maintain the ashrams and institutions she inspired.\n\n## Mission\n\n- Maintain ashrams and centers across India\n- Preserve Maa's teachings through publications\n- Support educational and charitable institutions\n- Organize satsangs and spiritual gatherings\n- Provide spiritual guidance to seekers\n\n## Structure\n\nThe Sangha operates with a central managing committee and local management at each ashram. All work is done in the spirit of seva (selfless service).\n\n## Worldwide Presence\n\nWhile centered in India, Maa's teachings have reached devotees worldwide, with satsang groups in many countries.",
    "lastUpdated": "2025-01-01T00:00:00Z"
  },
  {
    "id": "about_003",
    "section": "recent_updates",
    "title": "Recent Developments",
    "content": "# Recent Developments\n\n## 2024-2025\n\n### Infrastructure\n- Renovation of guest facilities at Kankhal Ashram\n- New library wing at Varanasi Ashram\n- Solar power installation at multiple centers\n\n### Publications\n- Digital archive project of Maa's photographs\n- New translations of Matri Vani in regional languages\n- Online satsang recordings now available\n\n### Technology\n- Launch of Sri Maa mobile application\n- Virtual darshan options for distant devotees\n- Digital library of Maa's teachings\n\n### Events\n- 125th Janmotsav celebrations planned (2021)\n- Annual pilgrimage programs resumed\n- Online satsang schedule expanded",
    "lastUpdated": "2025-01-15T00:00:00Z"
  },
  {
    "id": "about_004",
    "section": "diksha",
    "title": "Diksha & Spiritual Guidance",
    "content": "# Diksha & Guru Parampara\n\n## About Diksha\n\nDiksha (spiritual initiation) is a sacred bond between guru and disciple. While Maa herself gave diksha to many devotees during her lifetime, the tradition continues through the Sangha's appointed spiritual guides.\n\n## Current Guidance\n\nThe Sangha provides spiritual guidance through:\n- Senior monks and disciples of Maa\n- Regular satsangs and discourses\n- Personal spiritual counseling (by appointment)\n\n## How to Approach\n\nIf you are interested in diksha or spiritual guidance:\n1. Spend time at the ashrams\n2. Study Maa's teachings\n3. Attend satsangs regularly\n4. Establish a personal practice\n5. Consult with senior devotees\n\n## No Compulsion\n\nMaa never insisted on formal diksha. She would say that sincere remembrance and practice are what matter most.\n\n---\n\n**For more information**: Contact the main office at Kankhal Ashram",
    "lastUpdated": "2025-01-01T00:00:00Z"
  }
]
```

### 3. Next: Build the UI Layer

Now you're ready to build the screens and components. Here's the recommended order:

#### A. Create Theme Hook

Create `app/theme/useCustomTheme.ts`:

```typescript
import { useThemeStore } from "../store/useThemeStore"

export const useCustomTheme = () => {
  const { currentTheme, isDarkMode } = useThemeStore()

  return {
    colors: currentTheme.colors,
    gradients: currentTheme.gradients,
    isDarkMode,
  }
}
```

#### B. Update Navigation

Modify `app/navigators/AppNavigator.tsx` to create:
- Bottom tab navigator with 5 tabs (Home, Ashrams, Library, Events, More)
- Stack navigators within each tab for detail screens

#### C. Create Screens (Priority Order)

1. **HomeScreen** - Saying + Feed
2. **AshramsListScreen** - List of ashrams
3. **AshramDetailScreen** - Individual ashram
4. **MoreMenuScreen** - Settings menu
5. **SettingsScreen** - App settings
6. (Continue with other screens...)

### 4. Initialize Services in App

Update `app/app.tsx`:

```typescript
import { useEffect } from "react"
import { NotificationService } from "./services/notifications/notificationService"
import { SyncService } from "./services/sync/syncService"
import { useAppStore } from "./store/useAppStore"

// In your App component:
useEffect(() => {
  const initialize = async () => {
    // Initialize notifications
    await NotificationService.initialize()

    // Perform initial sync
    await SyncService.syncAll()
  }

  initialize()
}, [])
```

## 🎨 UI Component Examples

### Saying Card Component

```typescript
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { useCustomTheme } from "../theme/useCustomTheme"
import type { Saying } from "../models/types"

export const SayingCard = ({ saying }: { saying: Saying }) => {
  const { colors } = useCustomTheme()

  return (
    <View style={[styles.card, { backgroundColor: colors.surface }]}>
      <Text style={[styles.quote, { color: colors.text }]}>
        "{saying.quote}"
      </Text>
      {saying.source && (
        <Text style={[styles.source, { color: colors.textSecondary }]}>
          — {saying.source}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quote: {
    fontSize: 18,
    lineHeight: 28,
    fontStyle: "italic",
    marginBottom: 12,
  },
  source: {
    fontSize: 14,
    textAlign: "right",
  },
})
```

## 📝 Configuration

### Update API Base URL

In `app/store/useAppStore.ts`, update the `apiBaseUrl`:

```typescript
const defaultConfig: AppConfig = {
  // ... other config
  apiBaseUrl: "https://your-github-username.github.io/sri-maa-data",
  // OR
  apiBaseUrl: "https://your-cdn.com/sri-maa-data",
}
```

### Deploy Mock Data

1. Create a GitHub repository for data
2. Upload all JSON files from `assets/mock-data/`
3. Enable GitHub Pages
4. Update `apiBaseUrl` to point to it

## 🧪 Testing

```bash
# Start the development server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run tests
npm test
```

## 📱 Running the App

```bash
# Using Expo
npx expo start

# Scan QR code with Expo Go app (iOS/Android)
# OR press 'i' for iOS simulator
# OR press 'a' for Android emulator
```

## 🔑 Key Features to Implement

### Home Screen
- Display today's saying at top
- Feed of recent posts below
- Pull-to-refresh to sync
- Floating refresh button

### Ashrams
- Searchable list
- Map integration for "Open in Maps"
- Contact buttons (call/email)

### Library
- Book grid with covers
- In-app reader for text content
- PDF viewer for PDF files
- Download button

### Events
- Calendar view
- "Add to Calendar" button
- Event reminders

### Photos
- Grid gallery
- Full-screen swipe viewer
- Save offline option

### Admin
- Secret key input
- Forms for creating posts/events/sayings
- TODO: Connect to real backend

## 🚢 Production Checklist

- [ ] Replace all placeholder URLs
- [ ] Set up real CDN/backend
- [ ] Configure OneSignal or FCM
- [ ] Test offline mode thoroughly
- [ ] Add error boundaries
- [ ] Implement analytics
- [ ] Add crash reporting
- [ ] Configure app icons
- [ ] Create splash screens
- [ ] Set up deep linking
- [ ] Test on real devices
- [ ] Prepare store listings
- [ ] Create privacy policy
- [ ] Submit to app stores

## 📚 Additional Resources

- [Ignite Documentation](https://docs.infinite.red/ignite-cli/)
- [React Navigation](https://reactnavigation.org/docs/getting-started)
- [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Expo Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/)
- [React Native Best Practices](https://www.reactnative.dev/docs/performance)

## 💬 Support

For questions about the codebase:
1. Check `PROJECT_STRUCTURE.md` for architecture details
2. Review type definitions in `app/models/types.ts`
3. Examine service layer for data flow patterns

---

**🙏 May Maa's blessings guide this project to completion!**

**ॐ श्री आनन्दमयी नमः**
