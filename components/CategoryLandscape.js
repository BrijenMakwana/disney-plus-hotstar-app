import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ShowItemLandscape from "./ShowItemLandscape";
import { MaterialIcons } from "@expo/vector-icons";
import useAPI from "../hooks/useAPI";

const CategoryLandscape = (props) => {
  const { categoryTitle, setShowModal, apiUrl, setModalData, type, setType } =
    props;
  const showData = useAPI(apiUrl);

  const openModal = () => {
    setShowModal(true);
    setModalData(showData.results);
    setType(type);
  };

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
          data={showData.results}
          renderItem={({ item }) => (
            <ShowItemLandscape
              image={item.backdrop_path}
              btnAction={openModal}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default CategoryLandscape;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    marginTop: 10,
    paddingVertical: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
