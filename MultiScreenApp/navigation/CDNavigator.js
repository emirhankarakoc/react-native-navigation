import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import C from "../screens/C";
import D from "../screens/D";

const Stack = createStackNavigator();

function CDNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="C" component={C} />
      <Stack.Screen name="D" component={D} />
    </Stack.Navigator>
  );
}

export default CDNavigator;
