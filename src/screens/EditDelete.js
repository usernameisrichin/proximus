import React, { useState, useRef, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import CommonContainer from "../layout/CommonContainer";
import InputText from "../components/ui-elements/InputText";
import Button from "../components/ui-elements/Button";
import { theme } from "../utils";
import { useRoute, useNavigation } from "@react-navigation/native";

const EditDelete = (props) => {
	// params
	const {
		params: { item = null },
	} = useRoute();
	console.log(item);
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
	// : effects
	useEffect(() => {
		if (item) {
			setModel(item.model);
			setOs(item.OS);
			setOwner(item.currentOwner);
			setNotes(item.notes);
		}
	}, [item]);
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
					marginTop: 10,
					padding: 20,
					flexDirection: "row",
				}}
			>
				<Button style={styles.buttonStyle} title="Edit" color={"green"} />
				<Button style={styles.buttonStyle} title="Delete" color={"red"} />
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
});
