import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ImageView from '../components/imageView';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput1 } from '../components/CustomText';
import { TextAnimation } from '../components/CustomAnimations';
import { CustomButton1 } from '../components/CustomButtons';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <ImageView imageSource={require("../assets/waterBackground.jpg")}>
      <LinearGradient
        colors={[
          "rgba(32, 24, 127, 1)",
          "rgba(32, 24, 127, 0.5)",
          "rgba(32, 24, 127, 0.3)",
          "rgba(32, 24, 127, 0.1)",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems:"center"
        }}
      >

       
          <View style={styles.logoContainer}>
          <Image
              source={require("../assets/logo.png")}
              style={{ height: 100, width: 100 }}
            />
        <TextAnimation
        text="WETLAND"
        />
          </View>
          <View style={styles.inputContainer}>
            <TextInput1
            style1={styles.input}
            type='email'
            placeholder="Enter Email"
            
            />
            <TextInput1
            style1={styles.input}
            type='password'
            placeholder="Enter Password"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            />
<CustomButton1
title={"Login"}
onPress={()=>navigation.navigate("PinGeneration")}
/>
          </View>
    
      </LinearGradient>
    </ImageView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#20247F',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    borderWidth:0,
    borderBottomWidth:3,
    borderColor:"#6eb9f7",
    borderLeftWidth:3,
    width:300
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default Login;
