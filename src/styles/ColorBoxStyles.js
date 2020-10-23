import chroma from "chroma-js";
import sizes from "./sizes";

export default {
	colorBox: {
		width: "20%",
		height: (props) => (props.showingFullPalette ? "25%" : "50%"),
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		marginBottom: "-5.2px",
		"&:hover button": {
			opacity: "1",
			transition: "0.5s",
		},
		[sizes.down("lg")]: {
			width: "33.333%",
		},
		[sizes.down("md")]: {
			width: "50%",
		},
		[sizes.down("xs")]: {
			width: "100%",
			height: (props) => (props.showingFullPalette ? "8%" : "15%"),
		},
	},
	colorBoxName: {
		color: (props) =>
			chroma(props.background).luminance() <= 0.5 ? "white" : "black",
		fontWeight: "bold",
		fontSize: "11px",
		wordBreak: "break-all",
	},
	seeMore: {
		color: (props) =>
			chroma(props.background).luminance() <= 0.5 ? "white" : "black",
		background: "rgba(255, 255, 255, 0.3)",
		position: "absolute",
		border: "none",
		right: "0px",
		bottom: "0px",
		width: "50px",
		height: "25px",
		textAlign: "center",
		lineHeight: "25px",
		cursor: "pointer",
	},
	copyButton: {
		color: (props) =>
			chroma(props.background).luminance() <= 0.5 ? "white" : "black",
		cursor: "pointer",
		width: "80px",
		height: "25px",
		position: "absolute",
		display: "inline-block",
		top: "50%",
		left: "50%",
		marginTop: "-15px",
		marginLeft: "-40px",
		textAlign: "center",
		outline: "none",
		background: "rgba(255, 255, 255, 0.3)",
		fontSize: "0.76em",
		textTransform: "uppercase",
		border: "none",
		opacity: "0",
		[sizes.down("xs")]: {
			opacity: "0.6",
			width: "50px",
			marginLeft: "-25px",
		},
		[sizes.down("md")]: {
			opacity: "0.6",
		},
		[sizes.down("lg")]: {
			opacity: "0.6",
		},
	},
	boxContent: {
		position: "absolute",
		padding: "10px",
		width: "100%",
		left: "0px",
		bottom: "0px",
		color: "black",
		letterSpacing: "1px",
		textTransform: "uppercase",
		fontSize: "12px",
	},
	copyOverlay: {
		opacity: "0",
		zIndex: "0",
		width: "100%",
		height: "100%",
		transition: "transform 0.7s ease-in-out",
		transform: "scale(0.1)",
	},
	showOverlay: {
		opacity: "1",
		transform: "scale(50)",
		zIndex: "10",
		position: "absolute",
	},
	copyMessage: {
		position: "fixed",
		left: "0",
		right: "0",
		top: "0",
		bottom: "0",
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",
		fontSize: "2.5rem",
		transform: "scale(0.1)",
		opacity: "0",
		color: "white",
	},
	showCopyMessage: {
		opacity: "1",
		transform: "scale(1)",
		zIndex: "25",
		transition: "all 0.5s ease-in-out",
		transitionDelay: "0.3s",
		"& h1": {
			textAlign: "center",
			fontWeight: "400",
			width: "100%",
			marginBottom: "0px",
			padding: "1rem",
			textShadow: "1px 2px black",
			background: "rgba(255, 255, 255, 0.2)",
			textTransform: "uppercase",
			// [sizes.down("xs")]: {
			// 	fontSize: "5rem",
			// },
		},
		"& p": {
			color: (props) =>
				chroma(props.background).luminance() <= 0.5 ? "white" : "black",
			fontSize: "2.6rem",
			fontWeight: "100",
			opacity: "0.9",
		},
	},
};
