import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppIntroSlider from 'react-native-app-intro-slider';


export default function Seguranca() {
  const[showHome, setShowHome]= useState(false);

  function renderSlides({item}){
    return (
      <View style={{flex: 1}}>
        <Image
        source={item.image}
        borderRadius={35}
        style={{
          resizeMode: 'contain',
          height: '75%',
          width: '100%',
          backgroundColor: '#B0C4DE',
        }}
        />
        <Text 
        style={{
          
          fontSize: 25,
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'center',
          backgroundColor: '#B0C4DE',
          

        }}>
          {item.title}
        </Text>
        <Text
        style={{
          backgroundColor: '#B0C4DE',
        }}>
          {item.text}
        </Text>
      </View>
    )
  }


  if(showHome){
    return <text>entrou na Home</text>
  } else{
    return(
      <AppIntroSlider
      style={{
        backgroundColor: '#B0C4DE',
      }}
      renderItem={renderSlides}
      data={slides}
      activeDotStyle={{
        backgroundColor: 'black',
        width: 30
      }}
      />
    )
  }
}

  const slides = [
    {
      key: 1,
      text: '',
      title: '',
      image: require('../assets/seguranca.jpg')
      
    },
  ];
  