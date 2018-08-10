import React from 'react';
// import { connect } from 'react-redux';
import { 
    createStackNavigator, 
    createSwitchNavigator, 
    createDrawerNavigator 
} from 'react-navigation';
// import SideMenu from '../components/SideMenu';
import AuthLoading from '../screens/AuthLoading';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';


const AuthStack = createStackNavigator({ Login: LoginScreen })
const AppStack = createDrawerNavigator({
    Home: { screen: HomeScreen },
},
// {
//     contentComponent: props => <SideMenu {...props} />,
// },
);

export const Navigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: AuthStack,
        // Modal: ModalStack
    },
    {
        initialRouteName: 'App'
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
