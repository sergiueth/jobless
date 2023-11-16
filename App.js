import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Signup from "./src/screens/auth/Signup";
import { useEffect } from "react";
import Signin from "./src/screens/auth/Signin";

const WEB_CLIENT_ID =
  "596083788971-n5qbfst0n9n8bh1dfst4a297j57s08c3.apps.googleusercontent.com";

export default function App() {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Signin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
