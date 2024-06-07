import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Dropdown1 } from "../components/CustomDrop";
import { CustomButton1 } from "../components/CustomButtons";

const Wtams = () => {
  const [data, setData] = useState([
    { title: "Swamp Forest" },
    { title: "Srub land" },
    { title: "Bushland/Palms" },
    { title: "Permanent" },
    { title: "Reeds/sedges" },
    { title: "Natural Grassland" },
    { title: "Converted to Formland" },
    { title: "Open water" },
    { title: "Wood land" },
  ]);
  const dropdownData = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <Layout title={"WTAMS"} headerContent="Wetland Type At Monitoring Site">
      <FlatList
        contentContainerStyle={{ paddingBottom: 20 }}
        data={data}
        renderItem={({ item, index }) => (
          <Dropdown1
            label={item.title}
            data={dropdownData}
            //  onSelect={handleSelect}
            placeholder={item.title}
          />
        )}
      />
      <CustomButton1
        title="Save"
        animation="pulse"
        duration={1000}
        style={{ marginBottom: 15 }}
      />
    </Layout>
  );
};

export default Wtams;

const styles = StyleSheet.create({});
