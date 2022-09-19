import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import { sliderData } from "../model/data";
import BannerSlider from "../components/BannerSlider";
import { windowWidth } from "../utils/Dimensions";
import Carousels from "../components/Carousel";
// import Carousel from "react-material-ui-carousel";

export default function HomeScreen() {
  const [carousel, setCarousel] = useState(null);
  const isCarousel = useRef(null);
  // const [load, setLoad] = useState(false);

  const renderBanner = (item, index) => {
    <BannerSlider data={item} />;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text style={{ fontFamily: "robotoBold", fontSize: 18 }}>
            Hello Sohan Pratap
          </Text>
          <ImageBackground
            source={require("../assets/images/user-profile.jpg")}
            style={{
              width: 35,
              height: 35,
            }}
            imageStyle={{ borderRadius: 25 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderColor: "#C6C6C6",
            borderWidth: 2,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 6,
            marginBottom: 14,
          }}
        >
          <Feather
            name="search"
            size={22}
            color="black"
            style={{ marginRight: 5, color: "#C6C6C6" }}
          />
          <TextInput placeholder="Search" style={{ paddingHorizontal: 8 }} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 15,
          }}
        >
          <Text style={{ fontFamily: "robotoBold", fontSize: 16 }}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{ fontFamily: "robotoBold", color: "green", fontSize: 16 }}
            >
              See all
            </Text>
          </TouchableOpacity>
        </View>

        <Carousel
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
        />

        {/* <Carousel>
          {sliderData.map((item, i) => (
            <BannerSlider data={item} />
          ))}
        </Carousel> */}

        {/* <Carousels /> */}
        <BannerSlider
          data={require("../assets/images/homescreen/game-1.jpeg")}
        />
        <BannerSlider
          data={require("../assets/images/homescreen/game-2.jpeg")}
        />
        <BannerSlider
          data={require("../assets/images/homescreen/game-3.png")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
