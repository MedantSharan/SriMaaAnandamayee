import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { useCustomTheme } from "../theme/useCustomTheme"

export const InstitutionsScreen = () => {
  const { colors } = useCustomTheme()
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={{ color: colors.text }}>Institutions & Services - TODO: Implement</Text>
    </View>
  )
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 20 } })
