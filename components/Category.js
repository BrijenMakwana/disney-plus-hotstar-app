import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ShowItem from "./ShowItem";
import { MaterialIcons } from "@expo/vector-icons";

const Category = (props) => {
  const { categoryTitle, shows } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.categoryTitle}>{categoryTitle}</Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={22}
          color="#595F60"
          style={{ marginRight: 10 }}
        />
      </View>

      <View style={styles.showList}>
        <FlatList
          data={shows}
          renderItem={({ item }) => <ShowItem image={item.image} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  categoryTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
    textTransform: "capitalize",
    flex: 1,
  },
  showList: {
    marginTop: 10,
  },
});
