import { StatusBar } from 'expo-status-bar';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';
import {windowHeight, windowWidth} from "./utils"
export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="left" size={24} color="white" />
        <Text style={styles.text}>Transfer Money</Text>
        <Ionicons name="ios-information-circle-outline" size={24} color="white" />
      </View>

      <View style={styles.body}>
        <Text style={styles.text}>SEND TO:</Text>
        <Image style={styles.image} source={require("./assets/user-avatar.png")} />
 
      </View>
      <View>
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: windowHeight,
    flex:1
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: windowWidth,
    top:40,
  },
  text: {
    color: "white",
  },
  body: {
    height:100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    marginTop:120
  },
  image: {
    width: 66,
    height: 58,
    borderRadius: 100
  }
});
