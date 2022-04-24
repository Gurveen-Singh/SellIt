import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
