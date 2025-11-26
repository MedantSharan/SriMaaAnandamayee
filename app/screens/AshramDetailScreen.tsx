/**
 * Ashram Detail Screen
 */

import React from "react"
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ViewStyle,
  TextStyle,
} from "react-native"
import { RouteProp, useRoute } from "@react-navigation/native"
import { useCustomTheme } from "../theme/useCustomTheme"
import type { AshramsStackParamList } from "../navigators/stacks/AshramsStack"

type AshramDetailRouteProp = RouteProp<AshramsStackParamList, "AshramDetail">

export const AshramDetailScreen = () => {
  const route = useRoute<AshramDetailRouteProp>()
  const { ashram } = route.params
  const { colors } = useCustomTheme()

  const openMaps = () => {
    const { coordinates, address } = ashram.location
    const url = coordinates
      ? `https://maps.google.com/?q=${coordinates.latitude},${coordinates.longitude}`
      : `https://maps.google.com/?q=${encodeURIComponent(address)}`
    Linking.openURL(url)
  }

  const callPhone = (phone: string) => {
    Linking.openURL(`tel:${phone}`)
  }

  const sendEmail = (email: string) => {
    Linking.openURL(`mailto:${email}`)
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      {ashram.photoUrl && (
        <Image source={{ uri: ashram.photoUrl }} style={styles.heroImage} resizeMode="cover" />
      )}

      <View style={styles.content}>
        <Text style={[styles.name, { color: colors.text }]}>{ashram.name}</Text>

        <Text style={[styles.location, { color: colors.textSecondary }]}>
          📍 {ashram.location.city}, {ashram.location.state}, {ashram.location.country}
        </Text>

        {ashram.tags.length > 0 && (
          <View style={styles.tags}>
            {ashram.tags.map((tag, index) => (
              <View key={index} style={[styles.tag, { backgroundColor: colors.primary + "20" }]}>
                <Text style={[styles.tagText, { color: colors.primary }]}>{tag}</Text>
              </View>
            ))}
          </View>
        )}

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>History</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            {ashram.history}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Significance</Text>
          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            {ashram.significance}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Visiting Information</Text>
          {ashram.visitingInfo.darshanTimings && (
            <View style={styles.infoRow}>
              <Text style={[styles.infoLabel, { color: colors.text }]}>Darshan Timings:</Text>
              <Text style={[styles.infoValue, { color: colors.textSecondary }]}>
                {ashram.visitingInfo.darshanTimings}
              </Text>
            </View>
          )}
          {ashram.visitingInfo.stayOptions && (
            <View style={styles.infoRow}>
              <Text style={[styles.infoLabel, { color: colors.text }]}>Stay Options:</Text>
              <Text style={[styles.infoValue, { color: colors.textSecondary }]}>
                {ashram.visitingInfo.stayOptions}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Contact</Text>
          {ashram.contact.inCharge && (
            <Text style={[styles.contactText, { color: colors.textSecondary }]}>
              In-Charge: {ashram.contact.inCharge}
            </Text>
          )}
          {ashram.contact.phone && (
            <TouchableOpacity onPress={() => callPhone(ashram.contact.phone!)}>
              <Text style={[styles.contactLink, { color: colors.primary }]}>
                📞 {ashram.contact.phone}
              </Text>
            </TouchableOpacity>
          )}
          {ashram.contact.email && (
            <TouchableOpacity onPress={() => sendEmail(ashram.contact.email!)}>
              <Text style={[styles.contactLink, { color: colors.primary }]}>
                ✉️ {ashram.contact.email}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={openMaps}
        >
          <Text style={styles.buttonText}>Open in Maps 🗺️</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 } as ViewStyle,
  heroImage: { width: "100%", height: 250 } as ViewStyle,
  content: { padding: 20 } as ViewStyle,
  name: { fontSize: 24, fontWeight: "700", marginBottom: 8 } as TextStyle,
  location: { fontSize: 16, marginBottom: 16 } as TextStyle,
  tags: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 20 } as ViewStyle,
  tag: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 } as ViewStyle,
  tagText: { fontSize: 12, fontWeight: "600" } as TextStyle,
  section: { marginBottom: 24 } as ViewStyle,
  sectionTitle: { fontSize: 18, fontWeight: "700", marginBottom: 8 } as TextStyle,
  sectionText: { fontSize: 15, lineHeight: 24 } as TextStyle,
  infoRow: { marginBottom: 8 } as ViewStyle,
  infoLabel: { fontSize: 15, fontWeight: "600", marginBottom: 4 } as TextStyle,
  infoValue: { fontSize: 15, lineHeight: 22 } as TextStyle,
  contactText: { fontSize: 15, marginBottom: 8 } as TextStyle,
  contactLink: { fontSize: 15, marginBottom: 8, textDecorationLine: "underline" } as TextStyle,
  button: { padding: 16, borderRadius: 12, alignItems: "center", marginTop: 20 } as ViewStyle,
  buttonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" } as TextStyle,
})
