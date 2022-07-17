import { StyleSheet,FlatList, StatusBar, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { MenuDay } from '../components/MenuDay';
import { Dimensions,Pressable  } from 'react-native';
import React,{ useEffect, useState  } from 'react';
import { RootStackScreenProps } from '../types';
const scrWidth = Dimensions.get('screen').width;
const scrHeight = Dimensions.get('screen').height;
const DATA = [
  {
    Day: 'Monday',
    Recipe: 'Fish and Chips',
    DayGone: false
  },
  {
    Day: 'Tuesday',
    Recipe: 'Pie',
    DayGone: false
  },
  {
    Day: 'Wednesday',
    Recipe: '???',
    DayGone: false
  },
  {
    Day: 'Thursday',
    Recipe: 'Ramen',
    DayGone: false
  },
  {
    Day: 'Friday',
    Recipe: 'Takeaways',
    DayGone: false
  },
  {
    Day: 'Saturday',
    Recipe: 'Tacos',
    DayGone: false
    
  },
  {
    Day: 'Sunday',
    Recipe: 'Nacho',
    DayGone: false
  },
];


export default function Menu({ navigation }: RootStackScreenProps<'MenuScreen'>) {
  const [newData, setNewData] = useState(DATA);
  const [state, updateState] = React.useState({});
  const [evelation, updateEve] = React.useState(10);
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const updateMenu = (Menu:any) => {
    console.log("Update Menu");
    setNewData(Menu);
    console.log(newData);
    forceUpdate();
    //return setNewData(Menu);
  }
  const eve = () => {
    updateEve(0);
    console.log(newData);
    navigation.navigate('ShoppingList',{item:newData});
    updateEve(10);
  }
  
  useEffect(()=>{
    
    //console.log("Nope");
    let Day = new Date().getDay();
    let newCount = 0;
    let newDataLess = [];
    let Data = [];
    for(let i = 0; i < DATA.length;i++){
      if(i >= (Day-1)){
        //console.log(DATA[i-1].Day);
        Data[newCount] = DATA[i]; 
        newCount++;
      }
    if(i < (Day-1)){
      newDataLess[i] = DATA[i];
    }
      
    }
    Data = [...Data,...newDataLess];
    //console.log(Data);
    setNewData(Data);
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
