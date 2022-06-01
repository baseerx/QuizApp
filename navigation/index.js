import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Paper from '../screens/Paper';
import React from 'react';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Paper" component={Paper} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}
export default MyStack