import React from "react";
import { View, TouchableOpacity } from "react-native";
import { List, Switch } from "react-native-paper";
import CommonContainer from "../layout/CommonContainer";
import * as actions from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default ({ navigation }) => {
	const dispatch = useDispatch();
	const { theme } = useSelector((state) => state.app);
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
		</CommonContainer>
	);
};
