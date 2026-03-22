import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#0051ff',
      tabBarInactiveTintColor: '#666',
      tabBarStyle: {
        backgroundColor: '#fff',
        height: 82,
        paddingBottom: 10,
      },
      tabBarLabelStyle: {
        fontSize: 10,
      },
    }}>
      <Tabs.Screen name="home" options={{
        title: "Home",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-outline" size={size} color={color} />
        )
      }} />
      <Tabs.Screen name="cards" options={{
        title: "Karten",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="albums-outline" size={size} color={color} />
        )
      }} />
      <Tabs.Screen name="add" options={{
        title: "Neu",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="duplicate-outline" size={size} color={color} />
        )
      }} />
      <Tabs.Screen name="profile" options={{
        title: "Profil",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-outline" size={size} color={color} />
        )
      }} />
      <Tabs.Screen name="logout" options={{
        title: "Logout",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="log-out-outline" size={size} color={color} />
        )
      }} />
    </Tabs>
  )
}