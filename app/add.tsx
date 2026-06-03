import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { router } from "expo-router";
import { saveGratitude } from "../utils/storage";

import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";

export default function AddScreen() {
  const [gratitude, setGratitude] = useState("");

  const wordCount = gratitude
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const handleSave = async () => {
    if (!gratitude.trim()) return;

    await saveGratitude(gratitude);

    Alert.alert("Saved", "Your gratitude has been saved.");

    router.push("/");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F4FFF6",
        padding: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          marginBottom: 20,
        }}
      >
        <Ionicons
          name="create-outline"
          size={24}
          color="#4CAF50"
        />

        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            color: "#1B4332",
          }}
        >
          Today's Gratitude
        </Text>
      </View>

      <Text
        style={{
          color: "#6B7280",
          marginBottom: 20,
          fontSize: 15,
        }}
      >
        One gratitude. One moment. One reflection.
      </Text>

      <View
        style={{
          backgroundColor: "#FFFDF5",
          borderRadius: 24,
          padding: 20,
          height: 280,

          borderWidth: 1,
          borderColor: "#F3E8D0",

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.05,
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: "#374151",
            marginBottom: 16,
          }}
        >
          Today I am grateful for...
        </Text>

        <TextInput
          value={gratitude}
          onChangeText={setGratitude}
          multiline
          maxLength={500}
          numberOfLines={5}
          textAlignVertical="top"
          placeholder="A person, a moment, an opportunity..."
          placeholderTextColor="#9CA3AF"
          style={{
            minHeight: 140,
            fontSize: 18,
            lineHeight: 32,
            color: "#1F2937",
          }}
        />

        <Text
          style={{
            textAlign: "right",
            color: "#6B7280",
            marginTop: 10,
            fontSize: 13,
          }}
        >
          {wordCount}/100 words
        </Text>
      </View>

      <TouchableOpacity
        onPress={handleSave}
        disabled={!gratitude.trim()}
        style={{
          backgroundColor: gratitude.trim()
            ? "#4CAF50"
            : "#A5D6A7",

          height: 58,
          borderRadius: 18,

          justifyContent: "center",
          alignItems: "center",

          marginTop: 24,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 18,
            fontWeight: "700",
          }}
        >
          Save Gratitude
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}