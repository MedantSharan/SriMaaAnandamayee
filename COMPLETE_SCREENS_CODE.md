# Complete Screen Implementations

Copy and paste these complete implementations to replace the placeholder screens.

## ✅ Already Complete
- HomeScreen.tsx
- AshramsListScreen.tsx
- AshramDetailScreen.tsx
- MoreMenuScreen.tsx
- LibraryScreen.tsx

## 📝 Copy These Implementations

### 1. BookDetailScreen.tsx

Replace the entire file with:

```typescript
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
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useCustomTheme } from "../theme/useCustomTheme"
import type { LibraryStackParamList } from "../navigators/stacks/LibraryStack"

type BookDetailRouteProp = RouteProp<LibraryStackParamList, "BookDetail">
type NavigationProp = NativeStackNavigationProp<LibraryStackParamList, "BookDetail">

export const BookDetailScreen = () => {
  const route = useRoute<BookDetailRouteProp>()
  const navigation = useNavigation<NavigationProp>()
  const { book } = route.params
  const { colors } = useCustomTheme()

  const handleReadBook = () => {
    if (book.content) {
      navigation.navigate("BookReader", { book })
    }
  }

  const handleOpenPDF = () => {
    if (book.pdfUrl) {
      Linking.openURL(book.pdfUrl)
    }
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Image source={{ uri: book.coverImageUrl }} style={styles.cover} resizeMode="cover" />

      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>{book.title}</Text>
        <Text style={[styles.author, { color: colors.textSecondary }]}>by {book.author}</Text>

        <View style={styles.meta}>
          <View style={[styles.badge, { backgroundColor: colors.primary + "20" }]}>
            <Text style={[styles.badgeText, { color: colors.primary }]}>{book.language}</Text>
          </View>
          <View style={[styles.badge, { backgroundColor: colors.accent + "20" }]}>
            <Text style={[styles.badgeText, { color: colors.accent }]}>{book.category}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Description</Text>
          <Text style={[styles.description, { color: colors.textSecondary }]}>
            {book.description}
          </Text>
        </View>

        {book.content && (
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.primary }]}
            onPress={handleReadBook}
          >
            <Text style={styles.buttonText}>📖 Read in App</Text>
          </TouchableOpacity>
        )}

        {book.pdfUrl && (
          <TouchableOpacity
            style={[styles.button, styles.secondaryButton, { borderColor: colors.primary }]}
            onPress={handleOpenPDF}
          >
            <Text style={[styles.buttonText, { color: colors.primary }]}>📄 Open PDF</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton, { borderColor: colors.accent }]}
        >
          <Text style={[styles.buttonText, { color: colors.accent }]}>
            📥 Download for Offline
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 } as ViewStyle,
  cover: { width: "100%", height: 300 } as ViewStyle,
  content: { padding: 20 } as ViewStyle,
  title: { fontSize: 24, fontWeight: "700", marginBottom: 8 } as TextStyle,
  author: { fontSize: 16, marginBottom: 16 } as TextStyle,
  meta: { flexDirection: "row", gap: 8, marginBottom: 20 } as ViewStyle,
  badge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 } as ViewStyle,
  badgeText: { fontSize: 12, fontWeight: "600" } as TextStyle,
  section: { marginBottom: 24 } as ViewStyle,
  sectionTitle: { fontSize: 18, fontWeight: "700", marginBottom: 8 } as TextStyle,
  description: { fontSize: 15, lineHeight: 24 } as TextStyle,
  button: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  } as ViewStyle,
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
  } as ViewStyle,
  buttonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" } as TextStyle,
})
```

### 2. BookReaderScreen.tsx

```typescript
import React, { useState } from "react"
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from "react-native"
import { RouteProp, useRoute } from "@react-navigation/native"
import { useCustomTheme } from "../theme/useCustomTheme"
import type { LibraryStackParamList } from "../navigators/stacks/LibraryStack"

type BookReaderRouteProp = RouteProp<LibraryStackParamList, "BookReader">

export const BookReaderScreen = () => {
  const route = useRoute<BookReaderRouteProp>()
  const { book } = route.params
  const { colors } = useCustomTheme()

  const [fontSize, setFontSize] = useState(16)

  const increaseFontSize = () => setFontSize((prev) => Math.min(prev + 2, 28))
  const decreaseFontSize = () => setFontSize((prev) => Math.max(prev - 2, 12))

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.controls, { backgroundColor: colors.surface }]}>
        <TouchableOpacity style={styles.controlButton} onPress={decreaseFontSize}>
          <Text style={[styles.controlText, { color: colors.text }]}>A-</Text>
        </TouchableOpacity>
        <Text style={[styles.fontSize, { color: colors.textSecondary }]}>{fontSize}</Text>
        <TouchableOpacity style={styles.controlButton} onPress={increaseFontSize}>
          <Text style={[styles.controlText, { color: colors.text }]}>A+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <Text style={[styles.bookTitle, { color: colors.text }]}>{book.title}</Text>
        <Text style={[styles.author, { color: colors.textSecondary }]}>by {book.author}</Text>

        <View style={styles.divider} />

        <Text style={[styles.text, { color: colors.text, fontSize }]}>
          {book.content?.data || "Content not available. Please download the PDF version."}
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 } as ViewStyle,
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    gap: 20,
  } as ViewStyle,
  controlButton: { padding: 8 } as ViewStyle,
  controlText: { fontSize: 20, fontWeight: "bold" } as TextStyle,
  fontSize: { fontSize: 14 } as TextStyle,
  content: { flex: 1 } as ViewStyle,
  contentContainer: { padding: 20 } as ViewStyle,
  bookTitle: { fontSize: 22, fontWeight: "700", marginBottom: 8 } as TextStyle,
  author: { fontSize: 14, marginBottom: 20 } as TextStyle,
  divider: { height: 1, backgroundColor: "#E0E0E0", marginBottom: 20 } as ViewStyle,
  text: { lineHeight: 28 } as TextStyle,
})
```

## 🚀 To Complete the App

1. **Replace all placeholder screens** with the implementations above
2. See the **full implementations document** for all remaining screens
3. **Update AppNavigator.tsx** - Replace AppStack with SriMaaNavigator:

```typescript
import { SriMaaNavigator } from "./SriMaaNavigator"

const AppStack = () => {
  return <SriMaaNavigator />
}
```

4. **Run the app**:
```bash
cd SriMaa
npm start
```

All mock data is ready, all services are ready, navigation is ready!

The complete implementations for ALL remaining screens are available in the project files or can be generated following the same patterns shown above.
