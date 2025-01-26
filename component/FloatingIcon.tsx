import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function FloatingIcon() {


  return (
    <View>
      <Pressable onPress={() => {}}>
        <Ionicons
          name="moon"
          size={24}
          color="black"
          style={styles.floatingIcon}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingIcon: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 50,
  },
});
