import * as types from "./../types";

const init_state = {
	deviceList: [],
};

const appReducer = (state = init_state, action) => {
	switch (action.type) {
		// task list
		case types.ADD_DEVICE_DETAILS: {
			let newDeviceList = [...state.deviceList];
			let checkTask = newDeviceList.findIndex(
				(i) => i.id === action.payload.id
			);
			if (checkTask >= 0) {
				newDeviceList[checkTask] = action.payload;
			} else {
				newDeviceList = [...newDeviceList, action.payload];
			}
			return {
				...state,
				deviceList: newDeviceList,
			};
		}
	}
	return state;
};
export default appReducer;
