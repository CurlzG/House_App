import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet,TouchableHighlight } from 'react-native'
import Navigation from '../navigation';

export const Slide = (props: any) => {

  const { title } = props;
  const click = () => {
    console.log("hello")
  }
  return (
    
    <View style={styles.slide} onTouchEnd={() => {}} >
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
        padding:20,
        flexBasis: '50%',
        flex: 1,
        maxWidth: '50%',
        display: 'flex',
        backgroundColor:'#66ff99',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius:35,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        height: 100,
        width:130,
        minWidth:130,
        
      },
      slideText: {
        width: '100%',
        textAlign: 'left',
        fontSize: 20,
        fontWeight:'bold'
      },
    });
export default Slide;