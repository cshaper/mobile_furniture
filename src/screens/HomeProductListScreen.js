import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fetchHomeProduct from '../hooks/fetchHomeProduct'
import ProductCardComponent from '../components/ProductCardComponent'

export default function HomeProductListScreen() {
    const {isLoading, error, data}= fetchHomeProduct();
    return (
      <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
        {
          isLoading?(
              <Text>Loading...</Text>
          ):error? (
              <Text>Error</Text>
          ):(
              <FlatList 
                  data={data}
                  keyExtractor={(item)=>item.id}
                  renderItem={({item})=> (<ProductCardComponent item={item}/>)}
                  numColumns={2}
              />
          ) 
        }
      </View>
    )
}

const styles = StyleSheet.create({})