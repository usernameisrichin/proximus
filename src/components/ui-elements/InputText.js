import React, { useState } from "react";
import { View, Text, TextInput, Animated, StyleSheet } from "react-native";
import { theme } from "../../utils";

const InputText = (props) => {
	const labelInactivePostition = 20;
	const {
		label,
		value = null,
		editable = true,
		icon = null,
		innerRef,
		addon = null,
		labelStyle = null,
		style,
		inputStyle,
	} = props;
	const [tY] = useState(new Animated.Value(value ? 0 : labelInactivePostition));
	const _handleFocus = (focus) => {
		Animated.timing(tY, {
			toValue: focus || value ? 0 : labelInactivePostition,
			duration: 150,
			delay: 0,
			useNativeDriver: true,
		}).start();
	};
	let disabled = !editable;
	return (
		<View
			style={[
				{
					height: 50,
					flexDirection: "row",
					borderBottomWidth: StyleSheet.hairlineWidth,
					borderColor: theme.colors.lightGray,
				},
				style,
			]}
		>
			{icon && (
				<View
					style={[
						{ flex: 0, alignItems: "center", padding: 10, paddingRight: 20 },
						props.iconStyle,
					]}
				>
					{icon}
				</View>
			)}
			<View style={{ flex: 1 }}>
				<Animated.View
					style={{
						paddingLeft: 5,
						transform: [{ translateY: tY }],
					}}
				>
					<Text style={[{ color: theme.colors.textColor }, labelStyle]}>
						{label}
					</Text>
				</Animated.View>
				<TextInput
					onFocus={() => _handleFocus(true)}
					onBlur={() => _handleFocus(false)}
					ref={innerRef}
					numberOfLines={1}
					{...props}
					style={[
						styles.input,
						disabled && { color: theme.colors.lightGray2 },
						inputStyle,
					]}
				/>
			</View>
			{addon && <View style={{ flex: 0 }}>{addon}</View>}
		</View>
	);
};
const styles = StyleSheet.create({
	input: {
		fontWeight: "500",
		paddingLeft: 5,
		fontSize: 18,
		flexDirection: "row",
		padding: 2,
	},
});
export default React.forwardRef((props, ref) => (
	<InputText innerRef={ref} {...props} />
));
