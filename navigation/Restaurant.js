import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import RestaurantScreen from "../screens/Restaurant";

const RestaurantStack = createStackNavigator();

const RestaurantStackScreen = () => {
	return (
		<RestaurantStack.Navigator>
			<RestaurantStack.Screen
				name="Home"
				component={Home}
				options={{ headerShown: false }}
			/>
		</RestaurantStack.Navigator>
	);
};

export default RestaurantStackScreen;
