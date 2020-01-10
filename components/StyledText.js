import React from "react";
import { Text, StyleSheet } from "react-native";

export function MonoText(props) {
  return (
    <Text
      {...props}
      style={[props.style, styles.textStyle, { fontFamily: "space-mono" }]}
    />
  );
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  }
});
