/**
 * Library Screen
 * Displays grid of books with filtering
 */

import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ViewStyle,
  TextStyle,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useCustomTheme } from "../theme/useCustomTheme"
import { useSriMaa } from "../context/SriMaaContext"
import type { Book } from "../models/types"
import type { LibraryStackParamList } from "../navigators/stacks/LibraryStack"

type NavigationProp = NativeStackNavigationProp<LibraryStackParamList, "Library">

export const LibraryScreen = () => {
  const navigation = useNavigation<NavigationProp>()
  const { colors } = useCustomTheme()
  const { books, isLoadingBooks } = useSriMaa()

  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  useEffect(() => {
    loadBooks()
  }, [])

  const loadBooks = async () => {
  }

  const categories = ["All", "Teachings", "Biography", "Philosophy", "Daily Reflections"]

  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.category === selectedCategory)

  const handleBookPress = (book: Book) => {
    navigation.navigate("BookDetail", { book })
  }

  const renderBook = ({ item }: { item: Book }) => (
    <TouchableOpacity
      style={[styles.bookCard, { backgroundColor: colors.surface }]}
      onPress={() => handleBookPress(item)}
      activeOpacity={0.7}
    >
      <Image source={{ uri: item.coverImageUrl }} style={styles.cover} resizeMode="cover" />
      <View style={styles.bookInfo}>
        <Text style={[styles.title, { color: colors.text }]} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={[styles.author, { color: colors.textSecondary }]} numberOfLines={1}>
          {item.author}
        </Text>
        <View style={[styles.categoryBadge, { backgroundColor: colors.primary + "20" }]}>
          <Text style={[styles.categoryText, { color: colors.primary }]}>{item.language}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.filterContainer}>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.filterButton,
                {
                  backgroundColor:
                    selectedCategory === item ? colors.primary : colors.surface,
                },
              ]}
              onPress={() => setSelectedCategory(item)}
            >
              <Text
                style={[
                  styles.filterText,
                  {
                    color: selectedCategory === item ? "#FFFFFF" : colors.text,
                  },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.filterList}
        />
      </View>

      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        renderItem={renderBook}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.gridContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
              {isLoadingBooks ? "Loading books..." : "No books found"}
            </Text>
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
  filterContainer: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  } as ViewStyle,
  filterList: {
    paddingHorizontal: 12,
    gap: 8,
  } as ViewStyle,
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 4,
  } as ViewStyle,
  filterText: {
    fontSize: 14,
    fontWeight: "600",
  } as TextStyle,
  gridContent: {
    padding: 12,
  } as ViewStyle,
  row: {
    justifyContent: "space-between",
  } as ViewStyle,
  bookCard: {
    width: "48%",
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  } as ViewStyle,
  cover: {
    width: "100%",
    height: 200,
  } as ViewStyle,
  bookInfo: {
    padding: 12,
  } as ViewStyle,
  title: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 4,
  } as TextStyle,
  author: {
    fontSize: 12,
    marginBottom: 8,
  } as TextStyle,
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: "flex-start",
  } as ViewStyle,
  categoryText: {
    fontSize: 10,
    fontWeight: "600",
  } as TextStyle,
  emptyContainer: {
    padding: 40,
    alignItems: "center",
  } as ViewStyle,
  emptyText: {
    fontSize: 16,
  } as TextStyle,
})
