import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { theme } from "../../utils";

const Button = ({
	color = "primary",
	highlighted = true,
	style = null,
	textStyle = null,
	disabled = false,
	onPress,
	title = null,
	children,
}) => {
	return (
		<TouchableHighlight
			onPress={!disabled ? onPress : () => {}}
			style={[{ borderRadius: 10 }, style]}
		>
			<View
				style={[
					highlighted
						? { ...styles.solidBg, backgroundColor: theme.colors[color] }
						: styles.whiteBg,
					!highlighted && { borderColor: theme.colors[color] },
					disabled && { opacity: 0.5 },
				]}
			>
				{title ? (
					<Text
						style={[
							highlighted ? styles.primaryTxtBtn : styles.whitetxtBtn,
							!highlighted && { color: theme.colors[color] },
							textStyle,
						]}
					>
						{title}
					</Text>
				) : (
					children
				)}
			</View>
		</TouchableHighlight>
	);
};

export default Button;
const styles = StyleSheet.create({
	whiteBg: {
		borderWidth: 1,
		borderColor: "transparent",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 10,
		paddingHorizontal: 15,
		backgroundColor: theme.colors.white,
		padding: 10,
	},
	solidBg: {
		borderWidth: 1,
		borderColor: "transparent",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 10,
		paddingHorizontal: 15,
	},
	whitetxtBtn: {
		...theme.typography.body,
		color: theme.colors.primary,
		textTransform: "uppercase",
		fontWeight: "500",
	},
	primaryTxtBtn: {
		...theme.typography.body,
		fontWeight: "500",
		color: theme.colors.white,
		textTransform: "uppercase",
	},
});
