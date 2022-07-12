import { StyleSheet,FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { MenuDay } from '../components/MenuDay';


const DATA = [
  {
    Day: 'Monday',
   
  },
  {
    Day: 'Tuesday',
 
  },
  {
    Day: 'Wedensday',

  },
];


export default function Menu() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) =>{
          return(
            <MenuDay Day={item.Day}/>
          );
        }}
        keyExtractor={item => item.Day}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
