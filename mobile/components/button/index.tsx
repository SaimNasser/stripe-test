import React from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
interface ButtonProps {
  title: string;
  isLoading?: boolean;
  onPress: (e: GestureResponderEvent) => void;
}
export const Button = ({ title, isLoading = false, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.btnText}>Subscribe (test mode)</Text>
      )}
    </TouchableOpacity>
  );
};
