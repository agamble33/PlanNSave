import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

//import layout from '../css'

function LandingScreen(props){
    return(
        <View style={layout.containerMain}>
          <View style={layout.containerSearch}> 
          <TextInput placeholder="Search"></TextInput>
        </View>
        <View style={layout.containerFLex2}>
          <Text style={layout.textChange}>Plan N Save</Text>
          <Text style={layout.textChange2}>We work for you!</Text>
        </View>
      <View style={layout.containerFlex}>
            <View style={layout.containerFlex3}>
                <TextInput placeholder="User Name/Email" />
            </View>
            <View style={layout.containerFlex3}>
                <TextInput placeholder="Password" />
            </View>
            <View>
            <Button title="Login" onPress={() => {
               console.log(props.navigation.navigate({routeName: 'Deals'}));
               
            }}   />
            </View>
        </View>
        <View style={layout.contanierButton}>
          <Button title="New User" onPress={() => {
               props.navigation.navigate({routeName: 'NewUser'});
            }}   />
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
    containerFlex3:{
      backgroundColor: '#fff',
      marginLeft:10,
      marginRight:10,
      marginBottom:10,
      padding: 10,
      borderRadius: 30
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

export default LandingScreen;