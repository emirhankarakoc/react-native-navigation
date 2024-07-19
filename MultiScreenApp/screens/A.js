import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function A({ navigation }) {
  return (
    <View>
      <Text>Bu A bileşenidir</Text>
      <TouchableOpacity onPress={() => navigation.navigate("B")}>
        <Text style={{ backgroundColor: "aquamarine" }}>Sayfa B'ye Git</Text>
      </TouchableOpacity>
    </View>
  );
}
