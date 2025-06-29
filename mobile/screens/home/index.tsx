import React from "react";
import { Button } from "@/components";
import { useSripe } from "@/hooks";
import { StatusBar, Text, View } from "react-native";
import { styles } from "./styles";

export const Home = () => {
  const { initializePaymentSheet, isLoading } = useSripe();
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <Text style={styles.title}>SkinSft mini demo</Text>
      <Button
        title="Subscribe (test mode)"
        onPress={initializePaymentSheet}
        isLoading={isLoading}
      />
    </View>
  );
};
