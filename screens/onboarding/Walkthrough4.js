import { View, Text, Image, StyleSheet } from "react-native";
import { SIZES } from "../../constants/theme";
import images from "../../constants/images";
import React from "react";

const Walkthrough4 = () => {
  return (
    <View style={{ flex: 1, overflow: "hidden" }}>
      <Image
        source={images.walkthrough_02_01}
        style={{
          ...styles.image,
          top: "35%",
          left: "35%",
          width: 106,
          height: 161,
          zIndex: 1,
        }}
      />
      <Image
        source={images.walkthrough_02_02}
        style={{
          ...styles.image,
          top: "60%",
          left: "50%",
        }}
      />
      <Image
        source={images.walkthrough_02_02}
        style={{
          ...styles.image,
          top: "20%",
          left: "20%",
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: 86,
    height: 112,
    zIndex: 0,
    borderRadius: SIZES.radius,
  },
});
export default Walkthrough4;
