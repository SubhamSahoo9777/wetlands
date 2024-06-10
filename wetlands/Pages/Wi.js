import { ScrollView, StyleSheet, Text, View, Alert } from "react-native";
import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import { CustomButton1 } from "../components/CustomButtons";
import { TextInput1 } from "../components/CustomText";
import MyContext from "../ContextApi/CreateContext";

const Wi = () => {
  const {contexData,setContextData}=useContext(MyContext)
  const [data, setData] = useState([
    "Wetland Name",
    "Name of the system",
    "Local Name",
    "Local name of system",
    "Wetland code",
  ]);
  const [response, setResponse] = useState({});

  const handleValues = (item, text, index) => {
    let key = item.replaceAll(" ", "_");
    setResponse((prevState) => ({
      ...prevState,
      [key]: text,
    }));
  };

  const validateFields = () => {
    for (const item of data) {
      let key = item.replaceAll(" ", "_");
      if (!response[key]) {
        alert(`Please fill ${item}`);
        return false;
      }
    }
    return true;
  };

  const handleSave = () => {
    if (validateFields()) {
      const temp={
        wetlandIdetification:response
      }
      setContextData(prev => ({ ...prev, ...temp }));
    } 
  };

  return (
    <Layout title={""} headerContent="Wetland Identification">
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          {data.map((item, index) => {
            return (
              <TextInput1
                key={index}
                type="n"
                title={item}
                onChangeText={(t) => handleValues(item, t, index)}
              />
            );
          })}
          <CustomButton1 title="Save" onPress={handleSave} />
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Wi;

const styles = StyleSheet.create({});
