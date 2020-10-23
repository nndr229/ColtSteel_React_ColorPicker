import sizes from "./sizes";
export default {
	Navbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		height: "7vh",
	},
	logo: {
		marginRight: "15px",
		padding: "0 13px",
		fontSize: "17px",
		backgroundColor: "rgba(223, 223, 209, 0.4)",
		height: "100%",
		display: "flex",
		alignItems: "center",
		"& a": {
			textDecoration: "none",
			color: "black",
		},
		[sizes.down("xs")]: {
			// display:"none",
			lineHeight:"16.7px",
			width: "110px",
			wordWrap: "wrap",
		},
	},
	slider: {
		width: "250px",
		[sizes.down("xs")]: {
			width: "120px",
		},
		margin: "auto 10px auto 10px",
		display: "inline-block",
		"& .rc-slider-rail": {
			height: "7.5px",
		},
		"& .rc-slider-track": {
			backgroundColor: "transparent",
		},
		"& .rc-slider-handle": {
			height: "17px",
			width: "17px",
		},
		"& .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
			background: "green",
			outline: "none",
			border: "2px solid rgb(166, 182, 166)",
		},
	},
	selectContainer: {
		marginLeft: "auto",
		marginRight: "10px",
		[sizes.down("xs")]: {
			width: "70px",
			marginLeft: "auto",
			marginRight: "40px",
		},
	},
};
