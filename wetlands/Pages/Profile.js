import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

const GradientBackground = ({ children }) => (
  <View style={styles.container}>
    <Svg height="100%" width="100%" style={styles.background}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0%" stopColor="#6a11cb" stopOpacity="1" />
          <Stop offset="100%" stopColor="#2575fc" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
    </Svg>
    {children}
  </View>
);

const Profile = () => {
  return (
    <GradientBackground>
      <Animatable.Image
        animation="zoomIn"
        duration={1200}
        source={require("../assets/user.png")}
        style={styles.profileImage}
      />
      <Animatable.Text
        animation="fadeIn"
        duration={1000}
        style={styles.name}
      >
        John Doe
      </Animatable.Text>
      <Animatable.View
        animation="fadeInUpBig"
        duration={1000}
        delay={500}
        style={styles.infoContainer}
      >
        <Text style={styles.infoText}>Email: john.doe@example.com</Text>
        <Text style={styles.infoText}>Phone: (123) 456-7890</Text>
        <Text style={styles.infoText}>Phone: (123) 456-7890</Text>
      </Animatable.View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  infoContainer: {
    marginTop: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 8,
  },
  infoText: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
});

export default Profile;
