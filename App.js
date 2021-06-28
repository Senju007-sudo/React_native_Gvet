import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Proprietaires from'./screens/Home';
import Proprietaire from'./screens/Proprietaire';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import 'react-bootstrap'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack'
import PropAdd from './screens/PropAdd';
import DrawerNavigation from'./screens/DrawerNavigation'




const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
        <DrawerNavigation/>
    </NavigationContainer>
  );
};

export default App;
