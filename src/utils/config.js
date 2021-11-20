import { Dimensions, Platform } from "react-native";

export const { height: HEIGHT, width: WIDTH } = Dimensions.get("window");

export const PLATFORM_ANDROID = Platform.OS === "android";
export const PLATFORM_IOS = Platform.OS === "ios";
