import { useState } from "react";
import {
  initPaymentSheet,
  presentPaymentSheet,
} from "@stripe/stripe-react-native";
import * as Linking from "expo-linking";
import { Alert } from "react-native";

export const useSripe = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(
      `${process.env.EXPO_PUBLIC_API_URL}/payment-sheet`,
      {
        method: "POST",
      }
    );
    const { paymentIntent, ephemeralKey, customer } = await response.json();
    return { paymentIntent, ephemeralKey, customer };
  };
  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert("Error", error.message);
    } else {
      Alert.alert("Success", "Payment completed!");
    }
    setIsLoading(false);
  };
  const initializePaymentSheet = async () => {
    setIsLoading(true);
    const { paymentIntent, ephemeralKey, customer } =
      await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "SkinSft mini demo",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      returnURL: Linking.createURL("stripe-test"),
    });

    if (!error) {
      openPaymentSheet();
    } else {
      Alert.alert("Error", error.message);
      setIsLoading(false);
    }
  };
  return {
    initializePaymentSheet,
    isLoading,
  };
};
