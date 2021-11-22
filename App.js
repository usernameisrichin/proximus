import React, { useState } from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import {
	Provider as PaperProvider,
	DefaultTheme as PaperDefaultTheme,
	DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import store, { persistor } from "./src/redux/store";
import { navigationRef } from "./src/utils/RootNavigation";
import AppNavigator from "./src/navigations/AppNavigator";

export default function App() {
	const colorScheme = store.getState();
	return (
		<View style={styles.container}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<NavigationContainer
						ref={navigationRef}
						theme={colorScheme?.theme ? DarkTheme : DefaultTheme}
					>
						<PaperProvider
							theme={colorScheme?.theme ? PaperDarkTheme : PaperDefaultTheme}
						>
							<AppNavigator />
						</PaperProvider>
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
