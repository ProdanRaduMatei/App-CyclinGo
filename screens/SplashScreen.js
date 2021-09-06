import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: colors.text
            }]}>Stay connected with everyone!</Text>
            <Text style={styles.text}>Sign in with account</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                <LinearGradient
                    colors={['#00e600', '#009900']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={30}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height, width} = Dimensions.get("screen");
const height_logo = height * 0.15;
const width_logo = width * 1.1;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#000'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 100,
      paddingHorizontal: 30
  },
  logo: {
      width: width_logo,
      height: height_logo
  },
  title: {
      color: '#000',
      fontSize: 28,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop: 5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 40
  },
  signIn: {
      width: 230,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30
  }
});