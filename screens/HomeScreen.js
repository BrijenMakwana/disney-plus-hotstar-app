import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import Banner from "../components/Banner";
import { bannerList, shows } from "../assets/data/data";
import Category from "../components/Category";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
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
        <Category shows={shows} categoryTitle="continue watching" />
        <Category shows={shows} categoryTitle="watchlist" />
      </View>
    </SafeAreaView>
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
