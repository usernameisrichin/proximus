import React from "react";
import renderer from "react-test-renderer";
import Button from "../src/components/ui-elements/Button";

test("renders correctly across screens", () => {
	const tree = renderer.create(<Button />).toJSON();
	expect(tree).toMatchSnapshot();
});
