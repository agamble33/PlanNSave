import React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Deals from './DealsTab';
import List from './ListTab';
import Map2 from './MapsTab';
import Settings from './SettingsTab'

  
const Tab = createBottomTabNavigator();
  
export default function BottomTabs() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Deal" component={Deals} />
          <Tab.Screen name="List" component={List} />
          <Tab.Screen name="Map" component={Map2} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }