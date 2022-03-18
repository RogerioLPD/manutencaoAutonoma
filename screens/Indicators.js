import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppIntroSlider from 'react-native-app-intro-slider';


export default function Indicators() {
  const[showHome, setShowHome]= useState(false);

  function renderSlides({item}){
    return (
      <View style={{flex: 1}}>
        <Image
        source={item.image}
        zoomEnabled={true}
        borderRadius={15}
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
          color: 'red',
          textAlign: 'center',
          backgroundColor: '#B0C4DE',
          

        }}>
          {item.title}
        </Text>
        <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
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
      title: 'CONTRATO',
      image: require('../assets/kpi.png')
    },
    {
      key: 2,
      text: 'DEVEMOS MANTER OS 5 ITENS DO NOSSO CONTRATO DENTRO DO TARGET',
      title: 'MANTER DENTRO DO TARGET',
      image: require('../assets/evolução.png')
    },
    {
      key: 3,
      text: '',
      title: '',
      image: require('../assets/1.jpg')
    },
    
    {
      key: 4,
      text: '',
      title: '',
      image: require('../assets/2.jpg')
    },
    
    {
      key: 5,
      text: '',
      title: '',
      image: require('../assets/3.jpg')
    },
    
    {
      key: 6,
      text: '',
      title: '',
      image: require('../assets/4.jpg')
    },
    
    {
      key: 7,
      text: '',
      title: '',
      image: require('../assets/5.jpg')
    },
    
    {
      key: 8,
      text: '',
      title: '',
      image: require('../assets/6.jpg')
    },
    
    {
      key: 9,
      text: '',
      title: '',
      image: require('../assets/7.jpg')
    },
    
    {
      key: 10,
      text: '',
      title: '',
      image: require('../assets/8.jpg')
    },
    
  ];
