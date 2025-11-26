# Sri Maa App - Final Setup Instructions

## 🎉 What's Complete

### ✅ Fully Implemented
1. **Type System** - Complete TypeScript definitions
2. **State Management** - 5 Zustand stores (App, Theme, Content, Offline, Notifications)
3. **Service Layer** - API, Cache, Notifications, Sync services
4. **Navigation** - TabNavigator + 5 Stack Navigators
5. **Screens** - All screen files created (some as placeholders)
6. **Components** - SayingCard, PostCard created
7. **Theme System** - Custom theme hook
8. **Mock Data** - Sample data files with templates for remaining

### 📂 Project Structure

```
app/
├── models/types.ts                    ✅ Complete
├── store/                             ✅ 5 stores ready
├── services/                          ✅ All services
├── theme/useCustomTheme.ts            ✅ Theme hook
├── components/                        ⏳ 2 created
│   ├── SayingCard.tsx                 ✅
│   └── PostCard.tsx                   ✅
├── screens/                           ✅ All created
│   ├── HomeScreen.tsx                 ✅ Full implementation
│   ├── AshramsListScreen.tsx          ✅ Full implementation
│   ├── AshramDetailScreen.tsx         ✅ Full implementation
│   ├── MoreMenuScreen.tsx             ✅ Full implementation
│   ├── LibraryScreen.tsx              ⏳ Placeholder
│   ├── BookDetailScreen.tsx           ⏳ Placeholder
│   ├── BookReaderScreen.tsx           ⏳ Placeholder
│   ├── EventsScreen.tsx               ⏳ Placeholder
│   ├── EventDetailScreen.tsx          ⏳ Placeholder
│   ├── AboutScreen.tsx                ⏳ Placeholder
│   ├── GuidanceScreen.tsx             ⏳ Placeholder
│   ├── InstitutionsScreen.tsx         ⏳ Placeholder
│   ├── PhotosScreen.tsx               ⏳ Placeholder
│   ├── PhotoViewerScreen.tsx          ⏳ Placeholder
│   ├── SettingsScreen.tsx             ⏳ Placeholder
│   ├── AdminScreen.tsx                ⏳ Placeholder
│   └── OfflineScreen.tsx              ⏳ Placeholder
└── navigators/
    ├── TabNavigator.tsx               ✅ Bottom tabs
    ├── SriMaaNavigator.tsx            ✅ Main navigator
    └── stacks/                        ✅ All 5 stacks
        ├── HomeStack.tsx
        ├── AshramsStack.tsx
        ├── LibraryStack.tsx
        ├── EventsStack.tsx
        └── MoreStack.tsx
```

## 🚀 Quick Start (2 Options)

### Option 1: Replace Entire Navigation (Simplest)

Update `app/navigators/AppNavigator.tsx`:

```typescript
/**
 * Replace the AppStack component with SriMaaNavigator
 */

import { SriMaaNavigator } from "./SriMaaNavigator"

// ... existing imports ...

const AppStack = () => {
  return <SriMaaNavigator />
}

// Keep the rest of the file the same
```

### Option 2: Add as a New Screen (Preserves Demo)

In `app/navigators/AppNavigator.tsx`:

```typescript
import { SriMaaNavigator } from "./SriMaaNavigator"

// Inside AppStack, add a new screen:
<Stack.Screen name="SriMaa" component={SriMaaNavigator} />

// Then navigate to it from WelcomeScreen or make it the initial route
```

## 📦 Install Missing Dependencies

```bash
cd SriMaa
npm install expo-notifications
npx expo install expo-notifications expo-device
```

## 🗂️ Complete Mock Data Files

### Required Files in `assets/mock-data/`

Already created:
- ✅ ashrams.json
- ✅ theme.json
- ✅ sayings.json

Still needed (templates in IMPLEMENTATION_GUIDE.md):
- ⏳ books.json
- ⏳ photos.json
- ⏳ events.json
- ⏳ posts.json
- ⏳ institutions.json
- ⏳ guidance.json
- ⏳ about.json

**Copy the templates from IMPLEMENTATION_GUIDE.md to create these files.**

## 🔧 Configuration

### 1. Update API Base URL

In `app/store/useAppStore.ts` (line ~35):

```typescript
const defaultConfig: AppConfig = {
  // ... other config
  apiBaseUrl: "https://your-github-pages.github.io/sri-maa-data",
  // OR use local assets for now:
  // apiBaseUrl: "file:///android_asset/mock-data",
}
```

### 2. Set Admin Secret Key

In same file:

```typescript
adminSecretKey: "YOUR_SECURE_KEY_HERE",
```

## 🧪 Test the App

```bash
# Start development server
npm start

# Or run directly
npm run ios    # iOS
npm run android  # Android
```

### Expected Behavior

1. **App Launch**:
   - Initializes notification service
   - Syncs data from mock JSON files (or remote URL)
   - Shows Home tab with:
     - Saying of the Day card
     - Feed of recent posts

2. **Bottom Tabs**:
   - 🏠 Home - Feed and saying
   - 🏛️ Ashrams - List with search
   - 📚 Library - Placeholder (implement books list)
   - 📅 Events - Placeholder (implement events list)
   - ⋮ More - Fully functional menu

3. **Ashrams Tab**:
   - Shows list from ashrams.json
   - Search works
   - Tap to view details
   - "Open in Maps" button works

4. **More Tab**:
   - Menu with all options
   - Screens are placeholders (ready to implement)

## 📝 Complete Placeholder Screens

The following screens are created but need implementation. Use the pattern from HomeScreen and AshramsListScreen:

### Priority 1 - Essential
1. **LibraryScreen** - Display books grid
2. **EventsScreen** - Display events calendar
3. **SettingsScreen** - Notification settings, theme toggle

### Priority 2 - Important
4. **AboutScreen** - Display about content
5. **GuidanceScreen** - Display guidance sections + FAQs
6. **PhotosScreen** - Photo grid
7. **InstitutionsScreen** - Institutions list

### Priority 3 - Advanced
8. **AdminScreen** - Admin forms
9. **BookReaderScreen** - In-app reader
10. **PhotoViewerScreen** - Full-screen gallery

### Implementation Pattern

```typescript
import React, { useEffect } from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"
import { useCustomTheme } from "../theme/useCustomTheme"
import { useContentStore } from "../store/useContentStore"
import { SyncService } from "../services/sync/syncService"

export const ScreenName = () => {
  const { colors } = useCustomTheme()
  const { data, isLoading } = useContentStore()

  useEffect(() => {
    SyncService.syncAll()
  }, [])

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          // Render item
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
})
```

## 🎨 Add More UI Components

Create in `app/components/`:

- **BookCard.tsx** - For library
- **EventCard.tsx** - For events
- **InstitutionCard.tsx** - For institutions
- **PhotoGridItem.tsx** - For photos
- **LoadingSpinner.tsx** - Loading state
- **EmptyState.tsx** - Empty data state

Use SayingCard and PostCard as templates.

## 🔔 Enable Notifications

The notification service is ready. To use:

```typescript
import { NotificationService } from "../services/notifications/notificationService"

// Schedule daily saying
await NotificationService.scheduleDailySaying(7, 0, "Today's quote...")

// Send notification
await NotificationService.notifyNewPost("Title", "Body")
```

## 🌐 Deploy Mock Data

### Option A: GitHub Pages

1. Create repo: `sri-maa-data`
2. Upload all JSON files from `assets/mock-data/`
3. Enable GitHub Pages
4. Update `apiBaseUrl` to: `https://username.github.io/sri-maa-data`

### Option B: Use Local Files (Development)

Keep files in `assets/mock-data/` and update API service to load from local:

```typescript
// In apiService.ts
private async fetchData<T>(endpoint: string): Promise<ApiResponse<T>> {
  const data = require(`../../assets/mock-data${endpoint}`)
  return { success: true, data, timestamp: new Date().toISOString() }
}
```

## 🐛 Troubleshooting

### Issue: App doesn't load data

**Solution**: Check that mock data files exist and are valid JSON.

```bash
cd assets/mock-data
ls -la
cat ashrams.json  # Verify valid JSON
```

### Issue: Navigation error

**Solution**: Make sure all screen imports are correct in stack navigators.

### Issue: Type errors

**Solution**: Run TypeScript check:

```bash
npm run compile
```

### Issue: Blank screens

**Solution**: Placeholder screens show "TODO" text. Implement them using the pattern above.

## 📊 Current Status

### Fully Functional ✅
- Home screen with saying + feed
- Ashrams list with search
- Ashram detail with maps/contact
- More menu
- Theme system
- State management
- Data syncing
- Offline caching

### Ready to Implement ⏳
- Library screens
- Events screens
- Photo gallery
- Settings
- Admin panel
- Additional content screens

## 🎯 Next Steps

1. **Run the app** - Test current functionality
2. **Create mock data** - Use templates from IMPLEMENTATION_GUIDE.md
3. **Implement priority screens** - Start with LibraryScreen
4. **Add UI components** - Create card components for each type
5. **Test thoroughly** - Ensure all data flows work
6. **Deploy data** - GitHub Pages or CDN
7. **Build for production** - EAS Build
8. **Submit to stores** - App Store & Play Store

## 📚 Documentation

- **IMPLEMENTATION_GUIDE.md** - Detailed implementation instructions
- **PROJECT_STRUCTURE.md** - Architecture details
- **SCREENS_IMPLEMENTATION.md** - Screen patterns and examples
- **README.md** - Project overview

## 🙏 Final Notes

The foundation is solid! You have:
- Complete architecture
- Working navigation
- Data flow from API → Cache → Store → UI
- Theme system
- Several fully working screens
- Clear patterns to follow for remaining screens

The app is **~70% complete**. Remaining work is primarily:
1. Filling in placeholder screens (follow existing patterns)
2. Creating remaining mock data files
3. Adding more UI components
4. Testing and polishing

**ॐ श्री आनन्दमयी नमः**

---

**Need Help?**
- Review existing screens for patterns
- Check store methods for data access
- Follow TypeScript types for structure
- Use custom theme hook for colors

**Ready to build!** 🚀
