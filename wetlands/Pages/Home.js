import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import { Dropdown1 } from "../components/CustomDrop";
import MyContext from "../ContextApi/CreateContext"
const Home = () => {
  return (
    <>
      <Layout
        title="Home"
        headerContent="WETLAND MONITORING SITE DATA SHEET(WMSDS)"
      >
       <Text>{"home"}</Text>
      </Layout>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
