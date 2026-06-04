import { Ionicons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Import matching the premium ecosystem theme

import {
  getTodayGratitude,
  saveTodayGratitude,
} from "../utils/storage";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function AddScreen() {
  const [gratitude, setGratitude] = useState("");
  const [hasTodayGratitude, setHasTodayGratitude] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useFocusEffect(
    useCallback(() => {
      loadTodayGratitude();
    }, [])
  );

  const loadTodayGratitude = async () => {
    const today = await getTodayGratitude();

    if (today) {
      setGratitude(today.text);
      setHasTodayGratitude(true);
      setIsEditing(false);
    } else {
      setGratitude("");
      setHasTodayGratitude(false);
      setIsEditing(true);
    }
  };

  const handleSave = async () => {
    if (!gratitude.trim()) return;

    await saveTodayGratitude(gratitude);

    setHasTodayGratitude(true);
    setIsEditing(false);

    router.push("/");
  };

  const wordCount = gratitude
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return (
    <View style={{ flex: 1, backgroundColor: "#0B1410" }}>
      {/* Premium Dark Botanical Background Layer */}
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

      {/* Overarching Canopy Top Arch Ring Decorator */}
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

      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 24,
          paddingTop: 20,
        }}
      >
        {/* Header layout structure */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 12,
            marginBottom: 24,
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
              <Ionicons name="sparkles" size={24} color="#10B981" />
            </View>

            <Text
              style={{
                fontSize: 32,
                fontWeight: "900",
                color: "#FFFFFF",
                letterSpacing: -0.8,
              }}
            >
              Daily Seed
            </Text>
          </View>

          {/* Micro structural status marker */}
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
              CULTIVATE
            </Text>
          </View>
        </View>

        {/* Already Added Today View State */}
        {hasTodayGratitude && !isEditing ? (
          <View
            style={{
              backgroundColor: "#111C16",
              padding: 28,
              borderRadius: 36,
              alignItems: "center",
              borderWidth: 1,
              borderColor: "rgba(16, 185, 129, 0.15)",
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 24 },
              shadowOpacity: 0.3,
              shadowRadius: 32,
              elevation: 8,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <LinearGradient
              colors={["rgba(16, 185, 129, 0.06)", "rgba(0, 0, 0, 0)"]}
              style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
            />

            <View
              style={{
                backgroundColor: "rgba(16, 185, 129, 0.12)",
                padding: 16,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: "rgba(16, 185, 129, 0.25)",
                marginBottom: 20,
              }}
            >
              <Ionicons name="checkmark-circle" size={40} color="#34D399" />
            </View>

          <Text
            style={{
              fontSize: 22,
              fontWeight: "900",
              color: "#FFFFFF",
              textAlign: "center",
              letterSpacing: -0.3,
            }}
          >
            Your entry has been planted!
          </Text>

          <Text
            style={{
              marginTop: 8,
              color: "#80998C",
              fontSize: 14,
              fontWeight: "600",
              textAlign: "center",
              lineHeight: 20,
            }}
          >
            Come back tomorrow to keep growing your garden. 🌱
          </Text>

          {/* User's Text Display Container */}
          <View
            style={{
              backgroundColor: "#09100C",
              marginTop: 28,
              padding: 24,
              borderRadius: 24,
              width: "100%",
              borderWidth: 1,
              borderColor: "rgba(255, 255, 255, 0.04)",
            }}
          >
            <Text
              style={{
                fontSize: 17,
                color: "#E2E8F0",
                lineHeight: 28,
                fontWeight: "500",
                fontStyle: "italic",
              }}
            >
              "{gratitude}"
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => setIsEditing(true)}
            activeOpacity={0.85}
            style={{
              marginTop: 28,
              backgroundColor: "#10B981",
              width: "100%",
              height: 58,
              borderRadius: 22,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#10B981",
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.2,
              shadowRadius: 16,
              elevation: 4,
            }}
          >
            <Text
              style={{
                color: "#042F1A",
                fontWeight: "800",
                fontSize: 16,
                letterSpacing: 0.2,
              }}
            >
              Edit Today's Entry
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Text
            style={{
              color: "#80998C",
              marginBottom: 24,
              fontSize: 15,
              fontWeight: "600",
              lineHeight: 22,
            }}
          >
            Take a slow deep breath, focus on one positive thing from your day.
          </Text>

          {/* Main Glassmorphic Input Textarea Box Container */}
          <View
            style={{
              backgroundColor: "#111C16",
              borderRadius: 32,
              padding: 24,
              height: 320,
              borderWidth: 1,
              borderColor: "rgba(255, 255, 255, 0.05)",
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 12 },
              shadowOpacity: 0.2,
              shadowRadius: 20,
              elevation: 4,
            }}
          >
            <Text
              style={{
                fontSize: 13,
                fontWeight: "800",
                color: "#4B6B5B",
                textTransform: "uppercase",
                letterSpacing: 0.8,
                marginBottom: 14,
              }}
            >
              Today I am grateful for...
            </Text>

            <TextInput
              value={gratitude}
              onChangeText={setGratitude}
              multiline
              maxLength={500}
              numberOfLines={6}
              textAlignVertical="top"
              placeholder="Write about a small moment, a helpful person, or a safe space..."
              placeholderTextColor="#4A5D53"
              style={{
                flex: 1,
                fontSize: 17,
                lineHeight: 28,
                color: "#FFFFFF",
                fontWeight: "500",
              }}
            />

            <View
              style={{
                borderTopWidth: 1,
                borderTopColor: "rgba(255, 255, 255, 0.04)",
                paddingTop: 14,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{
                  color: wordCount > 100 ? "#EF4444" : "#607368",
                  fontSize: 13,
                  fontWeight: "700",
                }}
              >
                {wordCount} / 100 words
              </Text>
            </View>
          </View>

          {/* Dynamic Action Submission Control */}
          <TouchableOpacity
            onPress={handleSave}
            disabled={!gratitude.trim()}
            activeOpacity={0.85}
            style={{
              backgroundColor: gratitude.trim() ? "#10B981" : "#14251D",
              height: 58,
              borderRadius: 22,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 24,
              borderWidth: gratitude.trim() ? 0 : 1,
              borderColor: "rgba(255, 255, 255, 0.02)",
              shadowColor: "#10B981",
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: gratitude.trim() ? 0.2 : 0,
              shadowRadius: 16,
              elevation: gratitude.trim() ? 4 : 0,
            }}
          >
            <Text
              style={{
                color: gratitude.trim() ? "#042F1A" : "#3D5247",
                fontSize: 16,
                fontWeight: "800",
                letterSpacing: 0.2,
              }}
            >
              {hasTodayGratitude ? "Save Changes" : "Plant Entry"}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  </View>
  );
}