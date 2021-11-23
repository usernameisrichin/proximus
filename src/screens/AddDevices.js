import React, { useState, useRef } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import uuid from "react-native-uuid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import CommonContainer from "../layout/CommonContainer";
import InputText from "../components/ui-elements/InputText";
import Button from "../components/ui-elements/Button";
import { theme } from "../utils";
import * as actions from "../redux/actions";

const AddDevices = (props) => {
	const dispatch = useDispatch();
	const { navigate } = useNavigation();
	//: states
	const [model, setModel] = useState(null);
	const [os, setOs] = useState(null);
	const [owner, setOwner] = useState(null);
	const [notes, setNotes] = useState(null);
	const [validations, setValidations] = useState(false);
	// : refs
	const modelRef = useRef();
	const osRef = useRef();
	const ownerRef = useRef();
	const notesRef = useRef();

	// :functions
	const onSubmit = () => {
		if (!model || !os || !owner || !notes) {
			Alert.alert(
				"Error!",
				`These fields are mandatory: ${model === null ? "Model," : ""}${
					os === null ? "OS, " : ""
				}${owner === null ? "Current Owner, " : ""}${
					notes === "" ? "Notes," : ""
				}.`
			);
			return null;
		} else {
			let obj = {
				id: uuid.v4(),
				data: {
					id: uuid.v4(),
					model: model,
					OS: os,
					currentOwner: owner,
					notes: notes,
				},
			};
			dispatch(actions.addDeviceList(obj));
			props.navigation.goBack();
		}
	};

	return (
		<CommonContainer
			scrollEnabled={false}
			style={{ paddingTop: 20, flex: 1, paddingHorizontal: 25 }}
			navbar={{
				type: "inner",
				title: "Add New Device",
			}}
		>
			<InputText
				label="Model *"
				value={model}
				onChangeText={setModel}
				style={{ marginBottom: 20 }}
				labelStyle={{ color: theme.colors.primary }}
				ref={modelRef}
				onSubmitEditing={() => osRef.current.focus()}
			/>
			<InputText
				label="OS *"
				value={os}
				onChangeText={setOs}
				style={{ marginBottom: 20 }}
				labelStyle={{ color: theme.colors.primary }}
				ref={osRef}
				onSubmitEditing={() => ownerRef.current.focus()}
			/>
			<InputText
				label="Current Owner *"
				value={owner}
				onChangeText={setOwner}
				style={{ marginBottom: 20 }}
				labelStyle={{ color: theme.colors.primary }}
				ref={ownerRef}
				onSubmitEditing={() => notesRef.current.focus()}
			/>
			<InputText
				label="Notes *"
				value={notes}
				onChangeText={setNotes}
				style={{ marginBottom: 20 }}
				labelStyle={{ color: theme.colors.primary }}
				ref={notesRef}
			/>
			<View style={{ alignItems: "center", marginTop: 10, padding: 20 }}>
				<Button style={styles.buttonStyle} title="Submit" onPress={onSubmit} />
			</View>
		</CommonContainer>
	);
};
export default AddDevices;
const styles = StyleSheet.create({
	buttonStyle: {
		borderRadius: 10,
		width: "70%",
		height: 40,
	},
});
