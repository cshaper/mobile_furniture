import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LoadingErrorComponent({isLoading, error}) {
        if(isLoading) {
          return (
          <View 
            style={{
                justfyContent:'center', 
                alignITems:'center', 
                flex:1
            }}>
          <Text>Loading...</Text>
          </View>
          );
        }

        if(error) {
          return (
            <View 
            style={{
                justfyContent:'center', 
                alignITems:'center', 
                height:'100%'
            }}
            >
              <Text>We have an error</Text>
             </View>
          );
        }
      return null;
}