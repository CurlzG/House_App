import { StyleSheet,StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';
import EditScreenInfo from '../components/EditScreenInfo';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Text, View } from '../components/Themed';
import React, {useState,useEffect} from 'react';
import { RootTabScreenProps } from '../types';
import Carousel from '../components/Carousel';
import {apiKey,authDomain,databaseURL,projectId,storageBucket,messagingSenderId,measurementId,appId} from '@env';
export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
    // Import the functions you need from the SDKs you need


  

    
    // TODO: Add SDKs for Firebase products that you want to use
    
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    
    // Your web app's Firebase configuration
    
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    
    const firebaseConfig = {
      apiKey: apiKey,
      authDomain: authDomain,
      databaseURL: databaseURL,
      projectId: projectId,
      storageBucket: storageBucket,
      messagingSenderId: messagingSenderId,
      appId: appId,
      measurementId:measurementId
    };
    
    
    // Initialize Firebase
    
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  
  //Look into merge true.
 // firebase.firestore().settings({ experimentalForceLongPolling: true,merge: true });



  const reference = firebase
  .app()
  .database(databaseURL)
  .ref('/users/123');
  useEffect(()=>{
    console.log("Testing");
    const onValueChange = database()
      .ref(`/Temperature2/`)
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
      });
   // test();
   /**  async function test() {
      let example = "Hello World";
      await storeData(example);
      await getData();  
    } **/
    
  },[])
//https://react-native-async-storage.github.io/async-storage/docs/limits/
  const storeData = async (value : any) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
    }
  }
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      console.log(value);
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }

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
