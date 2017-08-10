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

    componentDidMount(){  
        this.getNet();  
    }  
  
    getNet(){  
        fetch('http://gank.io/api/search/query/listview/category/福利/count/10/page/1')//请求地址  
            .then((response) => response.json())//取数据  
            .then((responseText) => {//处理数据  
                //通过setState()方法重新渲染界面  
                this.setState({  
                    //改变加载ListView  
                    load: true,  
                    //设置数据源刷新界面  
                    dataSource: this.state.dataSource.cloneWithRows(responseText.results),  
                })  
  
            })  
            .catch((error) => {  
                console.warn(error);  
            }).done();  
    }  
  

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
