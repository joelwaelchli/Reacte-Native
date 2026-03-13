import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import api from './api/api';
import { myStyles } from './style/styleIndex';

export default function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const passwordRef = useRef<TextInput>(null);
  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      const token = await SecureStore.getItemAsync('userToken');
      if (token) {
        router.replace("/(tabs)/profile");
      } else {
        setLoading(false); 
      }
    };
    checkLogin();
  }, []);

  const handleAuth = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Eingabe ungültig", "Bitte fülle alle Felder aus.");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post('/login', { email, password });
      await SecureStore.setItemAsync('userToken', response.data.token);
      router.replace("/(tabs)/profile");

    } catch (error: any) {
      const statusCode = error.response?.status;
      if (statusCode === 401 || statusCode === 403) {
        Alert.alert("Login fehlgeschlagen", "Benutzername oder Passwort stimmt nicht.");
      } else {
        Alert.alert("Fehler", "Anmeldung aktuell nicht möglich.");
      }
      setLoading(false);
    }
  };


  if (loading && email === '') {
    return (
      <ActivityIndicator size="large" color="#1a73e8" style={{ flex: 1, justifyContent: 'center' }} />
    );
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={myStyles.container}>
        <Text style={myStyles.title}>Welcome</Text>
        <Text style={myStyles.div}></Text>

        <TextInput 
          style={myStyles.input} 
          placeholder="Email" 
          onChangeText={setEmail} 
          value={email}
          autoCapitalize="none"
          editable={!loading}
          onSubmitEditing={() => passwordRef.current?.focus()}
          blurOnSubmit={false}
          returnKeyType="next"
        />

        <TextInput 
          ref={passwordRef}
          style={myStyles.input} 
          placeholder="Passwort" 
          secureTextEntry
          onChangeText={setPassword} 
          value={password}
          editable={!loading}
          returnKeyType="done"        
        />
 
        {loading ? (
          <ActivityIndicator size="large" color="#1a73e8" />
        ) : (
          <TouchableOpacity onPress={handleAuth}>
            <Text style={myStyles.login}>Anmelden</Text>
          </TouchableOpacity>
        )}
        
        <Text 
          style={[myStyles.switchText, { opacity: loading ? 0.5 : 1 }]} 
          onPress={() => !loading && router.push("/register")}
        >
          {"Noch kein Konto? Hier registrieren"}
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}