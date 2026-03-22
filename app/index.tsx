import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import api from './api/api';
import { tokenStorage } from './storage/storage';
import { myStyles } from './style/styleIndex';

export default function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const passwordRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      const token = await tokenStorage.getToken(); 
      if (token) {
        router.replace("/(tabs)/home");
      } else {
        setLoading(false);
      }
    };
    checkLogin();
  }, [router]);

  const handleAuth = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Fehler", "Bitte alles ausfüllen.");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/login', { email, password });

      await tokenStorage.saveToken(response.data.token);
      router.replace("/(tabs)/home");

    } catch (error) {
      Alert.alert("Login fehlgeschlagen", (error as Error).message || "Daten prüfen.");
      setLoading(false);
    }
  };

  if (loading && email === '') {
    return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={myStyles.container}>
        <Text style={myStyles.title}>Welcome</Text>

        <TextInput 
          style={myStyles.input} 
          placeholder="Email" 
          value={email} 
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput 
          style={myStyles.input} 
          placeholder="Passwort" 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry
        />
        <TouchableOpacity onPress={handleAuth} disabled={loading}>
          <Text style={myStyles.login}>{loading ? "Lädt..." : "Anmelden"}</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}