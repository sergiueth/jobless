import React, { useState } from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import { colors } from "../../../utils/colors";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";

const Signup = ({ navigation }) => {
  const [checked, setChecked] = useState(false);

  const onSignIn = () => {
    navigation.navigate("Signin");
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.container}>
        <AuthHeader
          onBackPress={onBack}
          style={styles.authHeader}
          title="Sign Up"
        />
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

        <View style={styles.buttonCont}>
          <Button style={styles.button} title="Sign Up" />
        </View>

        <Separator text="Or sign up with" />

        <GoogleLogin />

        <Text style={styles.footerText}>
          Already have an account?{" "}
          <Text onPress={onSignIn} style={styles.footerLink}>
            Sign In
          </Text>
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 380, // Set your desired maximum width
    marginTop: 40,
    alignSelf: "center", // Center the container horizontally
  },
  authHeader: {},
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
    marginTop: 26,
    textAlign: "center",
  },
  footerLink: {
    fontWeight: "bold",
  },
  buttonCont: {
    width: "90%",
    flexDirection: "row",
  },
});

export default Signup;
