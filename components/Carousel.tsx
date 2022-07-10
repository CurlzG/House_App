import React from 'react'
import { View, ScrollView, TouchableOpacity,StyleSheet,Text, Pressable } from 'react-native'
import { Stat } from './Stat'
import { Slide } from './Slide';
export const Carousel = (props: any) => {

  const { items, style } = props;
  const itemsPerInterval = props.itemsPerInterval === undefined
    ? 1
    : props.itemsPerInterval;
  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);

  const init = (width: number) => {
    // initialise width
    setWidth(width);
    // initialise total intervals
    const totalItems = items.length;
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  }

  const getInterval = (offset: number) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset+1 < (width / intervals) * i) {
        //console.log(i);
        return i;
      }
      if (i == intervals) {
       // console.log(i);
        return i;
      }
    }
    return offset
  }

  let bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={[styles.bullet,{opacity:interval===i ? 0.2 : 0.7}]}
      >
        &bull;
      </Text>
    );
  }

  return (
   
    <View style={styles.container}>
      
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ ...styles.scrollView, width: `${100 * intervals}%`,borderRadius:35}}
        showsHorizontalScrollIndicator={false}
        
        onContentSizeChange={(w, h) => init(w)}
        onScroll={data => {
          
          setWidth(data.nativeEvent.contentSize.width);
          //console.log(data.nativeEvent.contentOffset.x);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast"
      >
        {items.map((item: any, index: number) => {
          switch (style) {
            case 'stats':
              return (
                <Stat
                  key={index}
                  label={item.label}
                  value={item.value}
                />
              );
            default:
              return (
                <Slide
                  key={index}
                  title={item.title}
                />
                              );
          }
        })}
      </ScrollView>
      <View style={styles.bullets}>
        {bullets}
      </View>
      
    </View>
  );
}
      /**
       *       <Carousel
        style='stats'
        itemsPerInterval={3}
        items={[{
          label: 'TODAY',
          value: 1,
        }, {
          label: 'THIS WEEK',
          value: 39,
        }, {
          label: 'THIS MONTH',
          value: 120,
        }, {
          label: 'YESTERDAY',
          value: 3,
        }, {
          label: 'LAST WEEK',
          value: 25,
        }, {
          label: 'LAST MONTH',
          value: 175,
        }]}
      />
       */

const styles = StyleSheet.create({
  statsHead: {
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  container: {
    width: '100%',
    backgroundColor: '#fbfbfb',
    borderColor: '#ebebeb',
    borderRadius: 8,
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 5
    },
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  bullets: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 5,
   // opacity: interval === i ? 0.5 : 0.1
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 20,
  }
});
export default Carousel;