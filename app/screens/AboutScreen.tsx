/**
 * About Screen
 * Information about Sri Maa and the Sangha
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
} from "react-native"
import { useCustomTheme } from "../theme/useCustomTheme"

export const AboutScreen = () => {
  const { colors } = useCustomTheme()

  const aboutContent = {
    title: "Sri Anandamayi Ma",
    subtitle: "The Bliss-Permeated Mother",
    biography: `Sri Anandamayi Ma (1896-1982) was one of the most renowned spiritual figures of modern India. Born as Nirmala Sundari in East Bengal (now Bangladesh), she manifested divine qualities from early childhood.

Known as the "Bliss-Permeated Mother," she traveled extensively throughout India, establishing ashrams and spiritual centers. Her teachings emphasized the universal nature of truth and the importance of spiritual practice while maintaining one's own religious tradition.

Thousands of devotees from all walks of life, including scholars, politicians, and common people, were drawn to her divine presence and wisdom. She never claimed to be a guru or teacher, saying "I have no disciples" - yet her influence transformed countless lives.`,

    sanghaInfo: `The Sri Sri Anandamayi Sangha continues Ma's mission of spiritual upliftment and service. The Sangha maintains ashrams across India and abroad, preserving Ma's teachings and providing opportunities for spiritual seekers.

Key activities include:
• Daily worship and spiritual practices
• Study of Ma's teachings and scriptures
• Service to pilgrims and devotees
• Educational institutions
• Healthcare facilities
• Publication of spiritual literature`,
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/300x400/FF6B35/FFFFFF?text=Sri+Anandamayi+Ma" }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>{aboutContent.title}</Text>
        <Text style={[styles.subtitle, { color: colors.primary }]}>{aboutContent.subtitle}</Text>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Biography</Text>
          <Text style={[styles.text, { color: colors.textSecondary }]}>
            {aboutContent.biography}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>The Sangha</Text>
          <Text style={[styles.text, { color: colors.textSecondary }]}>
            {aboutContent.sanghaInfo}
          </Text>
        </View>

        <View style={[styles.quote, { backgroundColor: colors.surface }]}>
          <Text style={[styles.quoteText, { color: colors.text }]}>
            "As fire, though one, takes the shape of every object which it consumes, so the Self,
            though one, takes the shape of every object in which it dwells."
          </Text>
          <Text style={[styles.quoteAuthor, { color: colors.textSecondary }]}>
            - Sri Anandamayi Ma
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
  header: {
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  } as ViewStyle,
  image: {
    width: 250,
    height: 300,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  } as ViewStyle,
  content: {
    padding: 20,
  } as ViewStyle,
  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  } as TextStyle,
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 32,
  } as TextStyle,
  section: {
    marginBottom: 28,
  } as ViewStyle,
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
  } as TextStyle,
  text: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: "justify",
  } as TextStyle,
  quote: {
    padding: 20,
    borderRadius: 12,
    marginTop: 12,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: "#FF6B35",
  } as ViewStyle,
  quoteText: {
    fontSize: 16,
    lineHeight: 24,
    fontStyle: "italic",
    marginBottom: 12,
  } as TextStyle,
  quoteAuthor: {
    fontSize: 14,
    textAlign: "right",
  } as TextStyle,
})
