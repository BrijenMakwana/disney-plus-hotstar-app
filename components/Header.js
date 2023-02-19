import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="reorder-three" size={27} color="#fff" />
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo.jpg")}
          style={styles.logo}
        />
      </View>

      <Ionicons name="search" size={20} color="#fff" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 60,
    resizeMode: "contain",
    marginLeft: 5,
  },
});
