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
import { freeGames, paidGames, sliderData } from "../model/data";
import BannerSlider from "../components/BannerSlider";
import { windowWidth } from "../utils/Dimensions";
import CustomSwitch from "../components/CustomSwitch";
import ListItem from "../components/ListItem";

export default function HomeScreen({ navigation }) {
  const [carousel, setCarousel] = useState(null);
  const isCarousel = useRef(null);
  const [gamesTab, setGamesTab] = useState(1);

  const renderItem = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = (value) => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#101010" }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text
            style={{ fontFamily: "robotoBold", fontSize: 18, color: "#F6EFE8" }}
          >
            Hello Sohan Pratap Shrestha
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../assets/images/user-profile1.jpg")}
              style={{
                width: 35,
                height: 35,
              }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
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
          <TextInput
            placeholder="Search"
            placeholderTextColor="#EEF2E6"
            style={{ paddingHorizontal: 8, color: "#fff" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 15,
          }}
        >
          <Text
            style={{ fontFamily: "robotoBold", fontSize: 16, color: "#F6EFE8" }}
          >
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{
                fontFamily: "robotoBold",
                color: "#3D8361",
                fontSize: 16,
              }}
            >
              See all
            </Text>
          </TouchableOpacity>
        </View>

        <Carousel
          ref={isCarousel}
          data={sliderData}
          renderItem={renderItem}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
          // onSnapToItem={(index) => setIndex(index)}
        />

        <View style={{ marginVertical: 20 }}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to Play"
            option2="Paid Games"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {gamesTab == 1 &&
          freeGames.map((item) => (
            <ListItem
              key={item.id}
              source={item.poster}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        {gamesTab == 2 &&
          paidGames.map((item) => (
            <ListItem
              key={item.id}
              source={item.poster}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}
