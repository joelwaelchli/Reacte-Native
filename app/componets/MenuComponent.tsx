import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MenuComponent = () => {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => Alert.alert('Home')}>
        <Text style={styles.menuItem}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert('Profil')}>
        <Text style={styles.menuItem}>Profil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert('Einstellungen')}>
        <Text style={styles.menuItem}>Einstellungen</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  menuContainer: {
    padding: 20,
    backgroundColor: '#f4f4f4',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  menuItem: {
    fontSize: 18,
    paddingVertical: 10,
    color: '#333',
  },
});


export default MenuComponent;
