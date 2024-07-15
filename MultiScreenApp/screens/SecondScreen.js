import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SecondScreen;
