import React, { useRef } from "react";
import { StyleSheet, View, StatusBar, RefreshControl } from "react-native";
import NavHeader from "./NavHeader";
import { theme } from "../utils";
import { useScrollToTop } from "@react-navigation/native";
import Animated from "react-native-reanimated";

const CommonContainer = ({
	navbar,
	children,
	style,
	onScroll,
	showsVerticalScrollIndicator = false,
	scrollEnabled = true,
	scrollToTopOnNavChange = true,
	onRefresh = () => {},
	loading = false,
	onModalPress = () => {},
}) => {
	const _scrollerRef = useRef(null);
	useScrollToTop(scrollToTopOnNavChange && scrollEnabled && _scrollerRef);

	return (
		<View style={styles.container}>
			<StatusBar
				barStyle={"light-content"}
				translucent={true}
				backgroundColor={"transparent"}
			/>
			<NavHeader {...navbar} onModalPress={() => onModalPress()} />
			<View style={[styles._scrollerStyle, style]}>
				{scrollEnabled ? (
					<Animated.ScrollView
						ref={_scrollerRef}
						scrollEnabled={scrollEnabled}
						onScroll={onScroll}
						scrollEventThrottle={16}
						bounces={false}
						showsVerticalScrollIndicator={showsVerticalScrollIndicator}
						contentContainerStyle={{ paddingBottom: 80 }}
						refreshControl={
							<RefreshControl onRefresh={onRefresh} refreshing={loading} />
						}
					>
						{children}
					</Animated.ScrollView>
				) : (
					children
				)}
			</View>

			{/* <PopModal /> */}
		</View>
	);
};

export default CommonContainer;

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.primary,
		flex: 1,
	},
	bgPattern: { position: "absolute", top: 15, left: 15, flex: 0 },
	_scrollerStyle: {
		...theme.layoutRoundEdge,
		backgroundColor: "white",
		flexGrow: 1,
	},
});
