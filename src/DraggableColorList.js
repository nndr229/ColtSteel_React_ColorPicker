import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";

const DraggableColorList = SortableContainer(
	({ open, colors, removeColor }) => {
		return (
			<div style={{ height: "100%" }}>
				{" "}
				{colors.map((color, i) => (
					<DraggableColorBox
						open={open}
						index={i}
						key={color.name}
						color={color.color}
						name={color.name}
						handleClick={() => removeColor(color.name)}
						distance={20}
					></DraggableColorBox>
				))}
			</div>
		);
	}
);

export default DraggableColorList;
