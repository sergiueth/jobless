import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import { colors } from "../../../utils/colors";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";

const Signup = () => {
  return (
    <>
      <View style={styles.container}>
        <AuthHeader title="Sign Up" />
        <Input label="Name" placeholder="John Doe" />
        <Input label="E-mail" placeholder="example@gmail.com" />
        <Input label="Pawssord" placeholder="********" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

export default Signup;
