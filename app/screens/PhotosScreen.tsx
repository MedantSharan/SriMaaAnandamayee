/**
 * Photos Screen
 * Photo gallery with grid layout
 */

import React, { useState } from "react"
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ViewStyle,
  TextStyle,
  Dimensions,
} from "react-native"
import { useCustomTheme } from "../theme/useCustomTheme"
import { useSriMaa } from "../context/SriMaaContext"
import type { Photo } from "../models/types"

const { width } = Dimensions.get("window")
const GRID_COLUMNS = 2
const SPACING = 12
const ITEM_WIDTH = (width - SPACING * (GRID_COLUMNS + 1)) / GRID_COLUMNS

export const PhotosScreen = () => {
  const { colors } = useCustomTheme()
  const { photos } = useSriMaa()
  const [filter, setFilter] = useState<string>("All")

  const categories = ["All", "Spiritual", "Events", "Ashrams"]

  const filteredPhotos = filter === "All"
    ? photos
    : photos.filter((photo) => photo.category === filter)

  const renderPhoto = ({ item }: { item: Photo }) => (
    <TouchableOpacity
      style={[styles.photoCard, { backgroundColor: colors.surface }]}
      activeOpacity={0.8}
    >
      <Image source={{ uri: item.url }} style={styles.image} resizeMode="cover" />
      <View style={styles.photoInfo}>
        <Text style={[styles.photoTitle, { color: colors.text }]} numberOfLines={1}>
          {item.title}
        </Text>
        {item.category && (
          <View style={[styles.categoryBadge, { backgroundColor: colors.primary + "20" }]}>
            <Text style={[styles.categoryText, { color: colors.primary }]}>{item.category}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.surface }]}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Photo Gallery</Text>
        <View style={styles.filterContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.filterButton,
                {
                  backgroundColor: filter === category ? colors.primary : "transparent",
                  borderColor: colors.primary,
                },
              ]}
              onPress={() => setFilter(category)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.filterText,
                  { color: filter === category ? "#FFFFFF" : colors.primary },
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <FlatList
        data={filteredPhotos}
        keyExtractor={(item) => item.id}
        renderItem={renderPhoto}
        numColumns={GRID_COLUMNS}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.row}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
              No photos found
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
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  } as ViewStyle,
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
  } as TextStyle,
  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  } as ViewStyle,
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
  } as ViewStyle,
  filterText: {
    fontSize: 13,
    fontWeight: "600",
  } as TextStyle,
  listContent: {
    padding: SPACING,
  } as ViewStyle,
  row: {
    justifyContent: "space-between",
  } as ViewStyle,
  photoCard: {
    width: ITEM_WIDTH,
    marginBottom: SPACING,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  } as ViewStyle,
  image: {
    width: "100%",
    height: ITEM_WIDTH,
  } as ViewStyle,
  photoInfo: {
    padding: 12,
  } as ViewStyle,
  photoTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
  } as TextStyle,
  categoryBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  } as ViewStyle,
  categoryText: {
    fontSize: 10,
    fontWeight: "600",
    textTransform: "uppercase",
  } as TextStyle,
  emptyContainer: {
    padding: 40,
    alignItems: "center",
  } as ViewStyle,
  emptyText: {
    fontSize: 16,
  } as TextStyle,
})
