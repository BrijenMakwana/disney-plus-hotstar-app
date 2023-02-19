import { StyleSheet } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const YouTubeCard = (props) => {
  const { videoKey } = props;
  return (
    <WebView
      style={styles.container}
      source={{
        uri: `https://www.youtube.com/embed/${videoKey}?rel=0&autoplay=0&showinfo=0&controls=0`,
      }}
    />
  );
};

export default YouTubeCard;

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 230,
    marginRight: 7,
    backgroundColor: "#101211",
  },
});
