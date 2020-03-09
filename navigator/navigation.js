import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import LandingScreen from '../screens/Landing';
import LoginScreen from '../screens/Login';
import NewUserScreen from '../screens/NewUser';

const UserInput = createStackNavigator({
    PlanNSave: LandingScreen,
    Login: LoginScreen,
    NewUser: NewUserScreen
});

export default createAppContainer(UserInput);