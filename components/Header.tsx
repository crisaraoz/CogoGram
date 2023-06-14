import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';
import { Linking } from 'react-native';

const Header = () => {
  const navigation = useNavigation();

  const goToLanding = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Landing' }],
      })
    );
  };

  const goToProducts = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Products' }],
      })
    );
  };

  const goToInstagramProfile = () => {
        const instagramURL = 'https://www.instagram.com/cris.araozz/'; 
        Linking.openURL(instagramURL)
          .catch((error) => {
            console.error('Error al abrir el enlace de Instagram:', error);
          });
  };
  
  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={goToLanding}>
        <Image source={require('../assets/cogo-app.png')} style={styles.logo} />
      </TouchableOpacity>
      <View style={styles.menu}>
        <TouchableOpacity onPress={goToProducts}>
          <Feather name="shopping-bag" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={goToInstagramProfile}>
        <Feather name="instagram" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
} as { [key: string]: any });

export default Header;
