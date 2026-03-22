import { router } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

const Cards = () => {

  const handleAddCard = () => {
    router.push("/(tabs)/addCard");
  };

  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Cards</Text>
        <Button title="Karte hinzufügen" onPress={handleAddCard} />
    </View>
  )
}

export default Cards