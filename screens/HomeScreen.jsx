import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
// Assuming Colors is defined and contains PRIMARY (e.g., a dominant color) and SECONDARY (e.g., a light background color)
// For this example, I'll use placeholders for Colors if they aren't available, but I'll use your imports.
import Colors from "../constants/color";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Entypo } from "@expo/vector-icons";

const HomeScreen = () => {
  const [profiles, setProfiles] = useState([
    {
      id: "1", // Added 'id' for keyExtractor
      name: "Profile 1",
      role: "Designer",
      createdon: "18 Jun 2025",
      updatedOn: "18 Jun 2025",
      profileImg: "",
    },
    {
      id: "2",
      name: "Profile 2",
      role: "FrontEnd Developer",
      createdon: "18 Jun 2025",
      updatedOn: "19 Jun 2025",
      profileImg: "",
    },
    {
      id: "3",
      name: "Profile 3",
      role: "React Developer",
      createdon: "18 Jun 2025",
      updatedOn: "19 Jun 2025",
      profileImg: "",
    },
  ]);

  // Separate component for the card to keep renderItem clean
  const ProfileCard = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      {/* Top Section: Profile Info and Last Updated Date */}
      <View style={styles.cardHeader}>
        <View style={styles.profileInfo}>
          {/* Icon/Image Placeholder */}
          <View style={styles.iconContainer}>
            <Feather
              name="file-text"
              color={Colors.PRIMARY || "#3F51B5"}
              size={24}
            />
          </View>
          {/* Name and Role */}
          <View>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.roleText}>{item.role}</Text>
          </View>
        </View>
        {/* Last Updated Date */}
        <Text style={styles.updatedDate}>
          Last updated: {item?.updatedOn ? item?.updatedOn : item?.createdon}
        </Text>
      </View>

      {/* --- Divider --- */}
      <View style={styles.separator} />

      {/* Bottom Section: Actions (Edit and View CV) */}
      <View style={styles.cardActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Feather name="edit" color={"#fff" || "#3F51B5"} size={16} />
          <Text style={styles.actionText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Entypo name="eye" color={"#fff" || "#3F51B5"} size={16} />
          <Text style={styles.actionText}>View CV</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={profiles}
        renderItem={({ item }) => <ProfileCard item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

// ---
// ## 🎨 Stylesheet
// ---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5", // Light background for the whole screen
  },
  listContent: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  card: {
    backgroundColor: "#FFFFFF", // White background for the card
    borderRadius: 10, // Rounded corners
    padding: 15,
    marginHorizontal: 10,
    marginBottom: 15,
    // Shadow for Android
    elevation: 3,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  profileInfo: {
    flexDirection: "row",
    gap: 12,
    flexShrink: 1, // Allows text to wrap if necessary
  },
  iconContainer: {
    backgroundColor: Colors.SECONDARY || "#E8EAF6", // Light background for the icon
    padding: 10,
    borderRadius: 8, // Slightly rounded icon background
    alignSelf: "flex-start", // Keeps the icon at the top of its row
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333", // Darker text for prominence
  },
  roleText: {
    fontSize: 14,
    color: "#666", // Gray text for secondary info
  },
  updatedDate: {
    fontSize: 10,
    color: "#555",
    alignSelf: "flex-start", // Align to the top right
    marginLeft: 10, // Add some space from profile info
  },
  separator: {
    height: 1,
    backgroundColor: "#EEE", // Light gray divider
    marginVertical: 10,
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "flex-start", // Align actions to the left
    gap: 20, // Space between action buttons
    marginTop: 5,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor:Colors.PRIMARY,
    // Add a slight background on hover/press if using a library that supports it, otherwise keep it clean.
  },
  actionText: {
    fontSize: 14,
    fontWeight: "600",

    color: "#fff" || "#3F51B5", // Use primary color for action text
  },
});
