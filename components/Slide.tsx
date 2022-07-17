import React from 'react'
import { View, Text,Dimensions } from 'react-native'
import { StyleSheet,TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native';
const scrWidth = Dimensions.get('screen').width;
const scrHeight = Dimensions.get('screen').height;
export const Slide = (props: any) => {
  const navigation = useNavigation();
  const { title } = props;
  function ViewCard(title:any){
    if(title.includes('Menu')){
     return navigation.navigate('MenuScreen');
    }
  }
  return (
    
    <View style={[styles.slide,{width:scrWidth*0.95}]} onTouchEnd={() => {ViewCard(title)}} >
      <Text style={styles.slideText }>
        {title}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
    slide: {
      paddingHorizontal: 20,
      paddingBottom: 10,
      paddingTop: 30,
      backgroundColor:'white',
      elevation: 5,
      borderRadius:20,
      borderColor: "#20232a",
      shadowRadius:2,
      shadowOffset:{width:1,height:1},
      shadowColor: 'rgba(0,0,0, .9)',
      marginVertical:10,
      margin:10,
      },
      slideText: {
        width: '100%',
        textAlign: 'left',
        fontSize: 20,
        fontWeight:'bold',
      },
    });
export default Slide;