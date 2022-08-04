import React from 'react'
import { View, Text,StatusBar,Dimensions } from 'react-native'
import { StyleSheet,TouchableHighlight,TouchableOpacity,Modal,Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
const scrWidth = Dimensions.get('screen').width;
const scrHeight = Dimensions.get('screen').height;
export const editPaws = (props: any) => {
  const [BGC, setBGC] = useState('white');
  const navigation = useNavigation();
  const { name,Ground,value } = props;


  return (
    <View style={styles.centeredView}>
         <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{Ground}</Text>
      <Text style={styles.title}>{value}</Text>
         </View>
   
  );
}
const styles = StyleSheet.create({
  slide: {
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor:'white',
      elevation: 5,
      borderRadius:20,
      borderColor: "#20232a",
      alignItems: 'center',
      shadowRadius:2,
      shadowOffset:{width:1,height:1},
      shadowColor: 'rgba(0,0,0, .9)',
      justifyContent: 'center',
      marginHorizontal:5,
      marginVertical:5,
      padding:20
      },
  slideText: {
        fontSize: 20,
        fontWeight:'bold'
      },  
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    
  },
  modalView: {
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
  },    cardList:{
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
  },title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
    });
export default editPaws;