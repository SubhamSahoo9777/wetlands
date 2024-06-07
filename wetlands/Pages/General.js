import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import { CustomDate1 } from "../components/CustomDate";
import { TextInput1 } from "../components/CustomText";
import { CustomButton1 } from "../components/CustomButtons";
const { height, width } = Dimensions.get("window");
const General = () => {
  return (
    <Layout title={"General"} headerContent="General">
      <ScrollView style={{ flex: 1 }}>
        <CustomDate1 title="Start Date" />
        <CustomDate1 title="End Date" />
        <TextInput1 type="n" title="Compilers Name" />
        <CustomDate1 title="Date" />
        <TextInput1 type="n" title="District Name" />
        <TextInput1 type="n" title="District Code" />
        <CustomButton1 title="Save" animation="pulse" duration={1000} />
      </ScrollView>
    </Layout>
  );
};

export default General;

const styles = StyleSheet.create({});
