import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform, Image} from 'react-native';

import icon from '../../assets/image/logo.jpg';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image source={icon} style={styles.image} />
          <Text style={styles.title}>Boca-Boca</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    paddin: 10,
    borderBottomWidth: 1,
    borderColor: '#BBB',
  },
  rowContainer: {
    backgroundColor: '#4DCAB8',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    paddingTop: 10,
    height: 45,
    width: 50,
    resizeMode: 'contain',
    borderRadius : 45
  },
  title: {
    paddingLeft: 10,
    color: '#00',
    fontFamily: 'Rubik-Black',
    height: 30,
    fontSize: 28,
  },
});


export default Header 