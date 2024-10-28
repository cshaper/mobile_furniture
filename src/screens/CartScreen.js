import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CartScreen() {
  return (
    <View style={styles.cart}>
    <Text style={styles.cartText}>Cart Screen</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    cart: {
        flex:1, 
        justifyContent:'center',
        alignItems:'center'

    },

    cartText: {
        fontSize: 36,
    }
})