import { Ionicons } from "@expo/vector-icons";
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
  const [gratitudes, setGratitudes] = useState<
    GratitudeEntry[]
  >([]);

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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F4FFF6",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 120,
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
            name="leaf-outline"
            size={30}
            color="#4CAF50"
          />

          <Text
            style={{
              fontSize: 28,
              fontWeight: "700",
              color: "#1B4332",
            }}
          >
            Gratitude Garden
          </Text>
        </View>

        <Text
          style={{
            marginTop: 8,
            color: "#6B7280",
            fontSize: 15,
          }}
        >
          Grow gratitude, one day at a time.
        </Text>

        {/* Stats Card */}
        <View
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 24,
            padding: 20,
            borderRadius: 24,
          }}
        >
          <Text
            style={{
              color: "#6B7280",
              fontSize: 15,
            }}
          >
            Total Gratitudes
          </Text>

          <Text
            style={{
              fontSize: 36,
              fontWeight: "700",
              color: "#1B4332",
              marginTop: 6,
            }}
          >
            {gratitudes.length}
          </Text>
        </View>

        {/* Quick Actions */}
        <View
          style={{
            flexDirection: "row",
            gap: 12,
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => router.push("/streaks")}
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              padding: 18,
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <Ionicons
              name="flame-outline"
              size={24}
              color="#FF7A00"
            />

            <Text
              style={{
                marginTop: 8,
                fontWeight: "600",
              }}
            >
              Streaks
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/garden")}
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              padding: 18,
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <Ionicons
              name="leaf-outline"
              size={24}
              color="#4CAF50"
            />

            <Text
              style={{
                marginTop: 8,
                fontWeight: "600",
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
            marginTop: 30,
            marginBottom: 16,
          }}
        >
          <Ionicons
            name="time-outline"
            size={22}
            color="#4CAF50"
          />

          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "#1B4332",
            }}
          >
            Gratitude Timeline
          </Text>
        </View>

        {/* Empty State */}
        {gratitudes.length === 0 && (
          <View
            style={{
              backgroundColor: "#FFFFFF",
              padding: 20,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "#6B7280",
              }}
            >
              No gratitude entries yet.
            </Text>
          </View>
        )}

        {/* Timeline */}
        {gratitudes.map((item) => (
          <View
            key={item.id}
            style={{
              backgroundColor: "#FFFFFF",
              padding: 18,
              borderRadius: 20,
              marginBottom: 14,
            }}
          >
            <Text
              style={{
                color: "#4CAF50",
                fontWeight: "600",
                marginBottom: 8,
              }}
            >
              {item.date}
            </Text>

            <Text
              style={{
                color: "#374151",
                lineHeight: 24,
              }}
            >
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}