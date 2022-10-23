import React, {Component} from 'react';
import Header from './src/components/header';
import {View, Text} from 'react-native';
import Post from './src/components/Post';
import Author from './src/components/Author';



export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <Post image={require('./assets/image/test.png')}></Post>
      
      </View>
    );
  }
}
