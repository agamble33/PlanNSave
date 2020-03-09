import React from 'react';
import {StyleSheet} from 'react-native';

import UserInput from './navigator/navigation';
//import layout from '/css'

export default function App() {
  return <UserInput style={layout.container} />;
};

const layout = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerMain: {
      flex: 1,
      backgroundColor: '#FFF700'
    },
    containerFLex2: {
      flex: 1,
      alignItems:'center',
      justifyContent: 'center'
    },
    containerFlex:{
      flex: 1,
      backgroundColor: '#FFF700',
      justifyContent:'flex-end'
    },
    contanierButton: {
      backgroundColor: '#00FF00',
      alignItems: 'center',
      borderColor: 'black',
      borderTopWidth: 3,
      padding: 15,
    },
    containerSearch:{
      backgroundColor: '#fff',
      marginTop: 100,
      marginLeft:10,
      marginRight:10,
      padding: 10,
      borderRadius: 30
    },
    textChange: {
      fontSize: 50,
      fontWeight: 'bold',
      fontFamily:'Arial'
    },
    textChange2: {
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily:'Arial'
    }

});
