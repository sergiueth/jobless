import React from "react";
import { FlatList, StyleSheet, ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { categories } from "../../../data/categories";
import { products } from "../../../data/products";
import CategoryBox from "../../../components/CategoryBox";
import ProductHomeItem from "../../../components/ProductHomeItem";

const Home = () => {
  const renderCategoryItem = ({ item, index }) => {
    return (
      <CategoryBox
        isFirst={index === 0}
        title={item?.title}
        image={item?.image}
      />
    );
  };

  const renderProductItem = ({ item }) => {
    return <ProductHomeItem {...item} />;
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header showSearch title="Find All you Need" />

        <FlatList
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          horizontal
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item, index) => String(index)}
        />

        <ScrollView
          style={styles.productsListContainer}
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >
          <FlatList
            style={styles.productsList}
            numColumns={2}
            data={products}
            renderItem={renderProductItem}
            keyExtractor={(item) => String(item.id)}
            ListFooterComponent={<View style={{ height: 200 }} />}
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  list: {
    paddingVertical: 24,
  },
  productsListContainer: {
    maxHeight: 500, // Set a maximum height for the product list
  },
  productsList: {
    paddingHorizontal: 0,
  },
});

export default React.memo(Home);
