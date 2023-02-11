import { Image, StyleSheet, View, Text } from "react-native";
import React from "react";

const TopShowItem = (props) => {
  const { image, number } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.showImage}
      />
      <Text style={styles.number}>{number}</Text>
    </View>
  );
};

export default TopShowItem;

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 180,
    borderRadius: 5,
    marginRight: 3,
    alignItems: "flex-end",
  },
  showImage: {
    height: "100%",
    width: 140,
    borderRadius: 5,
  },
  number: {
    fontSize: 75,
    fontWeight: "500",
    position: "absolute",
    color: "#fff",
    left: 7,
    bottom: -17,
  },
});
