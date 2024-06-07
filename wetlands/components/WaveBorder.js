import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const WaveBorder = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
      <Svg height="20" width="100%" style={styles.wave}>
        <Path
          d="M0,20 C30,0 70,0 100,20 L100,20 L0,20 Z"
          fill="#007BFF"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    marginTop: 20,
  },
  content: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 2,
    borderColor: '#007BFF',
    borderBottomWidth: 0,
  },
  wave: {
    position: 'absolute',
    bottom: 0,
  },
});

export default WaveBorder;
