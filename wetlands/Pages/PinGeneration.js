import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";
import * as Animatable from 'react-native-animatable';
import { Easing } from 'react-native';
export default function PinGeneration({ navigation }) {
  const [pin, setPin] = useState("");
  const [pinVisible, setPinVisible] = useState(false);

  const handlePinPress = (digit) => {
    if (pin.length < 4) {
      setPin(pin + digit);
    }
  };

  const handleDeletePress = () => {
    if (pin.length > 0) {
      setPin(pin.slice(0, -1));
    }
  };

  const togglePinVisibility = () => {
    setPinVisible(!pinVisible);
  };

  



  const renderPinBoxes = () => {
    let boxes = [];
    for (let i = 0; i < 4; i++) {
      boxes.push(
        <Animatable.View
          key={i}
          style={[
            styles.pinBox,
            { 
              backgroundColor: pin.length > i ? "#fff" : "transparent",
              borderRadius: pin.length > i ? 100 : 0, // Initial borderRadius
              borderBottomWidth:pin.length > i ? 5:1,
              borderColor:pin.length > i ?"orange":"#fff"
            },
          ]}
          animation={pin.length > i ? {
            0: {
              width: 50,
              height: 50,
              borderRadius: 100, 
            },
            0.5: {
              width: 20, 
              height: 20,
              borderRadius: 50,
            },
            1: {
              width: 35,
              height: 35,
              borderRadius: 100, 
            },
            easing: Easing.bounce,
          } : null}
          easing="linear"
          iterationCount={1}
          duration={300} // Duration of the rotation animation
        >
          <Text style={{ color: pinVisible ? "#000" : "transparent" }}>
            {pin.charAt(i)}
          </Text>
        </Animatable.View>
      );
    }
    return boxes;
  };
  
  
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "#fff",fontSize:20 }}>Create Your 4 Digit Pin</Text>
      <View style={styles.pinDisplay}>{renderPinBoxes()}</View>
      <TouchableOpacity style={{ marginTop: 10 }} onPress={togglePinVisibility}>
        <Text style={{ color: "#fff" }}>See</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          {[1, 2, 3].map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handlePinPress(item)}>
              <BlurView intensity={30} style={styles.blurContainer}>
                <Text style={styles.text}>{item}</Text>
              </BlurView>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flexDirection: "row" }}>
          {[4, 5, 6].map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handlePinPress(item)}>
              <BlurView intensity={30} style={styles.blurContainer}>
                <Text style={styles.text}>{item}</Text>
              </BlurView>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flexDirection: "row" }}>
          {[7, 8, 9].map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handlePinPress(item)}>
              <BlurView intensity={30} style={styles.blurContainer}>
                <Text style={styles.text}>{item}</Text>
              </BlurView>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={handleDeletePress}>
            <BlurView intensity={30} style={styles.blurContainer}>
              <Text style={styles.text}>DE</Text>
            </BlurView>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePinPress(0)}>
            <BlurView intensity={30} style={styles.blurContainer}>
              <Text style={styles.text}>0</Text>
            </BlurView>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate("PinAccess")}>
            <BlurView intensity={30} style={styles.blurContainer}>
              <Text style={styles.text}>OK</Text>
            </BlurView>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b146e",
    justifyContent: "center",
    alignItems: "center",
  },
  blurContainer: {
    padding: 5,
    overflow: "hidden",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    margin: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
  },
  pinDisplay: {
    marginTop: 20,
    flexDirection: "row",
  },
  pinBox: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: "#fff",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
