import React from 'react'
import { View, Text,StatusBar,Dimensions, ScrollView } from 'react-native'
import { StyleSheet,TouchableHighlight,TouchableOpacity,Modal,Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
const scrWidth = Dimensions.get('screen').width;
const scrHeight = Dimensions.get('screen').height;
export const EditPaws = (props: any) => {
  const [BGC, setBGC] = useState('white');
  const [text, setText] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const navigation = useNavigation();
  const { name,Ground,id,value,handleCallBack } = props;
  const nzTime = new Date(value.Time*1000);

  return (
    <View>
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
<ScrollView
showsVerticalScrollIndicator={false}
showsHorizontalScrollIndicator={false}
>
          <Text style={styles.modalText}>Item Information </Text>
          <Text style={styles.modalText}>ID: {id}</Text>
          <Text style={styles.modalText}>Ground: {value.Ground}</Text>
          <Text style={styles.modalText}>Clouds: {value.Clouds}</Text>
          <Text style={styles.modalText}>Ground_Level: {value.Ground_Level}</Text>
          <Text style={styles.modalText}>Humidity: {value.Humidity}</Text>
          <Text style={styles.modalText}>Pressure: {value.Pressure}</Text>
          <Text style={styles.modalText}>Sea_Level: {value.Sea_Level}</Text>
          <Text style={styles.modalText}>Sunrise: {value.Sunrise}</Text>
          <Text style={styles.modalText}>Sunset: {value.Sunset}</Text>
          <Text style={styles.modalText}>Temp: {value.Temp}</Text>
          <Text style={styles.modalText}>Temp_Max: {value.Temp_Max}</Text>
          <Text style={styles.modalText}>Temp_Min: {value.Temp_Min}</Text>
          <Text style={styles.modalText}>Time: {nzTime.getHours()}:{nzTime.getMinutes()}:{nzTime.getSeconds()}</Text>
          <Text style={styles.modalText}>Visibility: {value.Visibility}</Text>
          <Text style={styles.modalText}>Wind_Deg: {value.Wind_Deg}</Text>
          <Text style={styles.modalText}>Wind_Gust: {value.Wind_Gust}</Text>
          <Text style={styles.modalText}>Wind_Speed: {value.Wind_Speed}</Text>
          </ScrollView>
    <View style={{flexDirection:'row'}}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
 
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              // Delete Item 
              handleCallBack(id);
              //Hide Modal
              setModalVisible(!modalVisible)}}
          >
 
            <Text style={styles.textStyle}>Delete Item</Text>
          </Pressable>
          </View>
        </View>
      </View>
    </Modal>
    
    <TouchableOpacity onPress={() => {setModalVisible(true)}}>
    <View style={styles.cardList}>
    <Text>{id}</Text>
  <Text>{name}</Text>
  <Text> {Ground}</Text>
  
  </View>
  </TouchableOpacity>
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
export default EditPaws;