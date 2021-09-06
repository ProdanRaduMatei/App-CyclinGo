import React from 'react';
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';
import { 
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple
  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';

const ProfileScreen = () => {
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Avatar.Image
              source={{
                url: 'https://www.pexels.com/photo/green-trees-on-forest-5642819/',
              }}
              size={80}
            />
            <View style={{marginLeft: 20}}>
              <Title style={[styles.title, {
                marginTop: 15,
                marginBottom: 5,
              }]}>John Doe</Title>
              <Caption style={styles.caption}>@j_doe</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="map-marker-radius" color="#777777" size={24}/>
            <Text style={{color: "#777777", marginLeft: 20, fontSize: 17}}>Kolkata, India</Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="#777777" size={24}/>
            <Text style={{color: "#777777", marginLeft: 20, fontSize: 17}}>+91-9000000009</Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" color="#777777" size={24}/>
            <Text style={{color: "#777777", marginLeft: 20, fontSize: 17}}>john_doe@email.com</Text>
          </View>
        </View>

        <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title style={{fontSize: 24}}>$140</Title>
            <Caption style={{fontSize: 18}}>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title style={{fontSize: 24}}>12</Title>
            <Caption style={{fontSize: 18}}>Orders</Caption>
          </View>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="share-outline" color="#00b300" size={25}/>
              <Text style={styles.menuItemText}>Tell Your Friends</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="account-check-outline" color="#00b300" size={25}/>
              <Text style={styles.menuItemText}>Support</Text>
            </View>
          </TouchableRipple>
        </View>
      </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 18,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 26,
  },
});