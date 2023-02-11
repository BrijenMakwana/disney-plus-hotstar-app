import { Image, StyleSheet, View } from "react-native";
import React from "react";

const ShowItemLandscape = (props) => {
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
