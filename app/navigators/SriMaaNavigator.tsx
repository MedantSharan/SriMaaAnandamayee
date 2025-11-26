/**
 * Sri Maa Main Navigator
 * Simple setup that can be easily integrated into existing AppNavigator
 */

import React, { useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { TabNavigator } from "./TabNavigator"
import { SyncService } from "../services/sync/syncService"
import { NotificationService } from "../services/notifications/notificationService"

export const SriMaaNavigator = () => {
  useEffect(() => {
    initializeApp()
  }, [])

  const initializeApp = async () => {
    try {
      console.log("[App] Initializing Sri Maa app...")

      // Initialize notification service
      // Temporarily disabled to isolate loading issue
      // await NotificationService.initialize()

      // Perform initial data sync
      // Temporarily disabled to isolate loading issue
      // await SyncService.syncAll()

      console.log("[App] Initialization complete!")
    } catch (error) {
      console.error("[App] Initialization error:", error)
    }
  }

  return <TabNavigator />
}

/**
 * Standalone version with NavigationContainer
 * Use this if you want to replace the entire navigation
 */
export const SriMaaApp = () => {
  return (
    <NavigationContainer>
      <SriMaaNavigator />
    </NavigationContainer>
  )
}
