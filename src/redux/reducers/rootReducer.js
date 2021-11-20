import { combineReducers } from "redux";

import appReducer from "./appReducer";
const root = combineReducers({
	app: appReducer,
});
const rootReducer = (state, action) => {
	return root(state, action);
};

export default rootReducer;
