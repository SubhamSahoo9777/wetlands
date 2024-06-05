import React, { useState } from 'react';
import { TextInput, StyleSheet, View} from 'react-native';
import VectorIcon from './VectorIcon';
export const TextInput1 = ({ style,type="password",width="auto", ...rest }) => {
    const [hide,setHide]=useState(false)
    const toggleHide=()=>{
        setHide(!hide)
    }
  if(type=="email"){
    return (
        <View style={{width:width,borderWidth:1,padding:1,margin:10,borderRadius:10}}>
        <TextInput
          style={[styles.input, style]}
          placeholder='Enter Email'
          {...rest}
        />
        </View>
      );
  }
  if(type=="password"){
    return (
        <View style={{width:width,borderWidth:1,padding:1,margin:10,borderRadius:10,flexDirection:"row"}}>
        <TextInput
          style={[styles.input,{width:"85%"}, style]}
          secureTextEntry={!hide}
          placeholder='Enter Password'
          {...rest}
        />
        {
            hide?
            <VectorIcon onPress={toggleHide} type="Ionicons" name="eye" size={24} color="black" style={{justifyContent: 'center',alignItems: 'center',flex: 1,minHeight:40}}/>
            :<VectorIcon onPress={toggleHide} type="Ionicons" name="eye-off" size={24} color="black" style={{justifyContent: 'center',alignItems: 'center',flex: 1,minHeight:40}} />
        }
        </View>
      );
  }

    return (
        <View style={{width:width,borderWidth:1,padding:1,margin:10,borderRadius:10}}>
        <TextInput
          style={[styles.input, style]}
          placeholder='Enter your name'
          {...rest}
        />
        </View>
      );
 
};

const styles = StyleSheet.create({
  input: {
    minHeight: 40,
    borderColor: 'gray',
    paddingHorizontal: 10,
    width:"100%",
  },
});

