/**
 * Home Screen
 * Main screen with Saying of the Day and Feed
 */

import React, { useEffect } from "react"
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native"
import { useCustomTheme } from "../theme/useCustomTheme"
import { useSriMaa } from "../context/SriMaaContext"
import { SayingCard } from "../components/SayingCard"
import { PostCard } from "../components/PostCard"

export const HomeScreen = () => {
  const { colors } = useCustomTheme()
  const { currentSaying, posts, isLoadingPosts } = useSriMaa()

  const [refreshing, setRefreshing] = React.useState(false)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    // Data loading disabled for now
  }

  const onRefresh = async () => {
    setRefreshing(true)
    // Data loading disabled for now
    setRefreshing(false)
  }

  const handlePostPress = (postId: string) => {
    // Mark as read - disabled for now
  }

  const recentPosts = posts.slice(0, 7)

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={recentPosts}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            {currentSaying && <SayingCard saying={currentSaying} />}

            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>
                Recent Updates
              </Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <PostCard post={item} onPress={() => handlePostPress(item.id)} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.primary}
          />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
              {isLoadingPosts ? "Loading..." : "No posts available"}
            </Text>
          </View>
        }
        contentContainerStyle={styles.contentContainer}
      />

      {/* Floating Refresh Button */}
      <TouchableOpacity
        style={[styles.floatingButton, { backgroundColor: colors.primary }]}
        onPress={onRefresh}
      >
        <Text style={styles.floatingButtonText}>↻</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
  contentContainer: {
    paddingBottom: 100,
  } as ViewStyle,
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  } as ViewStyle,
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
  } as TextStyle,
  emptyContainer: {
    padding: 40,
    alignItems: "center",
  } as ViewStyle,
  emptyText: {
    fontSize: 16,
  } as TextStyle,
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  } as ViewStyle,
  floatingButtonText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  } as TextStyle,
})
