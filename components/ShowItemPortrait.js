import { Image, StyleSheet, View } from "react-native";
import React from "react";

const ShowItemPortrait = (props) => {
  const { image } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.showImage}
      />
    </View>
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