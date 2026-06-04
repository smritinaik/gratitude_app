import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

import {
  GratitudeEntry,
  getAllGratitudes,
} from "../utils/storage";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function HomeScreen() {
  const [gratitudes, setGratitudes] = useState<GratitudeEntry[]>([]);

  const loadGratitudes = async () => {
    const data = await getAllGratitudes();
    setGratitudes(data);
  };

  useFocusEffect(
    useCallback(() => {
      loadGratitudes();
    }, [])
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#0B1410" }}>
      {/* Premium Ambient Dark Ecosystem Background Layer */}
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

      {/* Overarching Deep Canopy Arch Geometry */}
      <View
        style={{
          position: "absolute",
          top: -SCREEN_WIDTH * 0.45,
          left: -(SCREEN_WIDTH * 0.25),
          width: SCREEN_WIDTH * 1.5,
          height: SCREEN_WIDTH * 1.35,
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
            paddingBottom: 140,
          }}
        >
          {/* Styled Premium Header Section */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <View style={{ flex: 1 }}>      
              <Text
                style={{
                  fontSize: 34,
                  fontWeight: "900",
                  color: "#FFFFFF",
                  lineHeight: 40,
                  letterSpacing: -0.8,
                }}
              >
                Daily Gratitude 
              </Text>
            </View>

            {/* Glassmorphic Brand Accent Box */}
            <View
              style={{
                backgroundColor: "rgba(16, 185, 129, 0.12)",
                padding: 12,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "rgba(16, 185, 129, 0.2)",
              }}
            >
              <Ionicons name="leaf" size={22} color="#10B981" />
            </View>
          </View>

          {/* Featured Stats Hero Card */}
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
            {/* Ambient subtle light source overlay */}
            <LinearGradient
              colors={["rgba(16, 185, 129, 0.06)", "rgba(0, 0, 0, 0)"]}
              style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
            />

            {/* The BIGGER Image Accent Container */}
            <View
              style={{
                position: "absolute",
                top: 24,
                right: 20,
                shadowColor: "#10B981",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.15,
                shadowRadius: 15,
              }}
            >
              <Image
                source={require("../assets/images/seed-of-joy.png")}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 24,
                  borderWidth: 1,
                  borderColor: "rgba(255, 255, 255, 0.05)",
                }}
                resizeMode="cover"
              />
            </View>

            <View style={{ padding: 24, paddingRight: 135 }}>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 22,
                  fontWeight: "800",
                  letterSpacing: -0.3,
                }}
              >
                The Seeds of Joy
              </Text>
              <Text
                style={{
                  color: "#80998C",
                  fontSize: 14,
                  fontWeight: "600",
                  marginTop: 6,
                  lineHeight: 20,
                }}
              >
                Grow gratitude, one day at a time. Watch your personal mental garden bloom.
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "baseline",
                  marginTop: 20,
                  gap: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: 46,
                    fontWeight: "900",
                    color: "#34D399",
                  }}
                >
                  {gratitudes.length}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "700",
                    color: "#4B6B5B",
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  Total Entries
                </Text>
              </View>
            </View>
          </View>
          

          {/* Timeline Header Section */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              marginTop: 36,
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "800",
                color: "#10B981",
                letterSpacing: -0.5,
              }}
            >
              Your Timeline
            </Text>
          </View>

          {/* Empty State Layout */}
          {gratitudes.length === 0 && (
            <View
              style={{
                backgroundColor: "#111C16",
                padding: 32,
                borderRadius: 28,
                alignItems: "center",
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.05)",
              }}
            >
              <Ionicons name="flower-outline" size={36} color="#4A5D53" />
              <Text
                style={{
                  color: "#80998C",
                  marginTop: 10,
                  fontWeight: "600",
                  fontSize: 15,
                }}
              >
                No gratitude entries yet.
              </Text>
            </View>
          )}

          {/* Timeline Cards Grid List */}
          {gratitudes.map((item) => (
            <View
              key={item.id}
              style={{
                backgroundColor: "#111C16",
                padding: 24,
                borderRadius: 28,
                marginBottom: 14,
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.04)",
                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.1,
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
                {/* Modern structural metadata chip badge styling */}
                <View
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: "rgba(255, 255, 255, 0.04)",
                  }}
                >
                  <Text
                    style={{
                      color: "#607368",
                      fontWeight: "800",
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: 1.2,
                    }}
                  >
                    {item.date}
                  </Text>
                </View>
                <Ionicons name="bookmark" size={14} color="#3D5247" />
              </View>

              {/* High-end editorial entry copy display text layout */}
              <Text
                style={{
                  color: "#E2E8F0",
                  fontSize: 16,
                  lineHeight: 26,
                  fontWeight: "500",
                  letterSpacing: -0.1,
                }}
              >
                {item.text}
              </Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}