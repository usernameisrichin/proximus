import * as types from "./../types";
import { services } from "../../utils";

export const addDeviceList = (data) => {
	return (dispatch) => {
		dispatch({
			type: types.ADD_DEVICE_DETAILS,
			payload: data,
		});
	};
};
// DELETE ACTION
export const deleteDevice = (data) => {
	return (dispatch) => {
		dispatch({
			type: types.DELETE_DEVICE_DETAILS,
			payload: data,
		});
	};
};

//QUOTE OF THE DAY
export const dailyQuote = () => {
	let url = "https://zenquotes.io/api/today";
	return (dispatch) => {
		dispatch({
			type: types.GET_QUOTE_START,
			payload: null,
		});
		services.get(url).then((res) => {
			if (res) {
				dispatch({
					type: types.GET_QUOTE_SUCCESS,
					payload: res,
				});
			} else {
				dispatch({
					type: types.GET_QUOTE_FAIL,
					payload: res,
				});
			}
		});
	};
};
// dark/light actions
export const ToggleDarkTheme = () => ({
	type: types.DARK_THEME,
});
export const ToggleLightTheme = () => ({
	type: types.LIGHT_THEME,
});

export const ToggleTheme = (theme) => {
	return (dispatch) => {
		if (theme === true) {
			dispatch(ToggleDarkTheme());
		} else {
			dispatch(ToggleLightTheme());
		}
	};
};
