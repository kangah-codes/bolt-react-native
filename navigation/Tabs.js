import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import tw from "tailwind-react-native-classnames";
import Constants from "expo-constants";
import {
	BottomTabBar,
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

// tests
import { BoltLightText, BoltSemiBoldText } from "../components/CustomText";
import Home from "../screens/Home";
import { Foundation as Icon } from "@expo/vector-icons";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import Search from "../screens/Search";
import Orders from "../screens/Orders";
import Profile from "../screens/Profile";
import RestaurantStackScreen from "../navigation/Restaurant";
import { createStackNavigator } from "@react-navigation/stack";

export default function HomeTabs() {
	let [fontsLoaded] = useFonts({
		BoltRegular: require("../assets/fonts/EuclidCircularRegular.ttf"),
		BoltSemibold: require("../assets/fonts/EuclidCircularSemiBold.ttf"),
	});
	const BottomBar = createBottomTabNavigator();

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<>
				<StatusBar style="dark" />
				<BottomBar.Navigator
					tabBar={(props) => (
						<View style={tw`border-t border-gray-100`}>
							<BottomTabBar {...props} />
							{/* {IS_IPHONE_X && (
								<View
									style={[
										styles.xFillLine,
										{
											...tw`bg-gray-100`,
										},
									]}
								/>
							)} */}
						</View>
					)}
					screenOptions={{
						showIcon: true,
						style: styles.navigator,
						tabStyle: {
							...tw`bg-white`,
						},
					}}
				>
					<BottomBar.Screen
						name="AppHome"
						component={Home}
						options={{
							tabBarIcon: ({ color, focused }) =>
								focused ? (
									<MaterialCommunityIcons
										name="home"
										size={28}
										color={focused ? "#000" : "gray"}
									/>
								) : (
									<MaterialCommunityIcons
										name="home-outline"
										size={28}
										color={focused ? "#000" : "gray"}
									/>
								),
							headerShown: false,
							tabBarShowLabel: false,
						}}
					/>
					<BottomBar.Screen
						name="Search"
						component={Search}
						options={{
							tabBarIcon: ({ color, focused }) => (
								<Ionicons
									name="ios-search"
									size={28}
									color={focused ? "#000" : "gray"}
									fontWeight="bold"
								/>
							),
							headerShown: false,
							tabBarShowLabel: false,
						}}
					/>
					<BottomBar.Screen
						name="Orders"
						component={Orders}
						options={{
							tabBarIcon: ({ color, focused }) =>
								focused ? (
									<Ionicons
										name="ios-receipt"
										size={28}
										color={"#000"}
										fontWeight="bold"
									/>
								) : (
									<Ionicons
										name="ios-receipt-outline"
										size={28}
										color={"gray"}
										fontWeight="bold"
									/>
								),
							headerShown: false,
							tabBarShowLabel: false,
						}}
					/>
					<BottomBar.Screen
						name="Profile"
						component={Profile}
						options={{
							tabBarIcon: ({ color, focused }) => (
								<Feather
									name="user"
									size={28}
									color={focused ? "#000" : "gray"}
								/>
							),
							headerShown: false,
							tabBarShowLabel: false,
						}}
					/>
				</BottomBar.Navigator>
			</>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		marginTop: Constants.statusBarHeight,
		fontFamily: "Cereal-Regular",
	},
	navigatorContainer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
	},
	navigator: {
		borderTopWidth: 0,
		backgroundColor: "transparent",
		elevation: 28,
	},
	xFillLine: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		height: 34,
	},
});
