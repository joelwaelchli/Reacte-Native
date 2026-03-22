import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

export const tokenStorage = {
  async saveToken(token) {
    if (Platform.OS === 'web') {
      localStorage.setItem('userToken', token);
    } else {
      await SecureStore.setItemAsync('userToken', token);
    }
  },

  async getToken() {
    if (Platform.OS === 'web') {
      return localStorage.getItem('userToken');
    } else {
      return await SecureStore.getItemAsync('userToken');
    }
  },

  async removeToken() {
    if (Platform.OS === 'web') {
      localStorage.removeItem('userToken');
    } else {
      await SecureStore.deleteItemAsync('userToken');
    }
  }
};