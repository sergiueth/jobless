import React, { useState } from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import { colors } from "../../../utils/colors";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";

const Signup = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <AuthHeader title="Sign Up" />
        <Input label="Name" placeholder="John Doe" />
        <Input label="E-mail" placeholder="example@gmail.com" />
        <Input isPassword label="Pawssord" placeholder="********" />

        <View style={styles.agreeRow}>
          <Checkbox checked={checked} onCheck={setChecked} />
          <Text style={styles.agreeText}>
            I agree with <Text style={styles.agreeTextBold}>Terms</Text>&
            <Text style={styles.agreeTextBold}>Privacy Policy</Text>
          </Text>
        </View>

        <Button style={styles.button} title="Sign Up" />

        <Separator text="Or sign up with" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 380, // Set your desired maximum width
    alignSelf: "center", // Center the container horizontally
    padding: 24,
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
});

export default Signup;
