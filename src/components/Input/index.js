import React from "react";
import { Pressable, Text, TextInput, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { useState } from "react";

const Input = ({ label, isPassword, value, onChangeText, style, ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !isPasswordVisible}
          style={[styles.input, style]}
          {...props}
        />

        {isPassword ? (
          <View style={styles.eyeContainer}>
            <Pressable onPress={onEyePress}>
              <Image
                style={styles.eye}
                source={
                  isPasswordVisible
                    ? require("../../assets/eye.png")
                    : require("../../assets/eye_closed.png")
                }
              />
            </Pressable>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    flexDirection: "row",
    alignItems: "center",
    position: "relative", // Add position relative
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1, // Allow the input to grow and take available space
  },
  eyeContainer: {
    position: "absolute",
    right: 16,
  },
  eye: {
    width: 24,
    height: 24,
  },
});

export default Input;
