/**
 * Library Stack Navigator
 * Screens: Library List, Book Detail, Book Reader
 */

import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LibraryScreen } from "../../screens/LibraryScreen"
import { BookDetailScreen } from "../../screens/BookDetailScreen"
import { BookReaderScreen } from "../../screens/BookReaderScreen"
import { useCustomTheme } from "../../theme/useCustomTheme"
import type { Book } from "../../models/types"

export type LibraryStackParamList = {
  Library: undefined
  BookDetail: { book: Book }
  BookReader: { book: Book }
}

const Stack = createNativeStackNavigator<LibraryStackParamList>()

export const LibraryStack = () => {
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
        name="Library"
        component={LibraryScreen}
        options={{ title: "Library" }}
      />
      <Stack.Screen
        name="BookDetail"
        component={BookDetailScreen}
        options={{ title: "Book Details" }}
      />
      <Stack.Screen
        name="BookReader"
        component={BookReaderScreen}
        options={{
          title: "Reader",
          headerStyle: {
            backgroundColor: colors.background,
          },
        }}
      />
    </Stack.Navigator>
  )
}
