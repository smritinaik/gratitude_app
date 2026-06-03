import { useCallback, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useFocusEffect } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { getAllGratitudes } from "../utils/storage";
import { calculateCurrentStreak } from "../utils/streaks";
import {
  getGrowthStage,
  getDaysToNextStage,
  getNextStageName,
} from "../utils/garden";

export default function GardenScreen() {
  const [streak, setStreak] = useState(0);

  const load = async () => {
    const data = await getAllGratitudes();
    const current = calculateCurrentStreak(data);
    setStreak(current);
  };

  useFocusEffect(
    useCallback(() => {
      load();
    }, [])
  );

  const stage = getGrowthStage(streak);
  const daysLeft = getDaysToNextStage(streak);
  const nextStage = getNextStageName(streak);

  const progress =
    streak >= 100
      ? 100
      : (() => {
          if (streak <= 6) return (streak / 7) * 100;
          if (streak <= 29) return (streak / 30) * 100;
          if (streak <= 89) return (streak / 90) * 100;
          if (streak <= 99) return (streak / 100) * 100;
          return 100;
        })();

  // 🌱 Icon mapping (temporary instead of images)
  const getPlantIcon = () => {
    if (streak === 0)
      return { name: "sad-outline", color: "#A3A3A3" };
    if (streak <= 6)
      return { name: "leaf-outline", color: "#A3E635" };
    if (streak <= 29)
      return { name: "rose-outline", color: "#4ADE80" };
    if (streak <= 89)
      return { name: "flower-outline", color: "#22C55E" };
    if (streak <= 99)
      return { name: "leaf", color: "#16A34A" };

    return { name: "sparkles", color: "#15803D" };
  };

  const plant = getPlantIcon();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F6FFF7",
        padding: 20,
      }}
    >
      {/* Header */}
      <Text
        style={{
          fontSize: 28,
          fontWeight: "700",
          color: "#14532D",
          marginTop: 10,
        }}
      >
        🌿 Your Garden
      </Text>

      {/* Plant Visual */}
      <View
        style={{
          marginTop: 40,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
          padding: 40,
          borderRadius: 30,
        }}
      >
        <Ionicons
          name={plant.name as any}
          size={120}
          color={plant.color}
        />

        <Text
          style={{
            fontSize: 22,
            fontWeight: "600",
            marginTop: 10,
            color: "#14532D",
          }}
        >
          {stage}
        </Text>

        <Text
          style={{
            color: "#6B7280",
            marginTop: 4,
          }}
        >
          Current Streak: {streak} days
        </Text>
      </View>

      {/* Stats */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          gap: 12,
        }}
      >
        {/* Next Stage */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            padding: 18,
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <Ionicons name="trending-up-outline" size={24} color="#16A34A" />

          <Text
            style={{
              marginTop: 6,
              color: "#6B7280",
            }}
          >
            Next Stage
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "#14532D",
              textAlign: "center",
              marginTop: 4,
            }}
          >
            {nextStage}
          </Text>
        </View>

        {/* Days Left */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            padding: 18,
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <Ionicons name="time-outline" size={24} color="#F59E0B" />

          <Text
            style={{
              marginTop: 6,
              color: "#6B7280",
            }}
          >
            Days Left
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "#14532D",
              marginTop: 4,
            }}
          >
            {daysLeft}
          </Text>
        </View>
      </View>

      {/* Progress Bar */}
      <View
        style={{
          marginTop: 20,
          backgroundColor: "#FFFFFF",
          padding: 20,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            marginBottom: 10,
            fontWeight: "600",
            color: "#14532D",
          }}
        >
          Growth Progress
        </Text>

        <View
          style={{
            height: 12,
            backgroundColor: "#DCFCE7",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "#22C55E",
            }}
          />
        </View>

        <Text
          style={{
            marginTop: 8,
            color: "#6B7280",
          }}
        >
          {Math.round(progress)}% to next evolution
        </Text>
      </View>
    </SafeAreaView>
  );
}