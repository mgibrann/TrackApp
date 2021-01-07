import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const SignUp = ({ navigation }) => {
  return (
    <>
      <Button title="Create Account" />
      <Button title="Sign In" onPress={() => navigation.navigate("SignIn")} />
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
