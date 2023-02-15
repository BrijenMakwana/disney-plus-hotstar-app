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
import { APIUrls } from "../APIRequests/APIUrls";

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

        <CategoryPortrait
          categoryTitle={APIUrls[0].title}
          setShowModal={setShowModal}
          apiUrl={APIUrls[0].url}
        />

        <CategoryTopShows
          categoryTitle={APIUrls[1].title}
          setShowModal={setShowModal}
          apiUrl={APIUrls[1].url}
        />
        <CategoryPortrait
          categoryTitle={APIUrls[2].title}
          setShowModal={setShowModal}
          apiUrl={APIUrls[2].url}
        />
        <CategoryLandscape
          categoryTitle={APIUrls[3].title}
          setShowModal={setShowModal}
          apiUrl={APIUrls[3].url}
        />

        <CategoryPortrait
          categoryTitle={APIUrls[4].title}
          setShowModal={setShowModal}
          apiUrl={APIUrls[4].url}
        />
        <CategoryTopShows
          categoryTitle={APIUrls[5].title}
          setShowModal={setShowModal}
          apiUrl={APIUrls[5].url}
        />
        <CategoryPortrait
          categoryTitle={APIUrls[6].title}
          setShowModal={setShowModal}
          apiUrl={APIUrls[6].url}
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
