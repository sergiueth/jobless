import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Splash from "./src/screens/auth/Splash";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Splash />
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
