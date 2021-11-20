import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const get = (url, params = {}) => {
	const aParams = Object.entries({ ...params });
	const uPram = aParams.map((param) => `${param[0]}=${param[1]}`);
	return axios
		.get(`${url}?${uPram.join("&")}`)
		.then((response) => response.data)
		.catch((error) => ({ error }));
};

const post = (
	url,
	params = {},
	headers = { "Content-Type": "application/json" }
) => {
	return axios
		.post(url, { ...params, api_key: API_KEY_UAT })
		.then((response) => response.data)
		.catch((error) => ({ error }));
};

const localGet = (key) => {
	return AsyncStorage.getItem(`pckey@${key}`).then((res) => JSON.parse(res));
};

const localSet = (key, data) => {
	return AsyncStorage.setItem(`pckey@${key}`, JSON.stringify(data));
};

export { get, post, localGet, localSet };
