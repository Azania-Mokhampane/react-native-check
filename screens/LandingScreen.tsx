import { StyleSheet,View, Text, Button } from 'react-native'
import React from 'react'

const LandingScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
        title="Click to continue"
        onPress={() => navigation.navigate('Home')}
      />
      <Text>LandingScreen</Text>
    </View>
  )
}

export default LandingScreen

const styles = StyleSheet.create({})