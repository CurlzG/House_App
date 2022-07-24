/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome,Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Menu from '../screens/Menu';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Home from '../screens/Home';
import TabTwoScreen from '../screens/TabTwoScreen';
import ShoppingList from '../screens/ShoppingList';
import OurPaws from '../screens/ourPaws';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const Stack = createNativeStackNavigator<RootStackParamList>();  
  const BottomTab = createBottomTabNavigator<RootTabParamList>();
  //const Stack = createNativeStackNavigator<RootStackParamList>(); 
  return (
    <NavigationContainer>
     <BottomTab.Navigator>
      <BottomTab.Screen name="HomeScreen" component={HomeNavigator} options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome name="home" style={{marginBottom:-3}} size={30} color="black" />}}/>
     <BottomTab.Screen name="MenuScreen" component={MenuNavigator} options={{
          title: 'Menu',
          headerShown: false,
          tabBarIcon: () => <Entypo name="clipboard" style={{marginBottom:-3}} size={30} color="black" />}}/>
      <BottomTab.Screen name="PawScreen" component={PawNavigator} options={{
          title: 'Our Paw',
          headerShown: false,
          tabBarIcon: () => <FontAwesome name="paw" style={{marginBottom:-3}} size={30} color="black" />}}/>
       
    </BottomTab.Navigator>
      
    </NavigationContainer>
  );
}

export function HomeNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>(); 

    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> 
          </Stack.Navigator>  
        )}

export function MenuNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>(); 
        
  return (
     <Stack.Navigator >
     <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} /> 
     <Stack.Screen name="ShoppingList" component={ShoppingList} options={{ headerShown: false }}/>
     </Stack.Navigator>  
     )}

     export function PawNavigator() {
      const Stack = createNativeStackNavigator<RootStackParamList>(); 
            
      return (
         <Stack.Navigator >
         <Stack.Screen name="PawMain" component={OurPaws} options={{ headerShown: false }} /> 
         </Stack.Navigator>  
         )}
