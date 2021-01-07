import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const SignIn = ({ navigation }) => {
  return (
    <View>
      <Text>Sadwdawdawdwaign In</Text>
      <Button onPress={() => navigation.navigate("MainApp")} title="Main App" />
      <Button onPress={() => navigation.navigate("SignUp")} title="Sign up" />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
