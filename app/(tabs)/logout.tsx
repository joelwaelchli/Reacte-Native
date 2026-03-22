import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { StyleSheet } from 'react-native';

const logout = () => {
const router = useRouter();

    const logout = async () => {
      
      await SecureStore.deleteItemAsync('userToken');
      router.replace("/");
    };

  return (
    logout()
  )
}

export default logout

const styles = StyleSheet.create({})