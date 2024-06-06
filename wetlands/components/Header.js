import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import VectorIcon from "./VectorIcon";
import * as Animatable from "react-native-animatable";
import { RotateIcon } from "./CustomAnimations";
import { HamburgerModal } from "./Modals";
const Header = ({ title, headerContent }) => {
    const[rotate,setRotate]=useState(false)
    const rotateToggle=()=>{
        setRotate(!rotate)
    }
  return (
    <ImageBackground
      source={require("../assets/top.png")}
      style={{ flex: 1, justifyContent: "center" }}
      resizeMode="cover"
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            width: "40%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Image
            source={require("../assets/weislogooo.png")}
            style={{ height: 60, width: 90 }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
              marginBottom: -15,
            }}
          >
            {title !== "Home" && (
              <VectorIcon
                type="AntDesign"
                name="rightcircle"
                size={20}
                color="black"
              />
            )}
            <Text style={{ fontSize: 20, fontWeight: "500" }}>{title}</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: -30,
            marginRight: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              lineHeight: 24,
              color: "#1066c1",
              fontWeight: "500",
            }}
          >
            {headerContent}
          </Text>
        </View>
      </View>
      <Pressable onPress={rotateToggle} style={{ position: "absolute", top: 40, right: 26 }}>
        <RotateIcon control={rotate} icon={ <VectorIcon type="Feather" name="menu" size={24} color="black" />} />
      </Pressable>
      <HamburgerModal visible={rotate} setVisible={setRotate}/>
    </ImageBackground>
  );
};

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
export default Header;

const styles = StyleSheet.create({});
