import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const BtnIcon = (props) => {
  const { btnText } = props;
  if (btnText === "download")
    return <Entypo name="download" size={12} color="#fff" />;
  if (btnText === "watchlist")
    return <Entypo name="plus" size={17} color="#fff" />;
  if (btnText === "share")
    return <MaterialCommunityIcons name="share" size={17} color="#fff" />;
};

const UIButton = (props) => {
  const { text } = props;
  return (
    <View style={styles.container}>
      <BtnIcon btnText={text} />
      <Text style={styles.btnText}>{text}</Text>
    </View>
  );
};

export default UIButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#212526",
    width: 117,
    borderRadius: 5,
    paddingVertical: 10,
    marginHorizontal: 2,
  },
  btnText: {
    color: "#fff",
    fontSize: 12,
    textTransform: "capitalize",
    fontWeight: "500",
    marginLeft: 12,
  },
});
