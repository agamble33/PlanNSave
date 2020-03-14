import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LandingScreen from '../screens/Landing';
import LoginScreen from '../screens/Login';
import NewUserScreen from '../screens/NewUser';
import DealsScreen from '../screens/Deals'
import ListScreen from '../screens/List'
import MapScreen from '../screens/Map'
import SettingsScreen from '../screens/Settings'
import {NavigationContainer} from '@react-navigation/native';

const UserInput = createStackNavigator({
    PlanNSave: LandingScreen,
    Login: LoginScreen,
    NewUser: NewUserScreen
});

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
            <Tab.Navigator>
                <Tab.Screen name='Deals' component={DealsScreen} />
                <Tab.Screen name='List' component={ListScreen} />
                <Tab.Screen name='Map' component={MapScreen} />
                <Tab.Screen name='Settings' component={SettingsScreen} />
            </Tab.Navigator>
    );
}

export default createAppContainer(UserInput);
export function Tabs(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}