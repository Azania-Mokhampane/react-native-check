import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen';
export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:true
      }} initialRouteName='Landing Screen'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Landing Screen' component={LandingScreen} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
      
  );
}



