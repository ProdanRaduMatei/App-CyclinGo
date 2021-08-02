import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  const [showLeftTriangle, setShowLeftTriangle] = useState(false);
  const [showRightTriangle, setShowRightTriangle] = useState(false);
  const [showSquare, setShowSquare] = useState(false);

  const changeShape = (shape) => {
    setShowLeftTriangle(shape == 'Left')
    setShowRightTriangle(shape == 'Right')
    setShowSquare(shape == 'Brake')
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View
          style={
            showLeftTriangle
              ? styles.LeftTriangleShapeView
              : showRightTriangle
              ? styles.RightTriangleShapeView
              : showSquare
              ? styles.SquareShapeView
              : ''
          }
        />
        <TouchableOpacity onPress={() => changeShape('Left')}>
          <Text style={{ marginTop: '80%', fontSize: 20 }}>Left</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeShape('Right')}>
          <Text style={{ marginTop: '5%', fontSize: 20}}>Right</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeShape('Brake')}>
          <Text style={{ marginTop: '5%', fontSize: 20}}>Brake</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LeftTriangleShapeView: {
    width: 0,
    height: 0,
    borderLeftWidth: 120,
    borderRightWidth: 120,
    borderBottomWidth: 360,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#14ff5f',
    transform: [{ rotate: '-90deg' }]
  },
  RightTriangleShapeView: {
    width: 0,
    height: 0,
    borderLeftWidth: 120,
    borderRightWidth: 120,
    borderBottomWidth: 360,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#14ff5f',
    transform: [{ rotate: '90deg' }]
  },
  SquareShapeView: {
    width: 360,
    height: 360,
    backgroundColor: '#ED2525'
  },
});

export default App;
