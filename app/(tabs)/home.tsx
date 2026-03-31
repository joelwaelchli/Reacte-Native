import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { tokenStorage } from '../storage/storage';

interface CustomJwtPayload extends JwtPayload {
  id?: number;
}

const AuthCheckScreen = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = React.useState<number | undefined>(undefined);

  useEffect(() => {
    const checkUserToken = async () => {
      try {
        const token = await tokenStorage.getToken();

        if (!token) {
          router.replace("/");
        } else {
          const decoded = jwtDecode<CustomJwtPayload>(token);
          const id = decoded.id;
          setUserId(id);
          console.log("Gefundene User-ID:", id);
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
        <View>
          <Text style={{ fontSize: 18, color: '#000000' }}>Überprüfe Authentifizierung...</Text>
          <ActivityIndicator></ActivityIndicator>
          <Text>ID: {userId}</Text>
        </View>
    </View>
  );
};

export default AuthCheckScreen;