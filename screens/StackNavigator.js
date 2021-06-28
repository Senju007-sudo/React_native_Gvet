import React from 'react'
import PropAdd from './PropAdd';
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();


export default function StackNavigator() {
    return (
        <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#9AC4F8",
          },
          headerTintColor: "white",
          headerBackTitle: "Back",
        }}
      >
        <Stack.Screen name="AddProp" component={PropAdd} />
      </Stack.Navigator>
    )
}
