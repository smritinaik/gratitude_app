import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        sceneStyle: {
          backgroundColor: "#F4FFF6",
        },

        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "#94A3B8",

        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          height: 75,

          borderRadius: 28,

          backgroundColor: "#FFFFFF",

          borderWidth: 1.5,
          borderColor: "#D8F3DC",

          shadowColor: "#4CAF50",
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.12,
          shadowRadius: 15,
          elevation: 12,

          borderTopWidth: 1.5,
        }


      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="add"
        options={{
          title: "Add",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="add-circle-outline"
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
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flame-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="garden"
        options={{
          title: "Garden",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="leaf-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}