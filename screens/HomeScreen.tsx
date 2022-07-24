import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';
import {  windowWidth } from '../utils';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="left" size={24} color="black" />
        <Text style={styles.text}>Transfer Money</Text>
        <Ionicons name="ios-information-circle-outline" size={24} color="black" />
      </View>

      <View style={styles.body}>
        <Text style={styles.text}>SEND TO:</Text>
        <Image style={styles.image} source={require("../assets/user-avatar.png")} />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {

    },
    header: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      top:40,
    },
    text: {
      color: "black",
    },
    body: {
      height:100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center", 
      marginTop:120,
    },
    image: {
      width: 66,
      height: 58,
      borderRadius: 100,
      marginTop: 30
    }
  });
  