/**
 * Events Stack Navigator
 * Screens: Events Calendar, Event Detail
 */

import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { EventsScreen } from "../../screens/EventsScreen"
import { EventDetailScreen } from "../../screens/EventDetailScreen"
import { useCustomTheme } from "../../theme/useCustomTheme"
import type { Event } from "../../models/types"

export type EventsStackParamList = {
  Events: undefined
  EventDetail: { event: Event }
}

const Stack = createNativeStackNavigator<EventsStackParamList>()

export const EventsStack = () => {
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
        name="Events"
        component={EventsScreen}
        options={{ title: "Events" }}
      />
      <Stack.Screen
        name="EventDetail"
        component={EventDetailScreen}
        options={{ title: "Event Details" }}
      />
    </Stack.Navigator>
  )
}
