import * as types from "./../types";

const init_state = {
	deviceList: [],
	dailyQuote: {
		data: null,
		loading: false,
	},
	theme: false,
};

const appReducer = (state = init_state, action) => {
	switch (action.type) {
		// add device list
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
		// delete device
		case types.DELETE_DEVICE_DETAILS: {
			return {
				deviceList: state.deviceList.filter((que) => {
					return que.id !== action.payload;
				}),
			};
		}
		// daily quote
		case types.GET_QUOTE_START: {
			return {
				...state,
				dailyQuote: {
					data: null,
					loading: true,
				},
			};
		}
		case types.GET_QUOTE_SUCCESS: {
			return {
				...state,
				dailyQuote: {
					data: action.payload,
					loading: false,
				},
			};
		}
		case types.GET_QUOTE_FAIL: {
			return {
				...state,
				dailyQuote: {
					data: action.payload,
					loading: false,
				},
			};
		}
		// dark/light mode
		case types.DARK_THEME:
			return { theme: true };
		case types.LIGHT_THEME:
			return { theme: false };
	}
	return state;
};
export default appReducer;
