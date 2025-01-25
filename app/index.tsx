import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  const handleNavigate = (path: any) => {
    router.push(path);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center p-6">
        <Text className="text-3xl font-bold mb-4 text-center">
          Welcome to Our App
        </Text>
        <Text className="text-lg text-gray-600 mb-8 text-center">
          Discover amazing features and boost your productivity
        </Text>
        <TouchableOpacity
          className="bg-blue-500 py-3 px-8 rounded-full mb-4"
          onPress={() => handleNavigate("/shakil")}
        >
          <Text className="text-white text-lg font-semibold">
            Go to Shakil's Page
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-green-500 py-3 px-8 rounded-full"
          onPress={() => handleNavigate("/settings")}
        >
          <Text className="text-white text-lg font-semibold">
            Go to Settings
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
