import React from 'react';
import { StyleSheet, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import PostList from '../components/PostList';

const slidePosts = [
  { id: 1, image: require('../assets/slide1.jpg') },
  { id: 2, image: require('../assets/slide2.jpeg') },
  { id: 3, image: require('../assets/slide3.jpeg') },
  { id: 4, image: require('../assets/slide4.jpg') },
  { id: 5, image: require('../assets/slide5.jpg') },
  { id: 6, image: require('../assets/slide6.jpg') },
];

const LandingScreen = () => {
  const navigation = useNavigation();

  const handlePressPost = (postId) => {
    // Lógica para manejar el evento de clic en una publicación
    // Reemplaza esto con tu propia implementación
    console.log(`Se hizo clic en la publicación con ID: ${postId}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <PostList posts={slidePosts} onPressPost={handlePressPost} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    height: 60,
    justifyContent: 'space-between',
  },
  logo: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  menu: {
    flexDirection: 'row',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
  },
  slideImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 10,
  },
});

export default LandingScreen;
