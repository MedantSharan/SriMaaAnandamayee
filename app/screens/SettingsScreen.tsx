/**
 * Settings Screen
 * App settings and preferences
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
  Switch,
} from "react-native"
import { useCustomTheme } from "../theme/useCustomTheme"

export const SettingsScreen = () => {
  const { colors } = useCustomTheme()
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true)
  const [autoDownload, setAutoDownload] = React.useState(false)
  const [offlineMode, setOfflineMode] = React.useState(false)

  const renderSettingItem = (
    title: string,
    subtitle: string,
    value: boolean,
    onValueChange: (value: boolean) => void,
  ) => (
    <View style={[styles.settingItem, { backgroundColor: colors.surface }]}>
      <View style={styles.settingText}>
        <Text style={[styles.settingTitle, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.settingSubtitle, { color: colors.textSecondary }]}>{subtitle}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: "#E5E5E5", true: colors.primary + "60" }}
        thumbColor={value ? colors.primary : "#F5F5F5"}
      />
    </View>
  )

  const renderActionItem = (title: string, subtitle: string, onPress: () => void) => (
    <TouchableOpacity
      style={[styles.actionItem, { backgroundColor: colors.surface }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.actionText}>
        <Text style={[styles.actionTitle, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.actionSubtitle, { color: colors.textSecondary }]}>{subtitle}</Text>
      </View>
      <Text style={[styles.chevron, { color: colors.textSecondary }]}>›</Text>
    </TouchableOpacity>
  )

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Notifications</Text>
          {renderSettingItem(
            "Enable Notifications",
            "Receive updates about events and new content",
            notificationsEnabled,
            setNotificationsEnabled,
          )}
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Content</Text>
          {renderSettingItem(
            "Auto-Download Content",
            "Automatically download new books and media",
            autoDownload,
            setAutoDownload,
          )}
          {renderSettingItem(
            "Offline Mode",
            "Use cached content when offline",
            offlineMode,
            setOfflineMode,
          )}
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Data Management</Text>
          {renderActionItem(
            "Clear Cache",
            "Free up storage space",
            () => console.log("Clear cache"),
          )}
          {renderActionItem(
            "Sync Data",
            "Manually sync with server",
            () => console.log("Sync data"),
          )}
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>About</Text>
          {renderActionItem("App Version", "1.0.0", () => {})}
          {renderActionItem("Privacy Policy", "View our privacy policy", () => {})}
          {renderActionItem("Terms of Service", "View terms and conditions", () => {})}
        </View>

        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: colors.textSecondary }]}>
            Made with devotion for Sri Anandamayi Ma
          </Text>
          <Text style={[styles.footerText, { color: colors.textSecondary }]}>
            © 2025 Sri Sri Anandamayi Sangha
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
  section: {
    marginBottom: 32,
  } as ViewStyle,
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    paddingLeft: 4,
  } as TextStyle,
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  } as ViewStyle,
  settingText: {
    flex: 1,
    marginRight: 16,
  } as ViewStyle,
  settingTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  } as TextStyle,
  settingSubtitle: {
    fontSize: 13,
    lineHeight: 18,
  } as TextStyle,
  actionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  } as ViewStyle,
  actionText: {
    flex: 1,
    marginRight: 16,
  } as ViewStyle,
  actionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  } as TextStyle,
  actionSubtitle: {
    fontSize: 13,
  } as TextStyle,
  chevron: {
    fontSize: 28,
    fontWeight: "300",
  } as TextStyle,
  footer: {
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: "center",
  } as ViewStyle,
  footerText: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 4,
  } as TextStyle,
})
