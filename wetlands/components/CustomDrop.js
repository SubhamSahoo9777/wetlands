import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dropdown as RNEDropdown } from "react-native-element-dropdown";

export const Dropdown1 = ({ label, data, onSelect, placeholder }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = (item) => {
    setSelectedValue(item.value);
    if (onSelect) {
      onSelect(item.value);
    }
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <RNEDropdown
        style={styles.dropdown}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={placeholder || "Select an option"}
        value={selectedValue}
        onChange={handleSelect}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginBottom: 20,
    marginHorizontal: 10,
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 5,
  },
  dropdown: {
    minHeight: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});
