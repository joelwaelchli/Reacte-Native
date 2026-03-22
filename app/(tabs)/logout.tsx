import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import { tokenStorage } from '../storage/storage';

const logout = () => {
const router = useRouter();

    const logout = async () => {
      
      await tokenStorage.removeToken();
      router.replace("/");
    };

  return (
    logout()
  )
}

export default logout

const styles = StyleSheet.create({})