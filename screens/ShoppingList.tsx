import { StyleSheet, TouchableOpacity,FlatList,StatusBar,Dimensions} from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import React,{ useEffect, useState  } from 'react';
import { useNavigation,useRoute } from '@react-navigation/native';
const scrWidth = Dimensions.get('screen').width;
const scrHeight = Dimensions.get('screen').height;
export default function ShoppingList( route : any, navigation : any ) {

  const {item} = route.route.params;
  const initialState = [{
    id:0,
    name: '',
    amount: 0,
  }];
  const [list,setList] = React.useState(initialState);
  useEffect(()=>{
    //console.log("--------");
    let data = item;
    
    //let data = JSON.stringify(item);
    //console.log(data.length);
    let count = 0;
    for(let i = 0; i < data.length;i++){
       // console.log(data[i].ingredients);
       // console.log(Object.keys(data[i].ingredients));
       // console.log(Object.keys(data[i])[0]);
       let it : any = initialState;
      
        if(Object.keys(data[i].ingredients).length != 0){
        
            for(let j = 0; j  < Object.keys(data[i].ingredients).length; j++){
              //setList(Object.keys(data[i].ingredients)[j]);  
              //it.push();
              let item = Object.keys(data[i].ingredients)[j];
              let amount =Object.values(data[i].ingredients)[j];
              it[count] = {id:count,name:item,amount:amount};
              setList(it);
              count++;
             // console.log(typeof it);
            }
            //console.log("-------IT-------");
            //console.log(it)
            //list = []; 
            //setList(it);
            
            //console.log("---LIST----");
            //console.log(list);
        }
       // setList(...list,it);
        
    }
    //console.log("--- <-- LIST --> ----");

    //console.log(list);
    //console.log(data[0]);
  },[]);
  return (
    <View style={styles.container}>
      <StatusBar/>
      <Text style={styles.title}>Shopping List</Text>
      
      
        <FlatList
        data={list}
        style={styles.list}
        renderItem={({item}) =>{
         return(
         <View style={{flexDirection:'row',padding:10}}>
         <Text>{item.name}</Text><Text>{item.amount}</Text>
         </View>
         );
        }}
        keyExtractor={item.key}
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
    elevation:10,
    margin:20,
  }
});
