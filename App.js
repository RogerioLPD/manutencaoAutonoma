import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Principal from './screens/Principal';
import Splash from './Open/Splash';


export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'black',
        headerStyle: { backgroundColor: '#00BFFF' },
      }}>
        <Stack.Screen name="MANUTENÇÃO AUTÔNOMA LOGÍSTICA" component={Splash}/>
        <Stack.Screen name="Inicio" component={Principal}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
