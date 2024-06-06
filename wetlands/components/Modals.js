import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  Pressable,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get("window");

export const HamburgerModal = ({ visible = true, onClose,setVisible }) => {
    const navigation = useNavigation();
  const [data, setData] = useState([
    {"General":"General"},
    {"Wetland Identification":"Wi"},
    {"Monitoring Site Identification":"Msi"},
    {"Wetland Type At Monitoring Site":"Wtams"},
    {"Soils At Monitoring Site":"Sams"},
   { "Water Quality At Monitoring Site":"Wqams"},
    {"Ecological Features At Monitoring Site":"Efams"},
  ]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handlePress = (item) => {
    setSelectedItem(item);
    navigation.navigate(Object.values(item)[0])
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        {true && (
          <Animatable.View animation="bounceIn" style={[styles.modalView]}>
            {data.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => handlePress(item)}>
                  <Animatable.View
                    style={{
                      borderBottomWidth: 1,
                      marginBottom: 2,
                      paddingBottom: 3,
                      marginBottom: 6,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        color: selectedItem === item ? "blue" : "black",
                      }}
                    >
                      {Object.keys(item)[0]}
                    </Text>
                  </Animatable.View>
                </TouchableOpacity>
              );
            })}
            <Pressable onPress={()=>setVisible(false)}style={{height:20,width:20,position:"absolute",top:-20,right:-10}}/>
          </Animatable.View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  modalView: {
    backgroundColor: "#ccf5ff",
    borderRadius: 5,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "absolute",
    top: 40,
    right: 45,
    paddingVertical: 10,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
