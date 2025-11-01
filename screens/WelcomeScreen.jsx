import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Colors from "../constants/color"

const { width, height } = Dimensions.get("window");

// Define the colors from the image

 // The yellow/mustard color on the shirt
const TEXT_COLOR = "#333333";
const SUBTITLE_COLOR = "#666666";

const WelcomeScreen = ({navigation}) => {
  // Image sources
  const backgroundShapeSource = require("../assets/shape_1.png"); // The background shape (like the purple blob in the reference)
  const mainImageSource = require("../assets/Resume_Image3.png"); // The main illustration (the character)

  return (
    <View style={styles.container}>
      {/* Header (Back Arrow and Menu) */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log("Go back")}>
          <Ionicons name="chevron-back" size={24} color={TEXT_COLOR} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Lorem Ipsum</Text>
        <TouchableOpacity onPress={() => console.log("Open menu")}>
          <Ionicons name="menu" size={24} color={TEXT_COLOR} />
        </TouchableOpacity>
      </View>

      {/* Floating Shapes - Approximate using FontAwesome 'circle' */}
      {/* Upper Shape (Teal/Cyan) */}
      <FontAwesome
        name="circle"
        size={350}
        color={Colors.PRIMARY}
        style={styles.upperShape}
      />

      {/* Lower Shape (Light Teal/Cyan) */}
      <FontAwesome
        name="circle"
        size={250}
        color={Colors.SECONDARY}
        style={styles.lowerShape}
      />

      {/* Main content */}
      <View style={styles.contentContainer}>
        {/* Image and Illustration Area */}
        <View style={styles.illustrationArea}>
          {/* 1. Background Shape Image */}
          <Image
            source={backgroundShapeSource}
            style={styles.backgroundShape}
            resizeMode="contain"
          />

          {/* 2. Main Character/Resume Image (Layered on top) */}
          <Image
            source={mainImageSource}
            style={styles.mainIllustration}
            resizeMode="contain"
          />
        </View>

        {/* Text content */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Build Your Perfect Resume</Text>
          <Text style={styles.subtitle}>
            Create professional resumes effortlessly and stand out in your next
            job interview.
          </Text>
        </View>
        <Pressable
          style={styles.downArrowContainer}
          onPress={() => navigation.navigate("HomeTabs")}
        >
          <Ionicons name="arrow-down" size={25} color={Colors.PRIMARY} />
        </Pressable>
      </View>

      {/* Down Arrow Icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    position: "relative",
    paddingHorizontal: 20,
  },

  // --- Header ---
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: TEXT_COLOR,
  },

  // --- Floating Shapes ---
  upperShape: {
    position: "absolute",
    top: -height * 0.15,
    left: -width * 0.35,
    opacity: 0.3, // Reduced opacity for a softer look
    transform: [{ scaleX: 1.5 }],
  },
  lowerShape: {
    position: "absolute",
    bottom: -height * 0.1,
    right: -width * 0.2,
    opacity: 0.5,
    transform: [{ scaleY: 0.8 }],
  },

  // --- Main Content ---
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: height * 0.05,
  },

  // --- Illustration Area (Parent for layered images) ---
  illustrationArea: {
    width: "100%",
    height: height * 0.45,
    justifyContent: "center",
    alignItems: "center",
   
    position: "relative", // IMPORTANT: Allows children to be absolutely positioned
  },

  // --- NEW STYLE for the Background Shape ---
  backgroundShape: {
    width: "100%", // Take up the full width of the parent
    height: "100%", // Take up the full height of the parent
    position: "absolute", // Positioned absolutely within the illustrationArea
    top: 0,
    left: 0,
  },

  // --- Adjusted Style for the Main Illustration ---
  mainIllustration: {
    width: "80%", // Adjust size to fit on the shape
    height: "80%",
    position: "absolute", // Positioned absolutely within the illustrationArea
    // Adjust top/left to center the character on the shape, depending on your image
    top: "15%",
    left: "15%",
  },

  // --- Text Content ---
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: TEXT_COLOR,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: SUBTITLE_COLOR,
    lineHeight: 22,
  },

  // --- Down Arrow ---
  downArrowContainer: {
    
   width:40,
   height:40,
  
    backgroundColor:Colors.SECONDARY,
    alignSelf: "center",
    padding: 10,
    borderRadius: "50%",
  
  },
});

export default WelcomeScreen;
