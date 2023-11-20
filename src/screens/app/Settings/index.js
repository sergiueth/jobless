import React from "react";
import { StyleSheet, View, Text, ScrollView, Linking } from "react-native";
// import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem";
import Button from "../../../components/Button";
import { colors } from "../../../utils/colors";

const Settings = () => {
  const onItemPress = () => {
    Linking.openURL("https://google.com");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Settings" />
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Help Center</Text>
        <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
        <ListItem
          onPress={onItemPress}
          style={styles.item}
          title="Contact Us"
        />
        <ListItem
          onPress={onItemPress}
          style={styles.item}
          title="Privacy & Terms"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  item: {
    padding: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  sectionTitle: {
    fontWeight: "500",
    fontSize: 16,
    color: colors.grey,
    marginBottom: 16,
  },
});

export default React.memo(Settings);
