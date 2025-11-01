import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Fontisto,
  FontAwesome,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

// Assuming 'color' provides your app's main colors.
// I'll define some mock colors based on the image for accurate styling.
const colors = {
  // NOTE: Replace 'color' from your import with 'colors' below,
  // or ensure your imported 'color' object has these properties.
  BACKGROUND_GRAY: "#f4f4f4", // Light gray background
  CARD_WHITE: "#ffffff", // White for the cards
  BORDER_GRAY: "#e0e0e0",
  TEXT_DARK: "#222",
  ICON_GRAY: "#666",
  SECONDARY: "#ffffff", // Using a placeholder for your imported color.SECONDARY
};

const SectionItem = ({ iconName, iconLibrary: Icon, label }) => (
  <TouchableOpacity style={styles.sectionCard}>
    <Icon name={iconName} color={colors.ICON_GRAY} size={20} />
    <Text style={styles.sectionText}>{label}</Text>
    <Ionicons name="chevron-forward" color={colors.ICON_GRAY} size={20} />
  </TouchableOpacity>
);

const ProfileScreen = () => {
  // Data structures for easy mapping and rendering
  const mainSections = [
    { iconName: "person", iconLibrary: Fontisto, label: "Personal Details" },
    {
      iconName: "graduation-cap",
      iconLibrary: FontAwesome,
      label: "Education",
    },
    { iconName: "briefcase", iconLibrary: Ionicons, label: "Experience" },
    { iconName: "puzzle", iconLibrary: Entypo, label: "Skills" }, // Entypo 'puzzle' looks similar to the image's skills icon
    { iconName: "clipboard-notes", iconLibrary: Entypo, label: "Objectives" }, // Entypo 'clipboard-notes' looks like the objective icon
    
    { iconName: "folder1", iconLibrary: AntDesign, label: "Projects" },
  ];

  const moreSections = [
    // AntDesign 'folder1' or 'folderopen'
    // {
    //   iconName: "paper-plane",
    //   iconLibrary: FontAwesome,
    //   label: "Cover Letter",
    // }, // FontAwesome 'paper-plane'
    {
      iconName: "language",
      iconLibrary: FontAwesome,
      label: "Languages",
      isAdded: true,
    },
    {
      iconName: "creation",
      iconLibrary: MaterialCommunityIcons,
      label: "Certifications",
      isAdded: true,
    },
    {
      iconName: "creation",
      iconLibrary: MaterialCommunityIcons,
      label: "Acheivements",
      isAdded: true,
    },
    {
      iconName: "ellipsis-horizontal-circle-outline",
      iconLibrary: Ionicons,
      label: "More Sections (Optional)",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.BACKGROUND_GRAY }}>
      {/* The header area goes here (you mentioned you already designed it) */}

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Main Sections Group */}
        <Text style={styles.sectionGroupTitle}>Sections</Text>
        <View style={styles.sectionsListContainer}>
          {mainSections.map((section, index) => (
            <SectionItem key={index} {...section} />
          ))}
        </View>

        {/* More Sections Group */}
        <Text style={styles.sectionGroupTitle}>More Sections</Text>
        <View style={styles.sectionsListContainer}>
          {moreSections.map((section, index) => (
            <SectionItem key={index} {...section} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingTop: 5,
    paddingHorizontal: 15,
    paddingBottom: 20,
    backgroundColor: colors.BACKGROUND_GRAY, // Ensure the background matches
  },

  // --- Section Group Header Style ---
  sectionGroupTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.TEXT_DARK,
    marginTop: 20,
    marginBottom: 8,
    marginLeft: 5, // Slightly indented
  },

  // --- Section Card Container Styles ---
  sectionCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Ensures chevron is on the far right
    padding: 15,
    marginBottom: 10, // Creates separation between cards
    backgroundColor: "#d9ebe4ff", // White background for the card

    // --- Rounded Corners ---
    borderRadius: 10,

    // --- Shadow/Elevation (Android & iOS) ---
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    // elevation: 2, // Android shadow
  },

  sectionText: {
    flex: 1, // Allows text to take up most of the space
    fontSize: 16,
    marginLeft: 15, // Space between icon and text
    color: colors.TEXT_DARK,
  },
});

export default ProfileScreen;
