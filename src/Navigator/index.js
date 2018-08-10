import React from 'react';
import { 
    createStackNavigator, 
    createSwitchNavigator, 
    createDrawerNavigator 
} from 'react-navigation';
import AuthLoading from '../screens/AuthLoading';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';


const AuthStack = createStackNavigator({ Login: LoginScreen })
const AppStack = createDrawerNavigator({
    Home: { screen: HomeScreen },
});

export const Navigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading'
    }
);


class Nav extends React.Component {
    render() {
        return (
            <Nav />
        );
    }
}

export default Nav;
