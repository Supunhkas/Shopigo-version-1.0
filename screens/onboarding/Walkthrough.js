import { View, Text, Animated, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import constants from "../../constants/cosntants";
import Walkthrough1 from "./Wlakthrough1";
import Walkthrough2 from "./Walkthrough2";
import Walkthrough3 from "./Walkthrough3";
import Walkthrough4 from "./Walkthrough4";
// import { ColorSpace } from "react-native-reanimated";

const Walkthrough = ({ navigation }) => {
  //////wlakthrough 2
  const [walkthrough2Animate, setWalkthrough2Animate] = React.useState(false);
  const [walkthrough3Animate, setWalkthrough3Animate] = React.useState(false);
  const onViewChangeRef = React.useRef(({ viewableItems, changed }) => {
    if (viewableItems[0].index == 1) {
      setWalkthrough2Animate(true);
    }

    if (viewableItems[0].index == 2) {
      setWalkthrough3Animate(true);
    }
  });
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {constants.walkthrough.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.dark08, COLORS.primary, COLORS.dark08],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: 10,
                height: 10,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  function renderFooter() {
    return (
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: SIZES.height * 0.2,
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.height > 700 ? SIZES.padding : 20,
        }}
      >
        <Dots />
        {/* buttons  */}
        <View style={{ flexDirection: "row", height: 55 }}>
          <TouchableOpacity
            style={{
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGrey,
              flex: 1,
              justifyContent: "center",
              marginRight: 10,
            }}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.h3,
                textAlign: "center",
              }}
            >
              Join Now
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary,
              flex: 1,
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text
              style={{
                color: COLORS.light,
                ...FONTS.h3,
                textAlign: "center",
              }}
            >
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.light }}>
      <Animated.FlatList
        data={constants.walkthrough}
        keyExtractor={(item) => item.id}
        horizontal
        snapToInterval={SIZES.width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onViewableItemsChanged={onViewChangeRef.current}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width: SIZES.width, justifyContent: "center" }}>
              {/* Images */}
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                {index == 0 && <Walkthrough1 />}
                {index == 1 && <Walkthrough2 animate={walkthrough2Animate} />}
                {index == 2 && <Walkthrough3 animate={walkthrough3Animate} />}
                {index == 3 && <Walkthrough4 />}
              </View>
              {/* Titles */}
              <View
                style={{
                  height: SIZES.height * 0.35,
                  alignItems: "center",
                  justifyContent: "flex-start",
                  paddingHorizontal: SIZES.padding,
                }}
              >
                <Text style={{ ...FONTS.h1 }}> {item.title}</Text>
                <Text
                  style={{
                    marginTop: SIZES.radius,
                    textAlign: "center",
                    ...FONTS.body3,
                    color: COLORS.grey,
                  }}
                >
                  {item.sub_title}
                </Text>
              </View>
            </View>
          );
        }}
      />
      {renderFooter()}
    </View>
  );
};

export default Walkthrough;
