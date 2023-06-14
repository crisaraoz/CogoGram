import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/Header';

const productsData = [
  {
    id: 1,
    title: 'Product 1',
    price: 19.99,
    image: require('../assets/pica1º.jpg'),
  },
  {
    id: 2,
    title: 'Product 2',
    price: 29.99,
    image: require('../assets/pica2.jpg'),
  },
  {
    id: 3,
    title: 'Product 3',
    price: 39.99,
    image: require('../assets/pica3.jpeg'),
  },
  {
    id: 4,
    title: 'Product 4',
    price: 39.99,
    image: require('../assets/pica4.jpg'),
  },
  {
    id: 5,
    title: 'Product 5',
    price: 39.99,
    image: require('../assets/pica5-1.jpg'),
  },
  {
    id: 6,
    title: 'Product 6',
    price: 39.99,
    image: require('../assets/pica6.jpg'),
  },
];

const ProductsScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <FlatList
        data={productsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listContent: {
    alignItems: 'center',
  },
  itemContainer: {
    width: '45%',
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  itemImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
  },
});

export default ProductsScreen;
