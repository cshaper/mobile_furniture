import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "./src/screens/ProductListScreen";
import {
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold
  } from "@expo-google-fonts/roboto";
import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] =useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  const onLayoutRootView = useCallback(async()=>{
    if(fontsLoaded) 
     await SplashScreen.hideAsync();

  }, [fontsLoaded]);

  if(!fontsLoaded) {
    console.log('fonts not loaded')
    return null;
  } else {
    console.log('font loaded')
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProductList" component={ProductList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
