import { View, Text, Image } from "react-native";
import React from "react";
import { useState } from "react";
import { SIZES } from "../../constants/theme";
import constants from "../../constants/cosntants";
import { FlatList } from "react-native-gesture-handler";
const ITEM_WIDTH = 120;

const Wlakthrough1 = () => {
  //Row1
  const [row1Images, setRow1Images] = React.useState([
    ...constants.walkthrough_01_01_images,
    ...constants.walkthrough_01_01_images,
  ]);
  const [currentPosition, setCurrentPosition] = React.useState(0);

  //Row2
  const [row2Images, setRow2Images] = React.useState([
    ...constants.walkthrough_01_02_images,
    ...constants.walkthrough_01_02_images,
  ]);
  const [row2CurrentPosition, setRow2CurrentPosition] = React.useState(0);

  // Ref
  const row1FlatlistRef = React.createRef();
  const row2FlatlistRef = React.createRef();

  React.useEffect(() => {
    let positionTimer;

    const timer = () => {
      positionTimer = setTimeout(() => {
        //Slider 1

        setCurrentPosition((prevPosition) => {
          const position = Number(prevPosition) + 1;
          row1FlatlistRef?.current?.scrollToOffset({
            offset: position,
            animated: false,
          });

          const maxOffset =
            constants.walkthrough_01_01_images.length * ITEM_WIDTH;

          if (prevPosition > maxOffset) {
            const offset = prevPosition - maxOffset;

            row1FlatlistRef?.current?.scrollToOffset({
              offset,
              animated: false,
            });
            return offset;
          } else {
            return position;
          }
        });
        //slider 2
        setRow2CurrentPosition((prevPosition) => {
          const position = Number(prevPosition) + 1;
          row2FlatlistRef?.current?.scrollToOffset({
            offset: position,
            animated: false,
          });
          const maxOffset =
            constants.walkthrough_01_02_images.length * ITEM_WIDTH;

          if (prevPosition > maxOffset) {
            const offset = prevPosition - maxOffset;

            row2FlatlistRef?.current?.scrollToOffset({
              offset,
              animated: false,
            });
            return offset;
          } else {
            return position;
          }
        });

        timer();
      }, 32);
    };
    timer();

    return () => {
      clearTimeout(positionTimer);
    };
  }, []);

  return (
    <View>
      {/* slider 1 */}
      <FlatList
        ref={row1FlatlistRef}
        decelerationRate="fast"
        horizontal
        showsHorizontalScrollIndicator={false}
        listKey="Slider1"
        keyExtractor={(_, index) => `Slider1_${index}`}
        data={row1Images}
        scrollEnabled={false}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: ITEM_WIDTH,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={item} style={{ width: 110, height: 110 }} />
            </View>
          );
        }}
      />
      {/* slider 2 */}
      <FlatList
        style={{ marginTop: SIZES.padding, transform: [{ rotate: "180deg" }] }}
        ref={row2FlatlistRef}
        decelerationRate="fast"
        horizontal
        showsHorizontalScrollIndicator={false}
        listKey="Slider2"
        keyExtractor={(_, index) => `Slider2_${index}`}
        data={row2Images}
        scrollEnabled={false}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: ITEM_WIDTH,
                alignItems: "center",
                justifyContent: "center",
                transform: [{ rotate: "180deg" }],
              }}
            >
              <Image source={item} style={{ width: 110, height: 110 }} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Wlakthrough1;
