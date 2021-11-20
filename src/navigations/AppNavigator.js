import * as React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeviceList from "../screens/DeviceList";
import AddDevices from "../screens/AddDevices";
import EditDelete from "../screens/EditDelete";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
	return (
		<Stack.Navigator
			name={"AppNavigator"}
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="DeviceList" component={DeviceList} />
			<Stack.Screen name="AddDevices" component={AddDevices} />
			<Stack.Screen name="EditDelete" component={EditDelete} />
		</Stack.Navigator>
	);
};
export default AppNavigator;
