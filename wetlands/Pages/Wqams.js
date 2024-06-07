import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput1 } from "../components/CustomText";
import { Dropdown1 } from "../components/CustomDrop";
import { CustomButton1 } from "../components/CustomButtons";

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
  return (
    <Layout headerContent="Water Quality At Monitoring Site">
      <ScrollView>
        <TextInput1 type="" title="pH" />
        <TextInput1 type="" title="EC(cm)" />
        <TextInput1 type="" title="Temperature °C" />
        <Dropdown1
          label={"Stationary"}
          data={dropdownData.drop1}
          //  onSelect={handleSelect}
          placeholder={"Stationary"}
        />
        <Dropdown1
          label={"Oil"}
          data={dropdownData.drop2}
          //  onSelect={handleSelect}
          placeholder={"Oil"}
        />
        <TextInput1 type="" title="Sheen" />
        <TextInput1 type="" title="Transparency(cm)" />
        <TextInput1 type="" title="Color" />
        <TextInput1 type="" title="Smell" />
        <TextInput1 type="" title="DO(mgl)" />
      </ScrollView>
      <CustomButton1
        title="Save"
        animation="pulse"
        duration={1000}
        style={{ marginBottom: 10 }}
      />
    </Layout>
  );
};

export default Wqams;

const styles = StyleSheet.create({});
