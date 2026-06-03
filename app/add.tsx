import { Ionicons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import {
  getTodayGratitude,
  saveTodayGratitude,
} from "../utils/storage";

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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#E1EFE6", // Matching the background with the updated Home Screen
        paddingHorizontal: 24,
        paddingTop: 20,
      }}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 10,
          marginBottom: 16,
        }}
      >
        <Ionicons name="sparkles" size={24} color="#1B4332" />

        <Text
          style={{
            fontSize: 28,
            fontWeight: "800",
            color: "#1B4332",
            letterSpacing: -0.5,
          }}
        >
          Daily Seed
        </Text>
      </View>

      {/* Already Added Today View State */}
      {hasTodayGratitude && !isEditing ? (
        <View
          style={{
            backgroundColor: "#FFFFFF",
            padding: 24,
            borderRadius: 28,
            alignItems: "center",
            shadowColor: "#1B4332",
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.05,
            shadowRadius: 15,
            elevation: 2,
          }}
        >
          <View
            style={{
              backgroundColor: "#E8F5E9",
              padding: 12,
              borderRadius: 50,
              marginBottom: 16,
            }}
          >
            <Ionicons name="checkmark-circle" size={32} color="#4CAF50" />
          </View>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "#1B4332",
              textAlign: "center",
            }}
          >
            Your entry has been planted!
          </Text>

          <Text
            style={{
              marginTop: 6,
              color: "#526E60",
              fontSize: 14,
              textAlign: "center",
            }}
          >
            Come back tomorrow to keep growing your garden. 🌱
          </Text>

          {/* User's Text Display Container */}
          <View
            style={{
              backgroundColor: "#FFFDF5",
              marginTop: 24,
              padding: 20,
              borderRadius: 20,
              width: "100%",
              borderWidth: 1,
              borderColor: "#F3E8D0",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#2D3A34",
                lineHeight: 24,
                fontWeight: "500",
                fontStyle: "italic",
              }}
            >
              "{gratitude}"
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => setIsEditing(true)}
            activeOpacity={0.8}
            style={{
              marginTop: 24,
              backgroundColor: "#1B4332",
              width: "100%",
              height: 56,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontWeight: "700",
                fontSize: 16,
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
              color: "#526E60",
              marginBottom: 24,
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            Take a slow deep breath, focus on one positive thing from your day.
          </Text>

          {/* Main Paper Textarea Container */}
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 28,
              padding: 24,
              height: 300,
              shadowColor: "#1B4332",
              shadowOffset: { width: 0, height: 6 },
              shadowOpacity: 0.04,
              shadowRadius: 16,
              elevation: 2,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                color: "#A3B899",
                textTransform: "uppercase",
                letterSpacing: 0.5,
                marginBottom: 12,
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
              placeholderTextColor="#A3A3A3"
              style={{
                flex: 1,
                fontSize: 17,
                lineHeight: 28,
                color: "#1B4332",
                fontWeight: "500",
              }}
            />

            <View
              style={{
                borderTopWidth: 1,
                borderTopColor: "#EFEFEF",
                paddingTop: 12,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{
                  color: wordCount > 100 ? "#D93838" : "#526E60",
                  fontSize: 13,
                  fontWeight: "600",
                }}
              >
                {wordCount} / 100 words
              </Text>
            </View>
          </View>

          {/* Action Save Button */}
          <TouchableOpacity
            onPress={handleSave}
            disabled={!gratitude.trim()}
            activeOpacity={0.8}
            style={{
              backgroundColor: gratitude.trim() ? "#1B4332" : "#B2C7BC",
              height: 56,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              shadowColor: "#1B4332",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: gratitude.trim() ? 0.15 : 0,
              shadowRadius: 8,
              elevation: 2,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: "700",
              }}
            >
              {hasTodayGratitude ? "Save Changes" : "Plant Entry"}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
}