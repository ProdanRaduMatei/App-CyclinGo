import React, { useState, useEfect } from 'react';
import { ActivityIndicator } from 'react-native';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { useTheme } from '@react-navigation/native';

const mapDarkStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
];

const mapStandardStyle = [
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
];

const initalState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const MapTestScreen = () => {
  const theme = useTheme();

  const [currentPosition, setCurrentPosition] = useState(initalState);

  useEfect(() => {
    navigator.geolocation.getCurrentPosition(position=>{
      const {longitude, latitude} = position.coords;
      setCurrentPosition({
        ...currentPosition,
        latitude,
        longitude,
      })
    },
    error => alert(error.message),
    { timeout: 20000, maximumAge: 1000}
    )
  }, [])

  return currentPosition.latitude ? (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      customMapStyle={ theme.dark ? mapDarkStyle : mapStandardStyle}
      showsUserLocation
      initialRegion={currentPosition}
    >
      <Marker
        ref={ref => this.map = ref}
        image={require('../assets/map_marker.png')}
        title="Test Title"
        description="This is the test description"
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>Favourite Restaurant</Text>
              {/*<Text>A short description</Text>*/}
              <Image
                style={styles.image}
                source={require('../assets/logo.png')}
              />
            </View>
            <View style={styles.arrowBorder}/>
            <View style={styles.arrow}/>
          </View>
        </Callout>
      </Marker>
    </MapView>
  ) : <ActivityIndicator style={{flex: 1}} animating size="large"/>
};

export default MapTestScreen;

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: 120,
    height: 80,
  },
 });