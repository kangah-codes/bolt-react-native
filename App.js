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
import { BoltLightText, BoltSemiBoldText } from "./components/CustomText";
import Home from "./screens/Home";
import { Foundation as Icon } from "@expo/vector-icons";

export default function App() {
	let [fontsLoaded] = useFonts({
		BoltRegular: require("./assets/fonts/EuclidCircularRegular.ttf"),
		BoltSemibold: require("./assets/fonts/EuclidCircularSemiBold.ttf"),
	});
	const BottomBar = createBottomTabNavigator();

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			// <NavigationContainer>
			// 	<StatusBar />
			// 	<BottomBar.Navigator
			// 		tabBar={(props) => (
			// 			<View style={styles.navigatorContainer}>
			// 				<BottomTabBar {...props} />
			// 				{/* {IS_IPHONE_X && (
			// 					<View
			// 						style={[
			// 							styles.xFillLine,
			// 							{
			// 								...tw`bg-gray-100`,
			// 							},
			// 						]}
			// 					/>
			// 				)} */}
			// 			</View>
			// 		)}
			// 		tabBarOptions={{
			// 			showIcon: true,
			// 			style: styles.navigator,
			// 			tabStyle: {
			// 				...tw`bg-gray-100`,
			// 			},
			// 		}}
			// 	>
			// 		<BottomBar.Screen
			// 			name="Home"
			// 			component={Home}
			// 			options={{
			// 				tabBarIcon: ({ color, focused }) => (
			// 					<Icon
			// 						name="home"
			// 						size={24}
			// 						color={focused ? "orange" : "gray"}
			// 					/>
			// 				),
			// 				headerShown: false,
			// 				tabBarShowLabel: false,
			// 			}}
			// 		/>
			// 	</BottomBar.Navigator>
			// </NavigationContainer>
			<ScrollView
				style={{
					...tw`flex pt-2`,
					marginTop: Constants.statusBarHeight,
				}}
			>
				<Home />
				<StatusBar style="auto" />
			</ScrollView>
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
		elevation: 30,
	},
	xFillLine: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		height: 34,
	},
});
