/**
 * Guidance Screen
 * Spiritual guidance and FAQs for devotees
 */

import React from "react"
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native"
import { useCustomTheme } from "../theme/useCustomTheme"

interface FAQ {
  question: string
  answer: string
}

export const GuidanceScreen = () => {
  const { colors } = useCustomTheme()
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null)

  const guidanceContent = {
    introduction: `Welcome to the path of devotion to Sri Anandamayi Ma. This guidance is meant to help new devotees understand the basics of spiritual practice and the traditions followed in our Sangha.`,

    practices: [
      "Daily meditation and prayer",
      "Chanting of divine names (Nama Japa)",
      "Study of scriptures and Ma's teachings",
      "Service to others (Seva)",
      "Maintaining purity in thought, word, and deed",
    ],
  }

  const faqs: FAQ[] = [
    {
      question: "How do I begin my spiritual practice?",
      answer:
        "Start with simple daily meditation, even for 10-15 minutes. Choose a quiet time and place. You can begin with chanting 'Om' or any divine name that appeals to you. Consistency is more important than duration.",
    },
    {
      question: "Do I need to visit an ashram?",
      answer:
        "While visiting ashrams can be deeply beneficial, it's not mandatory. You can practice at home and connect with the Sangha online. When you're ready and able, visiting an ashram can deepen your experience.",
    },
    {
      question: "What books should I read first?",
      answer:
        "Begin with 'Matri Darshan' or 'As The Flower Sheds Its Fragrance' - these contain Ma's conversations and teachings. The 'Mother As Revealed to Me' by Bhaiji provides beautiful insights into Ma's life.",
    },
    {
      question: "How can I serve the Sangha?",
      answer:
        "Service (seva) can take many forms - helping at ashrams, supporting charitable activities, teaching, or simply spreading Ma's message of love and unity. Start with whatever resonates with your abilities and circumstances.",
    },
    {
      question: "What is the significance of festivals?",
      answer:
        "Festivals like Janmotsav (Ma's birthday) and Samadhi Day are opportunities for collective worship and remembrance. They strengthen the spiritual bond within the Sangha and intensify our devotion.",
    },
  ]

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>Spiritual Guidance</Text>

        <View style={[styles.introSection, { backgroundColor: colors.surface }]}>
          <Text style={[styles.introText, { color: colors.textSecondary }]}>
            {guidanceContent.introduction}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Core Practices</Text>
          {guidanceContent.practices.map((practice, index) => (
            <View key={index} style={styles.practiceItem}>
              <Text style={[styles.bullet, { color: colors.primary }]}>•</Text>
              <Text style={[styles.practiceText, { color: colors.textSecondary }]}>
                {practice}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Frequently Asked Questions
          </Text>

          {faqs.map((faq, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.faqCard,
                {
                  backgroundColor: colors.surface,
                  borderColor: expandedIndex === index ? colors.primary : colors.border,
                },
              ]}
              onPress={() => toggleExpand(index)}
              activeOpacity={0.7}
            >
              <View style={styles.faqHeader}>
                <Text style={[styles.question, { color: colors.text }]}>{faq.question}</Text>
                <Text style={[styles.expandIcon, { color: colors.primary }]}>
                  {expandedIndex === index ? "−" : "+"}
                </Text>
              </View>
              {expandedIndex === index && (
                <Text style={[styles.answer, { color: colors.textSecondary }]}>{faq.answer}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={[styles.quote, { backgroundColor: colors.surface }]}>
          <Text style={[styles.quoteText, { color: colors.text }]}>
            "The question is not what you know, but what you are."
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
  content: {
    padding: 20,
  } as ViewStyle,
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  } as TextStyle,
  introSection: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  } as ViewStyle,
  introText: {
    fontSize: 16,
    lineHeight: 24,
  } as TextStyle,
  section: {
    marginBottom: 28,
  } as ViewStyle,
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
  } as TextStyle,
  practiceItem: {
    flexDirection: "row",
    marginBottom: 12,
    paddingRight: 20,
  } as ViewStyle,
  bullet: {
    fontSize: 20,
    marginRight: 12,
    marginTop: -2,
  } as TextStyle,
  practiceText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  } as TextStyle,
  faqCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 2,
  } as ViewStyle,
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  } as ViewStyle,
  question: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 22,
    marginRight: 12,
  } as TextStyle,
  expandIcon: {
    fontSize: 24,
    fontWeight: "700",
    width: 24,
    textAlign: "center",
  } as TextStyle,
  answer: {
    fontSize: 15,
    lineHeight: 22,
    marginTop: 12,
  } as TextStyle,
  quote: {
    padding: 20,
    borderRadius: 12,
    marginTop: 12,
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
