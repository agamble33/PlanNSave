import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export default function Map2() {
    
      return (
        <View style={styles.container} >
          <MapView style={styles.mapStyle} />
        </View>
      );
      
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    container2: {
      flex: 1,
      marginTop: 100,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });