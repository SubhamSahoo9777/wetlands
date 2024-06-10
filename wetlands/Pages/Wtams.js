import { FlatList, StyleSheet, View, Alert } from "react-native";
import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import { Dropdown1 } from "../components/CustomDrop";
import { CustomButton1 } from "../components/CustomButtons";
import MyContext from "../ContextApi/CreateContext";

const Wtams = () => {
  const {setContextData}=useContext(MyContext)
  const [data, setData] = useState([
    "Swamp Forest",
    "Srub land",
    "Bushland/Palms",
    "Permanent",
    "Reeds/sedges",
    "Natural Grassland",
    "Converted to Formland",
    "Open water",
    "Wood land",
  ]);

  const dropdownData = [
    { label: "Present", value: "Present" },
    { label: "Not Present", value: "Not Present" },
    { label: "Don't Know", value: "Don't Know" },
  ];

  const [response, setResponse] = useState({});

  const handleSelect = (item, value) => {
    setResponse((prevState) => ({
      ...prevState,
      [item.replaceAll(" ", "_")]: value,
    }));
  };

  const validateFields = () => {
    for (const item of data) {
      let key = item.replaceAll(" ", "_");
      if (!response[key]) {
        alert(`Please select an option for ${item}`);
        return false;
      }
    }
    return true;
  };

  const handleSave = () => {
    if (validateFields()) {
      const temp = {
        wetlandTypeAtMonitoringSite: response,
      };
      setContextData(prev => ({ ...prev, ...temp }));
    }
  };

  return (
    <Layout title={"WTAMS"} headerContent="Wetland Type At Monitoring Site">
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 20 }}
          data={data}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Dropdown1
              label={item}
              data={dropdownData}
              onSelect={(value) => handleSelect(item, value)}
              placeholder={item}
            />
          )}
        />
        <CustomButton1 title="Save" onPress={handleSave} />
      </View>
    </Layout>
  );
};

export default Wtams;

const styles = StyleSheet.create({});
