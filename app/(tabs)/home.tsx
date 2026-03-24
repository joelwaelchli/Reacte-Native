import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { tokenStorage } from '../storage/storage';

interface CustomJwtPayload extends JwtPayload {
  id?: number;
}

const AuthCheckScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkUserToken = async () => {
      try {
        const token = await tokenStorage.getToken();

        if (!token) {
          router.replace("/");
        } else {
          const decoded = jwtDecode<CustomJwtPayload>(token);
          const userId = decoded.id; 
          console.log("Gefundene User-ID:", userId);
          router.replace("/(tabs)/home");
        }
      } catch (error) {
        console.error("Fehler beim Abfragen des Tokens", error);
        router.replace("/");
      }
    };

    checkUserToken();
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
    </View>
  );
};

export default AuthCheckScreen;