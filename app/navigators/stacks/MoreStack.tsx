/**
 * More Stack Navigator
 * Screens: More Menu, About, Guidance, Institutions, Photos, Settings, Admin, Offline
 */

import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MoreMenuScreen } from "../../screens/MoreMenuScreen"
import { AboutScreen } from "../../screens/AboutScreen"
import { GuidanceScreen } from "../../screens/GuidanceScreen"
import { InstitutionsScreen } from "../../screens/InstitutionsScreen"
import { PhotosScreen } from "../../screens/PhotosScreen"
import { PhotoViewerScreen } from "../../screens/PhotoViewerScreen"
import { SettingsScreen } from "../../screens/SettingsScreen"
import { AdminScreen } from "../../screens/AdminScreen"
import { OfflineScreen } from "../../screens/OfflineScreen"
import { useCustomTheme } from "../../theme/useCustomTheme"
import type { Photo } from "../../models/types"

export type MoreStackParamList = {
  MoreMenu: undefined
  About: undefined
  Guidance: undefined
  Institutions: undefined
  Photos: undefined
  PhotoViewer: { photo: Photo; photos: Photo[] }
  Settings: undefined
  Admin: undefined
  Offline: undefined
}

const Stack = createNativeStackNavigator<MoreStackParamList>()

export const MoreStack = () => {
  const { colors } = useCustomTheme()

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.surface,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Stack.Screen
        name="MoreMenu"
        component={MoreMenuScreen}
        options={{ title: "More" }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: "About Sri Maa & Sangha" }}
      />
      <Stack.Screen
        name="Guidance"
        component={GuidanceScreen}
        options={{ title: "Guidance for New Devotees" }}
      />
      <Stack.Screen
        name="Institutions"
        component={InstitutionsScreen}
        options={{ title: "Institutions & Services" }}
      />
      <Stack.Screen
        name="Photos"
        component={PhotosScreen}
        options={{ title: "Photo Gallery" }}
      />
      <Stack.Screen
        name="PhotoViewer"
        component={PhotoViewerScreen}
        options={{
          title: "Photos",
          headerShown: false,
          presentation: "fullScreenModal",
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
      <Stack.Screen
        name="Admin"
        component={AdminScreen}
        options={{ title: "Admin Panel" }}
      />
      <Stack.Screen
        name="Offline"
        component={OfflineScreen}
        options={{ title: "Offline Downloads" }}
      />
    </Stack.Navigator>
  )
}
