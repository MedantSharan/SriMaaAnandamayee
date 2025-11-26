/**
 * Ashrams List Screen
 * Displays list of all ashrams with search and filter
 */

import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ViewStyle,
  TextStyle,
  Image,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useCustomTheme } from "../theme/useCustomTheme"
import { useSriMaa } from "../context/SriMaaContext"
import type { Ashram } from "../models/types"
import type { AshramsStackParamList } from "../navigators/stacks/AshramsStack"

type NavigationProp = NativeStackNavigationProp<AshramsStackParamList, "AshramsList">

export const AshramsListScreen = () => {
  const navigation = useNavigation<NavigationProp>()
  const { colors } = useCustomTheme()
  const { ashrams, isLoadingAshrams } = useSriMaa()

  const [searchQuery, setSearchQuery] = useState("")
  const [filteredAshrams, setFilteredAshrams] = useState<Ashram[]>([])

  useEffect(() => {
    loadAshrams()
  }, [])

  useEffect(() => {
    filterAshrams()
  }, [searchQuery, ashrams])

  const loadAshrams = async () => {
  }

  const filterAshrams = () => {
    if (!searchQuery.trim()) {
      setFilteredAshrams(ashrams)
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = ashrams.filter(
      (ashram) =>
        ashram.name.toLowerCase().includes(query) ||
        ashram.location.city.toLowerCase().includes(query) ||
        ashram.location.state.toLowerCase().includes(query) ||
        ashram.location.country.toLowerCase().includes(query),
    )
    setFilteredAshrams(filtered)
  }

  const handleAshramPress = (ashram: Ashram) => {
    navigation.navigate("AshramDetail", { ashram })
  }

  const renderAshramCard = ({ item }: { item: Ashram }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors.surface }]}
      onPress={() => handleAshramPress(item)}
      activeOpacity={0.7}
    >
      {item.photoUrl && (
        <Image source={{ uri: item.photoUrl }} style={styles.image} resizeMode="cover" />
      )}

      <View style={styles.content}>
        <Text style={[styles.name, { color: colors.text }]} numberOfLines={2}>
          {item.name}
        </Text>

        <Text style={[styles.location, { color: colors.textSecondary }]} numberOfLines={1}>
          📍 {item.location.city}, {item.location.state}
        </Text>

        {item.tags.length > 0 && (
          <View style={styles.tags}>
            {item.tags.slice(0, 2).map((tag, index) => (
              <View key={index} style={[styles.tag, { backgroundColor: colors.primary + "20" }]}>
                <Text style={[styles.tagText, { color: colors.primary }]}>{tag}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.searchContainer, { backgroundColor: colors.surface }]}>
        <TextInput
          style={[styles.searchInput, { color: colors.text }]}
          placeholder="Search ashrams..."
          placeholderTextColor={colors.textSecondary}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filteredAshrams}
        keyExtractor={(item) => item.id}
        renderItem={renderAshramCard}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
              {isLoadingAshrams ? "Loading ashrams..." : "No ashrams found"}
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
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  } as ViewStyle,
  searchInput: {
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: "#F5F5F5",
  } as ViewStyle,
  listContent: {
    padding: 16,
  } as ViewStyle,
  card: {
    marginBottom: 16,
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
    height: 160,
  } as ViewStyle,
  content: {
    padding: 16,
  } as ViewStyle,
  name: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  } as TextStyle,
  location: {
    fontSize: 14,
    marginBottom: 12,
  } as TextStyle,
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  } as ViewStyle,
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  } as ViewStyle,
  tagText: {
    fontSize: 12,
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
