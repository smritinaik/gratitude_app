import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import { getAllGratitudes } from "../utils/storage";
import {
  calculateCurrentStreak,
  calculateBestStreak,
  getNextGoal,
} from "../utils/streaks";

export default function StreaksScreen() {
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [nextGoal, setNextGoal] = useState(7);

  const loadData = async () => {
    const gratitudes = await getAllGratitudes();

    const current = calculateCurrentStreak(gratitudes);
    const best = calculateBestStreak(gratitudes);
    const goal = getNextGoal(current);

    setCurrentStreak(current);
    setBestStreak(best);
    setNextGoal(goal);
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  const progress =
    nextGoal === 0 ? 0 : Math.min((currentStreak / nextGoal) * 100, 100);

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
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginTop: 10,
          }}
        >
          <Ionicons name="flame" size={28} color="#FF7A00" />
          <Text
            style={{
              fontSize: 28,
              fontWeight: "800",
              color: "#1B4332",
              letterSpacing: -0.5,
            }}
          >
            Your Streaks
          </Text>
        </View>

        {/* Current Streak Hero Card */}
        <View
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 28,
            padding: 28, // Fixed: removed the duplicate 'paddingStyle: 24' line here
            borderRadius: 32,
            alignItems: "center",
            shadowColor: "#1B4332",
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.05,
            shadowRadius: 20,
            elevation: 3,
          }}
        >
          <View
            style={{
              backgroundColor: "#FFF0E6",
              padding: 12,
              borderRadius: 50,
              marginBottom: 12,
            }}
          >
            <Ionicons name="flame" size={32} color="#FF7A00" />
          </View>

          <Text
            style={{
              color: "#526E60",
              fontSize: 15,
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            Current Streak
          </Text>

          <Text
            style={{
              fontSize: 64,
              fontWeight: "800",
              color: "#1B4332",
              lineHeight: 72,
              marginTop: 4,
            }}
          >
            {currentStreak}
          </Text>

          <Text
            style={{
              color: "#1B4332",
              fontSize: 16,
              fontWeight: "700",
              opacity: 0.7,
              marginTop: 2,
            }}
          >
            Days Consistent
          </Text>
        </View>

        {/* Side-by-Side Stats Cards */}
        <View style={{ flexDirection: "row", gap: 14, marginTop: 16 }}>
          {/* Best Record Card */}
          <View
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              padding: 20,
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
                backgroundColor: "#FFFBEB",
                padding: 8,
                borderRadius: 50,
                alignSelf: "flex-start",
              }}
            >
              <Ionicons name="trophy" size={20} color="#FFB703" />
            </View>
            <Text
              style={{
                color: "#526E60",
                marginTop: 12,
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              Best Record
            </Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "800",
                color: "#1B4332",
                marginTop: 2,
              }}
            >
              {bestStreak} days
            </Text>
          </View>

          {/* Next Target Card */}
          <View
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              padding: 20,
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
                backgroundColor: "#E8F5E9",
                padding: 8,
                borderRadius: 50,
                alignSelf: "flex-start",
              }}
            >
              <Ionicons name="flag" size={20} color="#4CAF50" />
            </View>
            <Text
              style={{
                color: "#526E60",
                marginTop: 12,
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              Next Milestone
            </Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "800",
                color: "#1B4332",
                marginTop: 2,
              }}
            >
              {nextGoal} days
            </Text>
          </View>
        </View>

        {/* Progress Tracker Card */}
        <View
          style={{
            marginTop: 16,
            backgroundColor: "#FFFFFF",
            padding: 24,
            borderRadius: 28,
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
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "700", color: "#1B4332" }}>
              Milestone Progress
            </Text>
            <Text style={{ color: "#526E60", fontWeight: "700", fontSize: 14 }}>
              {currentStreak} / {nextGoal} Days
            </Text>
          </View>

          {/* Custom Track Bar layout */}
          <View
            style={{
              height: 12,
              backgroundColor: "#E1EFE6",
              borderRadius: 50,
              overflow: "hidden",
              marginTop: 16,
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}