import { StyleSheet, TouchableOpacity,FlatList,StatusBar,Dimensions,Pressable,Modal} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import React,{ useEffect, useState  } from 'react';
import { useNavigation,useRoute } from '@react-navigation/native';
import ItemList from '../components/itemList';
const scrWidth = Dimensions.get('screen').width;
const scrHeight = Dimensions.get('screen').height;
export default function ShoppingList( route : any, navigation : any ) {
  const {item} = route.route.params;
  const [state, updateState] = React.useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = React.useState("");
  const [text, setText] = React.useState("");
  const [count, setCount] = useState(0);
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const initialState = [{id:0,name: '', amount: 0, }];
  const [list,setList] = React.useState(initialState);
  useEffect(()=>{
    let data = item;
    for(let i = 0; i < data.length;i++){
       let it : any = initialState;
        if(Object.keys(data[i].ingredients).length != 0){
            for(let j = 0; j  < Object.keys(data[i].ingredients).length; j++){
              setCount((count) => count + 1);
              //console.log(count);
              let item = Object.keys(data[i].ingredients)[j];
              let amount =Object.values(data[i].ingredients)[j];
              it[count] = {id:count,name:item,amount:amount};
              setList(it);             
            }
        }
    }
  },[]);

  return (
    <View style={styles.container}>
      
          <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={[styles.centeredView,{}]}>
        <View style={[styles.modalView,{width:scrWidth*0.9}]}>
          <Text style={styles.modalText}>Add New Item </Text>
 
          <TextInput
             style={{width:scrWidth*0.7,margin:20}}
      label="Item"
      value={text}
      onChangeText={text => {setText(text);}}
    />
              <TextInput
             style={{width:scrWidth*0.7,margin:20}}
      label="Amount"
      value={amount}
      onChangeText={amount => {setAmount(amount);}}
    />
 
    <View style={{flexDirection:'row'}}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              setCount((count) => count + 1);
              let it : any = [{}];
              let item = text;
              let setamount = amount;
              it[count] = {id:count,name:item,amount:setamount};
              //console.log(count);
              console.log(it);
              //setList(it);
            }}
          >
 
            <Text style={styles.textStyle}>Add New Item</Text>
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
      <StatusBar/>
      <Text style={styles.title}>Shopping List</Text>
      <TouchableOpacity onPress={() => {setModalVisible(true)}}>
      <View style={[styles.shopButton,{width:scrWidth*0.8,height:scrHeight*0.05,elevation:10}]}>
        <Text style={{fontWeight:'bold'}}>Add New Item </Text>
      </View>
      </TouchableOpacity>
      
        <FlatList
        data={list}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({item}) =>{
         return(
         <ItemList item={item} />
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
    
  },
  shopButton:{
    backgroundColor:'white',
    borderColor:'black',
   
    margin:10,
    alignItems:'center',
    borderRadius:35,
    justifyContent: "center",
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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    
  },
});
