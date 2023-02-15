import { Image, Pressable, StyleSheet } from "react-native";
import React from "react";

const ShowItemPortrait = (props) => {
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

export default ShowItemPortrait;

const styles = StyleSheet.create({
  container: {
    width: 118,
    height: 165,
    borderRadius: 5,
    marginRight: 7,
  },
  showImage: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
  },
});
