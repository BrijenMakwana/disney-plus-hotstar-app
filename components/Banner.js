import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

const Banner = (props) => {
  const { title, number, image, total } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.bannerNumber}>
        {number}/{total}
      </Text>
      <Image
        source={{
          uri: image,
        }}
        style={styles.bannerImage}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    width: 360,
    alignSelf: "center",
    borderRadius: 5,
    paddingHorizontal: 4,
    height: 220,
    width: Dimensions.get("window").width,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  bannerNumber: {
    color: "#fff",
    fontSize: 11,
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
    textTransform: "capitalize",
    position: "absolute",
    bottom: 15,
    left: 15,
  },
});
