import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppIntroSlider from 'react-native-app-intro-slider';


export default function Forklift() {
  const[showHome, setShowHome]= useState(false);

  function renderSlides({item}){
    return (
      <View style={{flex: 1}}>
        <Image
        source={item.image}
        borderRadius={10}
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
      title: 'TIME',
      image: require('../assets/empilhadeira.png')
      
    },
    {
      key: 2,
      text: '',
      title: '',
      image: require('../assets/area1.jpg')
    },
    {
      key: 3,
      text: '',
      title: '',
      image: require('../assets/area2.jpg')
    },
    {
      key: 4,
      text: '',
      title: '',
      image: require('../assets/Area3.png')
    },
    {
      key: 5,
      text: '',
      title: '',
      image: require('../assets/area4.jpg')
    },
    {
      key: 6,
      text: '',
      title: '',
      image: require('../assets/Area5.png')
    },
    {
      key: 7,
      text: '',
      title: '',
      image: require('../assets/Area6.png')
    },
    {
      key: 8,
      text: '',
      title: '',
      image: require('../assets/Area7.png')
    },
    {
      key: 9,
      text: '',
      title: '',
      image: require('../assets/Area8.png')
    },
    {
      key: 10,
      text: '',
      title: '',
      image: require('../assets/Area11.png')
    },
    {
      key: 11,
      text: '',
      title: '',
      image: require('../assets/Area12.png')
    },
    {
      key: 12,
      text: '',
      title: '',
      image: require('../assets/Area13.png')
    },
    {
      key: 13,
      text: '',
      title: '',
      image: require('../assets/Area14.png')
    },
    {
      key: 14,
      text: '',
      title: '',
      image: require('../assets/Area17.png')
    },
    {
      key: 15,
      text: '',
      title: '',
      image: require('../assets/Area18.png')
    },
    
  ];

      