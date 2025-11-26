/**
 * Ashrams Stack Navigator
 * Screens: Ashrams List, Ashram Detail
 */

import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AshramsListScreen } from "../../screens/AshramsListScreen"
import { AshramDetailScreen } from "../../screens/AshramDetailScreen"
import { useCustomTheme } from "../../theme/useCustomTheme"
import type { Ashram } from "../../models/types"

export type AshramsStackParamList = {
  AshramsList: undefined
  AshramDetail: { ashram: Ashram }
}

const Stack = createNativeStackNavigator<AshramsStackParamList>()

export const AshramsStack = () => {
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
        name="AshramsList"
        component={AshramsListScreen}
        options={{ title: "Ashrams" }}
      />
      <Stack.Screen
        name="AshramDetail"
        component={AshramDetailScreen}
        options={{ title: "Ashram Details" }}
      />
    </Stack.Navigator>
  )
}
