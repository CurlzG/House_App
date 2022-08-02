import { StyleSheet,StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';
import EditScreenInfo from '../components/EditScreenInfo';
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { Text, View } from '../components/Themed';
import { initializeApp } from 'firebase/app';

import React, {useState,useEffect} from 'react';
import { RootTabScreenProps } from '../types';
import Carousel from '../components/Carousel';
//import {REACT_APP_apiKey,REACT_APP_authDomain,REACT_APP_databaseURL,REACT_APP_projectId,REACT_APP_storageBucket,REACT_APP_messagingSenderId,REACT_APP_measurementId,REACT_APP_appId} from '@env';
export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
    useEffect(()=>{
      //console.log(REACT_APP_apiKey);
    },[])  


    const firebaseConfig = {
      apiKey: "AIzaSyDNIWUpmwre58BRMLVQ0uM6YW2kr7m_AVs",
      authDomain: "testing-paws.firebaseapp.com",
      databaseURL: "https://testing-paws-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "testing-paws",
      storageBucket: "testing-paws.appspot.com",
      messagingSenderId: "7735671338",
      appId: "1:7735671338:web:5e2222d0402b418d232153",
      measurementId: "G-50EKEMJQ6V"
    };
     
     
    initializeApp(firebaseConfig); 
  return (
    <View style={styles.container}>
      <StatusBar/>
      <Text style={styles.title}>Quick Selection</Text>


      <Carousel
        style='slide'
        items={[{
          title: ' Food Menu',
        }, {
          title: 'Calendar',
        }, {
          title: 'Something Later',
        }]}
      />
      <Text style={[styles.title,{paddingTop:20}]}>To do</Text>
      <View style={{width:'95%',backgroundColor:'grey',height:'40%',borderRadius:35,overflow:'hidden',margin:5,marginLeft:10}}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft:20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
