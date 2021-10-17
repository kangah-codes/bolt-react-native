import React from "react";
import { Text } from "react-native";

export const BoltLightText = ({ children, style, ...props }) => {
	return (
		<Text {...props} style={{ ...style, fontFamily: "BoltRegular" }}>
			{children}
		</Text>
	);
};

export const BoltSemiBoldText = ({ children, style, ...props }) => {
	return (
		<Text {...props} style={{ ...style, fontFamily: "BoltSemibold" }}>
			{children}
		</Text>
	);
};
