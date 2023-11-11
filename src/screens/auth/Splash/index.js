import React from "react";
import { Image, Text, StyleSheet, View, Pressable } from "react-native";
import Button from "../../../components/Button";
import { colors } from "../../../utils/colors";

const Splash = () => {
  return (
    <>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../../../assets/splash_image.png")}
        />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>You'll Find</Text>
          <Text style={[styles.title, styles.innerTitle]}>All you need </Text>
          <Text style={styles.title}>Here!</Text>
        </View>

        <Button title="Sign Up" />

        <Pressable hitSlop={20}>
          <Text style={styles.footerText}>Sign In</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 380,
    height: 200,
    paddingTop: 400,
  },
  titleContainer: {
    marginContainer: 54,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: "underline",
  },
  footerText: {
    color: colors.blue,
    textAlign: "center",
    paddingBottom: 100,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Splash;
