import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />

      <Tabs.Screen
        name="add"
        options={{
          title: "Add",
        }}
      />

      <Tabs.Screen
        name="streaks"
        options={{
          title: "Streaks",
        }}
      />

      <Tabs.Screen
        name="garden"
        options={{
          title: "Garden",
        }}
      />
    </Tabs>
  );
}