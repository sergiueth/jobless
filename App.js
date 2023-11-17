import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./src/screens/auth/Splash";
import Signin from "./src/screens/auth/Signin";
import Signup from "./src/screens/auth/Signup";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "./src/utils/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";

const WEB_CLIENT_ID =
  "596083788971-n5qbfst0n9n8bh1dfst4a297j57s08c3.apps.googleusercontent.com";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {}, []);

  const theme = {
    colors: {
      background: colors.white,
    },
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer theme={theme}>
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signin"
              component={Signin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});
