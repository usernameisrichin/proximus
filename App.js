import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import store, { persistor } from "./src/redux/store";
import { navigationRef } from "./src/utils/RootNavigation";
import AppNavigator from "./src/navigations/AppNavigator";

export default function App() {
	return (
		<View style={styles.container}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<NavigationContainer ref={navigationRef}>
						<AppNavigator />
					</NavigationContainer>
				</PersistGate>
			</Provider>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
