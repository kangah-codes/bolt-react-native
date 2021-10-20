import React from "react";
import { View, FlatList } from "react-native";
import tw from "tailwind-react-native-classnames";
import IonIcons from "react-native-vector-icons/Ionicons";
import { BoltSemiBoldText } from "../CustomText";
import { restaurants } from "../../constants";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantList({ navigation }) {
	return (
		<View style={tw`flex mt-4 mx-5`}>
			<View style={tw`flex flex-row items-center justify-between`}>
				<BoltSemiBoldText style={tw`text-xl`}>
					All Restaurants
				</BoltSemiBoldText>
			</View>

			<View>
				{restaurants.map((item, index) => (
					<RestaurantCard
						key={index}
						data={item}
						navigation={navigation}
					/>
				))}
			</View>

			{/* <FlatList
				style={tw``}
				data={restaurants}
				renderItem={({ item }) => }
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
			/> */}
		</View>
	);
}
