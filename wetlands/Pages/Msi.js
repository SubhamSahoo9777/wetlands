import { ScrollView, StyleSheet, View, Alert } from "react-native";
import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import { CustomButton1 } from "../components/CustomButtons";
import { TextInput1 } from "../components/CustomText";
import MyContext from "../ContextApi/CreateContext";

const Msi = () => {
  const {setContextData}=useContext(MyContext)
  const [data, setData] = useState([
    "Map name",
    "Map number",
    "Local Name",
    "Village name at monitoring site",
    "Geographical UTM coordinates",
    "Northing",
    "Altitude",
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
      const temp = {
        monitoringSiteIdentification: response
      };
      setContextData(pre=>({...pre,...temp}))
    }
  };

  return (
    <Layout title={"MSI"} headerContent="Monitoring Site Identification">
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

export default Msi;

const styles = StyleSheet.create({});
