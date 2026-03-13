import { Tabs } from 'expo-router'
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

export default class TabsLayout extends Component {
  render() {
    return (
      <Tabs>
        <Tabs.Screen name="home"/>
        <Tabs.Screen name="add" />
        <Tabs.Screen name="profile" />
      </Tabs>
    )
  }
}

const styles = StyleSheet.create({})