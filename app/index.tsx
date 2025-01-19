import { Text, View, TextInput, Pressable, StyleSheet, FlatList } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "@/data/todoData";
import { useState } from "react";

export default function Index() {
  return (
    <SafeAreaView>
      <View>
        {data.map((item) => (
          <Text key={item.id}>{item.title}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
}
