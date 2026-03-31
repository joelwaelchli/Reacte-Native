
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import api from './api/api';
import { tokenStorage } from './storage/storage';
import { myStyles } from './style/styleIndex';

export default function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
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
    setErrorMsg('');
    if (!email.trim() || !password.trim()) {
      setErrorMsg("Bitte alles ausfüllen.");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/login', { email, password });

      await tokenStorage.saveToken(response.data.token);
      router.replace("/(tabs)/home");

    } catch (error: any) {
      setLoading(false);

      if (error.response) {
        setErrorMsg(error.response.data?.message || "Benutzername oder Passwort falsch.");
      } else if (error.request) {
        setErrorMsg("Der Server ist aktuell nicht erreichbar. Bitte überprüfe deine Internetverbindung.");
      } else {
        setErrorMsg(error.message || "Ein unerwarteter Fehler ist aufgetreten.");
      }
    }
  };

  if (loading && email === '') {
    return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#2861d3', alignItems: 'center' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
        style={{ flex: 1, width: '100%', maxWidth: 700 }}
      >
        <View style={{ flex: 1, width: '100%' }}>
          <View style={myStyles.top}>
            <Text style={myStyles.logoText}>JL-Trac</Text>
          </View>

          <View style={myStyles.bottomSection}>
            <ScrollView
              contentContainerStyle={[myStyles.scrollContent, { flexGrow: 1 }]}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              bounces={false}
            >
              <Text style={myStyles.welcomeText}>Welcome</Text>

            <TextInput
              style={myStyles.input}
              placeholder="Username"
              placeholderTextColor="#888"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
            <TextInput
              style={myStyles.input}
              placeholder="Passwort"
              placeholderTextColor="#888"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity style={myStyles.loginButton} onPress={handleAuth} disabled={loading}>
              <Text style={myStyles.loginButtonText}>{loading ? "Lädt..." : "Login"}</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={myStyles.forgotPasswordText}>Passwort vergessen?</Text>
            </TouchableOpacity>

            <View style={myStyles.dividerContainer}>
              <View style={myStyles.dividerLine} />
              <Text style={myStyles.dividerText}>Oder einloggen mit</Text>
              <View style={myStyles.dividerLine} />
            </View>

            <TouchableOpacity style={myStyles.nfcButton}>
              <Text style={myStyles.nfcButtonText}>NFC</Text>
            </TouchableOpacity>

            {errorMsg ? (
              <Text style={myStyles.errorText}>{errorMsg}</Text>
            ) : null}
          </ScrollView>
        </View>
      </View>
      </KeyboardAvoidingView>
    </View>
  );
}