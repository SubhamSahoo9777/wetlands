import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import TableComponent from "../components/TableComponent";
import { TextInput1 } from "../components/CustomText";
import { CustomButton1 } from "../components/CustomButtons";
import MyContext from "../ContextApi/CreateContext"
const Efams = () => {
  const [data, setData] = useState([
    { title: "Floating", status: "no", comment: "" },
    { title: "Submerge", status: "no", comment: "" },
    { title: "Emergent", status: "no", comment: "" },
    { title: "Shrubs/Thickets/Palms", status: "no", comment: "" },
    { title: "Trees", status: "no", comment: "" },
    { title: "Mixed Community", status: "no", comment: "" },
  ]);
  const [originalVegetation, setOriginalVegetation] = useState("");
  const [ecological, setEcological] = useState("");
  const { contextData, setContextData } = useContext(MyContext);
  const handleValue = () => {
    const temp = {
      "Ecological_Features_at_monitoring_site": {
        originalVegetation: originalVegetation,
        ecological: ecological,
        table: data
      }
    };
    setContextData(prev => ({ ...prev, ...temp }));

    console.log(contextData)
  }


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
          <TableComponent key={index} title={item.title} setData={setData} singleData={item} ind={index} />
        ))}
        <TextInput1 type="n" title="Original Vegetation when modified" onChangeText={(t) => setOriginalVegetation(t)} />
        <TextInput1 type="n" title="Other ecological feature" onChangeText={(t) => setEcological(t)} />
      </ScrollView>
      <CustomButton1
        title="Submit"
        animation="pulse"
        duration={1000}
        style={{ marginBottom: 10 }}
        onPress={handleValue}
      />
    </Layout>
  );
};

export default Efams;

const styles = StyleSheet.create({});
