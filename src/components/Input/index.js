import React from "react";
import { Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const Input = ({ label, placeholder }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder={placeholder} style={styles.input} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginTop: 20,
    marginBottom: 8,
    color: colors.blue,
    fontSize: 14,
    fontWeight: "500",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 14,
  },

  input: {
    // borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
});

export default Input;
