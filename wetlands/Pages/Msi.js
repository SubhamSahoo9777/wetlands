import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { TextInput1 } from '../components/CustomText'
import { CustomButton1 } from '../components/CustomButtons'

const Msi = () => {
    const [data,setData]=useState(["Map name","Map number","Local Name","Village name at monitoring site ","Geographical UTM coordinates","Northing","Altitude"])
  return (
    <Layout title={"MSI"} >
    <View style={{flex:1}}>
    
     <ScrollView
     contentContainerStyle={{paddingBottom:20}}
     >
     {
        data.map((item,index)=>{
            return(
                <TextInput1
                key={index}
                type="n"
                title={item}
                />
            )
        })
     }
     
      <CustomButton1
      title="Save"
      animation="pulse"
      duration={1000}
      />
     </ScrollView>
    </View>
  </Layout >
  )
}

export default Msi

const styles = StyleSheet.create({})