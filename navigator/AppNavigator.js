import React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import Deals from '../screens/DealsTab';
import List from '../screens/ListTab';
import Map2 from '../screens/MapsTab';
import Settings from '../screens/SettingsTab';
import MyModal from '../screens/Modal';
import NewUserScreen from '../screens/NewUser';
import LoginScreen from '../screens/Login';

const BottomTabs = createBottomTabNavigator();
function BottomTabsScreen(){
  return(
    <BottomTabs.Navigator>
            <BottomTabs.Screen name="Deal" component={Deals} />
            <BottomTabs.Screen name="List" component={List} />
            <BottomTabs.Screen name="Map" component={Map2} />
            <BottomTabs.Screen name="Settings" component={Settings} />
          </BottomTabs.Navigator>
  );
}
const Landing = createStackNavigator();
function LandingScreen(){
  return(
    <Landing.Navigator>
      <Landing.Screen name="Landing" component={MyModal} />
      <Landing.Screen name='Signup' component={NewUserScreen} />
      <Landing.Screen name='Login' component={LoginScreen} />
    </Landing.Navigator>
  );
}

const RootStack = createStackNavigator();
function RootStackScreen(){
  return(
    <RootStack.Navigator headerMode='none'>
      <RootStack.Screen name="Landing" component={LandingScreen} />
      <RootStack.Screen name='Tabs' component={BottomTabsScreen} />
    </RootStack.Navigator>
  );
}




  export default function AppNavigation(){
    return(
      <NavigationContainer>
          <RootStackScreen/>
      </NavigationContainer>
    );
  }