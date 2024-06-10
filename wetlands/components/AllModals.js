import React, { useState } from "react";
import * as Animatable from "react-native-animatable";

import {
  StyleSheet,
  View,
  Text,
  Modal,
  Vibration,
  Dimensions,
} from "react-native";
const { height, width }=Dimensions.get("window")
import VectorIcon from "../components/VectorIcon";
import { SubmitButton } from "./AllButtons";
import { CustomButton1 } from "./CustomButtons";
export const AlertModal = ({ content, setContent }) => {
  const { title, msg, show, ok, color, vibration } = content;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        setContent({ ...content, show: false });
      }}
      onShow={() => {
        if (vibration && vibration == true) {
          Vibration.vibrate(500);
        }
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          padding: 50,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <Animatable.View
          animation={{
            from: { rotateY: "0deg" },
            to: { rotateY: "360deg" },
          }}
          easing="ease-out"
          iterationCount={1}
          duration={500}
          style={{
            minHeight: height * 0.15,
            backgroundColor: "#fff",
            width: "100%",
            borderRadius: 10,
            padding: 10,
            justifyContent:"center",
            alignItems:"center"
          }}
        >
          <Text style={{ textAlign: "center" }}>{msg}</Text>
          {/* <SubmitButton
            title={"Ok"}
            onPress={() => {
              if (typeof ok === "function") {
                ok();
              }
              setContent({ ...content, show: false });
            }}
            textStyle={{}}
            buttonStyle={{
              minHeight: 30,
              width: "40%",
              alignSelf: "center",
              backgroundColor: color || "#cc3300",
              borderRadius: 5,
            }}
          /> */}
          <CustomButton1
          title={"okra"}
          />
        </Animatable.View>
      </View>
    </Modal>
  );
};





const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "60%",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  centeredView2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  centeredView1: {
    flex: 1,
    alignItems: "center",
    paddingTop: "10%",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: width * 0.8,
    height: height * 0.2,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalView2: {
    width: width * 0.9,
    height: height * 0.45,
    margin: 20,
    backgroundColor: "red",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 10,
    borderRadius: 20,
    width: "80%",
    elevation: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor:'green',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
  },
  modalView1: {
    width: width * 0.9,
    height: height * 0.8,
    margin: 20,
    backgroundColor: "#e9f7f6",
    borderRadius: 20,
    paddingTop: 35,
    // paddingHorizontal:10,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
