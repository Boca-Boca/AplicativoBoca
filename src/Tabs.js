import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function Routes(){
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:'#9fe801',
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: [
          {
            position: 'absolute',
            bottom: 5,
            left: 25,
            right: 25,
            backgroundColor: '#121212',
            borderRadius: 15,
            height: 55,
            ...styles.shadow,
          },
        ],
        tabBarActiveTintColor: '#FFF',
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcon name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="AddPhoto"
        component={AddPhoto}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcon
              name="enhance-photo-translate"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Feed}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcon name="person" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Places"
        component={Feed}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcon name="map" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 2.5,
  }
});
