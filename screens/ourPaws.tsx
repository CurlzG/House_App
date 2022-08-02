import { StyleSheet, TouchableOpacity,FlatList,Dimensions,ActivityIndicator } from 'react-native';
import React, {useEffect} from 'react';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { getDatabase, ref, onValue, set, child } from 'firebase/database';
import { OurItem } from '../components/ourItems';
import { getFirestore, setDoc, doc,onSnapshot } from 'firebase/firestore';
const scrWidth = Dimensions.get('screen').width;
const scrHeight = Dimensions.get('screen').height;
export default function OurPaws(route : any, navigation : any ) {
  const [list, setList]  : any = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  useEffect(() =>{
    console.log("-------STARTING---------");
    
    async function data(){
      console.log("DATA")
      let DATA  : any = [];
      let temp : any = [{}];
      try{
        const place = getDatabase();
        const reference = ref(place);
        return onValue(reference, (snapshot) => {
          console.log("SnapShot");
          snapshot.forEach(recSnapShot => {
          console.log(recSnapShot.key); 
           for(let i in recSnapShot.val()){
              console.log(i);
              const reference = ref(place,'/'+recSnapShot.key+"/"+i);
              onValue(reference,(rec) => {
                  
                  let temp = {name:recSnapShot.key, id:i,value:rec.val()}
                  DATA.push(temp);
                  console.log(DATA.length);
                  setList(DATA);
              }, {
                onlyOnce: true
              })
            }
          });
        
        
          console.log(DATA);
        }, {
          onlyOnce: true
        })
      } catch(error){
        console.log(error);
      }
      

    }

    try{
      data();

    } catch(error){
      console.log(error);
    } 

   console.log("-------ENDING---------");
  //setList(DATA);
  return () => {
   
    data();

  }
  },[]);

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
          <Text>{item.id}</Text>
         );
        }}
        keyExtractor={(item) => item.key + '' + item.id}
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
  cardList:{
    padding:10, 
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
    backgroundColor:'white',
  }
});
