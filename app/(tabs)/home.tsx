import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { Text, TouchableOpacity, View } from 'react-native';
import { myStyles } from '../style/styleIndex';

export default function ProfileScreen() {
  const router = useRouter();

  const logout = async () => {
    
    await SecureStore.deleteItemAsync('userToken');
    router.replace("/");
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity style={myStyles.switchText} onPress={logout}>
        <Text style={myStyles.switchText}>Abmelden</Text>
      </TouchableOpacity>
    </View>
  );
}