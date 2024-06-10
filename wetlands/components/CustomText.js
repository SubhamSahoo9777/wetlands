import React, { useState } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import VectorIcon from "./VectorIcon";
export const TextInput1 = ({
  style,
  style1,
  type = "password",
  width = "auto",
  title,
  ...rest
}) => {
  const [hide, setHide] = useState(true);
  const toggleHide = () => {
    setHide(!hide);
  };
  if (type == "email") {
    return (
      <View
        style={[{
          width: width,
          borderWidth: 1,
          padding: 1,
          margin: 10,
          borderRadius: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
        },style1]}
      >
        <TextInput
          style={[styles.input,{fontSize:16,color:"#6eb9f7",fontWeight:"500",}, style]}
          placeholder="Enter Email"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          {...rest}
        />
      </View>
    );
  }
  if (type == "password") {
    return (
      <View
        style={[{
          width: width,
          borderWidth: 1,
          padding: 1,
          margin: 10,
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
        },style1]}
      >
        <TextInput
          style={[styles.input, { width: "85%",fontSize:16,color:"#6eb9f7",fontWeight:"500" ,}, style]}
          secureTextEntry={hide}
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          placeholder="Enter Password"
          {...rest}
        />
        {hide ? (
          <VectorIcon
            onPress={toggleHide}
            type="Ionicons"
            name="eye"
            size={24}
            color="#FFC485"
            style={[{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              minHeight: 40,
            },]}
          />
        ) : (
          <VectorIcon
            onPress={toggleHide}
            type="Ionicons"
            name="eye-off"
            size={24}
            color="#FFC485"
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              minHeight: 40,
            }}
          />
        )}
      </View>
    );
  }

  return (
    <View style={{ marginTop: 10 }}>
      <Text
        style={{
          marginLeft: 13,
          marginBottom: 5,
          fontSize: 15,
          fontWeight: "500",
        }}
      >
        {title}
      </Text>
      <View
        style={{
          width: width,
          borderWidth: 1,
          padding: 1,
          marginHorizontal: 10,
          borderRadius: 10,
        }}
      >
        <TextInput
          style={[styles.input, style]}
          placeholder={`Enter ${title}`}
          {...rest}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    minHeight: 40,
    borderColor: "gray",
    paddingHorizontal: 10,
    width: "100%",
  },
});
