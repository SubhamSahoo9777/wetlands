import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import { Dropdown1 } from "../components/CustomDrop";
import { CustomButton1 } from "../components/CustomButtons";
import MyContext from "../ContextApi/CreateContext";

const Sams = () => {
  const {setContextData}=useContext(MyContext)
  const dropdownData = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
    { label: "No Information", value: "No Information" },
  ];

  const [data1, setData1] = useState([
    "Sandy",
    "Silty",
    "Clayey",
    "Peaty",
  ]);
  const [data2, setData2] = useState([
    "Sandy",
    "Silty",
    "Clayey",
    "Peaty",
  ]);

  const [texturesResponse, setTexturesResponse] = useState({});
  const [coloursResponse, setColoursResponse] = useState({});

  const handleSelect = (type, item, value) => {
    const key = item.replaceAll(" ", "_");
    if (type === "textures") {
      setTexturesResponse((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    } else if (type === "colours") {
      setColoursResponse((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    }
  };

  const validateFields = () => {
    for (const item of data1) {
      let key = item.replaceAll(" ", "_");
      if (!texturesResponse[key]) {
        alert(`Please select an option for ${item} in Textures`);
        return false;
      }
    }
    for (const item of data2) {
      let key = item.replaceAll(" ", "_");
      if (!coloursResponse[key]) {
        alert(`Please select an option for ${item} in Colours`);
        return false;
      }
    }
    return true;
  };

  const handleSave = () => {
    if (validateFields()) {
      const temp = {
        soilsAtMonitoringSite: {
          textures: texturesResponse,
          colours: coloursResponse,
        },
      };
      setContextData(pre=>({...pre,...temp}))
    }
  };

  return (
    <Layout headerContent="Soils At Monitoring Site">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <Text
          style={styles.sectionHeader}
        >
          Textures
        </Text>
        {data1.map((item, index) => (
          <Dropdown1
            key={index}
            label={item}
            data={dropdownData}
            onSelect={(value) => handleSelect("textures", item, value)}
            placeholder={item}
          />
        ))}
        <Text
          style={styles.sectionHeader}
        >
          Colours
        </Text>
        {data2.map((item, index) => (
          <Dropdown1
            key={index}
            label={item}
            data={dropdownData}
            onSelect={(value) => handleSelect("colours", item, value)}
            placeholder={item}
          />
        ))}
      </ScrollView>
      <CustomButton1
        title="Save"
        onPress={handleSave}
        animation="pulse"
        duration={1000}
        style={{ marginBottom: 15 }}
      />
    </Layout>
  );
};

export default Sams;

const styles = StyleSheet.create({
  sectionHeader: {
    alignSelf: "center",
    fontSize: 18,
    color: "#1e9ad8",
    borderBottomWidth: 1,
    paddingBottom: 3,
    marginTop: 10,
    letterSpacing: 2,
    borderStyle: "dashed",
  },
});
