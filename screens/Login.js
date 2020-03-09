import React from 'react';
import {View,Text, StyleSheet, Button, TextInput} from 'react-native';

//import layout from '../css'

function LoginScreen(props){
    return(
        <View style={layout.containerMain}>
            <View>
                <Text>The Login Screen!</Text>
            </View>
            <View style={layout.containerSearch}>
                <TextInput placeholder="User Name/Email" />
            </View>
            <View style={layout.containerSearch}>
                <TextInput placeholder="Password" />
            </View>
        </View>
    );
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

export default LoginScreen;