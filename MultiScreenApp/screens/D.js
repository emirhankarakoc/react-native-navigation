import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function D({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        onPress={async () => {
          await AsyncStorage.removeItem("userToken");

          navigation.reset({
            index: 0,
            routes: [{ name: "AB NAVIGATOR", params: { screen: "A" } }],
          });
        }}
      >
        <Text style={{ backgroundColor: "yellow" }}>
          CD Navigatorunden cikis yap ve AB navigatorune gec.
        </Text>
      </TouchableOpacity>
    </View>
  );
}
