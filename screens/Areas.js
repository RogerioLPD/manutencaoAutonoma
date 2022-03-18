import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppIntroSlider from 'react-native-app-intro-slider';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default function Organization (){
  const[showHome, setShowHome]= useState(false);

  function renderSlides({item}){
    return(
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
      text: 'EDSON TURNO B',
      title: 'ÁREA 19 PAPEL LADO ESQUERDO',
      image: require('../assets/papel.jpg')
    },
    {
        key: 2,
        text: 'ROGÉRIO TURNO C',
        title: 'ÁREA 20 PAPEL LADO DIREITO',
        image: require('../assets/papel.jpg')
        
      },
      {
        key: 3,
        text: 'ADLER TURNO C',
        title: 'ÁREA 21 ALUMÍNIO/ FILME BOPP',
        image: require('../assets/aluminio.jpg')
      },
      {
        key: 4,
        text: 'PAULO TURNO C',
        title: 'ÁREA 22 WIP LADO ESQUERDO',
        image: require('../assets/wippaulo.jpg')
      },
      {
        key: 5,
        text: 'ADILSON TURNO B',
        title: 'ÁREA 23 WIP LADO DIREITO',
        image: require('../assets/wipadilson.jpg')
      },
      {
        key: 6,
        text: 'SANDRO TURNO B',
        title: 'ÁREA 24 TUBOS E TUBETES',
        image: require('../assets/tubos.jpg')
      },
      {
        key: 7,
        text: 'JOSIMAR TURNO C',
        title: 'ÁREA 25 MATERIAL ADICIONAL ',
        image: require('../assets/adicional.jpg')
      },
      {
        key: 8,
        text: 'AMILTON TURNO C',
        title: 'ÁREA 26 P.A. BIN 501 AO 522',
        image: require('../assets/paamilton.jpg')
      },
      {
        key: 9,
        text: 'MATHEUS TURNO C',
        title: 'ÁREA 27 P.A. BIN 523 AO 544',
        image: require('../assets/pamatheus.jpg')
      },
      {
        key: 10,
        text: 'JONAS TURNO C',
        title: 'ÁREA 28 BIN 40D',
        image: require('../assets/aluminio.jpg')
      },
      {
        key: 11,
        text: 'ANDERSON TURNO C',
        title: 'ÁREA 29 DOCAS 1A 2A 3A',
        image: require('../assets/docaanderson.jpg')
      },
      {
        key: 12,
        text: 'ALISSON TURNO C',
        title: 'ÁREA 30 DOCAS 1 2 3 4 5 6',
        image: require('../assets/docasalisson.jpg')
      },
      {
        key: 13,
        text: 'GESSÉ TURNO C',
        title: 'ÁREA 31 DOCA 8',
        image: require('../assets/Doca8.jpg')
      },

      {
        key: 14,
        text: 'ELOIR TURNO B',
        title: 'ÁREA 32 RUA ARMAZÉM LADO ESQUERDO',
        image: require('../assets/ladoeloir.jpg')
    
      },
      {
        key: 15,
        text: 'PABLO TURNO B',
        title: 'ÁREA 33 RUA ARMAZÉM LADO DIREITO',
        image: require('../assets/ladopablo.jpg')
      },
      {
        key: 16,
        text: 'LEONARDO TURNO B',
        title: 'ÁREA 34 SILOS LADO ESQUERDO',
        image: require('../assets/silos.jpg')
      },
      {
        key: 17,
        text: 'JEFFERSON TURNO B',
        title: 'ÁREA 35 SILOS LADO DIREITO',
        image: require('../assets/silos.jpg')
      },
      {
        key: 18,
        text: 'CLEVERSON TURNO B',
        title: 'ÁREA 36 STRECHADEIRA P.A.',
        image: require('../assets/strechadeiras.jpg')
      },
      {
        key: 19,
        text: 'IVAN TURNO B',
        title: 'ÁREA 37 STRECHADEIRA M.P.',
        image: require('../assets/strechadeiras.jpg')
      },
      
  ];