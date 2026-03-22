import { Stack } from 'expo-router'
import React from 'react'
import { StatusBar } from 'react-native'

const RootLayout = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="register" options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="profile" options={{ headerShown: false }}></Stack.Screen>
      </Stack>
    </>
  )
}

export default RootLayout
