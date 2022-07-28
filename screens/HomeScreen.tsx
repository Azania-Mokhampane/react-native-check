import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Camera, CameraType } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {  windowWidth } from '../utils';

const HomeScreen = () => {
  const[hasPermission, setHasPermission] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
              setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <AntDesign name="left" size={24} color="black" />
        <Text style={styles.text}>Transfer Money</Text>
        <Ionicons name="ios-information-circle-outline" size={24} color="black" />
      </View>

      <View style={styles.body}>
        <Text style={styles.text}>SEND TO:</Text>
        <Image style={styles.image} source={require("../assets/user-avatar.png")} />
      
       
      </View> */}
      <View style={styles.container}>
      <Camera style={styles.camera} type={CameraType.back}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
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
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    camera: {
      flex:1,
 width: 40,
 height: 50
    }
  });
  