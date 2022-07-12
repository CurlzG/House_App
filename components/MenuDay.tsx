import React from 'react'
import { View, Text,StatusBar } from 'react-native'
import { StyleSheet,TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native';
export const MenuDay = (props: any) => {
  const navigation = useNavigation();
  const { Day } = props;

  return (
    <View style={styles.slide}>
     <StatusBar/>
      <Text style={styles.slideText}>
        {Day}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
    slide: {
      marginTop: StatusBar.currentHeight || 0,
      flex:1,
      backgroundColor:'green',
      width:'100%',
      height:'100%',
      margin:20
      },
      slideText: {
        fontSize: 20,
        fontWeight:'bold'
      },
    });
export default MenuDay;