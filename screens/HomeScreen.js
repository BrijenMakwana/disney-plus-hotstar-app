import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Banner from "../components/Banner";
import { bannerList, shows, shows2 } from "../assets/data/data";
import CategoryLandscape from "../components/CategoryLandscape";
import CategoryPortrait from "../components/CategoryPortrait";
import CategoryTopShows from "../components/CategoryTopShows";
import ShowCard from "../components/ShowCard";

const HomeScreen = () => {
  const [showModal, setShowModal] = useState(false);
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
        <CategoryLandscape
          shows={shows}
          categoryTitle="continue watching"
          setShowModal={setShowModal}
        />
        <CategoryLandscape
          shows={shows}
          categoryTitle="watchlist"
          setShowModal={setShowModal}
        />
        <CategoryPortrait
          shows={shows2}
          categoryTitle="latest & trending"
          setShowModal={setShowModal}
        />
        <CategoryLandscape
          shows={shows}
          categoryTitle="best in sports"
          setShowModal={setShowModal}
        />
        <CategoryTopShows
          shows={shows2}
          categoryTitle="top 10 in india today - english"
          setShowModal={setShowModal}
        />
        <CategoryPortrait
          shows={shows2}
          categoryTitle="New Episode Weekly"
          setShowModal={setShowModal}
        />
        <CategoryPortrait
          shows={shows2}
          categoryTitle="HBO Originals"
          setShowModal={setShowModal}
        />
        <CategoryPortrait
          shows={shows2}
          categoryTitle="New on Disney+ Hotstar for You"
          setShowModal={setShowModal}
        />
        <CategoryTopShows
          shows={shows2}
          categoryTitle="top 10 in india today - hindi"
          setShowModal={setShowModal}
        />
        <CategoryPortrait
          shows={shows2}
          categoryTitle="Hotstar Specials"
          setShowModal={setShowModal}
        />
        {/* show modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          <View style={styles.showModal}>
            <View style={styles.showList}>
              <FlatList
                data={shows}
                renderItem={({ item }) => <ShowCard image={item.image} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToAlignment="start"
                decelerationRate={"fast"}
                snapToInterval={Dimensions.get("window").width}
              />
            </View>
          </View>
        </Modal>
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
  showModal: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(16, 16, 16, 0.6)",
  },
  showList: {},
});
