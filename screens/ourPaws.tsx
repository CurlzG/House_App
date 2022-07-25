import { StyleSheet, TouchableOpacity,FlatList,Dimensions } from 'react-native';
import React, {useEffect} from 'react';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { getDatabase, ref, onValue, set, child } from 'firebase/database';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
const scrWidth = Dimensions.get('screen').width;
const scrHeight = Dimensions.get('screen').height;
export default function OurPaws({}) {
  const [list, setList]  : any = React.useState([{}]);
  useEffect(()=>{
    const db = getDatabase();
    const reference = ref(db);
    let DATA  : any = []
    onValue(reference, (snapshot) => {
      snapshot.forEach(function(childSnapshot) {
        var temp = {}; 
        var thing = childSnapshot.val();
        for( var it in thing){
         const reference = ref(db,'/'+childSnapshot.key+"/"+it);
         onValue(reference,(snapshot)=>{
          temp = {name: childSnapshot.key, id: it, value:snapshot.val()};
          DATA.push(temp);
         })
        }
    }); }); 
    setList(DATA);
  },[])
  return (
    <View style={styles.container}>
              <FlatList
        data={list}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({item}) =>{
          return(
            <View style={{padding:10, 
              elevation:10,
              margin:20,
              borderRadius:35,  
              width:scrWidth*0.7,
              borderColor: "#20232a",
              alignItems: 'center',
              shadowRadius:2,
              shadowOffset:{width:1,height:1},
              shadowColor: 'rgba(0,0,0, .9)',
              justifyContent: 'center',
              backgroundColor:'white',}}>
         <Text>{item.name}</Text>
         <Text>{item.id}</Text>
         <Text>{item.value.Ground}</Text>
         </View>
         );
        }}
        
      />
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
  list:{
    padding:20,
    flex:1,
    height:scrHeight*0.90,
    width:scrWidth*0.9,
  },
});
