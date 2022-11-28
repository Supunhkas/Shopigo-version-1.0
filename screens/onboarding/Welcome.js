import React from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants/theme";

const Welcome = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
      }}
    >
      {/* Logo & Title */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/images/logo.png")}
          style={{
            width: 150,
            height: 150,
          }}
        />

        <Text style={{ marginTop: SIZES.padding, ...FONTS.h1 }}>
          Welcome to
        </Text>
        <Text
          style={{ marginTop: SIZES.base, ...FONTS.h1, color: COLORS.green }}
        >
          ShopiGo
        </Text>
      </View>

      {/* Footer Buttons */}
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          marginBottom: 30,
        }}
      >
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.primary,
            height: 50,
            marginTop: SIZES.base,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("Walkthrough")}
        >
          <Text style={{ color: COLORS.light, ...FONTS.h3 }}>
            Create new Account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.grey20,
            height: 50,
            marginTop: SIZES.base,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>
            Already have an account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
