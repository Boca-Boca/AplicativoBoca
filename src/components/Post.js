import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';

class Post extends Comment {
  render() {
    return (
      <View>
        <Image
          source={this.compareDocumentPosition.image}
          style={styles.image}
        />
              <Author email='francisquerahumild@gmail.com' nickname= 'Chiquin69'/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 3) / 4,
    resizeMode: 'contain',
  },
});
export default Post;
