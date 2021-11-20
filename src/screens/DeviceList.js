import React from "react";
import {
	Text,
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Image,
	FlatList,
	ActivityIndicator,
} from "react-native";
import CommonContainer from "../layout/CommonContainer";
import { theme } from "../utils";
import DeviceCard from "../components/DeviceCard";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

const deviceList = [
	{
		id: 1,
		model: "Samsung",
		OS: "Android",
		currentOwner: "Admin",
		notes: "test admin",
	},
	{
		id: 2,
		model: "iPhone",
		OS: "iOS",
		currentOwner: "Tester",
		notes: "testing",
	},
];

const DeviceList = () => {
	const { navigate } = useNavigation();

	//: selectors for components
	const { deviceList } = useSelector((state) => state.app);
	console.log({ deviceList });
	//empty component
	const _ListEmptyComponent = (
		<View
			style={{
				padding: 10,
				flexGrow: 1,
				backgroundColor: "#ffffff",
				justifyContent: "center",
			}}
		>
			{!deviceList ? (
				<View>
					<ActivityIndicator />
				</View>
			) : (
				<Text style={{ textAlign: "center" }}> No Data </Text>
			)}
		</View>
	);
	return (
		<>
			<CommonContainer
				scrollEnabled={false}
				style={{ paddingTop: 15, flex: 1 }}
				navbar={{
					type: "outer",
					title: "Devices",
				}}
			>
				<FlatList
					data={deviceList}
					snapToAlignment="center"
					keyExtractor={(item, index) => `device-list-${index}`}
					ListFooterComponentStyle={{ backgroundColor: "white" }}
					contentContainerStyle={{ flexGrow: 1 }}
					ListEmptyComponent={_ListEmptyComponent}
					renderItem={({ item, index }) => (
						<DeviceCard
							id={item.id}
							model={item.model}
							onPress={() => navigate("EditDelete", { item })}
							OS={item.OS}
							currentOwner={item.currentOwner}
							notes={item?.notes}
						/>
					)}
				/>
			</CommonContainer>
			{/* Add button floating */}
			<TouchableWithoutFeedback onPress={() => navigate("AddDevices")}>
				<View style={styles.addButton}>
					<Image
						source={require("../../assets/icons/add.png")}
						style={styles.plusImage}
					/>
				</View>
			</TouchableWithoutFeedback>
		</>
	);
};
export default DeviceList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	addButton: {
		position: "absolute",
		bottom: 70,
		right: 25,
		height: 70,
		width: 70,
		borderRadius: 20,
		alignItems: "center",
		paddingVertical: 15,
		backgroundColor: "#EBDFDF",
	},
	plusImage: {
		height: 40,
		width: 40,
		tintColor: theme.colors.primary,
	},
});
