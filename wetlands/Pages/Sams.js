import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Dropdown1 } from "../components/CustomDrop";
import { CustomButton1 } from "../components/CustomButtons";

const Sams = () => {
  const dropdownData = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
    { label: "No Information", value: "No Information" },
  ];
  const [data1, setData1] = useState([
    { title: "Sandy" },
    { title: "Silty" },
    { title: "Clayey" },
    { title: "Peaty" },
  ]);
  const [data2, setData2] = useState([
    { title: "Sandy" },
    { title: "Silty" },
    { title: "Clayey" },
    { title: "Peaty" },
  ]);
  return (
    <Layout headerContent="Soils At Monitoring Site">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
            color: "#1e9ad8",
            borderBottomWidth: 1,
            paddingBottom: 3,
            marginTop: 10,
            letterSpacing: 2,
            borderStyle: "dashed",
          }}
        >
          Textures
        </Text>
        {data1.map((item, index) => (
          <Dropdown1
            key={index}
            label={item.title}
            data={dropdownData}
            //  onSelect={handleSelect}
            placeholder={item.title}
          />
        ))}
        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
            color: "#1e9ad8",
            borderBottomWidth: 1,
            paddingBottom: 3,
            marginTop: 10,
            letterSpacing: 2,
            borderStyle: "dashed",
          }}
        >
          Colours
        </Text>
        {data2.map((item, index) => (
          <Dropdown1
            key={index}
            label={item.title}
            data={dropdownData}
            //  onSelect={handleSelect}
            placeholder={item.title}
          />
        ))}
      </ScrollView>
      <CustomButton1
        title="Save"
        animation="pulse"
        duration={1000}
        style={{ marginBottom: 15 }}
      />
    </Layout>
  );
};

export default Sams;

const styles = StyleSheet.create({});
