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
import AntDesign from "react-native-vector-icons/AntDesign";
import { popularFoods, profileTabs } from "../constants";
import OrderList from "../components/Order/OrderList";

export default function Profile() {
	const [search, setSearch] = useState("");

	return (
		<ScrollView
			style={{
				...tw`flex pt-2`,
				marginTop: Constants.statusBarHeight,
			}}
		>
			<StatusBar style="auto" />
			<View style={tw`flex flex-col mx-5 mt-5`}>
				<BoltSemiBoldText style={tw`text-2xl`}>
					Joshua Akangah
				</BoltSemiBoldText>
				<BoltLightText style={tw`text-gray-500`}>
					+234 809 809 809
				</BoltLightText>
			</View>

			<View style={tw`mt-10`}>
				<FlatList
					style={tw`mx-5 pb-96`}
					data={profileTabs}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={tw`w-full flex flex-row mb-7 items-center`}
						>
							{item.icon === "creditcard" ? (
								<AntDesign
									name={item.icon}
									size={24}
									color="black"
								/>
							) : (
								<IonIcons
									name={item.icon}
									size={24}
									color="black"
								/>
							)}

							<BoltLightText style={tw`text-xl ml-5`}>
								{item.name}
							</BoltLightText>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item.id}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</ScrollView>
	);
}
