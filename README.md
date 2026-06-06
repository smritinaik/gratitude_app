<p align="center">
  <img 
    src="./assets/images/banner.jpg" 
    alt="TaskFlow Banner"
    width="100%"
  />
</p>


# 🌱 Daily Gratitude App

A beautifully designed gratitude journaling app built with **React Native**, **Expo**, and **AsyncStorage** that helps users build a daily gratitude habit while growing a virtual plant through consistency.

## 🛠️ Tech Stack

![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Expo Router](https://img.shields.io/badge/Expo%20Router-000000?style=for-the-badge&logo=expo&logoColor=white)
![AsyncStorage](https://img.shields.io/badge/AsyncStorage-4CAF50?style=for-the-badge)


## ✨ Overview

Gratitude Garden transforms daily reflection into a rewarding experience. Every day, users can write one gratitude entry and maintain their streak. As streaks grow, their virtual plant evolves through different growth stages, encouraging mindfulness and consistency.


### 🌿 Growth System

Your plant grows based on your consistency:

| Streak Days | Growth Stage   |
| ----------- | -------------- |
| 0           | Dying Plant    |
| 1 - 6       | Seed           |
| 7 - 29      | Sprout         |
| 30 - 89     | Plant          |
| 90 - 99     | Tree           |
| 100+        | Flowering Tree |

Miss a day and your plant begins to wither, encouraging daily reflection.


## 📂 Project Structure

```bash
app
├── _layout.tsx
├── index.tsx       # Home
├── add.tsx         # Add Gratitude
├── streaks.tsx     # Streak Tracking
└── garden.tsx      # Plant Growth

utils
├── storage.ts
├── streaks.ts
└── garden.ts
```

## 📱 Features

### 📝 Daily Gratitude Journal

* Add one gratitude entry per day.
* Edit today's gratitude anytime.
* Prevents multiple entries on the same day.
* Clean and distraction-free writing experience.

### 🏡 Home Dashboard

* View today's gratitude.
* Browse previous gratitude entries in a timeline.
* Entries are organized chronologically with dates.

### 🔥 Streak Tracking

* Automatic streak calculation.
* Streak resets when a day is missed.
* Track your best streak record.
* Progress toward upcoming milestones.

## 🚀 Installation

```bash
git clone https://github.com/yourusername/gratitude-garden.git

cd gratitude-garden

npm install

npx expo start
```


Built with ❤️ to encourage mindfulness, positivity, and consistency.
