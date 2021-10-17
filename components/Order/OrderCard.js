import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import IonIcons from "react-native-vector-icons/Ionicons";
import { BoltLightText, BoltSemiBoldText } from "../CustomText";

export default function OrderCard({ data }) {
	const { name, price, rating, discount, image, date, status } = data;

	return (
		<View
			style={tw`flex w-full flex-row border-b border-gray-200 mb-5 pb-5 justify-between`}
		>
			<View style={tw`flex flex-row`}>
				<TouchableOpacity style={tw`w-16 h-16`}>
					<Image
						source={image}
						style={tw`w-full h-full rounded-xl`}
					/>
				</TouchableOpacity>
				<View style={tw`flex-col mx-4 items-center flex`}>
					<View style={tw`my-auto`}>
						<BoltLightText style={tw`text-sm text-gray-500`}>
							{date}
						</BoltLightText>
						<BoltLightText style={tw`text-black mt-1.5`}>
							{name.length > 30
								? name.substring(0, 30 - 3) + "..."
								: name}
						</BoltLightText>
					</View>
				</View>
			</View>

			<View style={tw`flex-col items-center flex`}>
				<View style={tw`my-auto`}>
					<BoltLightText style={tw`text-sm text-gray-500`}>
						{status}
					</BoltLightText>
					<BoltLightText style={tw`text-black mt-1.5`}>
						GH₵{price}
					</BoltLightText>
				</View>
			</View>
		</View>
	);
}
