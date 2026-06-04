import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient"; // Added for premium fire-glowing backgrounds
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";

import { getAllGratitudes } from "../utils/storage";
import {
  calculateCurrentStreak,
  calculateBestStreak,
  getNextGoal,
} from "../utils/streaks";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

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
    <View style={{ flex: 1, backgroundColor: "#0F1612" }}>
      {/* Dark Ambient Layer with soft volcanic deep orange under-glow */}
      <LinearGradient
        colors={["#18110D", "#0F1612", "#0B110E"]}
        locations={[0.0, 0.6, 1.0]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />

      {/* 
        Premium Dark Volcanic U-Shaped Geometric Curve 
        Frames the screen header with a deep obsidian tone
      */}
      <View
        style={{
          position: "absolute",
          top: -SCREEN_WIDTH * 0.45,
          left: -(SCREEN_WIDTH * 0.25),
          width: SCREEN_WIDTH * 1.5,
          height: SCREEN_WIDTH * 1.25,
          borderRadius: (SCREEN_WIDTH * 1.5) / 2,
          backgroundColor: "#060A08",
          shadowColor: "#FF3E00",
          shadowOffset: { width: 0, height: 16 },
          shadowOpacity: 0.08,
          shadowRadius: 30,
          elevation: 8,
        }}
      />

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingTop: 20,
            paddingBottom: 60,
          }}
        >
          {/* Header Section */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
              }}
            >
              <View
                style={{
                  backgroundColor: "rgba(255, 62, 0, 0.15)",
                  padding: 10,
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: "rgba(255, 122, 0, 0.2)",
                }}
              >
                <Ionicons name="flame" size={24} color="#FF7A00" />
              </View>
              <Text
                style={{
                  fontSize: 32,
                  fontWeight: "900",
                  color: "#FFFFFF",
                  letterSpacing: -0.8,
                }}
              >
                Your Streaks
              </Text>
            </View>

            {/* Subtle premium accent tag */}
         
          </View>

          {/* Current Streak Hero Card (Magma Glow Theme) */}
          <View
            style={{
              backgroundColor: "#17221C",
              marginTop: 28,
              borderRadius: 36,
              overflow: "hidden",
              borderWidth: 1,
              borderColor: "rgba(255, 122, 0, 0.15)",
              shadowColor: "#FF5500",
              shadowOffset: { width: 0, height: 20 },
              shadowOpacity: 0.15,
              shadowRadius: 35,
              elevation: 10,
              position: "relative",
            }}
          >
            {/* Soft background radiant gradient to give depth to the card numbers */}
            <LinearGradient
              colors={["rgba(255, 85, 0, 0.08)", "rgba(0, 0, 0, 0)"]}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            />

            <View style={{ padding: 32, alignItems: "center" }}>
              {/* Inner floating magma badge */}
              <View
                style={{
                  backgroundColor: "#2C1E17",
                  padding: 16,
                  borderRadius: 50,
                  marginBottom: 16,
                  borderWidth: 1.5,
                  borderColor: "#FF5500",
                  shadowColor: "#FF5500",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.4,
                  shadowRadius: 12,
                }}
              >
                <Ionicons name="flame" size={36} color="#FF7A00" />
              </View>

              <Text
                style={{
                  color: "#E1EFE6",
                  fontSize: 14,
                  fontWeight: "800",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  opacity: 0.6,
                }}
              >
                Current Streak
              </Text>

              {/* Mega Typography for Counter */}
              <Text
                style={{
                  fontSize: 84,
                  fontWeight: "900",
                  color: "#FFFFFF",
                  lineHeight: 90,
                  marginTop: 8,
                  letterSpacing: -2,
                  textShadowColor: "rgba(255, 122, 0, 0.3)",
                  textShadowOffset: { width: 0, height: 4 },
                  textShadowRadius: 15,
                }}
              >
                {currentStreak}
              </Text>

              <Text
                style={{
                  color: "#FF9F59",
                  fontSize: 16,
                  fontWeight: "700",
                  marginTop: 4,
                  letterSpacing: -0.2,
                }}
              >
                Days Consistent
              </Text>
            </View>
          </View>

          {/* Side-by-Side Stats Cards */}
          <View style={{ flexDirection: "row", gap: 14, marginTop: 16 }}>
            {/* Best Record Card */}
            <View
              style={{
                flex: 1,
                backgroundColor: "#141D19",
                padding: 20,
                borderRadius: 28,
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.05)",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 8,
                elevation: 3,
              }}
            >
              <View
                style={{
                  backgroundColor: "rgba(255, 183, 3, 0.1)",
                  padding: 10,
                  borderRadius: 16,
                  alignSelf: "flex-start",
                  borderWidth: 1,
                  borderColor: "rgba(255, 183, 3, 0.2)",
                }}
              >
                <Ionicons name="trophy" size={20} color="#FFB703" />
              </View>
              <Text
                style={{
                  color: "#A4B2AB",
                  marginTop: 14,
                  fontSize: 13,
                  fontWeight: "700",
                  letterSpacing: 0.2,
                }}
              >
                Best Record
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "900",
                  color: "#FFFFFF",
                  marginTop: 4,
                  letterSpacing: -0.5,
                }}
              >
                {bestStreak} days
              </Text>
            </View>

            {/* Next Target Card */}
            <View
              style={{
                flex: 1,
                backgroundColor: "#141D19",
                padding: 20,
                borderRadius: 28,
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.05)",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 8,
                elevation: 3,
              }}
            >
              <View
                style={{
                  backgroundColor: "rgba(255, 90, 95, 0.1)",
                  padding: 10,
                  borderRadius: 16,
                  alignSelf: "flex-start",
                  borderWidth: 1,
                  borderColor: "rgba(255, 90, 95, 0.2)",
                }}
              >
                <Ionicons name="flag" size={20} color="#FF5A5F" />
              </View>
              <Text
                style={{
                  color: "#A4B2AB",
                  marginTop: 14,
                  fontSize: 13,
                  fontWeight: "700",
                  letterSpacing: 0.2,
                }}
              >
                Next Milestone
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "900",
                  color: "#FFFFFF",
                  marginTop: 4,
                  letterSpacing: -0.5,
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
              backgroundColor: "#141D19",
              padding: 24,
              borderRadius: 32,
              borderWidth: 1,
              borderColor: "rgba(255, 255, 255, 0.05)",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 6 },
              shadowOpacity: 0.2,
              shadowRadius: 12,
              elevation: 4,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "800", color: "#E1EFE6", letterSpacing: -0.1 }}>
                Milestone Progress
              </Text>
              <View style={{ backgroundColor: "rgba(255, 122, 0, 0.1)", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 }}>
                <Text style={{ color: "#FF7A00", fontWeight: "800", fontSize: 13 }}>
                  {currentStreak} / {nextGoal} Days
                </Text>
              </View>
            </View>

            {/* Premium Linear Progress Track Bar layout with fluid styling */}
            <View
              style={{
                height: 14,
                backgroundColor: "#0A0F0D",
                borderRadius: 50,
                overflow: "hidden",
                marginTop: 20,
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.03)",
              }}
            >
              <LinearGradient
                colors={["#FF3E00", "#FF7A00", "#FFB703"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  borderRadius: 50,
                  shadowColor: "#FF7A00",
                  shadowOffset: { width: 2, height: 0 },
                  shadowOpacity: 0.5,
                  shadowRadius: 6,
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}