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



const styles = StyleSheet.create({})