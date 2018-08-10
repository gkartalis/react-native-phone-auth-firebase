/*
 *  HomeScreen Component Renders if the user
 *  is logged in. It also listens for logging
 *  out in order to redirect the user to the
 *  LoginScreen
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { onSignOut } from '../../actions/index'
import styles from './styles';


class HomeScreen extends Component {
  
  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate( user? 'App' : 'Auth')
    })
  }

  componentWillUnmount() {   
    if (this.unsubscribe) this.unsubscribe();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> HomeScreen Component</Text>
        <View style={styles.buttonContainer} >
          <Button
            dark
            onPress={() => this.props.onSignOut()}
          >
            <Text style={styles.buttonText} >
              sign out
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { onSignOut })(HomeScreen);
