import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Proprietaire from '../screens/Proprietaire'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import 'react-bootstrap'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PropAdd from '../screens/PropAdd';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Proprietaire"  component={Proprietaire} options={{
           title: 'Proprieraires',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="md-people"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}/>


    </Drawer.Navigator>
  );
}

export default DrawerNavigator;