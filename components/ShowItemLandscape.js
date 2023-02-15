import { Image, StyleSheet, Pressable } from "react-native";
import React from "react";

const ShowItemLandscape = (props) => {
  const { image, openModal } = props;
  return (
    <Pressable style={styles.container} onPress={openModal}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${image}`,
        }}
        style={styles.showImage}
      />
    </Pressable>
  );
};

export default ShowItemLandscape;

const styles = StyleSheet.create({
  container: {
    width: 178,
    height: 100,
    borderRadius: 5,
    marginRight: 7,
  },
  showImage: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
  },
});
