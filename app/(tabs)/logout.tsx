import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { tokenStorage } from '../storage/storage';

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await tokenStorage.removeToken();
    router.replace("/");
  };

  return (
    <TouchableOpacity onPress={handleLogout} style={styles.container}>
      <Text>Logout</Text>
    </TouchableOpacity>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});