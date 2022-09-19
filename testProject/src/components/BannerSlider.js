import { View, Image } from "react-native";
import React from "react";

export default function BannerSlider({ data }) {
  return (
    <View>
      <Image
        source={data}
        style={{ height: 120, width: 300, borderRadius: 10 }}
      />
    </View>
  );
}
