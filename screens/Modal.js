import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

export default function MyModal({ navigation }) {
  
  return (
    <View style={styles.centeredView}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
                <Text>Sign up or sign in for the latest deals!</Text>
            </View>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                navigation.navigate('Signup');
              }}
            >
              <Text style={styles.textStyle}>Sign Up!</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                navigation.navigate('Login');
              }}
            >
              <Text style={styles.textStyle}>Log In!</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                navigation.navigate('Tabs');
              }}
            >
              <Text style={styles.textStyle}>Dissmiss</Text>
            </TouchableHighlight>
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    //alignItems: "center",
    marginTop: 2
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  containerSearch:{
    backgroundColor: 'blue',
    marginTop: 1,
    marginLeft:1,
    marginRight:1,
    padding: 15,
    borderRadius: 15
  },
});
