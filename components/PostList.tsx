import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native';

const PostList = ({ posts, onPressPost }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPressPost(item.id)}>
          <Image source={item.image} style={styles.postImage} />
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.postListContainer}
    />
  );
};

const styles = StyleSheet.create({
  postListContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  postImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 10,
  },
});

export default PostList;
