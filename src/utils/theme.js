import React from "react";
import { Image } from "react-native";
const colors = {
	primary: "#65003C",
	secondary: "#026978",
	blue: "#2680EB",
	skyBlue: "#4FCAEC",
	lightBlue: "#7AB2FB",
	green: "#72DA9B",
	lime: "#E1E000",
	orange: "#FF2828",
	darkGray: "#524D4D",
	gray: "#333333",
	lightGray: "#e3e2dd",
	lightGray1: "#ECECEC",
	textColor: "#787878",
	white: "#fff",
	tabBg: "#F1F1F1",
	failBG: "#F5F5F5",
	red: "#FF0000",
	profileTitle: "#808080",
};

const cardBorderRadius = 25;

export const theme = {
	colors,
	cardBorderRadius,
	rgbsColors: function (hex, opacity) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result
			? `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
					result[3],
					16
			  )},${opacity})`
			: null;
	},
	typography: {
		heading: {
			fontSize: 20,
			fontWeight: "bold",
		},
		subHeading: {
			fontSize: 18,
			fontWeight: "bold",
		},
		title: {
			fontSize: 16,
			fontWeight: "bold",
		},
		subTitle: {
			fontSize: 14,
		},
		headH1: {
			fontSize: 40,
			fontWeight: "bold",
		},
		headH2: {
			fontSize: 34,
			fontWeight: "bold",
		},
		headH3: {
			fontSize: 30,
			fontWeight: "bold",
		},
		headH4: {
			fontSize: 24,
			fontWeight: "bold",
		},
		headH5: {
			fontSize: 18,
			fontWeight: "bold",
		},
		headH6: {
			fontSize: 16,
			fontWeight: "bold",
		},
		navHead: {
			fontSize: 20,
			fontWeight: "bold",
		},
		body: {
			fontSize: 14,
		},
		body2: {
			fontSize: 11,
		},
		caption: {
			fontSize: 10,
		},
	},
	layoutRoundEdge: {
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		overflow: "hidden",
	},
};
