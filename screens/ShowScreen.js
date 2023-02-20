import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import UIButton from "../components/UIButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import useAPI from "../hooks/useAPI";
import moment from "moment";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";
import ShowItemPortrait from "../components/ShowItemPortrait";
import YouTubeCard from "../components/YouTubeCard";

// TODO: API will change for tv shows

const ShowHeader = (props) => {
  const navigation = useNavigation();
  const { title } = props;
  return (
    <View style={styles.showHeaderContainer}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </Pressable>
      <Text style={styles.headerTitle}>{title}</Text>
      <Ionicons name="search" size={20} color="#fff" />
    </View>
  );
};

const SimilarShows = (props) => {
  const { id, type } = props;
  const navigation = useNavigation();
  const showData = useAPI(
    `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=5855e9b9f4ec1fd91373dae25331f786&language=en-US&page=1`
  );

  const changeShowData = (id) => {
    navigation.push("Show", {
      id: id,
      type: type,
    });
  };

  if (!showData) return;

  return (
    <View style={styles.similarShowsContainer}>
      <View style={styles.similarShowsHeader}>
        {/* category name */}
        <Text style={styles.similarShowsHeading}>More Like This</Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={22}
          color="#595F60"
          style={{ marginRight: 10 }}
        />
      </View>

      <View style={styles.similarShowsList}>
        {/* show list */}
        <FlatList
          data={showData.results}
          renderItem={({ item }) => (
            <ShowItemPortrait
              image={item.poster_path}
              btnAction={() => changeShowData(item.id)}
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
const ShowScreen = () => {
  const route = useRoute();
  const { poster_path, backdrop_path, title, release_date, overview, genres } =
    useAPI(
      `https://api.themoviedb.org/3/${route.params?.type}/${route.params?.id}?api_key=5855e9b9f4ec1fd91373dae25331f786&language=en-US`
    );
  const videos = useAPI(
    `https://api.themoviedb.org/3/${route.params?.type}/${route.params?.id}/videos?api_key=5855e9b9f4ec1fd91373dae25331f786&language=en-US`
  );
  return (
    <ScrollView style={styles.container}>
      {/* header */}
      <ShowHeader title={title} />

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
          {/* genres */}
          <View style={styles.genreContainer}>
            {genres?.map((genre, index) => (
              <React.Fragment key={index}>
                <Text style={styles.genre}>{genre.name}</Text>
                {index < genres.length - 1 && (
                  <Entypo name="dot-single" size={15} color="#868E90" />
                )}
              </React.Fragment>
            ))}
          </View>
          {/* release year and viewing rating */}
          <Text style={styles.releaseYear}>
            {moment(release_date).format("YYYY")} . V/A 13+
          </Text>
        </View>
      </View>
      {/* show description */}
      <Text style={styles.description} numberOfLines={3}>
        {overview ? overview : "No description available"}
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

      {/* videos */}
      {videos.results?.length > 0 && (
        <View style={styles.videosContainer}>
          <Text style={styles.videoHeading}>Trailers & Extras</Text>
          <View style={styles.videoList}>
            <FlatList
              data={videos.results}
              renderItem={({ item }) => <YouTubeCard videoKey={item.key} />}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      )}

      {/* similar shows */}
      <SimilarShows id={route.params?.id} type={route.params?.type} />
    </ScrollView>
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
    borderRadius: 3,
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
  genreContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
    flexWrap: "wrap",
  },
  genre: {
    fontSize: 12,
    color: "#868E90",
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
  // header
  showHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 50,
    marginBottom: 15,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    color: "#fff",
    marginLeft: 15,
    textTransform: "capitalize",
  },
  videosContainer: {
    paddingLeft: 10,
    marginTop: 15,
    paddingVertical: 5,
  },

  videoHeading: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
    textTransform: "capitalize",
    flex: 1,
  },
  videoList: {
    marginTop: 10,
  },

  // similar shows
  similarShowsContainer: {
    paddingLeft: 10,
    marginTop: 15,
    paddingTop: 5,
    paddingBottom: 20,
    backgroundColor: "#101211",
  },
  similarShowsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  similarShowsHeading: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
    textTransform: "capitalize",
    flex: 1,
  },
  similarShowsList: {
    marginTop: 10,
  },
});
