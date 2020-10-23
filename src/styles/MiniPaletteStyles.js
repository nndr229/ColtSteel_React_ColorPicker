import sizes from "./sizes";
export default {
	root: {
		backgroundColor: "white",
		borderRadius: "5px",
		border: "1px solid black",
		padding: "0.5rem",
		position: "relative",
		overflow: "hidden",
		marginBottom: "2px",
		"&:hover": {
			cursor: "pointer",
		},
		"&:hover svg": {
			width: "27px",
			cursor: "pointer",
		},
	},

	colors: {
		backgroundColor: "#dae1e4",
		borderRadius: "5px",
		height: "130px",
		width: "100%",
		overflow: "hidden",
		zIndex: "0",
	},
	deleteIcon: {
		[sizes.down("xs")]: {
			width: "27px",
		},
		[sizes.down("md")]: {
			width: "27px",
		},
		[sizes.down("lg")]: {
			width: "27px",
		},

		width: "0",
		zIndex: "29",
		position: "absolute",
		transition: "all 0.3s ease-in-out",
		color: "white",
		// border:"1px solid red",
		background: "red",
		borderRadius: "4px",
		// alignSelf: "flex-end",
	},
	title: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		margin: "0",
		color: "black",
		paddingTop: "0.5rem",
		fontSize: "1rem",
		position: "relative",
	},

	emoji: { marginLeft: "0.5rem", fontSize: "1.5rem" },
	miniColor: {
		height: "25%",
		width: "20%",
		display: "inline-block",
		margin: "0 auto",
		position: "relative",
		marginBottom: "-4.4px",
	},
};
