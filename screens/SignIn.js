import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import { COLORS } from "../constants/theme";
import STYLES from "../constants/styles";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  //   const { signIn } = React.useContext(AuthContext);
  //   const handle = () => {
  //     signIn();
  //   };

  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}
    >
      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <Text style={{ fontWeight: "bold", fontSize: 22, color: COLORS.dark }}>
          SHOPI
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 22,
            color: COLORS.green,
          }}
        >
          Go
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Animatable.View
          animation="fadeIn"
          useNativeDriver={true}
          style={{ marginTop: 50 }}
        >
          <View>
            <Text
              style={{ fontSize: 27, fontWeight: "bold", color: COLORS.dark }}
            >
              Welcome Back,
            </Text>
            <Text
              style={{ fontSize: 19, fontWeight: "bold", color: COLORS.light2 }}
            >
              Sign in to continue
            </Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <View style={STYLES.inputContainer}>
              <Icon
                name="mail-outline"
                color={COLORS.light2}
                size={20}
                style={STYLES.inputIcon}
              />
              <TextInput
                placeholder="Email"
                style={STYLES.input}
                value={email}
                onChangeText={setEmail}
                autoCompleteType="email"
              />
            </View>
            <View style={STYLES.inputContainer}>
              <Icon
                name="lock-outline"
                color={COLORS.light2}
                size={20}
                style={STYLES.inputIcon}
              />
              <TextInput
                placeholder="Password"
                style={STYLES.input}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <View style={STYLES.btnPrimary}>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  Sign In
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                marginVertical: 20,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={STYLES.line}></View>
              <Text style={{ marginHorizontal: 5, fontWeight: "bold" }}>
                OR
              </Text>
              <View style={STYLES.line}></View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={STYLES.btnSecondary}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Sign in with
                </Text>
                <Image
                  style={STYLES.btnImage}
                  source={require("../assets/facebook.png")}
                />
              </View>
              <View style={{ width: 10 }}></View>
              <View style={STYLES.btnSecondary}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Sign in with
                </Text>
                <Image
                  style={STYLES.btnImage}
                  source={require("../assets/google.png")}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "center",
              marginTop: 40,
              marginBottom: 20,
            }}
          >
            <Text style={{ color: COLORS.light2, fontWeight: "bold" }}>
              Don`t have an account ?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
