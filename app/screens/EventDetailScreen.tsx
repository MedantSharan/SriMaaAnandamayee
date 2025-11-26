/**
 * Event Detail Screen
 * Shows full details of a selected event
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
import { RouteProp, useRoute } from "@react-navigation/native"
import { useCustomTheme } from "../theme/useCustomTheme"
import type { EventsStackParamList } from "../navigators/stacks/EventsStack"

type EventDetailRouteProp = RouteProp<EventsStackParamList, "EventDetail">

export const EventDetailScreen = () => {
  const { colors } = useCustomTheme()
  const route = useRoute<EventDetailRouteProp>()
  const { event } = route.params

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
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

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      {event.imageUrl && (
        <Image source={{ uri: event.imageUrl }} style={styles.headerImage} resizeMode="cover" />
      )}

      <View style={styles.content}>
        <View style={[styles.typeBadge, { backgroundColor: colors.accent + "20" }]}>
          <Text style={[styles.typeText, { color: colors.accent }]}>{event.type}</Text>
        </View>

        <Text style={[styles.title, { color: colors.text }]}>{event.title}</Text>

        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>📅</Text>
            <View>
              <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>Date & Time</Text>
              <Text style={[styles.infoValue, { color: colors.text }]}>{formatDate(event.date)}</Text>
              <Text style={[styles.infoValue, { color: colors.text }]}>{formatTime(event.date)}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>📍</Text>
            <View>
              <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>Location</Text>
              <Text style={[styles.infoValue, { color: colors.text }]}>
                {event.location.venue || event.location.address}
              </Text>
              <Text style={[styles.infoValue, { color: colors.text }]}>
                {event.location.city}, {event.location.state}, {event.location.country}
              </Text>
            </View>
          </View>

          {event.contact?.phone && (
            <View style={styles.infoRow}>
              <Text style={styles.infoIcon}>📞</Text>
              <View>
                <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>Contact</Text>
                <Text style={[styles.infoValue, { color: colors.text }]}>{event.contact.phone}</Text>
                {event.contact.email && (
                  <Text style={[styles.infoValue, { color: colors.text }]}>{event.contact.email}</Text>
                )}
              </View>
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>About this Event</Text>
          <Text style={[styles.description, { color: colors.textSecondary }]}>
            {event.description}
          </Text>
        </View>

        {event.details && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Details</Text>
            <Text style={[styles.description, { color: colors.textSecondary }]}>
              {event.details}
            </Text>
          </View>
        )}

        {event.registrationUrl && (
          <TouchableOpacity
            style={[styles.registerButton, { backgroundColor: colors.primary }]}
            activeOpacity={0.8}
          >
            <Text style={styles.registerButtonText}>Register for Event</Text>
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
  headerImage: {
    width: "100%",
    height: 250,
  } as ViewStyle,
  content: {
    padding: 20,
  } as ViewStyle,
  typeBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginBottom: 12,
  } as ViewStyle,
  typeText: {
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
  } as TextStyle,
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 24,
    lineHeight: 36,
  } as TextStyle,
  infoSection: {
    marginBottom: 24,
    gap: 20,
  } as ViewStyle,
  infoRow: {
    flexDirection: "row",
    gap: 12,
  } as ViewStyle,
  infoIcon: {
    fontSize: 24,
    width: 32,
  } as TextStyle,
  infoLabel: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 4,
    textTransform: "uppercase",
  } as TextStyle,
  infoValue: {
    fontSize: 16,
    lineHeight: 22,
  } as TextStyle,
  section: {
    marginBottom: 24,
  } as ViewStyle,
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
  } as TextStyle,
  description: {
    fontSize: 16,
    lineHeight: 24,
  } as TextStyle,
  registerButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  } as ViewStyle,
  registerButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  } as TextStyle,
})
