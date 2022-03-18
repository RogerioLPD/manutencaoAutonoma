import * as React from 'react';
import { StyleSheet, Text, View, Button, KeyboardAvoidingView } from 'react-native';

import LottieView from 'lottie-react-native';
import { defaultProps, touchProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function Splash({navigation}) {
    return (
        
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={StyleSheet.container}>
         <LottieView
         resizeMode='contain'
         source={require('./log.json')}
         autoPlay={true}
         Loop={true}
         style={{
            width: 300,
            height: 300,
            paddingTop: 100,
         }}
         />

        <View style={styles.buttonContainer}>
         <Button title='Início' onPress={() => navigation.navigate('Inicio')}/>
         </View>
         </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 500,
        
    },
    buttonContainer: {
      paddingTop: 300,
      
    
    },
  });
  

