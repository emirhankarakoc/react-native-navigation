import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function B({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        onPress={async () => {
          await AsyncStorage.setItem("usertoken", "blabla");

          navigation.reset({
            index: 0,
            routes: [{ name: "CD NAVIGATOR", params: { screen: "C" } }],
          });
        }}
      >
        <Text style={{ backgroundColor: "pink" }}>
          AB Navigatorunden cikis yap ve CD navigatorune gec.
        </Text>
      </TouchableOpacity>
    </View>
  );
}
