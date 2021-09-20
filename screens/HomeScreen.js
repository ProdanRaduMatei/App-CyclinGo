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

import Ionicons from 'react-native-vector-icons/Ionicons';

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
            <View style={styles.statusBar}>
              <View style={styles.statusBarElements}>
                <Ionicons name="stopwatch-outline" size={32} color={"#fff"} style={styles.iconStatus}/>
                <Text style={styles.statusScore}>10</Text>
              </View>
              <View style={styles.statusBarElements}>
                <Ionicons name="speedometer-outline" size={32} color={"#fff"} style={styles.iconStatus}/>
                <Text style={styles.statusScore}>4.2</Text>
              </View>
              <View style={styles.statusBarElements}>
                <Ionicons name="map-outline" size={32} color={"#fff"} style={styles.iconStatus}/>
                <Text style={styles.statusScore}>89</Text>
              </View>
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
            <View style={styles.statusBar}>
              <View style={styles.statusBarElements}>
                <Ionicons name="stopwatch-outline" size={32} color={"#fff"} style={styles.iconStatus}/>
                <Text style={styles.statusScore}>10</Text>
              </View>
              <View style={styles.statusBarElements}>
                <Ionicons name="speedometer-outline" size={32} color={"#fff"} style={styles.iconStatus}/>
                <Text style={styles.statusScore}>4.2</Text>
              </View>
              <View style={styles.statusBarElements}>
                <Ionicons name="map-outline" size={32} color={"#fff"} style={styles.iconStatus}/>
                <Text style={styles.statusScore}>89</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/jobs/netmatch.png")}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.textContent}>
              <Text style={styles.cardDescription}>Dutch software specialist focusing on e-commerce and digital transformation.</Text>
            </View>
            <View style={styles.statusBar}>
              <View style={styles.statusBarElements}>
                <Ionicons name="stopwatch-outline" size={32} color={"#fff"} style={styles.iconStatus}/>
                <Text style={styles.statusScore}>10</Text>
              </View>
              <View style={styles.statusBarElements}>
                <Ionicons name="speedometer-outline" size={32} color={"#fff"} style={styles.iconStatus}/>
                <Text style={styles.statusScore}>4.2</Text>
              </View>
              <View style={styles.statusBarElements}>
                <Ionicons name="map-outline" size={32} color={"#fff"} style={styles.iconStatus}/>
                <Text style={styles.statusScore}>89</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/jobs/wolfpack.jpg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View>
              <Text style={styles.cardDescription}>We help global brands design, build and launch successful digital products!</Text>
            </View>
            <View style={styles.statusBar}>
              <View style={styles.statusBarElements}>
                <Ionicons name="stopwatch-outline" size={32} color={"#fff"} style={styles.iconStatus}/>
                <Text style={styles.statusScore}>10</Text>
              </View>
              <View style={styles.statusBarElements}>
                <Ionicons name="speedometer-outline" size={32} color={"#fff"} style={styles.iconStatus}/>
                <Text style={styles.statusScore}>4.2</Text>
              </View>
              <View style={styles.statusBarElements}>
                <Ionicons name="map-outline" size={32} color={"#fff"} style={styles.iconStatus}/>
                <Text style={styles.statusScore}>89</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/jobs/inventiff.jpg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View>
              <Text style={styles.cardDescription}>Various projects in areas such as software engineering, digital marketing, SEO and graphic design.</Text>
            </View>
            <View style={styles.statusBar}>
              <View style={styles.statusBarElements}>
                <Ionicons name="stopwatch-outline" size={32} color={"#fff"} style={styles.iconStatus}/>
                <Text style={styles.statusScore}>10</Text>
              </View>
              <View style={styles.statusBarElements}>
                <Ionicons name="speedometer-outline" size={32} color={"#fff"} style={styles.iconStatus}/>
                <Text style={styles.statusScore}>4.2</Text>
              </View>
              <View style={styles.statusBarElements}>
                <Ionicons name="map-outline" size={32} color={"#fff"} style={styles.iconStatus}/>
                <Text style={styles.statusScore}>89</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../assets/jobs/msg-romania.jpg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View>
              <Text style={styles.cardDescription}>We build innovative solutions for Enterprise customers.</Text>
            </View>
            <View style={styles.statusBar}>
              <View style={styles.statusBarElements}>
                <Ionicons name="stopwatch-outline" size={32} color={"#fff"} style={styles.iconStatus}/>
                <Text style={styles.statusScore}>10</Text>
              </View>
              <View style={styles.statusBarElements}>
                <Ionicons name="speedometer-outline" size={32} color={"#fff"} style={styles.iconStatus}/>
                <Text style={styles.statusScore}>4.2</Text>
              </View>
              <View style={styles.statusBarElements}>
                <Ionicons name="map-outline" size={32} color={"#fff"} style={styles.iconStatus}/>
                <Text style={styles.statusScore}>10</Text>
              </View>
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
  statusBarElements: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  statusScore: {
    fontSize: 20,
    fontWeight: "800",
    color: "#fff",
  },
  iconStatus: {
    paddingBottom: 2,
    paddingRight: 3,
  },
  statusBar: {
    backgroundColor: "#00b300",
    height: 55,
    flexDirection: 'row',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  card: {
    marginBottom: 10,
    elevation: 2,
    backgroundColor: "#8c8c8c",
    borderRadius: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    minHeight: 250,
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
    maxHeight: 110,
    minHeight: 90,
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
    fontSize: 22,
    minHeight: 100,
    fontWeight: "400",
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 10,
    color: "#f2f2f2",

  },
});
