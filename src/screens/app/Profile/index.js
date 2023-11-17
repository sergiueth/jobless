import React from "react";
import { ScrollView, Text } from "react-native";
// import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text>Profile</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

export default React.memo(Profile);
