import React from "react";
import renderer from "react-test-renderer";
import InputText from "../src/components/ui-elements/InputText";

test("renders correctly across screens", () => {
	const tree = renderer.create(<InputText />).toJSON();
	expect(tree).toMatchSnapshot();
});
