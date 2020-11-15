import sizes from "./sizes";
export default {
	root: {
		backgroundColor: "white",
		borderRadius: "5px",
		border: "1px solid black",
	
		padding: "0.5rem",
		position: "relative",
		overflow: "hidden",

		marginBottom: "3px",
		"&:hover": {
			cursor: "pointer",
		},
		"&:hover svg": {
			width: "27px",
			cursor: "pointer",
		},
	},

	colors: {
		backgroundColor: "#dae2e1",
		borderRadius: "5px",
		height: "125px",
		maxHeight: "125px",
		// marginBottom:"-5px",
		width: "100%",
		overflow: "hidden",
		zIndex: "1",
		// marginBottom:"5px",
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
		height: "2.02rem",
		// maxHeight: "29%",
		width: "20%",
		display: "inline-block",
		margin: "0 auto",
		position: "relative",
		marginBottom: "-5.7px",
		// maxHeight: "25%",
	},
};
