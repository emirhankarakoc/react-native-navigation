import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import A from "../screens/A";
import B from "../screens/B";

const Stack = createStackNavigator();

function ABNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="A" component={A} />
      <Stack.Screen name="B" component={B} />
    </Stack.Navigator>
  );
}

export default ABNavigator;
