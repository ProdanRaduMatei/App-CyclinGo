import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import App from './BlinkerButtons';
import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import MapTestScreen from './MapTestScreen';
import ProfileScreen from './ProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();
const ProfileStack = createStackNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={App}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#00b300',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Jobs',
          tabBarColor: '#00b300',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-briefcase" color={color} size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="Maps"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Maps',
          tabBarColor: '#00b300',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-earth" color={color} size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#00b300',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={27} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;