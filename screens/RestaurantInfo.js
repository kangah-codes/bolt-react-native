import React, { useState, useRef, useEffect } from "react";
import {
	Button,
	Text,
	View,
	Image,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	FlatList,
	Animated,
	Platform,
	Dimensions,
	SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import tw from "tailwind-react-native-classnames";
import { BoltLightText, BoltSemiBoldText } from "../components/CustomText";
import { useValue } from "react-native-reanimated";
// import { interpolate, Extrapolate } from "react-native-reanimated";
// import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const IMAGE_WIDTH = 290;

const RestaurantInfo = ({ navigation, route }) => {
	const { banner, name, rating, price, menu } = route.params;
	const scrollY = useRef(new Animated.Value(0.01)).current;
	const [toggleBar, setToggleBar] = useState(false);
	const searchBarAnim = useRef(
		new Animated.Value(
			Platform.OS === "android"
				? 0 - Constants.statusBarHeight * 6
				: 0 - Constants.statusBarHeight * 3
		)
	).current;

	useEffect(() => {
		if (toggleBar) {
			Animated.timing(searchBarAnim, {
				toValue: 0,
				duration: 150,
				useNativeDriver: true,
			}).start();
		} else {
			Animated.timing(searchBarAnim, {
				toValue:
					Platform.OS === "android"
						? 0 - Constants.statusBarHeight * 6
						: 0 - Constants.statusBarHeight * 3,
				duration: 150,
				useNativeDriver: true,
			}).start();
		}
	}, [toggleBar]);

	return (
		<View style={tw`flex relative bg-white`}>
			<Animated.View
				style={tw.style(
					"bg-white w-full absolute flex items-center px-5 shadow-lg",
					{
						transform: [{ translateY: searchBarAnim }],
						zIndex: 100,
						elevation: 10000,
						paddingTop: Constants.statusBarHeight,
					}
				)}
			>
				<View
					style={tw.style(
						"flex flex-col w-full justify-between h-full pt-5",
						{
							zIndex: 100,
							elevation: 100,
						}
					)}
				>
					<View
						style={tw.style(
							"w-full flex pt-1 flex-row justify-between pb-2.5",
							{
								// "items-center": Platform.OS === "android",
								// "justify-between flex-row": Platform.OS === "ios",
							}
						)}
					>
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<Ionicons
								name="ios-arrow-back-outline"
								size={24}
								color="black"
							/>
						</TouchableOpacity>

						<BoltSemiBoldText
							style={tw.style(
								"my-auto text-black my-auto mx-auto",
								{
									fontSize:
										Platform.OS === "ios"
											? 20
											: Dimensions.get("window").width /
											  25,
								}
							)}
						>
							{name}
						</BoltSemiBoldText>

						<Ionicons
							name="ios-arrow-back-outline"
							size={24}
							color="white"
						/>
					</View>
				</View>
			</Animated.View>

			<View style={tw.style("flex bg-white h-full")}>
				<View
					style={tw.style("w-full relative", {
						zIndex: 400,
						elevation: 400,
					})}
				>
					<View
						style={{
							...tw`w-full absolute items-center`,
							zIndex: 400,
							elevation: 10000,
							marginTop: Constants.statusBarHeight,

							// paddingTop:
							// 	Platform.OS === "android"
							// 		? Constants.statusBarHeight
							// 		: 0,
						}}
					>
						<View
							style={tw.style(
								"flex px-5 flex-row w-full absolute justify-between",
								{
									zIndex: 100,
									elevation: 100,
								}
							)}
						>
							<TouchableOpacity
								onPress={() => navigation.goBack()}
							>
								<Ionicons
									name="ios-arrow-back-outline"
									size={24}
									color="black"
								/>
							</TouchableOpacity>
						</View>
					</View>
					<Animated.Image
						style={{
							...tw`w-full top-0`,
							...StyleSheet.absoluteFillObject,
							height: IMAGE_WIDTH / 1.6,
							transform: [
								{
									translateY: scrollY.interpolate({
										inputRange: [0, IMAGE_WIDTH],
										outputRange: [0, -IMAGE_WIDTH],
										extrapolate: "clamp",
									}),
								},
								{
									scale: scrollY.interpolate({
										inputRange: [-IMAGE_WIDTH * 2, 0],
										outputRange: [5, 1],
										extrapolate: "clamp",
									}),
								},
							],
						}}
						source={require("../assets/images/map.jpg")}
					/>
				</View>

				<Animated.ScrollView
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { y: scrollY } } }],
						{
							useNativeDriver: true,
							listener: (event) => {
								const offsetY =
									event.nativeEvent.contentOffset.y;
								console.log(offsetY);
								if (offsetY > 60) {
									setToggleBar(true);
								} else {
									setToggleBar(false);
								}
							},
						}
					)}
					contentContainerStyle={{ flexGrow: 1 }}
					scrollEventThrottle={16}
					style={tw`px-5 pt-5`}
				>
					<View
						style={tw.style({
							marginTop: IMAGE_WIDTH / 1.6,
						})}
					>
						<View
							style={tw`w-full flex flex-row justify-between items-start`}
						>
							<BoltSemiBoldText
								style={tw.style("text-lg flex w-2/3", {
									flexWrap: "wrap",
								})}
							>
								{name}
							</BoltSemiBoldText>
						</View>

						<View
							style={tw`w-full mt-1 flex flex-row justify-between`}
						>
							<BoltLightText style={tw`text-gray-800`}>
								Lagos Avenue 47
							</BoltLightText>
						</View>
						<View style={tw`w-full mt-5 flex flex-col`}>
							<TouchableOpacity
								style={tw`rounded-full border border-gray-200 flex flex-row items-center flex-row py-3.5`}
								onPress={() => navigation.goBack()}
								activeOpacity={0.6}
							>
								<BoltSemiBoldText
									style={tw`text-black mx-auto`}
								>
									View Map
								</BoltSemiBoldText>
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`rounded-full border border-gray-200 flex flex-row items-center flex-row py-3.5 mt-4`}
								onPress={() => navigation.goBack()}
								activeOpacity={0.6}
							>
								<BoltSemiBoldText
									style={tw`text-black mx-auto`}
								>
									Call
								</BoltSemiBoldText>
							</TouchableOpacity>
						</View>
					</View>

					<View style={tw.style("mt-10 w-4/5", {})}>
						<View style={tw`w-full flex flex-col`}>
							<BoltSemiBoldText
								style={tw.style("text-lg", {
									flexWrap: "wrap",
								})}
							>
								Allergies?
							</BoltSemiBoldText>
							<BoltLightText
								style={tw.style("text-gray-700 mt-1.5", {
									flexWrap: "wrap",
									fontSize: 16,
								})}
							>
								Ask the restaurant about their ingredients and
								cooking methods.
							</BoltLightText>
						</View>
					</View>

					<View style={tw.style("mt-10 w-4/5", {})}>
						<View style={tw`w-full flex flex-col`}>
							<BoltSemiBoldText
								style={tw.style("text-lg", {
									flexWrap: "wrap",
								})}
							>
								Open for delivery orders
							</BoltSemiBoldText>

							<View style={tw`flex flex-col`}>
								{[
									"Sunday",
									"Monday",
									"Tuesday",
									"Wednesday",
									"Thursday",
									"Friday",
									"Saturday",
								].map((item, index) => (
									<View
										style={tw`w-full flex flex-row justify-between`}
										key={index}
									>
										<BoltLightText
											style={tw.style(
												"text-gray-700 mt-1.5",
												{
													flexWrap: "wrap",
													fontSize: 16,
												}
											)}
										>
											{item}
										</BoltLightText>
										<BoltLightText
											style={tw.style(
												"text-gray-700 mt-1.5",
												{
													flexWrap: "wrap",
													fontSize: 16,
												}
											)}
										>
											10:45am - 9:30pm
										</BoltLightText>
									</View>
								))}
							</View>
						</View>
					</View>
				</Animated.ScrollView>
			</View>
		</View>
	);
};

export default RestaurantInfo;
