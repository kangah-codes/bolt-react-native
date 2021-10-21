import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import RestaurantScreen from "../screens/Restaurant";
import RestaurantInfo from "../screens/RestaurantInfo";
import Profile from "../screens/Profile";

const RestaurantStack = createStackNavigator();

const RestaurantStackScreen = () => {
	return (
		<RestaurantStack.Navigator>
			<RestaurantStack.Screen
				name="RestaurantPage"
				component={RestaurantScreen}
				options={{ headerShown: false }}
			/>
			<RestaurantStack.Screen
				name="RestaurantInfo"
				component={RestaurantInfo}
				options={{ headerShown: false }}
			/>
		</RestaurantStack.Navigator>
	);
};

export default RestaurantStackScreen;
