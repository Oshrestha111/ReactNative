import React, { useState, useRef } from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import ReactNative from "react-native";
// import { sliderData } from "./src/model/data";
import BannerSlider from "./src/components/BannerSlider";

export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    name: "React JS",
    url: "https://icon-library.com/images/react-icon/react-icon-29.jpg",
  },
  {
    id: 2,
    name: "JavaScript",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png",
  },
  {
    id: 3,
    name: "Node JS",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png",
  },
];
const sliderData = [
  {
    title: "First Game",
    image: require("./src/assets/images/homescreen/game-1.jpeg"),
  },
  {
    title: "Second Game",
    image: require("./src/assets/images/homescreen/game-2.jpeg"),
  },
  {
    title: "Third Game",
    image: require("./src/assets/images/homescreen/game-3.png"),
  },
];

const renderItem = ({ item }) => {
  return (
    <View>
      <Image
        source={item.image}
        style={{ height: 120, width: 300, borderRadius: 10 }}
      />
    </View>
  );
};

export default function App() {
  // const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View style={{ paddingTop: 200, alignItems: "center" }}>
      {/* <Image
        source={require("./src/assets/images/homescreen/game-1.jpeg")}
        style={{ height: 120, width: 300, borderRadius: 10 }}
      /> */}

      <Carousel
        ref={isCarousel}
        data={sliderData}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH - 40}
        itemWidth={300}
        // onSnapToItem={(index) => setIndex(index)}
      />

      {/* <Carousel
          ref={(c) => {
            setCarousel(c);
          }}
          // ref={(c) => {
          //   // console.log(c, "carousel:", this.carousel);
          //   // this._carousel = c;
          // }}
          data={sliderData}
          layout={"default"}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          useScrollView={true}
        /> */}
      {/* <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "#F4BB41",
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: "black",
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      /> */}
    </View>
  );
}

ReactNative.AppRegistry.registerComponent("testProject", () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
