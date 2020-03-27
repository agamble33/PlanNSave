import  React from 'react';
import {Text, TouchableHighlight, View, Alert, Button, StyleSheet, useState} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import Modal from 'react-native-modal';

import BottomTabs from './screens/TabsScreen'

export default function App() {
  return (
    
    <BottomTabs />
   );
 }


