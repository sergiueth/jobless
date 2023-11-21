import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { colors } from "../../../utils/colors";

const CreateListing = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        showBack={true}
        onBackPress={goBack}
        title="Create a new listing"
      />
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Upload Photos</Text>

        <TouchableOpacity>
          <Text>+</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  sectionTitle: {
    fontWeight: "500",
    fontSize: 14,
    color: colors.blue,
    marginBottom: 16,
  },
});

export default React.memo(CreateListing);
