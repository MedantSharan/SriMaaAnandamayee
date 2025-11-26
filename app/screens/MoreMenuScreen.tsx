/**
 * More Menu Screen
 * Main menu for More tab
 */

import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ViewStyle,
  TextStyle,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useCustomTheme } from "../theme/useCustomTheme"
import type { MoreStackParamList } from "../navigators/stacks/MoreStack"

type NavigationProp = NativeStackNavigationProp<MoreStackParamList, "MoreMenu">

interface MenuItem {
  title: string
  icon: string
  screen: keyof MoreStackParamList
  description?: string
}

export const MoreMenuScreen = () => {
  const navigation = useNavigation<NavigationProp>()
  const { colors } = useCustomTheme()

  const menuItems: MenuItem[] = [
    {
      title: "About Sri Maa & Sangha",
      icon: "🙏",
      screen: "About",
      description: "Learn about Sri Maa and the Sangha",
    },
    {
      title: "Guidance for New Devotees",
      icon: "📖",
      screen: "Guidance",
      description: "Getting started on your spiritual journey",
    },
    {
      title: "Institutions & Services",
      icon: "🏢",
      screen: "Institutions",
      description: "Kanyapeeth, Vidyapeeth, Hospitals, and more",
    },
    {
      title: "Photo Gallery",
      icon: "📸",
      screen: "Photos",
      description: "Beautiful photos of Sri Maa",
    },
    {
      title: "Settings",
      icon: "⚙️",
      screen: "Settings",
      description: "App preferences and notifications",
    },
    {
      title: "Offline Downloads",
      icon: "📥",
      screen: "Offline",
      description: "Manage downloaded content",
    },
    {
      title: "Admin Panel",
      icon: "🔐",
      screen: "Admin",
      description: "For authorized users only",
    },
  ]

  const handleMenuPress = (screen: keyof MoreStackParamList) => {
    navigation.navigate(screen as any)
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.greeting, { color: colors.text }]}>ॐ श्री आनन्दमयी नमः</Text>
      </View>

      <View style={styles.menuList}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.menuItem, { backgroundColor: colors.surface }]}
            onPress={() => handleMenuPress(item.screen)}
            activeOpacity={0.7}
          >
            <Text style={styles.menuIcon}>{item.icon}</Text>
            <View style={styles.menuContent}>
              <Text style={[styles.menuTitle, { color: colors.text }]}>{item.title}</Text>
              {item.description && (
                <Text style={[styles.menuDescription, { color: colors.textSecondary }]}>
                  {item.description}
                </Text>
              )}
            </View>
            <Text style={[styles.menuArrow, { color: colors.textSecondary }]}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: colors.textSecondary }]}>
          Version 0.0.1{"\n"}
          Made with devotion 🙏
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
  header: {
    padding: 24,
    alignItems: "center",
  } as ViewStyle,
  greeting: {
    fontSize: 20,
    fontWeight: "700",
  } as TextStyle,
  menuList: {
    padding: 16,
  } as ViewStyle,
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  } as ViewStyle,
  menuIcon: {
    fontSize: 28,
    marginRight: 16,
  } as TextStyle,
  menuContent: {
    flex: 1,
  } as ViewStyle,
  menuTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  } as TextStyle,
  menuDescription: {
    fontSize: 13,
    lineHeight: 18,
  } as TextStyle,
  menuArrow: {
    fontSize: 24,
    marginLeft: 8,
  } as TextStyle,
  footer: {
    padding: 32,
    alignItems: "center",
  } as ViewStyle,
  footerText: {
    fontSize: 13,
    textAlign: "center",
    lineHeight: 20,
  } as TextStyle,
})
