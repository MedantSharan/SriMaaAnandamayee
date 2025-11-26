/**
 * Post Card Component
 * Displays a feed post
 */

import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image, ViewStyle, TextStyle } from "react-native"
import { useCustomTheme } from "../theme/useCustomTheme"
import type { Post } from "../models/types"

interface PostCardProps {
  post: Post
  onPress?: () => void
  style?: ViewStyle
}

export const PostCard: React.FC<PostCardProps> = ({ post, onPress, style }) => {
  const { colors } = useCustomTheme()

  const getTypeColor = (type: Post["type"]) => {
    switch (type) {
      case "Bhajan":
        return "#9F7AEA"
      case "Event":
        return "#F56565"
      case "Teaching":
        return "#48BB78"
      default:
        return colors.accent
    }
  }

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors.surface }, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {!post.isRead && (
        <View style={[styles.unreadDot, { backgroundColor: colors.accent }]} />
      )}

      <View style={[styles.typeTag, { backgroundColor: getTypeColor(post.type) }]}>
        <Text style={styles.typeText}>{post.type}</Text>
      </View>

      {post.imageUrl && (
        <Image source={{ uri: post.imageUrl }} style={styles.image} resizeMode="cover" />
      )}

      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]} numberOfLines={2}>
          {post.title}
        </Text>

        <Text style={[styles.body, { color: colors.textSecondary }]} numberOfLines={3}>
          {post.body}
        </Text>

        <Text style={[styles.timestamp, { color: colors.textSecondary }]}>
          {formatDate(post.timestamp)}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  } as ViewStyle,
  unreadDot: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 10,
    height: 10,
    borderRadius: 5,
    zIndex: 10,
  } as ViewStyle,
  typeTag: {
    position: "absolute",
    top: 12,
    left: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    zIndex: 10,
  } as ViewStyle,
  typeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
  } as TextStyle,
  image: {
    width: "100%",
    height: 200,
  } as ViewStyle,
  content: {
    padding: 16,
  } as ViewStyle,
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  } as TextStyle,
  body: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 8,
  } as TextStyle,
  timestamp: {
    fontSize: 12,
    marginTop: 4,
  } as TextStyle,
})
