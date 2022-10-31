import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Header from '../components/header';
import Post from '../components/Post';

class Feed extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        nickname: 'Matheus ribamar ',
        email: 'matheusfile@hotmail.com',
        image: require('../../assets/image/mathribs.jpg'),

        comments: [
          {
            nickname: 'John Travolta',
            comment: 'Voce robou minha barrigudinha?',
          },
          {
            nickname: 'Florest Gump',
            comment: 'Foi o Buba',
          },
          {
            nickname: 'Buba',
            comment:
              'Voce sabia que da pra fazer espetinho de camarao, Camarao no coco',
          },
        ],
      },
      {
        id: Math.random(),
        nickname: 'FranciscoMatadordePorco',
        email: 'xiquin69@yahoo.com',
        image: require('../../assets/image/xiquin.jpg'),
        comments: [],
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => <Post key={item.id} {...item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Feed;
