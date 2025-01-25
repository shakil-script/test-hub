import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Settings() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center p-6">
        <Text className="text-3xl font-bold mb-4 text-center">Settings</Text>
        <Text className="text-lg text-gray-600 mb-8 text-center">
          This is the settings page. You can add your settings options here.
        </Text>
        <TouchableOpacity
          className="bg-blue-500 py-3 px-8 rounded-full"
          onPress={handleGoBack}
        >
          <Text className="text-white text-lg font-semibold">Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
