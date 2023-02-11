import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import React from "react";
import { Octicons, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const ShowCard = (props) => {
  const { image } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>the last of us</Text>
      <Image
        source={{
          uri: image,
        }}
        style={styles.showImage}
      />
      <Text style={styles.description}>
        HBO Originals • English • Drama • A
      </Text>
      <View style={styles.actionBtns}>
        {/* watchlist button */}
        <Pressable style={styles.btnContainer}>
          <Octicons name="check" size={19} color="#fff" />
          <Text style={styles.btnText}>watchlist</Text>
        </Pressable>

        {/* watch button */}
        <Pressable style={styles.watchBtnContainer}>
          <Ionicons name="ios-play" size={17} color="#fff" />
          <Text style={styles.watchBtnText}>watch</Text>
        </Pressable>
        {/* info button */}
        <Pressable style={styles.btnContainer}>
          <MaterialCommunityIcons
            name="information-outline"
            size={19}
            color="#fff"
          />
          <Text style={styles.btnText}>info</Text>
        </Pressable>
      </View>
      {/* show description */}
      <Text style={styles.description}>
        NEW EPISODE ON SATURDAY AT 7:30 PM. After a global pandemic destrovs
        civilization. a hardened survivor takes charge of a 14-vear-old girl who
        may be
      </Text>
    </View>
  );
};

export default ShowCard;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    backgroundColor: "#1B1F20",
    paddingBottom: 25,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    textTransform: "capitalize",
    position: "absolute",
    top: 170,
    alignSelf: "center",
    zIndex: 1,
  },
  showImage: {
    width: "100%",
    height: 200,
  },
  actionBtns: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  btnContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    textTransform: "capitalize",
    fontSize: 10,
    marginTop: 5,
  },
  watchBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1482DD",
    paddingHorizontal: 25,
    paddingVertical: 7,
    borderRadius: 5,
    marginHorizontal: 50,
  },
  watchBtnText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#fff",
    marginLeft: 5,
    textTransform: "capitalize",
  },
  description: {
    fontSize: 11,
    marginTop: 5,
    textAlign: "center",
    paddingHorizontal: 20,
    color: "#868E90",
  },
});
