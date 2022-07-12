import { StyleSheet,StatusBar } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Carousel from '../components/Carousel';
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <Text style={styles.title}>Quick Selection</Text>


      <Carousel
        style='slide'
        items={[{
          title: ' Food Menu',
        }, {
          title: 'Calendar',
        }, {
          title: 'Something Later',
        }]}
      />
      <Text style={[styles.title,{paddingTop:20}]}>To do</Text>
      <View style={{width:'95%',backgroundColor:'grey',height:'40%',borderRadius:35,overflow:'hidden',margin:5,marginLeft:10}}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft:20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
