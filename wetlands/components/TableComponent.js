import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomRadio from "./CustomRadio";
import { TextInput1 } from "./CustomText";

const TableComponent = ({ title = "Floating", setData }) => {
  const [select, setSelect] = useState("no");
  const onSelect = (item) => {
    console.log(item);
    setSelect(item);
  };
  return (
    <View style={{ marginHorizontal: 10, marginTop: 10 }}>
      <View
        style={{
          borderWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          minHeight: 40,
          borderRadius: 2,
        }}
      >
        <View
          style={{
            width: "55%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>{title}</Text>
        </View>
        <View style={{ width: "45%", borderLeftWidth: 1 }}>
          <CustomRadio onSelect={onSelect} />
        </View>
      </View>
      {select == "Yes" && <TextInput1 type={""} title="Significant Species" />}
    </View>
  );
};

export default TableComponent;

const styles = StyleSheet.create({});
