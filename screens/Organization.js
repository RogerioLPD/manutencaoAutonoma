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
          color: 'black',
          textAlign: 'center',
          backgroundColor: '#B0C4DE',
          

        }}>
          {item.title}
        </Text>
        <Text
        style={{
          fontSize: 18,
          color: 'red',
          paddingTop: 15,
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
      title: 'MEMBROS DO TIME',
      image: require('../assets/team.png')
    },
    {
        key: 2,
        text: '',
        title: '>',
        image: require('../assets/Turnoa.png')
        
      },
      {
        key: 3,
        text: '',
        title: 'CLEVERSON',
        image: require('../assets/cleverson.jpg')
      },
      {
        key: 4,
        text: 'PONTA DE ESTRELA',
        title: 'DENIS',
        image: require('../assets/Denis.jpg')
      },
      {
        key: 5,
        text: '',
        title: 'CARLOS',
        image: require('../assets/Carlos.jpg')
      },
      {
        key: 6,
        text: '',
        title: 'ELIEZER',
        image: require('../assets/Eliezer.png')
      },
      {
        key: 7,
        text: '',
        title: 'EMERSON',
        image: require('../assets/Emerson.jpg')
      },
      {
        key: 8,
        text: '',
        title: 'GIANCARLO',
        image: require('../assets/giancarlo.png')
      },
      {
        key: 9,
        text: '',
        title: 'CARLOS GORGUT',
        image: require('../assets/Gorgut.jpg')
      },
      {
        key: 10,
        text: '',
        title: 'NILSON',
        image: require('../assets/nilson.jpg')
      },
      {
        key: 11,
        text: 'PONTA DE ESTRELA',
        title: 'RODRIGO',
        image: require('../assets/rodrigo.png')
      },
      {
        key: 12,
        text: '',
        title: 'VALDINEI',
        image: require('../assets/valdinei.png')
      },
      {
        key: 13,
        text: '',
        title: 'RAFAEL',
        image: require('../assets/Rafael.png')
      },

      {
        key: 14,
        text: '',
        title: '>',
        image: require('../assets/Turnob.png')
    
      },
      {
        key: 15,
        text: '',
        title: 'SANDRO',
        image: require('../assets/Sandro.jpg')
      },
      {
        key: 16,
        text: 'LÍDER AM',
        title: 'PABLO',
        image: require('../assets/Pablo.jpg')
      },
      {
        key: 17,
        text: '',
        title: 'LEONARDO',
        image: require('../assets/Leonardo.jpg')
      },
      {
        key: 18,
        text: 'PONTA DE ESTRELA',
        title: 'JEFFERSON',
        image: require('../assets/Jefferson.jpg')
      },
      {
        key: 19,
        text: '',
        title: 'IVAN',
        image: require('../assets/Ivan.jpg')
      },
      {
        key: 20,
        text: '',
        title: 'ELOIR',
        image: require('../assets/Eloir.jpg')
      },
      {
        key: 21,
        text: '',
        title: 'ADILSON',
        image: require('../assets/Adilson.jpg')
      },
      {
        key: 22,
        text: '',
        title: 'EDSON',
        image: require('../assets/Edson.jpg')
      },
      {
        key: 23,
        text: '',
        title: 'CLEVERSON',
        image: require('../assets/Cleversonb.jpg')
      },
      {
        key: 24,
        text: '',
        title: '>',
        image: require('../assets/Turnoc.png')
    
      },
      {
        key: 25,
        text: '',
        title: 'ADLER',
        image: require('../assets/Adler.jpg')
      },
      {
        key: 26,
        text: '',
        title: 'ALISSON',
        image: require('../assets/Alisson.jpg')
      },
      {
        key: 27,
        text: '',
        title: 'AMILTON',
        image: require('../assets/Amilton.jpg')
      },
      {
        key: 28,
        text: '',
        title: 'ANDERSON',
        image: require('../assets/Anderson.jpg')
      },
      {
        key: 29,
        text: '',
        title: 'JONAS',
        image: require('../assets/Jonas.jpg')
      },
      {
        key: 30,
        text: '',
        title: 'JOSIMAR',
        image: require('../assets/Josimar.jpg')
      },
      {
        key: 31,
        text: '',
        title: 'MATHEUS',
        image: require('../assets/Matheus.jpg')
      },
      {
        key: 32,
        text: '',
        title: 'PAULO',
        image: require('../assets/Paulo.jpg')
      },
      {
        key: 33,
        text: 'PONTA DE ESTRELA',
        title: 'ROGÉRIO',
        image: require('../assets/Rogerio.jpg')
      },

      {
        key: 34,
        text: '',
        title: '>',
        image: require('../assets/Apoio.png')
      },

      {
        key: 35,
        text: 'DRIVER',
        title: 'RENATO',
        image: require('../assets/Renato.jpg')
      },
      {
        key: 36,
        text: 'SAÚDE E SEGURANÇA',
        title: 'CLAUDINEI',
        image: require('../assets/Claudinei.jpg')
      },
      {
        key: 37,
        text: 'OFFICE',
        title: 'ANGELA',
        image: require('../assets/Angela.jpg')
      },
      {
        key: 38,
        text: 'MELHORIAS FOCADAS',
        title: 'ANA',
        image: require('../assets/Ana.jpg')
      },
      {
        key: 39,
        text: 'EDUCAÇÃO E TREINAMENTO',
        title: 'ALYSON',
        image: require('../assets/Alyson.jpg')
      },




    
  ];