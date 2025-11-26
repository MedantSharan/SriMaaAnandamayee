/**
 * Admin Screen
 * Admin panel for content management
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

export const AdminScreen = () => {
  const { colors } = useCustomTheme()

  const adminActions = [
    {
      title: "Manage Ashrams",
      description: "Add, edit, or remove ashram information",
      icon: "🏛️",
    },
    {
      title: "Manage Books",
      description: "Upload and manage library content",
      icon: "📚",
    },
    {
      title: "Manage Events",
      description: "Create and update event listings",
      icon: "📅",
    },
    {
      title: "Manage Posts",
      description: "Add daily teachings and updates",
      icon: "✍️",
    },
    {
      title: "Manage Photos",
      description: "Upload and organize photo gallery",
      icon: "📷",
    },
    {
      title: "Push Notifications",
      description: "Send notifications to devotees",
      icon: "🔔",
    },
    {
      title: "View Analytics",
      description: "App usage and content statistics",
      icon: "📊",
    },
    {
      title: "User Management",
      description: "Manage admin users and permissions",
      icon: "👥",
    },
  ]

  const renderActionCard = (action: typeof adminActions[0], index: number) => (
    <TouchableOpacity
      key={index}
      style={[styles.actionCard, { backgroundColor: colors.surface }]}
      activeOpacity={0.7}
    >
      <Text style={styles.icon}>{action.icon}</Text>
      <View style={styles.actionContent}>
        <Text style={[styles.actionTitle, { color: colors.text }]}>{action.title}</Text>
        <Text style={[styles.actionDescription, { color: colors.textSecondary }]}>
          {action.description}
        </Text>
      </View>
      <Text style={[styles.chevron, { color: colors.textSecondary }]}>›</Text>
    </TouchableOpacity>
  )

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <View style={[styles.header, { backgroundColor: colors.primary + "15" }]}>
          <Text style={[styles.headerTitle, { color: colors.text }]}>Admin Panel</Text>
          <Text style={[styles.headerSubtitle, { color: colors.textSecondary }]}>
            Content Management System
          </Text>
        </View>

        <View style={[styles.statsContainer, { backgroundColor: colors.surface }]}>
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: colors.primary }]}>3</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Ashrams</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: colors.primary }]}>6</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Books</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: colors.primary }]}>3</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Events</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: colors.primary }]}>3</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Posts</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Management Tools</Text>
          {adminActions.map((action, index) => renderActionCard(action, index))}
        </View>

        <View style={[styles.warning, { backgroundColor: colors.warning + "20" }]}>
          <Text style={[styles.warningText, { color: colors.text }]}>
            ⚠️ This is a restricted area. Only authorized administrators can access these features.
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
  header: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  } as ViewStyle,
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 4,
  } as TextStyle,
  headerSubtitle: {
    fontSize: 14,
  } as TextStyle,
  statsContainer: {
    flexDirection: "row",
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    justifyContent: "space-around",
  } as ViewStyle,
  statItem: {
    alignItems: "center",
  } as ViewStyle,
  statValue: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 4,
  } as TextStyle,
  statLabel: {
    fontSize: 12,
  } as TextStyle,
  statDivider: {
    width: 1,
    backgroundColor: "#E5E5E5",
  } as ViewStyle,
  section: {
    marginBottom: 24,
  } as ViewStyle,
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
  } as TextStyle,
  actionCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  } as ViewStyle,
  icon: {
    fontSize: 32,
    marginRight: 16,
  } as TextStyle,
  actionContent: {
    flex: 1,
  } as ViewStyle,
  actionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  } as TextStyle,
  actionDescription: {
    fontSize: 13,
    lineHeight: 18,
  } as TextStyle,
  chevron: {
    fontSize: 28,
    fontWeight: "300",
  } as TextStyle,
  warning: {
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
  } as ViewStyle,
  warningText: {
    fontSize: 13,
    lineHeight: 20,
  } as TextStyle,
})
