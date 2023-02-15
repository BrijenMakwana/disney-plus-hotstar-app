import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import ShowItemPortrait from "./ShowItemPortrait";

const CategoryPortrait = (props) => {
  const { categoryTitle, shows, setShowModal, apiUrl } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* category name */}
        <Text style={styles.categoryTitle}>{categoryTitle}</Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={22}
          color="#595F60"
          style={{ marginRight: 10 }}
        />
      </View>

      <View style={styles.showList}>
        {/* show list */}
        <FlatList
          data={shows}
          renderItem={({ item }) => (
            <ShowItemPortrait image={item.image} setShowModal={setShowModal} />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default CategoryPortrait;

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
