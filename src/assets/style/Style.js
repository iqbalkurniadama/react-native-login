import React from "react";
import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "80%",
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: "blue",
  },
  text: (display) => ({
    marginBottom: 150,
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    width: "80%",
    display: display,
  }),
});

export { Style };
