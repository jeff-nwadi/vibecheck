import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../constant";
import { fontText } from "../constant/theme";

const Onboarding = () => {
  return (
    <ScrollView contentContainerStyle={style.container}>
      <View style={{ position: "relative", top: 0 }}>
        <View>
          <Text style={style.floatingTags1}>Stay Linked</Text>
          <Text style={style.floatingTags2}>Stay Connected</Text>
          <Text style={style.floatingTags3}>Social Boost</Text>
        </View>
        <View>
          <Text style={style.text}>
            Connect with people & elevate your{" "}
            <Text style={{ fontStyle: "italic", fontWeight: "200" }}>
              digital world
            </Text>{" "}
          </Text>
        </View>
      </View>

      <View>
        <Image
          source={require("../../assets/images/onboarding.jpg")}
          style={style.imageContent}
        />
      </View>

      <Link href="/signup" asChild>
        <Pressable style={style.btn}>
          <View style={{ flexDirection: "row", gap: 0 }}>
            <Ionicons
              name="chevron-forward"
              size={20}
              color="#fff"
              style={{ marginRight: -5, opacity: 0.6 }}
            />
            <Ionicons
              name="chevron-forward"
              size={20}
              color="#fff"
              style={{ marginRight: -5, opacity: 0.8 }}
            />
            <Ionicons
              name="chevron-forward"
              size={20}
              color="#fff"
              style={{ marginRight: -5 }}
            />
          </View>
          <Text
            style={{
              color: "#fff",
              fontSize: fontText.medium,
              textAlign: "center",
              paddingVertical: 10,
            }}
          >
            Get Started
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 1,
              backgroundColor: "#fff",
              padding: 15,
              borderRadius: 100,
            }}
          >
            <Ionicons name="arrow-forward" size={20} color="#000" />
          </View>
        </Pressable>
      </Link>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    paddingTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  floatingTags1: {
    position: "absolute",
    top: 20,
    left: 5,
    backgroundColor: colors.vibetag1,
    padding: 12,
    borderRadius: 20,
    transform: [{ rotate: "-10deg" }],
    color: "#148dcb",
  },
  floatingTags2: {
    position: "absolute",
    top: 30,
    backgroundColor: colors.vibetag2,
    padding: 12,
    borderRadius: 20,
    transform: [{ rotate: "10deg" }],
    right: 5,
    color: "#9d46ec",
  },
  floatingTags3: {
    position: "absolute",
    top: 180,
    backgroundColor: colors.vibetag3,
    padding: 12,
    borderRadius: 20,
    right: 20,
    transform: [{ rotate: "-10deg" }],
    color: "#ef7b3b",
  },

  text: {
    fontSize: fontText.extraBold,
    textAlign: "center",
    fontWeight: "400",
    paddingTop: 100,
  },

  imageContent: {
    width: "100%",
    height: 300,
    marginTop: 120,
    borderRadius: 20,
  },

  btn: {
    marginTop: 30,
    backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 100,
    padding: 10,
  },
});

export default Onboarding;
