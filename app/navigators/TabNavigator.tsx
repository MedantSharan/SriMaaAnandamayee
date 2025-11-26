/**
 * Tab Navigator - Bottom tab navigation
 * Main navigation with 5 tabs: Home, Ashrams, Library, Events, More
 */

import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useCustomTheme } from "../theme/useCustomTheme"

// Stack navigators
import { HomeStack } from "./stacks/HomeStack"
import { AshramsStack } from "./stacks/AshramsStack"
import { LibraryStack } from "./stacks/LibraryStack"
import { EventsStack } from "./stacks/EventsStack"
import { MoreStack } from "./stacks/MoreStack"

// Icon component (using simple text for now, replace with actual icons)
import { Text } from "react-native"

export type TabParamList = {
  HomeTab: undefined
  AshramsTab: undefined
  LibraryTab: undefined
  EventsTab: undefined
  MoreTab: undefined
}

const Tab = createBottomTabNavigator<TabParamList>()

const TabIcon = ({ icon, focused }: { icon: string; focused: boolean }) => {
  const { colors } = useCustomTheme()
  return (
    <Text style={{ fontSize: 24, color: focused ? colors.primary : colors.textSecondary }}>
      {icon}
    </Text>
  )
}

export const TabNavigator = () => {
  const { bottom } = useSafeAreaInsets()
  const { colors } = useCustomTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          height: bottom + 60,
          paddingBottom: bottom,
        } as ViewStyle,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        } as TextStyle,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => <TabIcon icon="🏠" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="AshramsTab"
        component={AshramsStack}
        options={{
          title: "Ashrams",
          tabBarIcon: ({ focused }) => <TabIcon icon="🏛️" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="LibraryTab"
        component={LibraryStack}
        options={{
          title: "Library",
          tabBarIcon: ({ focused }) => <TabIcon icon="📚" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="EventsTab"
        component={EventsStack}
        options={{
          title: "Events",
          tabBarIcon: ({ focused }) => <TabIcon icon="📅" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="MoreTab"
        component={MoreStack}
        options={{
          title: "More",
          tabBarIcon: ({ focused }) => <TabIcon icon="⋮" focused={focused} />,
        }}
      />
    </Tab.Navigator>
  )
}
