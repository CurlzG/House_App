import React from 'react'
import { View, Text,StatusBar,Dimensions } from 'react-native'
import { StyleSheet,TouchableHighlight,TouchableOpacity,Modal,Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import Menu from '../screens/Menu';
export const MenuDay = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = React.useState("");
  const [SuggestionRecipe,setSuggestionRecipe] = React.useState("---");
  const [SuggestedConfirmed,setSuggestedConfirmed] = React.useState("---");
  const navigation = useNavigation();
  const { Day,Recipe,MenuData,handleCallBack } = props;
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
    let score = [];
    let count = 0;

    for(let i = 0; i < DATA.length;i++){
      if(DATA[i].Recipe.includes(text)){
        score[count] = DATA[i].Recipe;
        count++;
      }
      let short = 100;
      let answer = "";
      for(let j = 0; j < score.length;j++){
        if(short >= score[j].length){
          short = score[j].length;
          answer = score[j];
        }
      }
      setSuggestionRecipe(answer);

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
    <View style={{height:scrHeight*0.2}}>
    <Text style={{padding:20}}> is it <Text style={{fontSize:20,fontWeight:'bold'}} onPress={() => {setSuggestedConfirmed(SuggestionRecipe)}}>  {SuggestionRecipe} </Text> </Text>
    <Text style={{fontWeight:'bold'}}> Selected: {SuggestedConfirmed}</Text>
    </View>
    <View style={{flexDirection:'row',}}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              for(let i = 0;i < MenuData.length; i++){
                if(MenuData[i].Day == Day){
                    MenuData[i].Recipe = SuggestedConfirmed;
                }
              }
              setModalVisible(!modalVisible)
              handleCallBack(MenuData);
              //console.log(MenuData);
            }}
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
    <View style={[styles.slide,{width:scrWidth*0.8}]} onTouchEnd={() => {setModalVisible(true);setText('')}}>
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