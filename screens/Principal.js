import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Areas from './Areas';
import Forklift from './Forklift';
import Indicators from './Indicators';
import Seguranca from './Seguranca';
import Organization from './Organization';
import Chat from './Chat';




const Tab = createBottomTabNavigator();

export default function Principal({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="M.A. LOGÍSTICA"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="ÁREAS ARMAZÉM DOCAS E SILOS"
        component={Areas}
        options={{headerStyle: { backgroundColor: '#B0C4DE' },
          tabBarLabel: 'Areas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="factory" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="E M P I L H A D E I R A S"
        component={Forklift}
        options={{headerStyle: { backgroundColor: '#B0C4DE',  },
          tabBarLabel: 'Empilhadeiras',
          tabBarIcon: ({ color, size, backgroundColor }) => (
            <MaterialCommunityIcons name="forklift" color={color} size={size} backgroundColor={'#00BFFF'}/>
          ),
        }}
        />
        <Tab.Screen
        name="SEGURANÇA"
        component={Seguranca}
        options={{headerStyle: { backgroundColor: '#B0C4DE' },
          tabBarLabel: 'Segurança',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="seatbelt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ORGANIZAÇÃO"
        component={Organization}
        options={{headerStyle: { backgroundColor: '#B0C4DE' },
          tabBarLabel: 'Estrutura',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="INDICADORES AM"
        component={Indicators}
        options={{headerStyle: { backgroundColor: '#B0C4DE', },
          tabBarLabel: 'Indicadores',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chart-areaspline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{headerStyle: { backgroundColor: '#B0C4DE' },
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color , size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


