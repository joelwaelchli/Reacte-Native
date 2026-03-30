import { Platform, StyleSheet } from 'react-native';

export const myStyles = StyleSheet.create({
  topSection: {
    paddingTop: 80,
    paddingBottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#fff',
    fontSize: 44,
    fontWeight: 'bold',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 35,
    paddingTop: 50,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  welcomeText: {
    fontSize: 48,
    fontWeight: '900',
    color: '#000',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: Platform.OS === 'ios' ? 16 : 12,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 14,
    backgroundColor: '#fff',
    fontSize: 16,
    fontStyle: 'italic',
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#0056b3',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  forgotPasswordText: {
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 15,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  dividerLine: {
    flex: 1,
    height: 0,
    borderTopWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
  },
  dividerText: {
    color: '#999',
    paddingHorizontal: 15,
    fontSize: 14,
  },
  nfcButton: {
    borderWidth: 2,
    borderColor: '#0056b3',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  nfcButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
  },
  errorText: {
    color: '#d32f2f',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
    fontWeight: '500',
  }
});