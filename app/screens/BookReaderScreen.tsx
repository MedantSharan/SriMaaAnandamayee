/**
 * Book Reader Screen
 * In-app book reader (placeholder)
 */

import React from "react"
import { View, Text, ScrollView, StyleSheet, ViewStyle, TextStyle } from "react-native"
import { RouteProp, useRoute } from "@react-navigation/native"
import { useCustomTheme } from "../theme/useCustomTheme"
import type { LibraryStackParamList } from "../navigators/stacks/LibraryStack"

type BookReaderRouteProp = RouteProp<LibraryStackParamList, "BookReader">

export const BookReaderScreen = () => {
  const { colors } = useCustomTheme()
  const route = useRoute<BookReaderRouteProp>()
  const { book } = route.params

  // Placeholder text for book content
  const sampleContent = `This is a placeholder for the book reading experience.

In a full implementation, this screen would display:
- Actual book content loaded from PDF or text format
- Page navigation controls
- Bookmark functionality
- Text size adjustment
- Reading progress tracking

"${book.title}" by ${book.author}

${book.description}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

For now, this serves as a placeholder to demonstrate the navigation flow. The actual book content would be loaded from the book's content URL or embedded file.`

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.bookTitle, { color: colors.text }]}>{book.title}</Text>
        <Text style={[styles.author, { color: colors.textSecondary }]}>By {book.author}</Text>
        <View style={[styles.divider, { backgroundColor: colors.border }]} />
        <Text style={[styles.text, { color: colors.text }]}>{sampleContent}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
  content: {
    padding: 20,
  } as ViewStyle,
  bookTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
  } as TextStyle,
  author: {
    fontSize: 16,
    marginBottom: 20,
  } as TextStyle,
  divider: {
    height: 1,
    marginBottom: 20,
  } as ViewStyle,
  text: {
    fontSize: 16,
    lineHeight: 28,
    textAlign: "justify",
  } as TextStyle,
})
