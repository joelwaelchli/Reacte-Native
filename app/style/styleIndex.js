import { StyleSheet } from 'react-native';

export const myStyles = StyleSheet.create({
  
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
  },

  title: {
    fontSize: 48, 
    fontWeight: '900', 
    bottom: 125, 
    textAlign: 'center', 
    color: '#1f1f1f' 
  },

  input: { 
    borderWidth: 1, 
    borderColor: '#bababa', 
    padding: 12, 
    marginBottom: 15, 
    borderRadius: 12, 
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  switchText: { 
    marginTop: 36, 
    color: '#1a73e8', 
    textAlign: 'center', 
    fontWeight: '600' ,
    borderRadius: 12,
  },

  div: {
    marginBottom: 0,
  },

  login: {
    backgroundColor: '#1a73e8',
    color: '#fff',
    padding: 12,
    borderRadius: 20,
    textAlign: 'center',
    fontWeight: '600',
  }

});