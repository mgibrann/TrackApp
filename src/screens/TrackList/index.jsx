import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const TrackList = ({ navigation }) => {
  return (
    <View>
      <Text>Track List</Text>
      <Button
        title="Ke Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </View>
  );
};

export default TrackList;

const styles = StyleSheet.create({});
