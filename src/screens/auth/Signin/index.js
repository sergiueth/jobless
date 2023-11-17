import React, { useState } from "react";
import { Image, Text, StyleSheet, View, ScrollView } from "react-native";
import { colors } from "../../../utils/colors";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

const Signin = ({ navigation }) => {
  const onSignUp = () => {
    navigation.navigate("Signup");
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign In" />
        <Input label="E-mail" placeholder="example@gmail.com" />
        <Input isPassword label="Pawssord" placeholder="********" />

        <Button style={styles.button} title="Sign In" />

        <Separator text="Or sign in with" />

        <GoogleLogin />

        <Text style={styles.footerText}>
          Don't have an account?{" "}
          <Text onPress={onSignUp} style={styles.footerLink}>
            Sign Up
          </Text>
        </Text>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 380, // Set your desired maximum width
    alignSelf: "center", // Center the container horizontally
    padding: 24,
    marginTop: 40,
  },
  agreeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  agreeText: {
    color: colors.blue,
    marginHorizontal: 13,
  },
  agreeTextBold: {
    fontWeight: "bold",
  },
  button: {
    marginVertical: 20,
  },
  footerText: {
    color: colors.blue,
    marginTop: 46,
    textAlign: "center",
  },
  footerLink: {
    fontWeight: "bold",
  },
});

export default Signin;
