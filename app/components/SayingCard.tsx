/**
 * Saying Card Component
 * Displays the saying of the day
 */

import React from "react"
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native"
import { useCustomTheme } from "../theme/useCustomTheme"
import type { Saying } from "../models/types"

interface SayingCardProps {
  saying: Saying
  style?: ViewStyle
}

export const SayingCard: React.FC<SayingCardProps> = ({ saying, style }) => {
  const { colors } = useCustomTheme()

  return (
    <View style={[styles.card, { backgroundColor: colors.surface }, style]}>
      <View style={styles.header}>
        <Text style={[styles.label, { color: colors.accent }]}>
          Saying of the Day
        </Text>
      </View>

      <Text style={[styles.quote, { color: colors.text }]}>
        "{saying.quote}"
      </Text>

      {saying.source && (
        <Text style={[styles.source, { color: colors.textSecondary }]}>
          — {saying.source}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  } as ViewStyle,
  header: {
    marginBottom: 16,
  } as ViewStyle,
  label: {
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
  } as TextStyle,
  quote: {
    fontSize: 18,
    lineHeight: 28,
    fontStyle: "italic",
    marginBottom: 16,
  } as TextStyle,
  source: {
    fontSize: 14,
    textAlign: "right",
    fontWeight: "500",
  } as TextStyle,
})
