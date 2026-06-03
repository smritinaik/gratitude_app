import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  GratitudeEntry,
  getAllGratitudes,
} from "../utils/storage";

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
    <View style={{ flex: 1, backgroundColor: "#E1EFE6" }}>
      {/* 
        Premium Aurora Gradient Background matching your theme tones.
        Simulates the soft mesh blend style seen in Instagram.jpg 
      */}
      <LinearGradient
        colors={["#598f6c", "#D3EBE1", "#E1EFE6", "#F2F9F5"]}
        locations={[0.0, 0.3, 0.6, 1.0]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
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
              alignItems: "flex-start",
              marginTop: 12,
            }}
          >
            <View style={{ flex: 1 }}>
              {/* Semi-translucent Pill Badge for Greeting */}
              <View
                style={{
                  alignSelf: "flex-start",
                  backgroundColor: "rgba(255, 255, 255, 0.65)",
                  paddingVertical: 6,
                  paddingHorizontal: 12,
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: "rgba(27, 67, 50, 0.15)",
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "700",
                    color: "#1B4332",
                    letterSpacing: 0.3,
                  }}
                >
                  Hi, Friend 👋
                </Text>
              </View>
              
              <Text
                style={{
                  fontSize: 34,
                  fontWeight: "900",
                  color: "#1B4332",
                  lineHeight: 40,
                  marginTop: 10,
                  letterSpacing: -0.8,
                }}
              >
                Daily Gratitude 
              </Text>
            </View>

            {/* Translucent Glass Decorative Icon Box */}
            <View
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.65)",
                padding: 12,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.5)",
                shadowColor: "#1B4332",
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.04,
                shadowRadius: 12,
                elevation: 2,
              }}
            >
              <Ionicons name="rose-outline" size={26} color="#1B4332" />
            </View>
          </View>

          {/* Featured Stats Hero Card */}
          <View
            style={{
              backgroundColor: "#FFFFFF",
              marginTop: 24,
              borderRadius: 32,
              overflow: "hidden",
              shadowColor: "#1B4332",
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.05,
              shadowRadius: 20,
              elevation: 3,
            }}
          >
            <View style={{ padding: 24 }}>
              <Text
                style={{
                  color: "#1B4332",
                  fontSize: 22,
                  fontWeight: "700",
                  letterSpacing: -0.3,
                }}
              >
                The Seeds of Joy
              </Text>
              <Text
                style={{
                  color: "#526E60",
                  fontSize: 14,
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
                  gap: 6,
                }}
              >
                <Text
                  style={{
                    fontSize: 44,
                    fontWeight: "800",
                    color: "#1B4332",
                  }}
                >
                  {gratitudes.length}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#526E60",
                  }}
                >
                  Total Entries
                </Text>
              </View>
            </View>
          </View>

          {/* Quick Actions (Streaks & Growth) */}
          <View
            style={{
              flexDirection: "row",
              gap: 14,
              marginTop: 16,
            }}
          >
            <TouchableOpacity
              onPress={() => router.push("/streaks")}
              activeOpacity={0.8}
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                padding: 20,
                borderRadius: 24,
                alignItems: "center",
                shadowColor: "#1B4332",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.04,
                shadowRadius: 10,
                elevation: 2,
              }}
            >
              <View
                style={{
                  backgroundColor: "#FFF0E6",
                  padding: 10,
                  borderRadius: 50,
                }}
              >
                <Ionicons name="flame" size={24} color="#FF7A00" />
              </View>
              <Text
                style={{
                  marginTop: 10,
                  fontWeight: "700",
                  color: "#1B4332",
                  fontSize: 15,
                }}
              >
                Streaks
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/garden")}
              activeOpacity={0.8}
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                padding: 20,
                borderRadius: 24,
                alignItems: "center",
                shadowColor: "#1B4332",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.04,
                shadowRadius: 10,
                elevation: 2,
              }}
            >
              <View
                style={{
                  backgroundColor: "#E8F5E9",
                  padding: 10,
                  borderRadius: 50,
                }}
              >
                <Ionicons name="leaf" size={24} color="#4CAF50" />
              </View>
              <Text
                style={{
                  marginTop: 10,
                  fontWeight: "700",
                  color: "#1B4332",
                  fontSize: 15,
                }}
              >
                Growth
              </Text>
            </TouchableOpacity>
          </View>

          {/* Timeline Header */}
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
                color: "#1B4332",
                letterSpacing: -0.5,
              }}
            >
              Your Timeline
            </Text>
          </View>

          {/* Empty State */}
          {gratitudes.length === 0 && (
            <View
              style={{
                backgroundColor: "#FFFFFF",
                padding: 24,
                borderRadius: 24,
                alignItems: "center",
              }}
            >
              <Ionicons name="flower-outline" size={32} color="#A3B899" />
              <Text
                style={{
                  color: "#526E60",
                  marginTop: 8,
                  fontWeight: "500",
                }}
              >
                No gratitude entries yet.
              </Text>
            </View>
          )}

          {/* Timeline List */}
          {gratitudes.map((item) => (
            <View
              key={item.id}
              style={{
                backgroundColor: "#FFFFFF",
                padding: 20,
                borderRadius: 24,
                marginBottom: 12,
                shadowColor: "#1B4332",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.03,
                shadowRadius: 8,
                elevation: 1,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    color: "#4CAF50",
                    fontWeight: "700",
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                }}
              >
                {item.date}
              </Text>
              <Ionicons name="bookmark-outline" size={16} color="#A3B899" />
            </View>

            <Text
              style={{
                color: "#2D3A34",
                fontSize: 15,
                lineHeight: 22,
                fontWeight: "500",
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