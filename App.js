import React, {Component} from 'react';
import Header from './src/components/header';
import {View} from 'react-native';
import Post from './src/components/Post';



export default class App extends Component {
  render() {

const comments = [{
  nickname:'Juaumzin',
  comment: 'Lucas ta me devendo uma mamada'
},
 {
  nickname:'Marombeiro crente',
  comment: "pra vc tambem?"
}
]

    return (
      <View style={{flex:1}}>
        <Header />
        <Post image={require('./assets/image/test.jpg')}
        comments={comments}
        ></Post>
      
      </View>
    );
  }
}
