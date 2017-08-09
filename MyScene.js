import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight,
AppRegistry, View } from 'react-native';

//class MyScene extends Component {这种定义的类是在不包含的时候用
//export default class MyScene extends Component {这种定义的方法是在包含此文件的时候用
export default class MyScene extends Component {
static navigationOptions =  
    ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user}`
    })
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}