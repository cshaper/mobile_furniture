import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SearchScreen() {
  return (
    <View style={styles.search}>
    <Text style={styles.searchText}>Search Screen</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    search: {
        flex:1, 
        justifyContent:'center',
        alignItems:'center'

    },

    searchText: {
        fontSize: 36,
    }
})