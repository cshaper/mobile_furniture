import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProfileScreen() {
  return (
    <View style={styles.profile}>
      <Text style={styles.profileText}>Profile Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    profile: {
        flex:1, 
        justifyContent:'center',
        alignItems:'center'

    },

    profileText: {
        fontSize: 36,
    }
})