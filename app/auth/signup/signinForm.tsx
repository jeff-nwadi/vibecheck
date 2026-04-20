import { fonts } from "@/app/constant";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { colors, fontText } from "../../constant/theme";

const signinForm = () => {
  return (
    <ScrollView style={style.container}>
      <Link href="/screens/Onboarding" asChild>
        <Ionicons
          name="arrow-back"
          size={20}
          color="black"
          style={style.icon}
        />
      </Link>

      <View>
        <Text style={style.title}>Join the vibe</Text>
        <Text style={style.subTitle}>
          Use your username and password to sign in, or keep it quick! with
          Google
        </Text>
      </View>

      <View style={style.inputContainer}>
        <TextInput
          placeholder="Email"
          style={style.input}
          placeholderTextColor={colors.subText}
        />
        <TextInput
          placeholder="Username"
          style={style.input}
          placeholderTextColor={colors.subText}
        />
        <TextInput
          placeholder="Password"
          style={style.input}
          secureTextEntry
          placeholderTextColor={colors.subText}
        />
      </View>
      <View style={style.buttonContainer}>
        <Text style={style.buttonText}>Let&apos;s go!!!</Text>
      </View>

      <Text
        style={{
          textAlign: "center",
          marginTop: 15,
          fontFamily: fonts.regular,
          fontSize: fontText.regular,
            color: colors.subText,
        }}
      >
        Already have an account?{" "}
        <Link href="/auth/login" asChild>
          <Text style={{ color: colors.primary, fontFamily: fonts.medium, fontSize: fontText.regular }}>
            Login
          </Text>
        </Link>
      </Text>

      <View style={style.separator}>
        <View style={style.line} />
        <Text style={style.separatorText}>OR</Text>
        <View style={style.line} />
      </View>

      <View style={style.buttonContainer2}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10 }} >
          <Ionicons name="logo-google" size={20} color={colors.primary} />
          <Text>Continue with Google</Text>
        </View>
      </View>


      <Text style={{color: colors.subText, fontSize: fontText.regular}}>By continuing, you agree to our <Link href="/terms/index" style={style.link}>
        Terms of Service
      </Link> and <Link href="/privacy/index" style={style.link}>
        Privacy Policy
      </Link>.
      </Text>

    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  icon: {
    padding: 10,
    borderRadius: 100,
    borderColor: colors.border,
    borderWidth: 1,
    width: 50,
    height: 50,
    textAlign: "center",
    textAlignVertical: "center",
  },

  title: {
    fontSize: fontText.extraBold,
    paddingTop: 30,
    paddingBottom: 15,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: fontText.medium,
    color: colors.subText,
    fontWeight: "400",
    letterSpacing: 0.5,
    lineHeight: 22,
  },
  inputContainer: {
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    color: colors.text,
    fontSize: fontText.regular,
    fontFamily: fonts.regular,
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  buttonText: {
    color: colors.textWhite,
    fontSize: fontText.bold,
    textAlign: "center",
  },
  line: {
    borderWidth: 1,
    borderColor: colors.border,
    width: 100,
    alignSelf: "center",
    marginBottom: 10,
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  separatorText: {
    marginHorizontal: 12,
    color: colors.subText,
    fontFamily: fonts.regular,
  },
  buttonContainer2: {
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.border,
  },
  link : {
    color: colors.primary,
    fontFamily: fonts.medium,
    fontSize: fontText.regular,
    marginTop: 20,
    textAlign: "center",
  }
});

export default signinForm;
