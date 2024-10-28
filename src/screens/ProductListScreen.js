import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { theme } from "../constants/theme";
import ProductCardComponent from "../components/ProductCardComponent";
import {LottieView} from "lottie-react-native"

const localProductList = [
  {
    id: "1A",
    title: "Colorful Funiture",
    price: "$200",
    path: require("../../assets/images/fn3.jpg"),
  },
  {
    id: "1B",
    title: "Comfy Sofa",
    price: "$400",
    path: require("../../assets/images/fn2.jpg"),
  },
  {
    id: "1C",
    price: "$2,000",
    title: "IKEA Special",
    path: require("../../assets/images/fn1.jpg"),
  },
];

export default function ProductList() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        {/* <LottieView
            source={require('../../assets/jsons/animation.json')}
            autoPlay
            loop
            style={{width:300, height:300}}
        /> */}
        <Text>Loading...</Text>
      </View>
    );
  }
  const renderItem = ({ item }) => {
    return <ProductCardComponent item={item} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={localProductList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
