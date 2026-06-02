import { SafeAreaView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
        }}
      >
        🌱 Gratitude Garden
      </Text>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18 }}>
          Today I'm grateful for...
        </Text>
      </View>
    </SafeAreaView>
  );
}