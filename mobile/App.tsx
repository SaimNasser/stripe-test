import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StripeProvider } from "@stripe/stripe-react-native";
import React from "react";
import { Home } from "./screens/home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StripeProvider publishableKey={process.env.EXPO_PUBLIC_API_KEY ?? ""}>
        <Stack.Navigator
          screenOptions={{
            animation: "slide_from_right",
            header: () => false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </StripeProvider>
    </NavigationContainer>
  );
}
