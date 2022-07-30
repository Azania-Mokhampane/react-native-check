import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { windowHeight } from "../utils";

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <View style={{ height: 30 }}>
        <Image source={require("../assets/foxydexx.png")} />
      </View>

      <View style={styles.buttons}>
        <Pressable
          style={{ ...styles.btn, right: 10 }}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </Pressable>

        <Pressable
          style={{ ...styles.btn, left: 10 }}
          onPress={() => {
            navigation.navigate("Sign Up");
          }}
        >
          <Text style={{ color: "white" }}>Sign Up</Text>
        </Pressable>
      </View>

      <View style={styles.buttons}>
        <Pressable
          style={{ ...styles.btn, right: 10 }}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </Pressable>

        <Pressable
          style={{ ...styles.btn, left: 10 }}
          onPress={() => {
            navigation.navigate("Sign Up");
          }}
        >
          <Text style={{ color: "white" }}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
  },
  buttons: {
    alignItems: "center",
    flexDirection: "row",
    marginTop:
      windowHeight > 840
        ? (windowHeight * 75) / 100
        : (windowHeight * 80) / 100,
  },
  btn: {
    height: 50,
    width: 180,
    backgroundColor: "#222222",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
