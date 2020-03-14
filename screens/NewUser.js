import React from 'react';
import {View,Text, StyleSheet, Button, TextInput} from 'react-native';

//import layout from '../css'

function NewUserScreen(props){
    return(
        <View style={layout.containerMain}>
            <View>
                <Text>The New User Screen!</Text>
            </View>
            <View style={layout.containerSearch}>
                <TextInput keyboardType='email-address' placeholder="Email" />
            </View>
            <View style={layout.containerSearch}>
                <TextInput secureTextEntry={true} placeholder="Password" />
            </View>
            <View style={layout.containerSearch}>
                <TextInput placeholder="DOB(opional)" />
            </View>
            <View style={layout.containerSearch}>
                <TextInput keyboardType='number-pad' placeholder="Family Size" />
            </View>
            <View style={layout.containerSearch}>
                <TextInput placeholder="Gender" />
            </View>
            <View style={layout.containerSearch}>
                <TextInput placeholder="Location" />
            </View>
            <View style={layout.containerSearch}>
                <TextInput placeholder="Vehicle" />
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
        marginTop: 10,
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

export default NewUserScreen;