import * as types from "./../types";

export const addDeviceList = (data) => {
	return (dispatch) => {
		dispatch({
			type: types.ADD_DEVICE_DETAILS,
			payload: data,
		});
	};
};
