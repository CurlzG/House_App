import { StyleSheet, TouchableOpacity,FlatList,Dimensions,ActivityIndicator,Modal,Pressable, StatusBar} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import React, {useEffect} from 'react';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { getDatabase, ref, onValue, set, child, remove} from 'firebase/database';
import { OurItem } from '../components/ourItems';
import { getFirestore, setDoc, addDoc, doc,onSnapshot,collection } from 'firebase/firestore';
const scrWidth = Dimensions.get('screen').width;
const scrHeight = Dimensions.get('screen').height;
export default function OurPaws(route : any, navigation : any ) {
  const [list, setList]  : any = React.useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("");
  useEffect(() =>{ 
    async function data(){
      let DATA  : any = [];
      try{
        const place = getDatabase();
        const reference = ref(place);
        return onValue(reference, (snapshot) => {
          snapshot.forEach(recSnapShot => {
           for(let i in recSnapShot.val()){
              const reference = ref(place,'/'+recSnapShot.key+"/"+i);
              onValue(reference,(rec) => {
                  
                  let temp = {name:recSnapShot.key, id:i,value:rec.val()}
                  DATA.push(temp);
                  setList(DATA);
              }, {
                onlyOnce: true
              })
            }
          });
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
  return () => {
    data();
  }
  },[]);
 const addToBase =async () => {
  try {
    const db = getFirestore();
    let docRef = {};
    for(let i = list.length-1; i< list.length;i++){
      console.log(list[i]);
      docRef = {id:list[i].id,name:list[i].name,Clouds:list[i].value.Clouds,Ground:list[i].value.Ground,Ground_Level:list[i].value.Ground_Level,
        Humidity:list[i].value.Humidity,Pressure:list[i].value.Pressure,Sea_Level:list[i].value.Sea_Level,
        Sunrise:list[i].value.Sunrise,Sunset:list[i].value.Sunset,Temp:list[i].value.Temp,Temp_Max:list[i].value.Temp_Max,
        Temp_Min:list[i].value.Temp_Min,Time:list[i].value.Time,Visibility:list[i].value.Visibility,Wind_Deg:list[i].value.Wind_Deg,
        Wind_Gust:list[i].value.Wind_Gust,Wind_Speed:list[i].value.Wind_Speed
      };
      const dbRef = collection(db, 'Recordings');
      await addDoc(dbRef,docRef);
      const place = getDatabase();
      const reference = ref(place, "/" +  list[i].name + "/" + list[i].id);
      await remove(reference);      
    }



  } catch (e) {
    console.error("Error adding document: ", e);
  }
 }
  return (
    <View style={styles.container}>
      <StatusBar/>
      <Button mode="contained" onPress={addToBase}>
    Add To Firebase
  </Button>
              <FlatList
        data={list}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({item}) =>{
          
          return(
            <TouchableOpacity onPress={() => {setModalVisible(true)}}>
            <View style={styles.cardList}>
          <Text>{item.id}</Text>
          <Text> {item.name}</Text>
          <Text> {item.value.Ground}</Text>
          </View>
          </TouchableOpacity>
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
    marginTop: StatusBar.currentHeight || 0,
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
  },  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginRight:20
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    
  },
});
