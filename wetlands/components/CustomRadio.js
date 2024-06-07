import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CustomRadio = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.radioContainer}
        onPress={() => handleSelect("Yes")}
      >
        <View style={styles.radioButton}>
          {selectedOption === "Yes" && (
            <View style={styles.radioButtonSelected} />
          )}
        </View>
        <Text style={styles.radioText}>Yes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.radioContainer}
        onPress={() => handleSelect("No")}
      >
        <View style={styles.radioButton}>
          {selectedOption === "No" && (
            <View style={styles.radioButtonSelected} />
          )}
        </View>
        <Text style={styles.radioText}>No</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomRadio;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  radioButtonSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#000",
  },
  radioText: {
    fontSize: 16,
  },
});
