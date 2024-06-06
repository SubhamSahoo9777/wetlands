import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

export const CustomButton1 = ({
  onPress,
  title,
  animation = "bounceIn",
  duration = 500,
  style,
  textStyle,
}) => {
  return (
    <Animatable.View
      animation={animation}
      duration={duration}
      style={[styles.container, style]}
    >
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: 'hidden',
    width:150,
    alignSelf:"center",
    marginTop:15
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

