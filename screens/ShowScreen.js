import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import UIButton from "../components/UIButton";
import { useRoute } from "@react-navigation/native";
import useAPI from "../hooks/useAPI";
import moment from "moment";

// TODO: API will change for tv shows

const ShowScreen = () => {
  const route = useRoute();
  const { poster_path, backdrop_path, title, release_date, overview, genres } =
    useAPI(
      `https://api.themoviedb.org/3/movie/${route.params?.id}?api_key=5855e9b9f4ec1fd91373dae25331f786&language=en-US`
    );
  return (
    <SafeAreaView style={styles.container}>
      {/* show image/video banner */}
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
        }}
        style={styles.showImagePrimary}
      />

      <View style={styles.showInfoContainer}>
        {/* show poster small */}
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
          }}
          style={styles.showImageSecondary}
        />
        {/* show details */}
        <View style={styles.showDetailsContainer}>
          {/* title */}
          <Text style={styles.title}>{title}</Text>
          {/* genre */}
          <Text style={styles.genre}>{genres?.map((genre) => genre.name)}</Text>
          {/* release year and viewing rating */}
          <Text style={styles.releaseYear}>
            {moment(release_date).format("YYYY")} . V/A 13+
          </Text>
        </View>
      </View>
      {/* show description */}
      <Text style={styles.description} numberOfLines={3}>
        {overview}
      </Text>
      {/* actors name */}
      <Text style={styles.actors}>
        Starring Lupita Nyong'o, letitia Wright, Danai Gurira
      </Text>

      {/* action buttons */}
      <View style={styles.actionBtnContainer}>
        <UIButton text="download" />
        <UIButton text="watchlist" />
        <UIButton text="share" />
      </View>
    </SafeAreaView>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101211",
  },
  showImagePrimary: {
    width: "100%",
    height: 220,
  },
  showInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  showImageSecondary: {
    width: 60,
    height: 90,
  },
  showDetailsContainer: {
    flex: 1,
    paddingLeft: 15,
    height: "100%",
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#fff",
  },
  genre: {
    fontSize: 12,
    color: "#868E90",
    marginTop: 3,
  },
  releaseYear: { fontSize: 12, color: "#868E90", marginTop: 3 },
  description: {
    paddingHorizontal: 10,
    color: "#808888",
    fontSize: 13,
  },
  actors: {
    fontSize: 12,
    color: "#868E90",
    marginTop: 3,
    paddingLeft: 10,
    marginTop: 10,
  },
  actionBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
});
