import React from "react";
import { ExpoConfigView } from "@expo/samples";
import { View, StyleSheet, Text } from "react-native";
import { MonoText } from "../components/StyledText";

export default function SettingsScreen() {
  return (
    <View style={styles.tabBarInfoContainer}>
      <MonoText>You are settings page of the app!</MonoText>
    </View>
  );
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  //return <ExpoConfigView />;
}

if (Platform.OS === "ios") {
  SettingsScreen.navigationOptions = {
    title: "Link"
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  }
});
