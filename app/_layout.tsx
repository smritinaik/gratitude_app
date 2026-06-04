import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        // Matches the deep base background of your pages during transit transitions
        sceneStyle: {
          backgroundColor: "#0B1410",
        },

        // Premium botanical active neon and muted inactive green-gray typography tokens
        tabBarActiveTintColor: "#10B981",
        tabBarInactiveTintColor: "#4A5D53",

        // Styled contextual label layout text matching the premium layout rules
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "700",
          letterSpacing: 0.2,
          marginBottom: 6,
        },

        tabBarStyle: {
          position: "absolute",
          bottom: 24,
          left: 20,
          right: 20,
          height: 76,
          paddingTop: 10,
          paddingBottom: 8,

          borderRadius: 30,

          // Glassmorphic styling layer (Semi-translucent dark emerald glass base)
          backgroundColor: "rgba(17, 28, 22, 0.85)",

          // Micro crystal accent borders
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.08)",
          borderTopWidth: 1,
          borderTopColor: "rgba(255, 255, 255, 0.08)",

          // Premium Radiant Emerald Under-Glow Shadow Effect
          shadowColor: "#10B981",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.15,
          shadowRadius: 20,
          elevation: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="add"
        options={{
          title: "Add",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "add-circle" : "add-circle-outline"}
              size={size + 2}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="streaks"
        options={{
          title: "Streaks",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "flame" : "flame-outline"} size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="garden"
        options={{
          title: "Garden",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "leaf" : "leaf-outline"} size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}