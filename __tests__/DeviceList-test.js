import React from "react";
import renderer from "react-test-renderer";
import DeviceList from "../src/screens/DeviceList";

test("renders correctly", () => {
	const tree = renderer.create(<DeviceList />).toJSON();
	expect(tree).toMatchSnapshot();
});
