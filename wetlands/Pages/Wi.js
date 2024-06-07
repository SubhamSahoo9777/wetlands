import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Layout from "../components/Layout";
import { CustomButton1 } from "../components/CustomButtons";
import { TextInput1 } from "../components/CustomText";

const Wi = () => {
  const [data, setData] = useState([
    "Wetland Name",
    "Name of the system",
    "Local Name",
    "Local name of system",
    "Wetland code",
  ]);
  return (
    <Layout title={""} headerContent="Wetland Identification">
      <View style={{ flex: 1 }}>
        {data.map((item, index) => {
          return <TextInput1 key={index} type="n" title={item} />;
        })}

        <CustomButton1 title="Save" animation="pulse" duration={1000} />
      </View>
    </Layout>
  );
};

export default Wi;

const styles = StyleSheet.create({});
