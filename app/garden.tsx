import { useCallback, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useFocusEffect } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { getAllGratitudes } from "../utils/storage";
import { calculateCurrentStreak } from "../utils/streaks";
import {
  getGrowthStage,
  getDaysToNextStage,
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

  const progress =
    streak >= 100
      ? 100
      : streak <= 6
      ? (streak / 7) * 100
      : streak <= 29
      ? (streak / 30) * 100
      : streak <= 89
      ? (streak / 90) * 100
      : streak <= 99
      ? (streak / 100) * 100
      : 100;

  // 🌿 Plant mood system (Kept intact with upgraded tailored brand colors)
  const plant = (() => {
    if (streak === 0)
      return { icon: "sad-outline", color: "#A3B899" };
    if (streak <= 6)
      return { icon: "leaf-outline", color: "#81C784" };
    if (streak <= 29)
      return { icon: "leaf", color: "#4CAF50" };
    if (streak <= 89)
      return { icon: "flower-outline", color: "#2E7D32" };
    if (streak <= 99)
      return { icon: "sparkles", color: "#1B4332" };

    return { icon: "rose", color: "#15803D" };
  })();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E1EFE6" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 20,
          paddingBottom: 40,
        }}
      >
        {/* Header Title */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginTop: 10,
          }}
        >
          <Ionicons name="leaf" size={26} color="#1B4332" />
          <Text
            style={{
              fontSize: 28,
              fontWeight: "800",
              color: "#1B4332",
              letterSpacing: -0.5,
            }}
          >
            Your Garden
          </Text>
        </View>

        {/* Plant Display Centerpiece Card */}
        <View
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 28,
            paddingVertical: 36,
            paddingHorizontal: 24,
            borderRadius: 32,
            alignItems: "center",
            shadowColor: "#1B4332",
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.05,
            shadowRadius: 20,
            elevation: 3,
          }}
        >
          {/* Circular frame for the plant icon */}
          <View
            style={{
              backgroundColor: "#F4FFF6",
              padding: 28,
              borderRadius: 100,
              borderWidth: 2,
              borderColor: "#E8F5E9",
              marginBottom: 16,
            }}
          >
            <Ionicons name={plant.icon as any} size={100} color={plant.color} />
          </View>

          <Text
            style={{
              fontSize: 24,
              fontWeight: "800",
              color: "#1B4332",
              letterSpacing: -0.3,
            }}
          >
            {stage}
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginTop: 6,
              backgroundColor: "#FFF0E6",
              paddingVertical: 4,
              paddingHorizontal: 12,
              borderRadius: 12,
            }}
          >
            <Ionicons name="flame" size={14} color="#FF7A00" />
            <Text
              style={{
                color: "#FF7A00",
                fontSize: 13,
                fontWeight: "700",
              }}
            >
              {streak} Day Streak
            </Text>
          </View>
        </View>

        {/* Next Evolution Info Card */}
        <View
          style={{
            marginTop: 16,
            backgroundColor: "#FFFFFF",
            padding: 20,
            borderRadius: 24,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            shadowColor: "#1B4332",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.03,
            shadowRadius: 10,
            elevation: 2,
          }}
        >
          <View>
            <Text style={{ color: "#526E60", fontSize: 14, fontWeight: "600" }}>
              Next Evolution
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "800",
                color: "#1B4332",
                marginTop: 2,
              }}
            >
              {daysLeft} days left
            </Text>
          </View>
          <Text style={{ fontSize: 24 }}>🌱</Text>
        </View>

        {/* Growth Progress Tracker Card */}
        <View
          style={{
            marginTop: 14,
            backgroundColor: "#FFFFFF",
            padding: 24,
            borderRadius: 24,
            shadowColor: "#1B4332",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.03,
            shadowRadius: 10,
            elevation: 2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "700", color: "#1B4332" }}>
              Growth Progress
            </Text>
            <Text style={{ color: "#526E60", fontWeight: "700", fontSize: 14 }}>
              {Math.round(progress)}%
            </Text>
          </View>

          {/* Upgraded Progress Track Slider layout */}
          <View
            style={{
              height: 12,
              backgroundColor: "#E1EFE6",
              borderRadius: 50,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                width: `${progress}%`,
                height: "100%",
                backgroundColor: "#4CAF50",
                borderRadius: 50,
              }}
            />
          </View>

          <Text
            style={{
              marginTop: 12,
              color: "#526E60",
              fontSize: 13,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Nurture your daily habits to reach the next stage
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}