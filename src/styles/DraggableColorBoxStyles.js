export default {
	root: {
		width: "20%",
		height: "25%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		marginBottom: "-5.5px",
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