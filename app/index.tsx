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
    <View style={{ flex: 1, backgroundColor: "#E1EFE6" }}>
      {/* Premium Ambient Soft Glow Background Layer */}
      <LinearGradient
        colors={["#D3EBE1", "#E1EFE6", "#F2F9F5"]}
        locations={[0.0, 0.5, 1.0]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />

      {/* Premium Dark Forest Green U-Shaped Curve (Inspired by image_e85af4.jpg)
        Positioned dynamically behind the header and featured cards.
      */}
      <View
        style={{
          position: "absolute",
          top: -SCREEN_WIDTH * 0.45,
          left: -(SCREEN_WIDTH * 0.25),
          width: SCREEN_WIDTH * 1.5,
          height: SCREEN_WIDTH * 1.35,
          borderRadius: (SCREEN_WIDTH * 1.5) / 2,
          backgroundColor: "#0B1912",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 12 },
          shadowOpacity: 0.15,
          shadowRadius: 24,
          elevation: 8,
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
              <Text
                style={{
                  fontSize: 34,
                  fontWeight: "900",
                  color: "#FFFFFF",
                  lineHeight: 40,
                  marginTop: 12,
                  letterSpacing: -0.8,
                }}
              >
                Daily Gratitude 
              </Text>
            </View>

            {/* Translucent Glass Pill Circle Decorative Box */}
            <View
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                padding: 12,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.25)",
              }}
            >
              <Ionicons name="leaf" size={22} color="#E1EFE6" />
            </View>
          </View>

          {/* Featured Stats Hero Card */}
          <View
            style={{
              backgroundColor: "#FFFFFF",
              marginTop: 28,
              borderRadius: 32,
              overflow: "hidden",
              shadowColor: "#0B1912",
              shadowOffset: { width: 0, height: 12 },
              shadowOpacity: 0.08,
              shadowRadius: 24,
              elevation: 4,
              position: "relative",
            }}
          >
            {/* The BIGGER Image Accent */}
            <Image
              source={require("../assets/images/seed-of-joy.png")}
              style={{
                position: "absolute",
                top: 24, // Slightly lowered from the top boundary
                right: 20,
                width: 100, // Increased size to 100px
                height: 100, // Increased size to 100px
                borderRadius: 24, // Enhanced corner smoothing for a premium look
              }}
              resizeMode="cover"
            />

            {/* Content container body 
              Increased paddingRight to 125 so your typography has plenty of 
              breathing room next to the larger image asset.
            */}
            <View style={{ padding: 24, paddingRight: 125 }}>
              <Text
                style={{
                  color: "#0B1912",
                  fontSize: 22,
                  fontWeight: "700",
                  letterSpacing: -0.3,
                }}
              >
                The Seeds of Joy
              </Text>
              <Text
                style={{
                  color: "#5A6E62",
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
                    color: "#0B1912",
                  }}
                >
                  {gratitudes.length}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#5A6E62",
                  }}
                >
                  Total Entries
                </Text>
              </View>
            </View>
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
                fontSize: 30,
                fontWeight: "600",
                color: "#75b193",
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
              <Ionicons name="flower-outline" size={32} color="#A6B8AD" />
              <Text
                style={{
                  color: "#5A6E62",
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
                shadowColor: "#0B1912",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.02,
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
                    color: "#5A6E62",
                    fontWeight: "700",
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  {item.date}
                </Text>
                <Ionicons name="bookmark-outline" size={16} color="#b3eeca" />
              </View>

              <Text
                style={{
                  color: "#0B1912",
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