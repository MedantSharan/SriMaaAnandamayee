/**
 * Events Screen
 * Displays upcoming and past events
 */

import React, { useState } from "react"
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  Image,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useCustomTheme } from "../theme/useCustomTheme"
import { useSriMaa } from "../context/SriMaaContext"
import type { Event } from "../models/types"
import type { EventsStackParamList } from "../navigators/stacks/EventsStack"

type NavigationProp = NativeStackNavigationProp<EventsStackParamList, "EventsList">

export const EventsScreen = () => {
  const navigation = useNavigation<NavigationProp>()
  const { colors } = useCustomTheme()
  const { events, isLoadingEvents } = useSriMaa()

  const [filter, setFilter] = useState<"upcoming" | "past" | "all">("upcoming")

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  const handleEventPress = (event: Event) => {
    navigation.navigate("EventDetail", { event })
  }

  const filteredEvents = events.filter((event) => {
    if (filter === "all") return true
    const now = new Date()
    const eventDate = new Date(event.date)
    if (filter === "upcoming") return eventDate >= now
    return eventDate < now
  })

  const renderEventCard = ({ item }: { item: Event }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors.surface }]}
      onPress={() => handleEventPress(item)}
      activeOpacity={0.7}
    >
      {item.imageUrl && (
        <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="cover" />
      )}

      <View style={styles.content}>
        <View style={styles.dateContainer}>
          <View style={[styles.dateBadge, { backgroundColor: colors.primary }]}>
            <Text style={styles.dateDay}>
              {new Date(item.date).toLocaleDateString("en-US", { day: "numeric" })}
            </Text>
            <Text style={styles.dateMonth}>
              {new Date(item.date).toLocaleDateString("en-US", { month: "short" }).toUpperCase()}
            </Text>
          </View>

          <View style={styles.eventInfo}>
            <Text style={[styles.title, { color: colors.text }]} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={[styles.location, { color: colors.textSecondary }]} numberOfLines={1}>
              📍 {item.location.city}, {item.location.state}
            </Text>
          </View>
        </View>

        <Text style={[styles.description, { color: colors.textSecondary }]} numberOfLines={2}>
          {item.description}
        </Text>

        <View style={styles.footer}>
          <Text style={[styles.time, { color: colors.primary }]}>
            ⏰ {formatTime(item.date)}
          </Text>
          <View style={[styles.typeBadge, { backgroundColor: colors.accent + "20" }]}>
            <Text style={[styles.typeText, { color: colors.accent }]}>{item.type}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.filterContainer, { backgroundColor: colors.surface }]}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === "upcoming" && { backgroundColor: colors.primary },
          ]}
          onPress={() => setFilter("upcoming")}
        >
          <Text
            style={[
              styles.filterText,
              { color: filter === "upcoming" ? "#FFFFFF" : colors.textSecondary },
            ]}
          >
            Upcoming
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.filterButton, filter === "past" && { backgroundColor: colors.primary }]}
          onPress={() => setFilter("past")}
        >
          <Text
            style={[
              styles.filterText,
              { color: filter === "past" ? "#FFFFFF" : colors.textSecondary },
            ]}
          >
            Past
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.filterButton, filter === "all" && { backgroundColor: colors.primary }]}
          onPress={() => setFilter("all")}
        >
          <Text
            style={[
              styles.filterText,
              { color: filter === "all" ? "#FFFFFF" : colors.textSecondary },
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        renderItem={renderEventCard}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
              {isLoadingEvents ? "Loading events..." : "No events found"}
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
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  } as ViewStyle,
  filterButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: "center",
  } as ViewStyle,
  filterText: {
    fontSize: 14,
    fontWeight: "600",
  } as TextStyle,
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
    height: 180,
  } as ViewStyle,
  content: {
    padding: 16,
  } as ViewStyle,
  dateContainer: {
    flexDirection: "row",
    marginBottom: 12,
    gap: 12,
  } as ViewStyle,
  dateBadge: {
    width: 60,
    height: 60,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  dateDay: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
  } as TextStyle,
  dateMonth: {
    fontSize: 12,
    fontWeight: "600",
    color: "#FFFFFF",
  } as TextStyle,
  eventInfo: {
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  } as TextStyle,
  location: {
    fontSize: 14,
  } as TextStyle,
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  } as TextStyle,
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  } as ViewStyle,
  time: {
    fontSize: 14,
    fontWeight: "600",
  } as TextStyle,
  typeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  } as ViewStyle,
  typeText: {
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
