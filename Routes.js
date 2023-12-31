import React, { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import Splash from "./src/screens/auth/Splash";
import Signin from "./src/screens/auth/Signin";
import Signup from "./src/screens/auth/Signup";
import Home from "./src/screens/app/Home";
import Favorties from "./src/screens/app/Favorites";
import Profile from "./src/screens/app/Profile";
import Settings from "./src/screens/app/Settings";
import ProductDetails from "./src/screens/app/ProductDetails/";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "./src/utils/colors";
import { Image } from "react-native";
import CreateListing from "./src/screens/app/CreateListing";
import MyListings from "./src/screens/app/MyListings";
import { UserContext } from "./App";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addTokenToAxios } from "./src/utils/request";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateListing"
        component={CreateListing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyListings"
        component={MyListings}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Tabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let icon;

        if (route.name === "Home") {
          icon = focused
            ? require("./src/assets/tabs/home_active.png")
            : require("./src/assets/tabs/home.png");
        } else if (route.name === "Favorites") {
          icon = focused
            ? require("./src/assets/tabs/bookmark_active.png")
            : require("./src/assets/tabs/bookmark.png");
        } else if (route.name === "ProfileStack") {
          icon = focused
            ? require("./src/assets/tabs/profile_active.png")
            : require("./src/assets/tabs/profile.png");
        }

        // You can return any component that you like here!
        return <Image style={{ width: 24, height: 24 }} source={icon} />;
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { borderTopColor: colors.lightGrey },
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favorites" component={Favorties} />
    <Tab.Screen name="ProfileStack" component={ProfileStack} />
  </Tab.Navigator>
);

export default function Routes() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("auth_token");
      setUser({ token });
    })();
  }, []);

  useEffect(() => {
    if (user?.token) {
      addTokenToAxios(user?.token);
    }
  }, [user]);

  const theme = {
    colors: {
      background: colors.white,
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {user?.token ? (
          <>
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
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
