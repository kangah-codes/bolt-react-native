import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	FlatList,
	TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import IonIcons from "react-native-vector-icons/Ionicons";
import { BoltLightText, BoltSemiBoldText } from "../components/CustomText";
import DiscountList from "../components/Discount/DiscountList";
import RestaurantList from "../components/Restaurant/RestaurantList";
import { ScrollView } from "react-native-gesture-handler";
import Constants from "expo-constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import { popularFoods } from "../constants";
import OrderList from "../components/Order/OrderList";

export default function Orders() {
	const [search, setSearch] = useState("");

	return (
		<View
			style={{
				...tw`flex pt-2`,
				marginTop: Constants.statusBarHeight,
			}}
		>
			<StatusBar style="auto" />
			<View style={tw`flex flex-col mx-5 mt-5`}>
				<BoltSemiBoldText style={tw`text-2xl`}>
					My orders
				</BoltSemiBoldText>
			</View>

			<View style={tw``}>
				<OrderList />
			</View>
		</View>
	);
}
