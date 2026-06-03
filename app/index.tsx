import { SafeAreaView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";

import { getGratitude } from "../utils/storage";

export default function HomeScreen() {
  const [gratitude, setGratitude] = useState("");

  const loadGratitude = async () => {
    const saved = await getGratitude();

    if (saved) {
      setGratitude(saved);
    }
  };

  useEffect(() => {
    loadGratitude();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadGratitude();
    }, [])
  );

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
          gap: 10,
          marginTop: 10,
        }}
      >
        <Ionicons name="leaf-outline" size={30} color="#4CAF50" />

        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            color: "#1B4332",
          }}
        >
          Gratitude Garden
        </Text>
      </View>

      <Text
        style={{
          marginTop: 8,
          color: "#6B7280",
          fontSize: 15,
        }}
      >
        Grow gratitude, one day at a time.
      </Text>

      {/* Streak Card */}
      <View
        style={{
          backgroundColor: "#FFFFFF",
          marginTop: 30,
          padding: 20,
          borderRadius: 24,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Ionicons name="flame-outline" size={22} color="#FF7A00" />

          <Text
            style={{
              fontSize: 16,
              color: "#6B7280",
            }}
          >
            Current Streak
          </Text>
        </View>

        <Text
          style={{
            fontSize: 38,
            fontWeight: "700",
            marginTop: 10,
            color: "#1B4332",
          }}
        >
          0 Days
        </Text>
      </View>

      {/* Plant Card */}
      <View
        style={{
          backgroundColor: "#FFFFFF",
          marginTop: 20,
          padding: 24,
          borderRadius: 24,
          alignItems: "center",
        }}
      >
        <Ionicons name="leaf" size={70} color="#4CAF50" />

        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            color: "#1B4332",
            marginTop: 10,
          }}
        >
          Seedling
        </Text>

        <Text
          style={{
            color: "#6B7280",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Reach a 7-day streak to unlock the next growth stage.
        </Text>
      </View>

      {/* Today's Gratitude */}
      <View
        style={{
          backgroundColor: "#FFFFFF",
          marginTop: 20,
          padding: 20,
          borderRadius: 24,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            marginBottom: 12,
          }}
        >
          <Ionicons
            name="sparkles-outline"
            size={20}
            color="#4CAF50"
          />

          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#1B4332",
            }}
          >
            Today's Gratitude
          </Text>
        </View>

        <Text
          style={{
            color: "#6B7280",
            lineHeight: 22,
          }}
        >
          {gratitude || "No gratitude entry added today."}
        </Text>
      </View>
    </SafeAreaView>
  );
}