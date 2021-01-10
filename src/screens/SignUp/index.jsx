import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { Spacer } from "../../component";
import { Context as AuthContext } from "../../context/AuthContext";

const SignUp = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <View style={styles.container}>
        <Text h3>Sign Up for Tracker</Text>
        <Spacer height={30} />
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          label="PassWord"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button title="Sign Up" onPress={() => signup({ email, password })} />
        <Spacer height={10} />
        <Button title="Sign In" onPress={() => navigation.navigate("SignIn")} />
        <Text>{email}</Text>
        <Text>{password}</Text>
      </View>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
  },
});
