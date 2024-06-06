import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, Platform, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import VectorIcon from './VectorIcon';

export const CustomDrop = ({ label, style, onDateChange }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    if (onDateChange) {
      onDateChange(currentDate);
    }
  };

  const showDatepicker = () => {
    setShow(true);
  };

  if (Platform.OS !== 'android') {
    return null; // Render nothing if the platform is not Android
  }

  return (
<View style={{minHeight:40,}}>
<View style={{borderWidth:1,flexDirection:"row",margin:10,borderRadius:10,padding:5}}>
  {/* <Button onPress={showDatepicker} title={date.toLocaleDateString()} /> */}
<TextInput
value={date.toLocaleDateString()}
 placeholder='- -/- -/- - - -'
 style={{paddingLeft:10,width:"85%"}}
 />
 <VectorIcon onPress={showDatepicker} type="FontAwesome" name="calendar" size={24} color="black" style={{flex:1,justifyContent: 'center',alignItems: 'center',}}/>
</View>
 {show && (
   <DateTimePicker
     value={date}
     mode="date"
     display="default"
     onChange={onChange}
   />
 )}
</View>
 
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
});

export default CustomDrop;
