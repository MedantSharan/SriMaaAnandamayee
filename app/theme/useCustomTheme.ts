/**
 * Custom Theme Hook
 * Provides theme colors - simplified version
 */

export interface CustomTheme {
  colors: {
    primary: string
    accent: string
    background: string
    surface: string
    text: string
    textSecondary: string
    error: string
    success: string
    warning: string
    border: string
  }
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export const useCustomTheme = (): CustomTheme => {
  return {
    colors: {
      primary: "#FF6B35",
      accent: "#F7931E",
      background: "#FFFFFF",
      surface: "#F5F5F5",
      text: "#1A1A1A",
      textSecondary: "#666666",
      error: "#DC3545",
      success: "#28A745",
      warning: "#FFC107",
      border: "#E0E0E0",
    },
    isDarkMode: false,
    toggleDarkMode: () => {},
  }
}
