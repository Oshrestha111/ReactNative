import { View, Text } from "react-native";
import React from "react";
import { sliderData } from "../model/data";
import Carousel from "react-native-snap-carousel";
import { windowWidth } from "../utils/Dimensions";

export default function Carousels() {
  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{ height: 120, width: 300, borderRadius: 10 }}
        />
      </View>
    );
  };

  return (
    <Carousel
      ref={(c) => {
        this._carousel = c;
      }}
      data={sliderData}
      renderItem={_renderItem}
      sliderWidth={windowWidth - 40}
      itemWidth={300}
      useScrollView={true}
    />
  );
}
