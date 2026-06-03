import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
} from "react-native";

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
    currentStreak >= nextGoal
      ? 100
      : (currentStreak / nextGoal) * 100;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F4FFF6",
        padding: 20,
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
        <Ionicons
          name="flame-outline"
          size={30}
          color="#FF7A00"
        />

        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            color: "#1B4332",
          }}
        >
          Streaks
        </Text>
      </View>

      {/* Current Streak */}
      <View
        style={{
          backgroundColor: "#FFFFFF",
          marginTop: 30,
          padding: 24,
          borderRadius: 24,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#6B7280",
            fontSize: 16,
          }}
        >
          Current Streak
        </Text>

        <Text
          style={{
            fontSize: 52,
            fontWeight: "700",
            color: "#1B4332",
            marginTop: 8,
          }}
        >
          {currentStreak}
        </Text>

        <Text
          style={{
            color: "#6B7280",
            marginTop: 4,
          }}
        >
          Days
        </Text>
      </View>

      {/* Best + Goal */}
      <View
        style={{
          flexDirection: "row",
          gap: 12,
          marginTop: 20,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            padding: 20,
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <Ionicons
            name="trophy-outline"
            size={24}
            color="#E6B800"
          />

          <Text
            style={{
              marginTop: 8,
              color: "#6B7280",
            }}
          >
            Best
          </Text>

          <Text
            style={{
              fontSize: 26,
              fontWeight: "700",
              color: "#1B4332",
            }}
          >
            {bestStreak}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            padding: 20,
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <Ionicons
            name="flag-outline"
            size={24}
            color="#4CAF50"
          />

          <Text
            style={{
              marginTop: 8,
              color: "#6B7280",
            }}
          >
            Next Goal
          </Text>

          <Text
            style={{
              fontSize: 26,
              fontWeight: "700",
              color: "#1B4332",
            }}
          >
            {nextGoal}
          </Text>
        </View>
      </View>

      {/* Progress */}
      <View
        style={{
          backgroundColor: "#FFFFFF",
          marginTop: 20,
          padding: 20,
          borderRadius: 24,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: "#1B4332",
            marginBottom: 14,
          }}
        >
          Goal Progress
        </Text>

        <View
          style={{
            height: 14,
            backgroundColor: "#E8F5E9",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "#4CAF50",
            }}
          />
        </View>

        <Text
          style={{
            marginTop: 12,
            color: "#6B7280",
          }}
        >
          {currentStreak} / {nextGoal} Days
        </Text>
      </View>
    </SafeAreaView>
  );
}