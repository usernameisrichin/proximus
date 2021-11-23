import React from "react";
import renderer from "react-test-renderer";
import AddDevices from "../src/screens/AddDevices";

test("renders correctly", () => {
	const tree = renderer.create(<AddDevices />).toJSON();
	expect(tree).toMatchSnapshot();
});
