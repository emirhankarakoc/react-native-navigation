import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function C({ navigation }) {
  return (
    <View>
      <Text>Bu C bileşenidir</Text>
      <TouchableOpacity onPress={() => navigation.navigate("D")}>
        <Text style={{ backgroundColor: "aquamarine" }}>Sayfa D'ye Git</Text>
      </TouchableOpacity>
    </View>
  );
}
