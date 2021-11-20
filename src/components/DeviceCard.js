import React from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableHighlight,
} from "react-native";
import { theme } from "../utils";

const DeviceCard = ({
	id,
	model = null,
	onPress,
	OS = null,
	currentOwner = null,
	notes = null,
}) => {
	let images = require("../../assets/icons/iphone.png");
	return (
		<TouchableHighlight onPress={onPress} key={id}>
			<View style={styles.cardView}>
				<View style={styles.flexView}>
					<View style={styles.imageView}>
						<Image style={styles.userImage} source={images} />
					</View>
					<View style={styles.subCardView}>
						<Text style={styles.labelText}>{model}</Text>

						{OS ? <Text style={styles.dataText}>OS:{OS}</Text> : null}
						{currentOwner ? (
							<Text style={styles.dataText}>Owner: {currentOwner}</Text>
						) : null}

						{notes && <Text style={styles.dataText}>Notes:{notes}</Text>}
					</View>
				</View>
				<View style={styles.flexView}>
					{/* edit button */}
					<TouchableHighlight>
						<View style={{ ...styles.imageView, marginTop: 4 }}>
							<Image
								style={styles.buttonImage}
								source={require("../../assets/icons/edit.png")}
							/>
						</View>
					</TouchableHighlight>
					{/* delete button */}
					<TouchableHighlight>
						<View style={styles.imageView}>
							<Image
								style={styles.buttonImage}
								source={require("../../assets/icons/delete.png")}
							/>
						</View>
					</TouchableHighlight>
				</View>
			</View>
		</TouchableHighlight>
	);
};

export default DeviceCard;

const styles = StyleSheet.create({
	cardView: {
		flex: 1,
		paddingVertical: 25,
		paddingHorizontal: 20,
		backgroundColor: "white",
		borderBottomWidth: 1,
		borderColor: theme.colors.lightGray,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	labelText: {
		fontSize: theme.typography.title.fontSize,
		color: theme.colors.black,
		fontWeight: "bold",
	},
	dataText: {
		fontSize: theme.typography.body.fontSize,
		color: theme.colors.textColor,
		fontWeight: "bold",
		marginTop: 10,
	},
	imageView: {
		marginRight: 10,
		width: "20%",
	},
	userImage: {
		width: 60,
		height: 60,
		borderRadius: 100 / 2,
	},
	flexView: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	buttonImage: {
		height: 40,
		width: 40,
	},
});
