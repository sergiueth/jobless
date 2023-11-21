import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { colors } from "../../../utils/colors";
import { launchCameraAsync, launchImageLibraryAsync } from "expo-image-picker";

const CreateListing = ({ navigation }) => {
  const [images, setImages] = useState([]);

  const goBack = () => {
    navigation.goBack();
  };

  const uploadNewImage = async (isCamera) => {
    let result;
    if (isCamera) {
      result = await launchCameraAsync({
        mediaTypes: "Images",
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    } else {
      result = await launchImageLibraryAsync({
        mediaTypes: "Images",
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    }

    if (!result.cancelled) {
      setImages((list) => [...list, result]);
    }
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

        <View style={styles.imageRow}>
          <TouchableOpacity
            style={styles.uploadContainer}
            onPress={() => uploadNewImage(false)} // Open image library
          >
            <View style={styles.uploadCircle}>
              <Text style={styles.uploadPlus}>+</Text>
            </View>
          </TouchableOpacity>

          {images?.map((image, index) => (
            <Image
              key={index}
              style={styles.image}
              source={{ uri: image.uri }}
            />
          ))}
        </View>
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginTop: 8,
    marginRight: 8,
  },
  uploadContainer: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.grey,
    borderStyle: "dotted",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    marginTop: 8,
  },
  uploadCircle: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: colors.lightGrey,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadPlus: {
    color: colors.white,
    fontSize: 24,
    paddingBottom: 2,
  },
  imageRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

export default React.memo(CreateListing);
