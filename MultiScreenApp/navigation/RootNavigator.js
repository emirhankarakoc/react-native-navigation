import React, { useEffect, useReducer } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ABNavigator from "./ABNavigator";
import CDNavigator from "./CDNavigator";

export default function RootNavigator() {
  const RootStack = createStackNavigator();

  const [token, setToken] = React.useState();

  useEffect(() => {
    const handleToken = async () => {
      const usertoken = await AsyncStorage.getItem("usertoken");
      if (usertoken) {
        setToken(usertoken);
      }
    };

    handleToken();
  }, []);

  const initialRouteName = token ? "AB" : "CD";
  return (
    <RootStack.Navigator initialRouteName={initialRouteName}>
      <RootStack.Screen name="AB NAVIGATOR" component={ABNavigator} />
      <RootStack.Screen name="CD NAVIGATOR" component={CDNavigator} />
    </RootStack.Navigator>
  );
}
