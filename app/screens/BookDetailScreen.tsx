/**
 * Book Detail Screen
 * Shows full details of a selected book
 */

import React from "react"
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native"
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useCustomTheme } from "../theme/useCustomTheme"
import type { LibraryStackParamList } from "../navigators/stacks/LibraryStack"

type BookDetailRouteProp = RouteProp<LibraryStackParamList, "BookDetail">
type NavigationProp = NativeStackNavigationProp<LibraryStackParamList, "BookDetail">

export const BookDetailScreen = () => {
  const { colors } = useCustomTheme()
  const route = useRoute<BookDetailRouteProp>()
  const navigation = useNavigation<NavigationProp>()
  const { book } = route.params

  const handleReadBook = () => {
    navigation.navigate("BookReader", { book })
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Image source={{ uri: book.coverUrl }} style={styles.coverImage} resizeMode="cover" />
      </View>

      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>{book.title}</Text>
        <Text style={[styles.author, { color: colors.textSecondary }]}>By {book.author}</Text>

        <View style={styles.metaContainer}>
          {book.language && (
            <View style={[styles.metaBadge, { backgroundColor: colors.primary + "20" }]}>
              <Text style={[styles.metaText, { color: colors.primary }]}>
                {book.language.toUpperCase()}
              </Text>
            </View>
          )}
          {book.pages && (
            <View style={[styles.metaBadge, { backgroundColor: colors.accent + "20" }]}>
              <Text style={[styles.metaText, { color: colors.accent }]}>{book.pages} Pages</Text>
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Description</Text>
          <Text style={[styles.description, { color: colors.textSecondary }]}>
            {book.description}
          </Text>
        </View>

        {book.category && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Category</Text>
            <Text style={[styles.description, { color: colors.textSecondary }]}>
              {book.category}
            </Text>
          </View>
        )}

        {book.publishedYear && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Published</Text>
            <Text style={[styles.description, { color: colors.textSecondary }]}>
              {book.publishedYear}
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={[styles.readButton, { backgroundColor: colors.primary }]}
          onPress={handleReadBook}
          activeOpacity={0.8}
        >
          <Text style={styles.readButtonText}>📖 Read Book</Text>
        </TouchableOpacity>

        {book.downloadUrl && (
          <TouchableOpacity
            style={[styles.downloadButton, { borderColor: colors.primary }]}
            activeOpacity={0.8}
          >
            <Text style={[styles.downloadButtonText, { color: colors.primary }]}>
              ⬇️ Download PDF
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
  header: {
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  } as ViewStyle,
  coverImage: {
    width: 200,
    height: 300,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  } as ViewStyle,
  content: {
    padding: 20,
  } as ViewStyle,
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
    lineHeight: 36,
  } as TextStyle,
  author: {
    fontSize: 18,
    marginBottom: 16,
  } as TextStyle,
  metaContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 24,
  } as ViewStyle,
  metaBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  } as ViewStyle,
  metaText: {
    fontSize: 12,
    fontWeight: "600",
  } as TextStyle,
  section: {
    marginBottom: 20,
  } as ViewStyle,
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  } as TextStyle,
  description: {
    fontSize: 16,
    lineHeight: 24,
  } as TextStyle,
  readButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 12,
  } as ViewStyle,
  readButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  } as TextStyle,
  downloadButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 2,
  } as ViewStyle,
  downloadButtonText: {
    fontSize: 16,
    fontWeight: "700",
  } as TextStyle,
})
