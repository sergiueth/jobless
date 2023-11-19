import React from "react";
import { StyleSheet, ScrollView, FlatList, View, Text } from "react-native";
// import { styles } from './styles';
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../../data/products";
import FavoritesItem from "../../../components/FavoriteItem";
import Header from "../../../components/Header";

const Favorites = () => {
  const renderItem = ({ item }) => {
    return <FavoritesItem {...item} />;
  };

  return (
    <SafeAreaView>
      <Header title="Favorites" />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => String(item?.id)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default React.memo(Favorites);
