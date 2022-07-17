import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { useNavigation,useRoute } from '@react-navigation/native';
export default function ShoppingList( route : any, navigation : any ) {
 // const navigation = useNavigation();
  //const route = useRoute();
  const {item} = route.route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <TouchableOpacity onPress={() => {console.log("--->"+JSON.stringify(item))}} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
