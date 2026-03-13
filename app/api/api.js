import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const API_URL = 'https://api.maria-db.net'; 

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync('userToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;