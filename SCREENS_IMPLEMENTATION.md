# Screens Implementation Guide

## ✅ Completed Screens

1. **HomeScreen.tsx** - Main feed with saying and posts ✅
2. **AshramsListScreen.tsx** - List of ashrams with search ✅

## 📝 Remaining Screens to Implement

Create these files in `app/screens/`:

### Ashrams Tab

#### AshramDetailScreen.tsx
```typescript
/**
 * Ashram Detail Screen
 * Shows full details of an ashram with map and contact options
 */

import React from "react"
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ViewStyle,
  TextStyle,
} from "react-native"
import { RouteProp, useRoute } from "@react-navigation/native"
import { useCustomTheme } from "../theme/useCustomTheme"
import type { AshramsStackParamList } from "../navigators/stacks/AshramsStack"

type AshramDetailRouteProp = RouteProp<AshramsStackParamList, "AshramDetail">

export const AshramDetailScreen = () => {
  const route = useRoute<AshramDetailRouteProp>()
  const { ashram } = route.params
  const { colors } = useCustomTheme()

  const openMaps = () => {
    const { coordinates, address } = ashram.location
    const url = coordinates
      ? `https://maps.google.com/?q=${coordinates.latitude},${coordinates.longitude}`
      : `https://maps.google.com/?q=${encodeURIComponent(address)}`
    Linking.openURL(url)
  }

  const callPhone = (phone: string) => {
    Linking.openURL(`tel:${phone}`)
  }

  const sendEmail = (email: string) => {
    Linking.openURL(`mailto:${email}`)
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      {ashram.photoUrl && (
        <Image source={{ uri: ashram.photoUrl }} style={styles.heroImage} />
      )}

      <View style={styles.content}>
        <Text style={[styles.name, { color: colors.text }]}>{ashram.name}</Text>

        <Text style={[styles.location, { color: colors.textSecondary }]}>
          📍 {ashram.location.city}, {ashram.location.state}, {ashram.location.country}
        </Text>

        {/* Tags */}
        {ashram.tags.length > 0 && (
          <View style={styles.tags}>
            {ashram.tags.map((tag, index) => (
              <View key={index} style={[styles.tag, { backgroundColor: colors.primary + "20" }]}>
                <Text style={[styles.tagText, { color: colors.primary }]}>{tag}</Text>
              </View>
            ))}
          </View>
        )}

        {/* History */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>History</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            {ashram.history}
          </Text>
        </View>

        {/* Significance */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Significance</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            {ashram.significance}
          </Text>
        </View>

        {/* Visiting Info */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Visiting Information</Text>
          {ashram.visitingInfo.darshanTimings && (
            <View style={styles.infoRow}>
              <Text style={[styles.infoLabel, { color: colors.text }]}>Darshan Timings:</Text>
              <Text style={[styles.infoValue, { color: colors.textSecondary }]}>
                {ashram.visitingInfo.darshanTimings}
              </Text>
            </View>
          )}
          {ashram.visitingInfo.stayOptions && (
            <View style={styles.infoRow}>
              <Text style={[styles.infoLabel, { color: colors.text }]}>Stay Options:</Text>
              <Text style={[styles.infoValue, { color: colors.textSecondary }]}>
                {ashram.visitingInfo.stayOptions}
              </Text>
            </View>
          )}
        </View>

        {/* Contact */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Contact</Text>
          {ashram.contact.inCharge && (
            <Text style={[styles.contactText, { color: colors.textSecondary }]}>
              In-Charge: {ashram.contact.inCharge}
            </Text>
          )}
          {ashram.contact.phone && (
            <TouchableOpacity onPress={() => callPhone(ashram.contact.phone!)}>
              <Text style={[styles.contactLink, { color: colors.primary }]}>
                📞 {ashram.contact.phone}
              </Text>
            </TouchableOpacity>
          )}
          {ashram.contact.email && (
            <TouchableOpacity onPress={() => sendEmail(ashram.contact.email!)}>
              <Text style={[styles.contactLink, { color: colors.primary }]}>
                ✉️ {ashram.contact.email}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Map Button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={openMaps}
        >
          <Text style={styles.buttonText}>Open in Maps 🗺️</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 } as ViewStyle,
  heroImage: { width: "100%", height: 250 } as ViewStyle,
  content: { padding: 20 } as ViewStyle,
  name: { fontSize: 24, fontWeight: "700", marginBottom: 8 } as TextStyle,
  location: { fontSize: 16, marginBottom: 16 } as TextStyle,
  tags: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 20 } as ViewStyle,
  tag: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 } as ViewStyle,
  tagText: { fontSize: 12, fontWeight: "600" } as TextStyle,
  section: { marginBottom: 24 } as ViewStyle,
  sectionTitle: { fontSize: 18, fontWeight: "700", marginBottom: 8 } as TextStyle,
  sectionText: { fontSize: 15, lineHeight: 24 } as TextStyle,
  infoRow: { marginBottom: 8 } as ViewStyle,
  infoLabel: { fontSize: 15, fontWeight: "600", marginBottom: 4 } as TextStyle,
  infoValue: { fontSize: 15, lineHeight: 22 } as TextStyle,
  contactText: { fontSize: 15, marginBottom: 8 } as TextStyle,
  contactLink: { fontSize: 15, marginBottom: 8, textDecorationLine: "underline" } as TextStyle,
  button: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  } as ViewStyle,
  buttonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" } as TextStyle,
})
```

### Library Tab

Create these files with similar patterns:
- **LibraryScreen.tsx** - Grid of books
- **BookDetailScreen.tsx** - Book info with read/download options
- **BookReaderScreen.tsx** - Simple text reader

### Events Tab

- **EventsScreen.tsx** - List of upcoming/past events
- **EventDetailScreen.tsx** - Event details with calendar add option

### More Tab

- **MoreMenuScreen.tsx** - Menu list
- **AboutScreen.tsx** - About content
- **GuidanceScreen.tsx** - Guidance sections + FAQ
- **InstitutionsScreen.tsx** - Institutions list
- **PhotosScreen.tsx** - Photo grid
- **PhotoViewerScreen.tsx** - Full-screen swipe viewer
- **SettingsScreen.tsx** - App settings
- **AdminScreen.tsx** - Admin panel
- **OfflineScreen.tsx** - Downloaded items

## 🚀 Quick Implementation

All screens follow the same pattern:

1. Import theme, stores, and types
2. Use `useCustomTheme()` for colors
3. Use appropriate store (useContentStore, etc.)
4. Handle loading states
5. Style with theme colors
6. Add navigation logic

## 📝 Code Template Pattern

```typescript
import React, { useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"
import { useCustomTheme } from "../theme/useCustomTheme"
import { useContentStore } from "../store/useContentStore"

export const ScreenName = () => {
  const { colors } = useCustomTheme()
  const { data, isLoading } = useContentStore()

  useEffect(() => {
    // Load data
  }, [])

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Content */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
})
```

## ⚡ Priority Order

1. AshramDetailScreen
2. MoreMenuScreen
3. SettingsScreen
4. LibraryScreen
5. EventsScreen
6. PhotosScreen
7. AdminScreen
8. All others

See the existing HomeScreen and AshramsListScreen for complete examples.
