import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";

const logoApp = require("../assets/Play(2).png");
const logoImage = require("../assets/cogo-app.png");
const backgroundImage = require("../assets/weedFlower.png");

export default function HomeScreen({ navigation }) {
  const [imagePositions, setImagePositions] = useState<
    { key: string; top: string; left: string }[]
  >([]);
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const backgroundColor = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const imageInterval = setInterval(() => {
      const numberOfImages = Math.floor(Math.random() * 4);
      const newPositions = Array.from({ length: numberOfImages }, () => ({
        key: Math.random().toString(),
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
      }));

      setImagePositions(newPositions);
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]).start();
    }, 4000);

    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.2,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.timing(backgroundColor, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const backgroundColorInterpolate = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255, 255, 255)', 'rgb(0, 0, 0)']
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor: backgroundColorInterpolate }]}>
      {imagePositions.map((pos) => (
        <Animated.Image
          key={pos.key}
          source={backgroundImage}
          style={[
            styles.backgroundImage,
            { top: pos.top, left: pos.left, opacity: opacity },
          ]}
        />
      ))}
      <Image source={logoApp} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Landing')}
      >
        <Animated.Image source={logoImage} style={[styles.logo, { transform: [{ scale }] }]} />
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  backgroundImage: {
    position: "absolute",
    width: 50,
    height: 50,
  },
  logo: {
    width: 150,
    height: 150,
    zIndex: 1,
  },
});
