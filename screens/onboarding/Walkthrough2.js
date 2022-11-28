import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { SIZES } from "../../constants/theme";
import images from "../../constants/images";
import { MotiImage, useDynamicAnimation } from "moti";

const Walkthrough2 = ({ animate }) => {
  const MotiImage1 = useDynamicAnimation(() => ({
    top: "30%",
    left: "25%",
  }));
  const MotiImage2 = useDynamicAnimation(() => ({
    top: "45%",
    left: "15%",
  }));
  const MotiImage3 = useDynamicAnimation(() => ({
    top: "58%",
    left: "25%",
  }));
  const MotiImage4 = useDynamicAnimation(() => ({
    top: "61%",
    left: "40%",
  }));
  const MotiImage5 = useDynamicAnimation(() => ({
    top: "27%",
    left: "50%",
  }));
  //   const MotiImage6 = useDynamicAnimation(() => ({
  //     top: "27%",
  //     left: "50%",
  //   }));

  React.useEffect(() => {
    if (animate) {
      MotiImage1.animateTo({
        top: "20%",
        left: "15%",
      });
      MotiImage2.animateTo({
        top: "38%",
        left: -10,
      });
      MotiImage3.animateTo({
        top: "62%",
        left: "5%",
      });
      MotiImage4.animateTo({
        top: "75%",
        left: "40%",
      });
      MotiImage5.animateTo({
        top: "15%",
        left: "65%",
      });
      //   MotiImage6.animateTo({
      //     top: "60%",
      //     left: "80%",
      //   });
    }
  }, [animate]);

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
          top: "50%",
          left: "50%",
        }}
      />
      <MotiImage
        state={MotiImage1}
        source={images.walkthrough_02_03}
        style={styles.image}
      />
      <MotiImage
        state={MotiImage2}
        source={images.walkthrough_02_04}
        style={styles.image}
      />
      <MotiImage
        state={MotiImage3}
        source={images.walkthrough_02_05}
        style={styles.image}
      />
      <MotiImage
        state={MotiImage4}
        source={images.walkthrough_02_06}
        style={styles.image}
      />
      <MotiImage
        state={MotiImage5}
        source={images.walkthrough_02_07}
        style={styles.image}
      />
      {/* <MotiImage
        state={MotiImage6}
        source={images.walkthrough_02_05}
        style={styles.image}
      /> */}
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
export default Walkthrough2;
