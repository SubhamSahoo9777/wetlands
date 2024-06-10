import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Animatable from "react-native-animatable";
export const RotateIcon = ({icon,control}) => {
    Animatable.initializeRegistryWithDefinitions({
        rotate: {
          from: { rotate: '0deg' },
          to: { rotate: '180deg' },
        },
        rotateReverse: {
          from: { rotate: '0deg' },
          to: { rotate: '-180deg' },
        },
      });
  return (
    <Animatable.View  animation={control ? "rotate" : "rotateReverse"} duration={500}>
{icon}
  </Animatable.View>
  )
}
export const TextAnimation = ({ text = "RUWAS", imageLogoStyle }) => {
  return (
    <View style={{}}>
      <Animatable.View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          },
          imageLogoStyle,
        ]}
      >
        {[...text].map((letter, index) => (
          <Animatable.Text
            key={index}
            animation={index == 0 ? "slideInLeft" : "slideInRight"}
            iterationCount={1}
            duration={2000 + index * 300}
            easing={"ease"}
            style={{ color: "#fff", fontSize: 25 }}
          >
            {letter}
          </Animatable.Text>
        ))}
      </Animatable.View>
    </View>
  );
};


const styles = StyleSheet.create({})