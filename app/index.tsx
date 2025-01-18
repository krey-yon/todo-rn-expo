import { data } from "@/data/todoData";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
