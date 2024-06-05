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
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      {/* <Button onPress={showDatepicker} title={date.toLocaleDateString()} /> */}
     <View>
     <TextInput
      placeholder='--/--/----'
      style={{borderWidth:1,padding:5}}
      />
      <VectorIcon/>
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
