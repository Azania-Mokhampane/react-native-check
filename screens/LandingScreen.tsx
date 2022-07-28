import { StyleSheet,View, Text, Button, Pressable } from 'react-native'
import React from 'react'

const LandingScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{display: "flex", flexDirection: "row"}}>
          <Pressable style={{height:50, width:200, backgroundColor:"#222222", justifyContent:"center", alignItems:"center", borderRadius:10}} 
        onPress={()=>{
              alert("Helllo there")
        }}>
          <Text style={{color:"white"}}>Login</Text>
        </Pressable>
        <Pressable style={{height:50, width:200, backgroundColor:"#222222", justifyContent:"center", alignItems:"center", borderRadius:10}} 
        onPress={()=>{
              alert("Helllo there")
        }}>
          <Text style={{color:"white"}}>Sign In</Text>
        </Pressable>
        </View>
        
        <Button
        title="Click to continue"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default LandingScreen

const styles = StyleSheet.create({})