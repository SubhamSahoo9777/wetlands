import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Dropdown1 } from "../components/CustomDrop";

const Home = () => {
  const dropdownData = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];
  return (
    <>
      <Layout
        title="Home"
        headerContent="WETLAND MONITORING SITE DATA SHEET(WMSDS)"
      >
        <Dropdown1
          label="Select an option"
          data={dropdownData}
          //  onSelect={handleSelect}
          placeholder="Select an option"
        />
      </Layout>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
