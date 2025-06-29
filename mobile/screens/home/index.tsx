import { Button } from "@/components";
import React from "react";
import { Alert, View } from "react-native";
import { styles } from "./styles";
import {
  initPaymentSheet,
  presentPaymentSheet,
} from "@stripe/stripe-react-native";
import * as Linking from 'expo-linking';


export const Home = () => {
  const fetchPaymentSheetParams = async () => {
    const response = await fetch("/payment-sheet", {
      method: "POST",
    });
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
  };
  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer } =
      await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      returnUrl: Linking.createURL("stripe-test"),
    });

    if (!error) {
      openPaymentSheet();
    } else {
      Alert.alert("Error", error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Button title="Subscribe (test mode)" onPress={initializePaymentSheet} />
    </View>
  );
};
