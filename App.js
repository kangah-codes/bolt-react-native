import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import RestaurantScreen from "./screens/Restaurant";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTabs from "./navigation/Tabs";
import RestaurantStackScreen from "./navigation/Restaurant";

const Stack = createStackNavigator();

export default function App() {
	let [fontsLoaded] = useFonts({
		BoltRegular: require("./assets/fonts/EuclidCircularRegular.ttf"),
		BoltSemibold: require("./assets/fonts/EuclidCircularSemiBold.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<NavigationContainer>
				{/* <StatusBar style="auto" /> */}
				<Stack.Navigator>
					<Stack.Screen
						name="Home"
						component={HomeTabs}
						options={{ headerShown: false, tabBarShowLabel: false }}
					/>
					<Stack.Screen
						name="Restaurant"
						component={RestaurantStackScreen}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
