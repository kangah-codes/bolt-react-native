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

export default function Search() {
	const [search, setSearch] = useState("");

	return (
		<View
			style={{
				...tw`flex pt-2 h-full pb-40`,
				marginTop: Constants.statusBarHeight,
			}}
		>
			<StatusBar style="auto" />
			<View style={tw`flex flex-col mx-5 mt-5`}>
				<BoltSemiBoldText style={tw`text-2xl`}>Search</BoltSemiBoldText>

				<View style={tw`bg-gray-200 p-4 rounded-md flex flex-row mt-3`}>
					<Ionicons
						name="ios-search"
						size={18}
						color="black"
						style={tw`my-auto`}
					/>
					<TextInput
						style={tw`ml-3`}
						placeholder="Restaurants and Cuisines"
						onChangeText={(e) => setSearch(e)}
						value={search}
					/>
				</View>
			</View>

			<View style={tw`mx-5 mt-8 pb-3`}>
				<BoltSemiBoldText style={tw`text-sm`}>
					Popular Categories
				</BoltSemiBoldText>
			</View>

			<View style={tw`pb-20`}>
				<FlatList
					style={tw`mx-5`}
					data={popularFoods}
					renderItem={({ item, index }) => (
						<TouchableOpacity key={index}>
							<BoltLightText
								style={tw`text-sm my-4 text-gray-700 ${
									index === 0 && "mt-7"
								}`}
							>
								{item}
							</BoltLightText>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	);
}
