import { StyleSheet,FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { MenuDay } from '../components/MenuDay';
import { Dimensions,Pressable  } from 'react-native';
import React,{ useEffect, useState  } from 'react';
import { RootStackScreenProps } from '../types';
const scrWidth = Dimensions.get('screen').width;
const scrHeight = Dimensions.get('screen').height;
import { getFirestore, getDocs, addDoc, doc,onSnapshot,collection } from 'firebase/firestore';
import { step1,step2a,step3a } from '@env';

export default function Menu({ navigation }: RootStackScreenProps<'MenuScreen'>) {
  const [newData, setNewData] = useState<any[]>([]);
  const [state, updateState] = React.useState({});
  const [evelation, updateEve] = React.useState(10);
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const updateMenu = (Menu:any) => {
    console.log("Update Menu");
    setNewData(Menu);
    console.log(newData);
    forceUpdate();
  }
  const eve = () => {
    updateEve(0);
    navigation.navigate('ShoppingList',{item:newData});
    updateEve(10);
  }
  
  const getData = async () =>{
    const db = getFirestore();
    const reference = await getDocs(collection(db,step1,step2a,step3a));
    let DATA  : any = [];
    reference.forEach((doc) => {
      let value = doc.data().Recipe;
      let docRef = {};
      if(value == ""){
        value = "???";
      }
      docRef = {Day:doc.id,Recipe:value};
      DATA.push(docRef);
    })

    let Day = new Date().getDay();
    let newCount = 0;
  let Data : any = [];
  let count = Day;
  let i = 0;
  while(newCount != 7){
    if(DayToNum(DATA[i].Day) == count){
      Data[newCount] = DATA[i];
      newCount++;
      if(count == 6){
        count = 0;
      } else {
        count++;
      }
    }
    if(i == 6){
      i = 0;
    } else {
      i++;
    }
  }
    setNewData(Data);
  }
  /**
   * Converts the String to Day Count, returns the Day count 0 = Sunday, 6 = Saturday
   * Returns 100 if error
   * @param value 
   * @returns 
   */
  const DayToNum = (value : any) => {
    if(value == "Sunday"){
      return 0;
    }else if(value == "Monday"){
      return 1;
    }else if(value == "Tuesday"){
      return 2;
    }else if(value == "Wednesday"){
      return 3;
    }else if(value == "Thursday"){
      return 4;
    }else if(value == "Friday"){
      return 5;
    }else  if(value == "Saturday"){
      return 6;
    } else {
      return 100;
    }
  }
  useEffect(()=>{
    getData(); // Gets the Data from Firebase and Reorders depending on the Day

  },[])
  return (
    <View style={styles.container}>
      <StatusBar/>
      <View style={{height:scrHeight*0.20,width:scrWidth,margin:10,justifyContent:'center',alignItems:'center',marginTop:40}}>
      <Text style={styles.title}>Menu</Text>
      <Text> Click the day, too change the meal for that night</Text>
      <TouchableOpacity onPress={eve}>
      <View style={[styles.shopButton,{width:scrWidth*0.8,height:scrHeight*0.05,elevation:evelation}]}>
        <Text style={{fontWeight:'bold'}}>Get Shopping List </Text>
      </View>
      </TouchableOpacity>
      </View>
      <FlatList style={styles.card}
        data={newData}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({item}) =>{
          return(
             
             <MenuDay Day={item.Day} Recipe={item.Recipe} handleCallBack={updateMenu} MenuData={newData}/> 
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card:{
    flexDirection: 'column',
    padding:20,
    flex:1,
    height:scrHeight*0.90,

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  shopButton:{
    backgroundColor:'white',
    borderColor:'black',
   
    margin:10,
    alignItems:'center',
    borderRadius:35,
    justifyContent: "center",
  }
});
