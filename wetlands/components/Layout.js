import { StyleSheet, Text, View, Dimensions, ImageBackground } from "react-native";
import React from "react";
import Header from "./Header";
import VectorIcon from "./VectorIcon";
const { height, width } = Dimensions.get("window");
const Layout = ({children,title,headerContent}) => {
  return (
    <View style={{ flex:1 }}>
      <View style={{ width: "100%", height: height*0.2 }}>
        <Header title={title} headerContent={headerContent}/>
      </View>
      <ImageBackground
      source={require("../assets/blurUganda.jpeg")}
      style={{ flex: 1}}
      resizeMode="cover"
      >
      {children}
      </ImageBackground>
      <ImageBackground 
       source={require("../assets/top.png")}
      style={{height:55,backgroundColor:"",justifyContent:"space-between",flexDirection:"row",}}>
        <View style={{width:"50%",backgroundColor:"",justifyContent:"center",alignItems:"center"}}>
            <VectorIcon type="MaterialCommunityIcons" name="home-circle" size={35} color="#1066c1" />
        </View>
        <View style={{width:"50%",backgroundColor:"",justifyContent:"center",alignItems:"center"}}>
            <VectorIcon type="Ionicons" name="person-circle" size={35} color="#1066c1" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({});
