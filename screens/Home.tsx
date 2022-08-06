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
import { api_key,authDomain,databaseURL,projectId,storageBucket,messagingSenderId,appId,measurementId } from "@env" 
export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
    useEffect(()=>{
      
    },[])  


    const firebaseConfig = {
      apiKey: api_key,
      authDomain: authDomain,
      databaseURL: databaseURL,
      projectId: projectId,
      storageBucket: storageBucket,
      messagingSenderId: messagingSenderId,
      appId: appId,
      measurementId: measurementId
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
