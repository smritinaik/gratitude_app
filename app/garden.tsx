import { useCallback, useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";
import { useFocusEffect } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient"; // Added for premium botanical glass aesthetics
import { Image } from "react-native";
import { getAllGratitudes } from "../utils/storage";
import { calculateCurrentStreak } from "../utils/streaks";
import {
  getGrowthStage,
  getDaysToNextStage,
} from "../utils/garden";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

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









  // 🌿 Plant mood system (Logic unmodified, colors unified with premium deep nature tokens)
  const plant = (() => {
    if (streak === 0)
      return {
        image: require("../assets/images/plants/dieing.png"),
        stage: "Dying Plant",
      };

    if (streak <= 6)
      return {
        image: require("../assets/images/plants/seed.png"),
        stage: "Seed",
      };

    if (streak <= 29)
      return {
        image: require("../assets/images/plants/sprout.png"),
        stage: "Sprout",
      };

    if (streak <= 89)
      return {
        image: require("../assets/images/plants/plant.png"),
        stage: "Plant",
      };

    if (streak <= 99)
      return {
        image: require("../assets/images/plants/tree.png"),
        stage: "Tree",
      };

    return {
      image: require("../assets/images/plants/flower.png"),
      stage: "Flowering Tree",
    };
  })();
















  return (
    <View style={{ flex: 1, backgroundColor: "#0B1410" }}>
      {/* Organic Nature Gradient Background Layer */}
      <LinearGradient
        colors={["#0E1E16", "#0B1410", "#070C09"]}
        locations={[0.0, 0.5, 1.0]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />

      {/* Premium Canopy Top Arch Geometry
        Creates a custom curved layout header element
      */}
      <View
        style={{
          position: "absolute",
          top: -SCREEN_WIDTH * 0.45,
          left: -(SCREEN_WIDTH * 0.25),
          width: SCREEN_WIDTH * 1.5,
          height: SCREEN_WIDTH * 1.3,
          borderRadius: (SCREEN_WIDTH * 1.5) / 2,
          backgroundColor: "#050C08",
          shadowColor: "#10B981",
          shadowOffset: { width: 0, height: 16 },
          shadowOpacity: 0.05,
          shadowRadius: 30,
          elevation: 6,
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
            <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
              <View
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.12)",
                  padding: 10,
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: "rgba(16, 185, 129, 0.2)",
                }}
              >
                <Ionicons name="leaf" size={24} color="#10B981" />
              </View>
              <Text
                style={{
                  fontSize: 32,
                  fontWeight: "900",
                  color: "#FFFFFF",
                  letterSpacing: -0.8,
                }}
              >
                Your Garden
              </Text>
            </View>

            {/* Micro badge indicator */}
            <View
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                paddingVertical: 6,
                paddingHorizontal: 12,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.08)",
              }}
            >
              <Text style={{ color: "#80998C", fontSize: 12, fontWeight: "700", letterSpacing: 0.5 }}>
                ECOSYSTEM
              </Text>
            </View>
          </View>

          {/* Plant Display Centerpiece Card (Premium Glassmorphic Theme) */}
          <View
            style={{
              backgroundColor: "#111C16",
              marginTop: 28,
              borderRadius: 36,
              overflow: "hidden",
              borderWidth: 1,
              borderColor: "rgba(16, 185, 129, 0.15)",
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 24 },
              shadowOpacity: 0.3,
              shadowRadius: 32,
              elevation: 8,
              position: "relative",
            }}
          >
            {/* Inner dynamic light radiation layer */}
            <LinearGradient
              colors={["rgba(16, 185, 129, 0.08)", "rgba(0, 0, 0, 0)"]}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            />

            <View style={{ paddingVertical: 40, paddingHorizontal: 24, alignItems: "center" }}>
              {/* Specialized Nested Botanical Circular Rings */}

              <View
                style={{
                  backgroundColor: "#09100C",
                  padding: 24,
                  borderRadius: 120,
                  borderWidth: 1.5,
                  borderColor: "rgba(16, 185, 129, 0.25)",
                  marginBottom: 20,
                  shadowColor: "#10B981",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.2,
                  shadowRadius: 20,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#16271F",
                    padding: 16,
                    borderRadius: 100,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={plant.image}
                    style={{
                      width: 180,
                      height: 180,
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </View>



              {/* ------------------------------------------------------------- */}
              <Text
                style={{
                  fontSize: 28,
                  fontWeight: "900",
                  color: "#FFFFFF",
                  letterSpacing: -0.5,
                  textAlign: "center",
                }}
              >
                {stage}
              </Text>

              {/* Dynamic Streak Badge Element */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 10,
                  backgroundColor: "rgba(255, 122, 0, 0.1)",
                  paddingVertical: 6,
                  paddingHorizontal: 16,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: "rgba(255, 122, 0, 0.15)",
                }}
              >
                <Ionicons name="flame" size={14} color="#FF7A00" />
                <Text
                  style={{
                    color: "#FF8C21",
                    fontSize: 13,
                    fontWeight: "800",
                    letterSpacing: 0.2,
                  }}
                >
                  {streak} Day Streak
                </Text>
              </View>
            </View>
          </View>

          {/* Next Evolution Layout Card */}
          <View
            style={{
              marginTop: 16,
              backgroundColor: "#111C16",
              padding: 20,
              borderRadius: 28,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: 1,
              borderColor: "rgba(255, 255, 255, 0.05)",
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.15,
              shadowRadius: 10,
              elevation: 2,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 14 }}>
              <View
                style={{
                  backgroundColor: "rgba(52, 211, 153, 0.08)",
                  padding: 10,
                  borderRadius: 16,
                }}
              >
                <Ionicons name="trending-up" size={22} color="#34D399" />
              </View>
              <View>
                <Text style={{ color: "#80998C", fontSize: 13, fontWeight: "700", textTransform: "uppercase", letterSpacing: 0.5 }}>
                  Next Evolution
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "900",
                    color: "#FFFFFF",
                    marginTop: 2,
                    letterSpacing: -0.3,
                  }}
                >
                  {daysLeft} days left
                </Text>
              </View>
            </View>
            <View style={{ backgroundColor: "#182920", width: 44, height: 44, borderRadius: 14, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontSize: 22 }}>🌱</Text>
            </View>
          </View>

          {/* Growth Progress Tracker Card */}
          <View
            style={{
              marginTop: 16,
              backgroundColor: "#111C16",
              padding: 24,
              borderRadius: 32,
              borderWidth: 1,
              borderColor: "rgba(255, 255, 255, 0.05)",
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 6 },
              shadowOpacity: 0.15,
              shadowRadius: 12,
              elevation: 3,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "800", color: "#FFFFFF", letterSpacing: -0.1 }}>
                Growth Progress
              </Text>
              <View style={{ backgroundColor: "rgba(16, 185, 129, 0.12)", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 }}>
                <Text style={{ color: "#10B981", fontWeight: "800", fontSize: 13 }}>
                  {Math.round(progress)}%
                </Text>
              </View>
            </View>

            {/* Custom High-End Progress Track bar layout */}
            <View
              style={{
                height: 14,
                backgroundColor: "#09100C",
                borderRadius: 50,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.02)",
              }}
            >
              <LinearGradient
                colors={["#059669", "#10B981", "#34D399"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  borderRadius: 50,
                  shadowColor: "#10B981",
                  shadowOffset: { width: 2, height: 0 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                }}
              />
            </View>

            <Text
              style={{
                marginTop: 16,
                color: "#607368",
                fontSize: 13,
                lineHeight: 18,
                fontWeight: "600",
                textAlign: "center",
                paddingHorizontal: 8,
              }}
            >
              Nurture your daily habits to reach the next stage
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}