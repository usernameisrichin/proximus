import React from "react";
import { View, StyleSheet, Alert, Platform } from "react-native";
import { List, Switch } from "react-native-paper";
import CommonContainer from "../layout/CommonContainer";
import Button from "../components/ui-elements/Button";
import * as actions from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
const RNFS = require("react-native-fs");

const path = RNFS.DocumentDirectoryPath + "/test.txt";

export default ({ navigation }) => {
	const dispatch = useDispatch();
	const { theme } = useSelector((state) => state.app);
	const { deviceList = [] } = useSelector((state) => state.app);

	// : function for export
	const onSubmit = () => {
		// Created Sample data
		let sample_data_to_export = deviceList?.data;
		if (sample_data_to_export) {
			// Write generated excel to Storage
			RNFS.writeFile(path, sample_data_to_export, "utf8")
				.then((r) => {
					console.log("Success");
				})
				.catch((e) => {
					console.log("Error", e);
				});
		} else {
			Alert.alert("Error!", `No Data to export`);
		}
	};
	// function to import
	const onImport = () => {
		if (Platform.OS === "ios") {
			RNFS.readDir(RNFS.MainBundlePath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
				.then((result) => {
					console.log("GOT RESULT", result);

					// stat the first file
					return Promise.all([RNFS.stat(result[0].path), result[0].path]);
				})
				.then((statResult) => {
					if (statResult[0].isFile()) {
						// if we have a file, read it
						return RNFS.readFile(statResult[1], "utf8");
					}

					return "no file";
				})
				.then((contents) => {
					// log the file contents
					console.log(contents);
				})
				.catch((err) => {
					console.log(err.message, err.code);
				});
		} else {
			RNFS.readDir(RNFS.DocumentDirectoryPath)
				.then((result) => {
					console.log("GOT RESULT", result);

					// stat the first file
					return Promise.all([RNFS.stat(result[0].path), result[0].path]);
				})
				.then((statResult) => {
					if (statResult[0].isFile()) {
						// if we have a file, read it
						return RNFS.readFile(statResult[1], "utf8");
					}

					return "no file";
				})
				.then((contents) => {
					// log the file contents
					console.log(contents);
				})
				.catch((err) => {
					console.log(err.message, err.code);
				});
		}
	};
	return (
		<CommonContainer scrollEnabled={false} style={{ paddingTop: 15, flex: 1 }}>
			<List.Item
				title="Dark Mode"
				right={() => (
					<Switch
						value={theme}
						onValueChange={(val) => dispatch(actions.ToggleTheme(val))}
					/>
				)}
			/>
			<View style={{ alignItems: "center", marginTop: 10, padding: 20 }}>
				<Button style={styles.buttonStyle} title="Export" onPress={onSubmit} />
			</View>
			<View style={{ alignItems: "center", marginTop: 10, padding: 20 }}>
				<Button style={styles.buttonStyle} title="Import" onPress={onImport} />
			</View>
		</CommonContainer>
	);
};
const styles = StyleSheet.create({
	buttonStyle: {
		borderRadius: 10,
		width: "70%",
		height: 40,
	},
});
