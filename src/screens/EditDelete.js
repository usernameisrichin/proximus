import React, { useState, useRef, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import QRCode from "react-native-qrcode-svg";
import CommonContainer from "../layout/CommonContainer";
import InputText from "../components/ui-elements/InputText";
import Button from "../components/ui-elements/Button";
import { theme } from "../utils";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";

const EditDelete = (props) => {
	const dispatch = useDispatch();
	const {
		dailyQuote: { data = null, loading = false },
	} = useSelector((state) => state.app);
	// params
	const {
		params: { item = null },
	} = useRoute();
	//: states
	const [model, setModel] = useState(null);
	const [os, setOs] = useState(null);
	const [owner, setOwner] = useState(null);
	const [notes, setNotes] = useState(null);
	// : refs
	const modelRef = useRef();
	const osRef = useRef();
	const ownerRef = useRef();
	const notesRef = useRef();
	// : effects
	useEffect(() => {
		if (item) {
			setModel(item?.data?.model);
			setOs(item?.data?.OS);
			setOwner(item?.data?.currentOwner);
			setNotes(item?.data?.notes);
		}
	}, [item]);

	useEffect(() => {
		if (data) {
			Alert.alert("Success", data[0]?.q, [
				{ text: "OK", onPress: () => props.navigation.goBack() },
			]);
		}
	}, [loading]);
	//: functions
	const onEditPress = () => {
		let obj = {
			id: item?.id,
			data: {
				id: item?.id,
				model: model,
				OS: os,
				currentOwner: owner,
				notes: notes,
			},
		};
		dispatch(actions.addDeviceList(obj));
		props.navigation.goBack();
	};
	//: delete functions
	const onDeletePress = () => {
		dispatch(actions.dailyQuote());
		dispatch(actions.deleteDevice(item?.id));
		// props.navigation.goBack();
	};
	return (
		<CommonContainer
			scrollEnabled={false}
			style={{ paddingTop: 20, flex: 1, paddingHorizontal: 25 }}
			navbar={{
				type: "inner",
				title: "Edit Device",
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
			<View
				style={{
					borderColor: theme.colors.white,
					borderWidth: 1,
					marginTop: 15,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text style={styles.labelText}>QR Code</Text>

				<QRCode value={item?.id} />
			</View>

			<View
				style={{
					marginTop: 10,
					padding: 20,
					flexDirection: "row",
				}}
			>
				<Button
					style={styles.buttonStyle}
					title="Edit"
					color={"green"}
					onPress={onEditPress}
				/>
				<Button
					style={styles.buttonStyle}
					title="Delete"
					color={"red"}
					onPress={onDeletePress}
				/>
			</View>
		</CommonContainer>
	);
};
export default EditDelete;
const styles = StyleSheet.create({
	buttonStyle: {
		borderRadius: 10,
		width: "50%",
		height: 40,
		margin: 5,
	},
	labelText: {
		fontSize: theme.typography.title.fontSize,
		color: theme.colors.primary,
		fontWeight: "bold",
		textAlign: "left",
		paddingBottom: 20,
	},
});
