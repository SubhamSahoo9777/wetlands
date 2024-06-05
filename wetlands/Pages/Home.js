import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput1 } from '../components/CustomText'
import { CustomDrop } from '../components/CustomDrop'

const Home = ({navigation}) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <View style={{flex:1,justifyContent:"center"}}>
     <TextInput1/>
     <CustomDrop
      label="Select Date"
      onDateChange={setSelectedDate}
     />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})