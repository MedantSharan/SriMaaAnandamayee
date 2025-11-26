/**
 * Home Stack Navigator
 * Screens: Home (feed + saying)
 */

import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../../screens/HomeScreen"
import { useCustomTheme } from "../../theme/useCustomTheme"

export type HomeStackParamList = {
  Home: undefined
}

const Stack = createNativeStackNavigator<HomeStackParamList>()

export const HomeStack = () => {
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
        name="Home"
        component={HomeScreen}
        options={{ title: "ॐ Sri Maa" }}
      />
    </Stack.Navigator>
  )
}
