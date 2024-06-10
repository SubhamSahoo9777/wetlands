import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput1 } from "../components/CustomText";
import { Dropdown1 } from "../components/CustomDrop";
import { CustomButton1 } from "../components/CustomButtons";
import MyContext from "../ContextApi/CreateContext";

const Wqams = () => {
  const dropdownData = {
    drop1: [
      { label: "Stationary", value: "Stationary" },
      { label: "Flowing", value: "Flowing" },
    ],
    drop2: [
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" },
    ],
  };
const {setContextData}=useContext(MyContext)
  const [response, setResponse] = useState({
    pH: "",
    EC: "",
    Temperature: "",
    Stationary: "",
    Oil: "",
    Sheen: "",
    Transparency: "",
    Color: "",
    Smell: "",
    DO: ""
  });

  const handleChange = (key, value) => {
    setResponse((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const validateFields = () => {
    for (const key in response) {
      if (!response[key]) {
        alert(`Please fill ${key}`);
        return false;
      }
    }
    return true;
  };

  const handleSave = () => {
    if (validateFields()) {
      const temp = {
        waterQualityAtMonitoringSite: response,
      };
      setContextData(pre=>({...pre,...temp}))
    }
  };

  return (
    <Layout headerContent="Water Quality At Monitoring Site">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <TextInput1 type="" title="pH" onChangeText={(t) => handleChange("pH", t)} />
        <TextInput1 type="" title="EC(cm)" onChangeText={(t) => handleChange("EC", t)} />
        <TextInput1 type="" title="Temperature °C" onChangeText={(t) => handleChange("Temperature", t)} />
        <Dropdown1
          label={"Stationary"}
          data={dropdownData.drop1}
          onSelect={(value) => handleChange("Stationary", value)}
          placeholder={"Stationary"}
        />
        <Dropdown1
          label={"Oil"}
          data={dropdownData.drop2}
          onSelect={(value) => handleChange("Oil", value)}
          placeholder={"Oil"}
        />
        <TextInput1 type="" title="Sheen" onChangeText={(t) => handleChange("Sheen", t)} />
        <TextInput1 type="" title="Transparency(cm)" onChangeText={(t) => handleChange("Transparency", t)} />
        <TextInput1 type="" title="Color" onChangeText={(t) => handleChange("Color", t)} />
        <TextInput1 type="" title="Smell" onChangeText={(t) => handleChange("Smell", t)} />
        <TextInput1 type="" title="DO(mgl)" onChangeText={(t) => handleChange("DO", t)} />
      </ScrollView>
      <CustomButton1
        title="Save"
        onPress={handleSave}
        animation="pulse"
        duration={1000}
        style={{ marginBottom: 10 }}
      />
    </Layout>
  );
};

export default Wqams;

const styles = StyleSheet.create({});
