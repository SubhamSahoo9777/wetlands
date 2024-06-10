import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import { CustomDate1 } from "../components/CustomDate";
import { TextInput1 } from "../components/CustomText";
import { CustomButton1 } from "../components/CustomButtons";
import MyContext from "../ContextApi/CreateContext";
const { height, width } = Dimensions.get("window");
const General = () => {
  const {contextData,setContextData}=useContext(MyContext)
  const[startDate,setStartDate]=useState("")
  const[endDate,setEndDate]=useState("")
  const[compName,setCompName]=useState("")
  const[date,setDate]=useState("")
  const[distName,setDistName]=useState("")
  const[distCode,setDistCode]=useState("")

const validation=()=>{
  if(!startDate) {alert("Enter Start Date");return false};
  if(!endDate) { alert("Enter End Date");return false};
  if(!compName) { alert("Enter Compilers Name");return false};
  if(!date) { alert("Enter Date");return false};
  if(!distName) { alert("Enter District Name");return false};
  if(!distCode) {alert("Enter District Code");return false};
  return true
}

  const handleSave=()=>{
    if(validation()==true){
const temp={
  general:{
    startDate,endDate,compName,date,distName,distCode
  }
}
setContextData(pre=>({...pre,...temp}))
console.log(contextData)
    }
  }
  return (
    <Layout title={"General"} headerContent="General">
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{paddingBottom:20}}>
        <CustomDate1 onDateChange={setStartDate}title="Start Date" />
        <CustomDate1 title="End Date" onDateChange={setEndDate}/>
        <TextInput1 type="n" title="Compilers Name" onChangeText={(t)=>setCompName(t)} />
        <CustomDate1 title="Date" onDateChange={setDate}/>
        <TextInput1 type="n" title="District Name"  onChangeText={(t)=>setDistName(t)} />
        <TextInput1 type="n" title="District Code"  onChangeText={(t)=>setDistCode(t)} />
        <CustomButton1 title="Save" animation="pulse" duration={1000} onPress={handleSave} />
      </ScrollView>
    </Layout>
  );
};

export default General;

const styles = StyleSheet.create({});
