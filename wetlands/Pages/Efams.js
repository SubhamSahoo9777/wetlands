import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Layout from "../components/Layout";
import TableComponent from "../components/TableComponent";
import { TextInput1 } from "../components/CustomText";
import { CustomButton1 } from "../components/CustomButtons";

const Efams = () => {
  const [data, setData] = useState([
    { title: "Floating" },
    { title: "Submerge" },
    { title: "Emergent" },
    { title: "Shrubs/Thickets/Palms" },
    { title: "Trees" },
    { title: "Mixed Community" },
  ]);
  return (
    <Layout headerContent="Ecological Features at monitoring site">
      <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
        <View
          style={{
            borderWidth: 1,
            flexDirection: "row",
            marginHorizontal: 10,
            minHeight: 40,
            marginTop: 10,
            borderRadius: 5,
          }}
        >
          <View
            style={{
              width: "55%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "500" }}>Community</Text>
          </View>
          <View
            style={{
              width: "45%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "500" }}>Yes/No</Text>
          </View>
        </View>
        {data.map((item, index) => (
          <TableComponent key={index} title={item.title} />
        ))}
        <TextInput1 type="n" title="Original Vegetation when modified " />
        <TextInput1 type="n" title="Other ecological feature" />
      </ScrollView>
      <CustomButton1
        title="Submit"
        animation="pulse"
        duration={1000}
        style={{ marginBottom: 10 }}
      />
    </Layout>
  );
};

export default Efams;

const styles = StyleSheet.create({});
