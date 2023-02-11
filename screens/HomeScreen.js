import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import Banner from "../components/Banner";
import { bannerList, shows, shows2 } from "../assets/data/data";
import CategoryLandscape from "../components/CategoryLandscape";
import CategoryPortrait from "../components/CategoryPortrait";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* banners */}
      <View style={styles.bannerList}>
        <FlatList
          data={bannerList}
          renderItem={({ item }) => (
            <Banner
              title={item.title}
              number={item.id}
              image={item.image}
              total={bannerList.length}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="start"
          decelerationRate={"fast"}
          snapToInterval={Dimensions.get("window").width}
        />

        {/* categories */}
        <CategoryLandscape shows={shows} categoryTitle="continue watching" />
        <CategoryLandscape shows={shows} categoryTitle="watchlist" />
        <CategoryPortrait shows={shows2} categoryTitle="latest & trending" />
        <CategoryLandscape shows={shows} categoryTitle="best in sports" />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101211",
  },
  bannerList: {
    marginTop: 50,
    marginBottom: 20,
  },
});
