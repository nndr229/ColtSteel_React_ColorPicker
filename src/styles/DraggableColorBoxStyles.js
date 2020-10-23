import chroma from "chroma-js";
import sizes from "./sizes";

export default {
	root: {
		width: "20%",
		height: "25%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		marginBottom: "-6.5px",
		[sizes.down("lg")]: {
			width: "33.333%",
		},
		[sizes.down("md")]: {
			width: "50%",
		},
		[sizes.down("xs")]: {
			width: "100%",
			height: "10%",
		},
		"&:hover svg": {
			color: (props) =>
				chroma(props.color).luminance() <= 0.5 ? "black" : "white",
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
	boxName: {
		color: (props) =>
			chroma(props.color).luminance() <= 0.5 ? "white" : "black",
		wordBreak: "break-all",
		[sizes.down("xs")]: {
			display: (props)=> props.open ?"none":"",
		},
		// width: "80%",
		fontWeight: "bold",
		fontSize: "11px",
	},
	deleteIcon: {
		color: (props) =>
			chroma(props.color).luminance() <= 0.5 ? "white" : "black",
		transition: "all 0.32s ease-in-out",
		alignSelf: "flex-end",
	},
};
