import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { Spacer } from "../../component";

const SignIn = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text h2>Sign In</Text>
        <Spacer height={20} />
        <Input label="Email" />
        <Input label="PassWord" />
        <Button
          onPress={() => navigation.navigate("MainApp")}
          title="Main App"
        />
        <Spacer height={20} />
        <Button onPress={() => navigation.navigate("SignUp")} title="Sign up" />
      </View>
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
  },
});
