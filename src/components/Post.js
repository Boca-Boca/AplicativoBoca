import React, { Component } from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import Comments from './Comments';
import Author from './Author';
import AddComment from './AddComment';




class Post extends Component {
  render() {
    return (
      <View style= {styles.Container}>
        <Image
          source={this.props.image}
          style={styles.image}
        />
              <Author email={this.props.email} nickname= {this.props.nickname}/>
              <Comments comments={this.props.comments}/>
              <AddComment />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1
  },
  image: {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').width * 3 / 4,
    resizeMode: 'contain',
  },
});
export default Post;
