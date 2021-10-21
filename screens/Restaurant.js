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

const RestaurantScreen = ({ navigation, route }) => {
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
		<View style={tw`flex relative`}>
			<Animated.View
				style={tw.style(
					"bg-white w-full absolute flex items-center px-5",
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
						"flex flex-col w-full justify-between h-full",
						{
							zIndex: 100,
							elevation: 100,
						}
					)}
				>
					<View
						style={tw.style(
							"w-full flex pt-1 flex-row justify-between",
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
							style={tw.style("my-auto text-black my-auto", {
								fontSize:
									Platform.OS === "ios"
										? 20
										: Dimensions.get("window").width / 25,
							})}
						>
							{name}
						</BoltSemiBoldText>

						<Ionicons name="ios-search" size={24} color="black" />
					</View>

					<FlatList
						style={tw`pt-2.5 mb-2.5`}
						horizontal
						data={menu}
						renderItem={({ item, index }) => (
							<BoltSemiBoldText
								style={tw.style("text-lg mr-5", {
									zIndex: 100,
									"text-gray-400": index > 0,
								})}
							>
								{item.name}
							</BoltSemiBoldText>
						)}
						keyExtractor={(item) => item.id}
						showsHorizontalScrollIndicator={false}
					/>
				</View>
			</Animated.View>

			<View style={tw.style("flex")}>
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
									color={toggleBar ? "black" : "white"}
								/>
							</TouchableOpacity>

							<Ionicons
								name="ios-search"
								size={24}
								color={toggleBar ? "black" : "white"}
							/>
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
						source={banner}
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
								style={tw.style("text-2xl flex w-2/3", {
									flexWrap: "wrap",
								})}
							>
								{name}
							</BoltSemiBoldText>

							<View style={tw`flex flex-row items-center`}>
								<Ionicons
									name="ios-star"
									size={20}
									color="#000"
								/>
								<BoltSemiBoldText style={tw`text-lg ml-1`}>
									{rating}
								</BoltSemiBoldText>
							</View>
						</View>

						<View
							style={tw`w-full mt-1 flex flex-row justify-between`}
						>
							<BoltLightText style={tw`text-lg text-gray-800`}>
								Delivery GH₵{price}
							</BoltLightText>
						</View>
						<View style={tw`w-full mt-1`}>
							<TouchableOpacity
								style={tw`border-b border-gray-200 flex flex-row justify-between py-3`}
								onPress={() =>
									navigation.navigate("RestaurantInfo", {
										name,
									})
								}
							>
								<View style={tw`flex flex-row items-start`}>
									<MaterialIcons
										name="info"
										size={27}
										color="gray"
									/>
									<BoltLightText
										style={tw`text-black ml-2.5 mt-0.5`}
									>
										Allergies and contact details
									</BoltLightText>
								</View>
								<Ionicons
									name="ios-chevron-forward"
									size={25}
									color="gray"
								/>
							</TouchableOpacity>
						</View>
					</View>
					{menu.map((item, index) => (
						<View
							key={index}
							style={tw.style(
								`${index !== 0 ? "" : "mt-2"} w-full`,
								{
									"pb-28": index === menu.length - 1,
								}
							)}
						>
							<View style={tw`py-5 flex flex-col `}>
								<BoltSemiBoldText style={tw`text-2xl`}>
									{item.name}
								</BoltSemiBoldText>

								{item.items.map((item, index) => (
									<TouchableOpacity
										style={tw.style(
											"flex flex-row justify-between items-center w-full border-b border-gray-200",
											{
												"py-4": !!item.image,
												"opacity-50":
													!!item.isUnavailable,
											}
										)}
										key={index}
										disabled={item.isUnavailable}
									>
										<View style={tw`w-3/5 pr-5`}>
											<View
												key={item.id}
												style={tw`w-full py-5 flex flex-col items-start`}
											>
												{item.isPopular && (
													<View
														style={tw`bg-red-500 px-1.5 rounded-full py-0.5 mb-1 flex flex-row items-center`}
													>
														<Ionicons
															name="ios-star"
															size={15}
															color="white"
														/>
														<BoltSemiBoldText
															style={tw`text-white ml-1 text-xs`}
														>
															Popular
														</BoltSemiBoldText>
													</View>
												)}

												<BoltSemiBoldText
													style={tw`text-lg`}
												>
													{item.name}
												</BoltSemiBoldText>

												{item.description && (
													<BoltLightText
														style={tw`my-2`}
													>
														{item.description}
													</BoltLightText>
												)}

												<View
													style={tw`flex flex-row items-center`}
												>
													<BoltLightText
														style={tw.style(
															item.discount && {
																textDecorationLine:
																	"line-through",
																textDecorationStyle:
																	"solid",
															}
														)}
													>
														GH₵{item.price}
													</BoltLightText>
													{item.discount && (
														<View
															style={tw`ml-2 bg-red-500 px-2 rounded-full py-0.5`}
														>
															<BoltSemiBoldText
																style={tw`text-white`}
															>
																GH₵
																{item.discount}
															</BoltSemiBoldText>
														</View>
													)}
												</View>
											</View>
										</View>
										{item.image && (
											<Image
												source={item.image}
												style={tw.style(
													"rounded-lg w-2/5 h-24"
												)}
											/>
										)}
									</TouchableOpacity>
								))}
							</View>
						</View>
					))}
				</Animated.ScrollView>
			</View>
		</View>
	);
};

export default RestaurantScreen;
