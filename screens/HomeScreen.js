import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
} from "react-native";
import { useTheme } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const theme = useTheme();
  
  const _scrollView = React.useRef(null);

    return (
      <View style={styles.container}>
        <Animated.ScrollView
          scrollEventThrottle={1}
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
        >
          <View style={styles.card}>
            <Image
              source={require("../assets/jobs/ILabs.jpg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.textContent}>
              <Text style={styles.cardDescription}>Empowering tech founders to build innovative digital solutions and the next global companies.</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/jobs/CyclinGo.png")}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.textContent}>
                <Text style={styles.cardDescription}>For your safety. Innovative solutions for urban traffic.</Text>
            </View>
          </View>
        </Animated.ScrollView>
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  card: {
    elevation: 2,
    backgroundColor: "#8c8c8c",
    borderRadius: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: 220,
    width: "90%",
    alignSelf: "center",
  },
  cardImage: {
    backgroundColor: "#000",
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
    alignSelf: "center",
  },
  cardTitle: {
    fontSize: 24,
    // marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 18,
    color: "#f2f2f2",

  },
});