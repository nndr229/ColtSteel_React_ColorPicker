import sizes from "./sizes";
export default {
	root: {
		overflow: "scroll",
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
		[sizes.down("lg")]: {
			width:"70%",
		},
		[sizes.down("md")]: {
			width:"90%",
		},
		
	},
	nav: {
		color: "white",
		display: "flex",
		width: "100%",
		justifyContent: "space-around",
		alignItems: "center",
		"&:hover a": {
			opacity: "1",
			transform: "scale(1.2)",
			textDecoration:"underline",
		},
		"& a": {
			fontSize: "17px",
			color: "white",
			textDecoration: "none",
			fontWeight:"bold",
			textShadow: "1px 1px rgba(0,0,0,1)",
			transition: "0.4s ease-in-out",
			[sizes.down("home_xs")]: {
				marginRight:"10px",
			fontSize: "17px",
			fontWeight:"bold",
			transition: "0.4s ease-in-out"

			},
		
		},
	},
	palettes: {
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(3,30%)",
		gridGap:"5%",
		[sizes.down("xs")]: {
			marginLeft:"13%",
			gridTemplateColumns: "repeat(1,70%)",
			gridGap: "2%",
		},
		
	},
};
