import * as React from "react";
import {
	Button,
	Text,
	View,
	Image,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import tw from "tailwind-react-native-classnames";
import { BoltLightText, BoltSemiBoldText } from "../components/CustomText";
import { useValue } from "react-native-reanimated";
import { interpolateNode, Extrapolate } from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const IMAGE_WIDTH = 290;

const RestaurantScreen = ({ navigation, route }) => {
	const { banner, name, rating, price, menu } = route.params;
	const scrollY = useValue(0);

	console.log(banner, name);

	return (
		<View style={tw.style("flex")}>
			<View style={tw`w-full relative`}>
				<View
					style={{
						...tw`w-full px-5 pt-3 flex flex-row justify-between relative`,
						zIndex: 100,
						elevation: 100,
						marginTop: Constants.statusBarHeight,
					}}
				>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Ionicons
							name="ios-arrow-back-outline"
							size={24}
							color="white"
						/>
					</TouchableOpacity>

					<Ionicons
						name="ios-search-outline"
						size={24}
						color="white"
					/>
				</View>
				<Animated.Image
					style={{
						...tw`w-full top-0`,
						...StyleSheet.absoluteFillObject,
						height: IMAGE_WIDTH / 1.6,
						transform: [
							{
								translateY: interpolateNode(scrollY, {
									inputRange: [0, IMAGE_WIDTH],
									outputRange: [0, -IMAGE_WIDTH],
									extrapolate: Extrapolate.CLAMP,
								}),
								scale: interpolateNode(scrollY, {
									inputRange: [-IMAGE_WIDTH * 2, 0],
									outputRange: [5, 1],
									extrapolate: Extrapolate.CLAMP,
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
					{ useNativeDriver: true }
				)}
				contentContainerStyle={{ flexGrow: 1 }}
				scrollEventThrottle={16}
				style={tw`px-5`}
			>
				<View
					style={tw.style("", {
						marginTop: IMAGE_WIDTH / 2.5,
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
							<Ionicons name="ios-star" size={20} color="#000" />
							<BoltSemiBoldText style={tw`text-lg ml-1`}>
								{rating}
							</BoltSemiBoldText>
						</View>
					</View>

					<View style={tw`w-full mt-1 flex flex-row justify-between`}>
						<BoltLightText style={tw`text-lg text-gray-800`}>
							Delivery GH₵{price}
						</BoltLightText>
					</View>
					<View style={tw`w-full mt-1`}>
						<TouchableOpacity
							style={tw`border-b border-gray-200 flex flex-row justify-between py-3`}
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
						style={tw.style(`${index !== 0 ? "" : "mt-2"} w-full`, {
							"pb-20": index === menu.length - 1,
						})}
					>
						<View style={tw`py-5`}>
							<BoltSemiBoldText style={tw`text-2xl`}>
								{item.name}
							</BoltSemiBoldText>

							{item.items.map((item, index) => (
								<TouchableOpacity
									style={tw.style(
										"flex flex-row justify-between items-center w-full border-b border-gray-200",
										{
											"py-4": !!item.image,
										}
									)}
									key={index}
								>
									<View style={tw`w-3/5`}>
										<View
											key={item.id}
											style={tw`w-full py-5 flex flex-col`}
										>
											<BoltSemiBoldText
												style={tw`text-lg`}
											>
												{item.name}
											</BoltSemiBoldText>

											{item.description && (
												<BoltLightText style={tw`my-2`}>
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
															GH₵{item.discount}
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
	);
};

export default RestaurantScreen;
