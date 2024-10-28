import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import CartScreen from "./CartScreen";
import SearchScreen from "./SearchScreen";

const Tabs = createBottomTabNavigator();
const screenOptions = { tabBarShowLabel: false };
export default function BottomTabs() {
  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={theme.sizes.xLarge}
                color={theme.colors.primary}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={theme.sizes.xLarge}
                color={theme.colors.primary}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "cart" : "cart-outline"}
                size={theme.sizes.xLarge}
                color={theme.colors.primary}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={theme.sizes.xLarge}
                color={theme.colors.primary}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({});
