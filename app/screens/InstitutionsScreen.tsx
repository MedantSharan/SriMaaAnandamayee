/**
 * Institutions Screen
 * Displays educational and charitable institutions
 */

import React from "react"
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Image,
  TouchableOpacity,
} from "react-native"
import { useCustomTheme } from "../theme/useCustomTheme"
import { useSriMaa } from "../context/SriMaaContext"
import type { Institution } from "../models/types"

export const InstitutionsScreen = () => {
  const { colors } = useCustomTheme()
  const { institutions, isLoadingInstitutions } = useSriMaa()

  const renderInstitutionCard = ({ item }: { item: Institution }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors.surface }]}
      activeOpacity={0.7}
    >
      {item.photoUrl && (
        <Image source={{ uri: item.photoUrl }} style={styles.image} resizeMode="cover" />
      )}

      <View style={styles.content}>
        <View style={[styles.typeBadge, { backgroundColor: colors.primary + "20" }]}>
          <Text style={[styles.typeText, { color: colors.primary }]}>{item.type}</Text>
        </View>

        <Text style={[styles.name, { color: colors.text }]} numberOfLines={2}>
          {item.name}
        </Text>

        <Text style={[styles.location, { color: colors.textSecondary }]} numberOfLines={1}>
          📍 {item.location.city}, {item.location.state}
        </Text>

        <Text style={[styles.description, { color: colors.textSecondary }]} numberOfLines={3}>
          {item.description}
        </Text>

        {item.services && item.services.length > 0 && (
          <View style={styles.services}>
            <Text style={[styles.servicesTitle, { color: colors.text }]}>Services:</Text>
            {item.services.slice(0, 3).map((service, index) => (
              <View key={index} style={styles.serviceItem}>
                <Text style={[styles.bullet, { color: colors.accent }]}>•</Text>
                <Text style={[styles.serviceText, { color: colors.textSecondary }]}>
                  {service}
                </Text>
              </View>
            ))}
          </View>
        )}

        {item.contact && (
          <View style={styles.contactSection}>
            {item.contact.phone && (
              <Text style={[styles.contactText, { color: colors.textSecondary }]}>
                📞 {item.contact.phone}
              </Text>
            )}
            {item.contact.email && (
              <Text style={[styles.contactText, { color: colors.textSecondary }]}>
                ✉️ {item.contact.email}
              </Text>
            )}
          </View>
        )}
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.surface }]}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          Educational & Charitable Institutions
        </Text>
        <Text style={[styles.headerSubtitle, { color: colors.textSecondary }]}>
          Serving humanity through Ma's grace
        </Text>
      </View>

      <FlatList
        data={institutions}
        keyExtractor={(item) => item.id}
        renderItem={renderInstitutionCard}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
              {isLoadingInstitutions ? "Loading institutions..." : "No institutions found"}
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
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  } as ViewStyle,
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
  } as TextStyle,
  headerSubtitle: {
    fontSize: 14,
    fontStyle: "italic",
  } as TextStyle,
  listContent: {
    padding: 16,
  } as ViewStyle,
  card: {
    marginBottom: 20,
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
  typeBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 12,
  } as ViewStyle,
  typeText: {
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
  } as TextStyle,
  name: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
    lineHeight: 26,
  } as TextStyle,
  location: {
    fontSize: 14,
    marginBottom: 12,
  } as TextStyle,
  description: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
  } as TextStyle,
  services: {
    marginBottom: 16,
  } as ViewStyle,
  servicesTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  } as TextStyle,
  serviceItem: {
    flexDirection: "row",
    marginBottom: 4,
  } as ViewStyle,
  bullet: {
    fontSize: 16,
    marginRight: 8,
  } as TextStyle,
  serviceText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  } as TextStyle,
  contactSection: {
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
  } as ViewStyle,
  contactText: {
    fontSize: 13,
    marginBottom: 4,
  } as TextStyle,
  emptyContainer: {
    padding: 40,
    alignItems: "center",
  } as ViewStyle,
  emptyText: {
    fontSize: 16,
  } as TextStyle,
})
