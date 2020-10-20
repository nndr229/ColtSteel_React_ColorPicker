export default {
	root: {
		backgroundColor: "steelblue",
		height: "100vh",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
	},
	container: {
		width: "50%",
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
	},
	nav: {
		color: "white",
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		"& a": {
			color: "white",
			textDecoration: "none",
		},
	},
	palettes: {
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(3,30%)",
		gridGap: "5%",
	},
};
