/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import{
  StackNavigator
} from 'react-navigation'

import MyScene from './MyScene'

class HomeC extends Component {

  static navigationOptions ={
    titile:'welcome'
  };

  

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
         <Button
          onPress={() => navigate('MyScene', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

const DemoApp = StackNavigator({
   Home: { screen: HomeC },
   MyScene:{ screen: MyScene}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DemoApp', () => DemoApp);
