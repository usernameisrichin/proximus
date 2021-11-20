import React, { useState, useEffect } from "react";
import {
	Image,
	View,
	Text,
	TouchableWithoutFeedback,
	TouchableOpacity,
} from "react-native";
import { theme } from "../utils";
import {
	useNavigation,
	useNavigationState,
	useRoute,
} from "@react-navigation/native";

const NavHeader = ({
	type = "inner",
	backEn = true,
	title = null,
	onBackPress = null,
	actions = null,
	filterApplied = false,
	onModalPress = () => {},
}) => {
	const [titleLine, settitleLine] = useState(1);
	const navigation = useNavigation();
	const { name } = useRoute();

	let newTitle =
		title && title.includes("_") ? title.replace(/_|(^,\s)/g, " ") : title;
	const headerOptions =
		actions &&
		actions.map((item, index) => (
			<TouchableOpacity key={`nav-head-action-${index}`} onPress={item.onPress}>
				<View
					style={{
						paddingHorizontal: filterApplied ? 15 : 8,
						paddingVertical: filterApplied ? 10 : 6,
						flex: 0,
					}}
				>
					{item.icon}
				</View>
			</TouchableOpacity>
		));
	const headerLeft =
		type === "inner" ? (
			backEn && (
				<TouchableOpacity
					onPress={
						onBackPress
							? onBackPress
							: navigation.canGoBack
							? () => navigation.goBack()
							: null
					}
				>
					<View
						style={{
							paddingHorizontal: 20,
							paddingVertical: 15,
						}}
					>
						<Image source={require("../../assets/icons/back.png")} />
					</View>
				</TouchableOpacity>
			)
		) : type === "modal" ? (
			<TouchableOpacity onPress={() => onModalPress()}>
				<View
					style={{
						paddingHorizontal: 20,
						paddingVertical: 15,
					}}
				>
					<Image source={require("../../assets/icons/close.png")} />
				</View>
			</TouchableOpacity>
		) : (
			<TouchableOpacity>
				<View
					style={{
						paddingHorizontal: 10,
						paddingVertical: 8,
					}}
				>
					<Image
						style={{ width: 35, height: 35 }}
						source={require("../../assets/icons/profile.png")}
					/>
				</View>
			</TouchableOpacity>
		);
	return (
		<View
			style={{
				height: 100,
				justifyContent: "flex-end",
				paddingHorizontal: 10,
				flex: 0,
			}}
		>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					paddingBottom: 10,
				}}
			>
				<View style={{ flex: 0 }}>{headerLeft}</View>
				<View style={type === "inner" ? { flex: 1 } : { flexGrow: 1 }}>
					<TouchableOpacity onPress={() => settitleLine(titleLine ? null : 1)}>
						<Text
							style={{
								...theme.typography.navHead,
								color: "white",
								alignSelf: "stretch",
							}}
							numberOfLines={titleLine}
							ellipsizeMode="tail"
						>
							{newTitle || name}
						</Text>
					</TouchableOpacity>
				</View>
				<View
					style={{
						flex: 0,
						justifyContent: "flex-end",
						flexDirection: "row",
					}}
				>
					{headerOptions && headerOptions}
				</View>
			</View>
		</View>
	);
};

export default NavHeader;
