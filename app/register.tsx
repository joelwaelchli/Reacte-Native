import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import api from './api/api';
import { myStyles } from './style/styleIndex';

export default function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const passwordRef = useRef(null);
  const router = useRouter();

  const handleRegister = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Fehler", "Bitte alles ausfüllen.");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/register', { email, password });
      router.replace("/(tabs)/home");

    } catch (error) {
      Alert.alert("Registrierung fehlgeschlagen", (error as Error).message || "Daten prüfen.");
      setLoading(false);
    }
  };

  if (loading && email === '') {
    return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={[myStyles.top, { flexGrow: 1 }]}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={myStyles.logoText}>Register</Text>
        <TextInput 
          style={myStyles.input} 
          placeholder="Email" 
          value={email} 
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput 
          ref={passwordRef}
          style={myStyles.input} 
          placeholder="Passwort" 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry
        />
        <TouchableOpacity onPress={handleRegister} disabled={loading}>
          <Text style={myStyles.loginButton}>{loading ? "Lädt..." : "Registrieren"}</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}