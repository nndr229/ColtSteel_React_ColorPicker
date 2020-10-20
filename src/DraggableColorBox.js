import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";

const styles = {
	root: {
		width: "20%",
		height: "25%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		marginBottom: "-4.5px",
		"&:hover svg": {
			color: "white",
			transform: "scale(1.24)",
			cursor: "pointer",
		},
	},
	boxContent: {
		color: "rgba(0,0,0,0.5)",
		position: "absolute",
		padding: "10px",
		width: "100%",
		left: "0px",
		bottom: "0px",
		color: "black",
		letterSpacing: "1px",
		textTransform: "uppercase",
		fontSize: "12px",
		display: "flex",
		justifyContent: "space-between",
	},
	deleteIcon: {
		transition: "all 0.32s ease-in-out",
	},
};

const DraggableColorBox = SortableElement((props) => {
	return (
		<div
			className={props.classes.root}
			style={{ backgroundColor: props.color }}
		>
			<div className={props.classes.boxContent}>
				<span>{props.name}</span>
				<DeleteIcon
					className={props.classes.deleteIcon}
					onClick={props.handleClick}
				/>
			</div>
		</div>
	);
});

export default withStyles(styles)(DraggableColorBox);
