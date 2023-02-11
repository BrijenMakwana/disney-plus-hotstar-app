import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import Banner from "../components/Banner";
import { bannerList } from "../assets/data/data";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
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
