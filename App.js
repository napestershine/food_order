import React, { Component } from 'react';
import { Text, View, AppRegistry, Image } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return   (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Hello, world!</Text>
    </View>
    );
  }
}