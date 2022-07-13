import React from 'react'
import { View, Text,StatusBar,Dimensions } from 'react-native'
import { StyleSheet,TouchableHighlight,TouchableOpacity,Modal,Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
export const MenuDay = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = React.useState("");
  const [SuggestionRecipe,setSuggestionRecipe] = React.useState("---");
  const [SuggestedConfirmed,setSuggestedConfirmed] = React.useState("---");
  const navigation = useNavigation();
  const { Day,Recipe } = props;
  const scrWidth = Dimensions.get('screen').width;
  const scrHeight = Dimensions.get('screen').height;
  const DATA = [
    {
      Recipe: 'Fish and Chips',
    },
    {
      Recipe: 'Pie',
    },
    {
      Recipe: 'Bacon & Egg Pie',
      
    },
    {
      Recipe: 'Pasta',
    },
    {
      Recipe: '$10 Pasta',
    },
    {
      Recipe: 'Ramen',
    },
    {
      Recipe: 'Curry',
    },
    {
      Recipe: 'Stir Fry',
    },
    {
      Recipe: 'Chips',
    },
    {
      Recipe: 'Kebabs',
    },
    {
      Recipe: 'Turkish Wraps',
    },
    {
      Recipe: 'Pizza',
    },
    {
      Recipe: 'Lamb Curry',
    },
   
  ];

  function updateSuggestion(text:string){
    let Select = "";  
    let score = [...text];
    let count = 0;
    console.log(score);
    for(let i = 0; i < DATA.length; i++){
          console.log(DATA[i].Recipe);
          Array.prototype.map.call(DATA[i].Recipe, eachLetter => {
            count==0; 
            for(let j = 0; j < score.length; j++){
              if(score[j] == eachLetter[j]){
                console.log(eachLetter[j])
                count++;
                if(count == score.length){
                  console.log('-->' + DATA[i].Recipe)
                  setSuggestionRecipe(DATA[i].Recipe);
                  break;
                }
              } 
              
            }
            //console.log(eachLetter)
          });
          //console.log(DATA[i].Recipe);
      }
  }
  return (
    <View> 
    <View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {

        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={[styles.modalView,{width:scrWidth*0.9}]}>
          <Text style={styles.modalText}>Select Recipes </Text>
          <Text style={styles.modalText}>Type in the recipe to select it </Text>
          <TextInput
             style={{width:scrWidth*0.7}}
      label="Recipe"
      value={text}
      onChangeText={text => {setText(text);updateSuggestion(text)}}
    />
    <View style={{height:scrHeight*0.1}}>
    <Text style={{padding:20,fontWeight:'bold'}}> is it <Text onPress={() => {setSuggestedConfirmed(SuggestionRecipe)}}>  {SuggestionRecipe} </Text> </Text>
    <Text> Selected: {SuggestedConfirmed}</Text>
    </View>
    <View style={{flexDirection:'row',}}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
 
            <Text style={styles.textStyle}>Set Recipe</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
 
            <Text style={styles.textStyle}>Cancel</Text>
          </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  </View>
    <View style={styles.slide} onTouchEnd={() => {setModalVisible(true)}}>
     <StatusBar/>
      <Text style={styles.slideText}>
        {Day}
      </Text>
      <Text style={styles.slideText}>
        {Recipe}
      </Text>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
    slide: {
      marginTop: StatusBar.currentHeight || 0,

      backgroundColor:'green',
      elevation: 8,
      borderRadius:15,
      alignItems: 'center',
      justifyContent: 'center',
      padding:20
      },
      slideText: {
        fontSize: 20,
        fontWeight:'bold'
      },  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
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
  }
    });
export default MenuDay;