import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Vibration } from 'react-native';

const Blinker = () => {
  const [showLeftTriangle, setShowLeftTriangle] = useState(true);
  const [showRightTriangle, setShowRightTriangle] = useState(true);
  const [showSquare, setShowSquare] = useState(true);

  const changeShape = (shape) => {
    setShowLeftTriangle(shape == 'Left')
    setShowRightTriangle(shape == 'Right')
    setShowSquare(shape == 'Brake')
};

const ONE_SECOND_IN_MS = 1000;

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: '#a6b8bd'}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {Vibration.vibrate(2 * ONE_SECOND_IN_MS)}} style={{flex: 1}}>
          <View style={showLeftTriangle ? styles.LeftTriangleShapeView:''}>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {Vibration.vibrate(2 * ONE_SECOND_IN_MS)}} style={{flex: 1}}>
          <View style={showSquare ? styles.SquareShapeView:''}>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {Vibration.vibrate(2 * ONE_SECOND_IN_MS)}} style={{flex: 1}}>
          <View style={showRightTriangle ? styles.RightTriangleShapeView:''}>
          </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    width: 0,
    height: 0,
    borderLeftWidth: 80,
    borderRightWidth: 80,
    borderBottomWidth: 240,
    borderStyle: 'solid',
    backgroundColor: '#a6b8bd',
    borderLeftColor: '#a6b8bd',
    borderRightColor: '#a6b8bd',
    borderBottomColor: '#14ff5f',
    transform: [{ rotate: '-90deg' }]
  },
  RightTriangleShapeView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 0,
    height: 0,
    borderLeftWidth: 80,
    borderRightWidth: 80,
    borderBottomWidth: 240,
    borderStyle: 'solid',
    backgroundColor: '#a6b8bd',
    borderLeftColor: '#a6b8bd',
    borderRightColor: '#a6b8bd',
    borderBottomColor: '#14ff5f',
    transform: [{ rotate: '90deg' }]
  },
  SquareShapeView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 240,
    height: 240,
    backgroundColor: '#ED2525'
  },
});

export default Blinker;
