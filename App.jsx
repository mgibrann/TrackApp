import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  SignIn,
  SignUp,
  Account,
  TrackDetail,
  TrackList,
  CreateTrack,
} from "./src/screens";

import { Provider as AuthProvider } from "./src/context/AuthContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TrackList" component={TrackList} />
      <Tab.Screen name="CreateTrack" component={CreateTrack} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn" headerMode={"none"}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MainApp" component={MainApp} />
        <Stack.Screen
          name="TrackDetail"
          component={TrackDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
