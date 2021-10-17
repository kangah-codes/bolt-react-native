import React from "react";
import { View, FlatList } from "react-native";
import tw from "tailwind-react-native-classnames";
import IonIcons from "react-native-vector-icons/Ionicons";
import { BoltSemiBoldText } from "../CustomText";
import DiscountCard from "./DiscountCard";
import { discounts } from "../../constants";

export default function DiscountList() {
	return (
		<View style={tw`flex mt-4`}>
			<View style={tw`flex flex-row items-center justify-between mx-5`}>
				<BoltSemiBoldText style={tw`text-xl`}>
					🎁 Discount on the entire menu!
				</BoltSemiBoldText>
				<IonIcons name="ios-arrow-forward" size={25} color="black" />
			</View>

			<FlatList
				style={tw`ml-5`}
				horizontal
				data={discounts}
				renderItem={({ item }) => <DiscountCard data={item} />}
				keyExtractor={(item) => item.id}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
}
