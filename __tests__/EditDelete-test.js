import React from "react";
import renderer from "react-test-renderer";
import EditDelete from "../src/screens/EditDelete";

test("renders correctly", () => {
	const tree = renderer.create(<EditDelete />).toJSON();
	expect(tree).toMatchSnapshot();
});
