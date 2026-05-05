import { fonts } from "@/app/constant";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { supabase } from "../../../supabase";
import { colors, fontText } from "../../constant/theme";

const SigninForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password || !username) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });

    setLoading(false);

    if (error) {
      Alert.alert("Error", error.message);
    } else {
      if (!session) {
        Alert.alert("Success", "Check your email for the confirmation link!");
      }
      router.replace("/(tabs)"); // Redirect to home or wherever
    }
  };

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
          Use your email and password to sign up, or keep it quick! with
          Google. Let&apos;s get this bread!
        </Text>
      </View>

      <View style={style.inputContainer}>
        <TextInput
          placeholder="Email"
          style={style.input}
          placeholderTextColor={colors.subText}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Username"
          style={style.input}
          placeholderTextColor={colors.subText}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          style={style.input}
          secureTextEntry
          placeholderTextColor={colors.subText}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity
        style={[style.buttonContainer, loading && { opacity: 0.7 }]}
        onPress={handleSignUp}
        disabled={loading}
      >
        <Text style={style.buttonText}>
          {loading ? "Creating account..." : "Let's go!!!"}
        </Text>
      </TouchableOpacity>

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
          <Text
            style={{
              color: colors.primary,
              fontFamily: fonts.medium,
              fontSize: fontText.regular,
            }}
          >
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Ionicons name="logo-google" size={20} color={colors.primary} />
          <Text>Continue with Google</Text>
        </View>
      </View>

      <Text style={{ color: colors.subText, fontSize: fontText.regular }}>
        By continuing, you agree to our{" "}
        <Link href="/terms" asChild>
          <Text style={style.link}>Terms of Service</Text>
        </Link>{" "}
        and{" "}
        <Link href="/privacy" asChild>
          <Text style={style.link}>Privacy Policy</Text>
        </Link>
        .
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
    width: 45,
    height: 45,
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
  link: {
    color: colors.primary,
    fontFamily: fonts.medium,
    fontSize: fontText.regular,
    marginTop: 20,
    textAlign: "center",
  },
});

export default SigninForm;
