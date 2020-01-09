import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";

export default function LinksScreen() {
  return (
    <View style={styles.tabBarInfoContainer}>
      <Text style={styles.tabBarInfoText}>You are links page of the app!</Text>
    </View>
    // <ScrollView style={styles.container}>
    //   {/**
    //    * Go ahead and delete ExpoLinksView and replace it with your content;
    //    * we just wanted to provide you with some helpful links.
    //    */}

    // </ScrollView>
  );
}
if (Platform.OS === "ios") {
  LinksScreen.navigationOptions = {
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
    top: 0,
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
