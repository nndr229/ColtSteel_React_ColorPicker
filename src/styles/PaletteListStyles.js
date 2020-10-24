import sizes from "./sizes";
import bg from "./bg.svg";
export default {

	dialogTitle: {
		
	},
	root: {
		overflowY: "scroll",
		//background by SVGBackgrounds.com
		height:"100vh",
		backgroundColor: "#20aaa3",
		backgroundImage: `url(${bg})`,
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
	
	},
	container: {

		width: "60%",
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
		[sizes.down("lg")]: {
			width: "70%",
		},
		[sizes.down("md")]: {
			width: "90%",
		},
	},
	nav: {
		color: "white",
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		fontWeight: "bold",

		// textShadow: "1px 1px rgba(0,0,0,1)",
		fontSize: "22px",
		"&:hover a": {
			// opacity: "1",
			[sizes.down("home_xs")]: {
				transform: "none",
				textDecoration: "none",
			
			},
			transform: "scale(1.3)",
			textDecoration: "underline",
		},
		"& a": {
			fontSize: "22px",
			color: "white",
			// background:"red",
			textDecoration: "none",

			textShadow: "1.2px 1.2px rgba(255,255,255,0.2)",
			transition: "0.4s ease-in-out",
			[sizes.down("home_xs")]: {
				marginRight: "15px",
				fontSize: "20px",
				fontWeight: "bold",
				transition: "0.4s ease-in-out",
			},
		},
	},
	palettes: {
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(3,30%)",
		gridGap: "5%",
		[sizes.down("md")]: {
			marginLeft: "7%",
			gridTemplateColumns: "repeat(2,40%)",
			gridGap: "5%",
		},

		[sizes.down("xs")]: {
			marginLeft: "13%",
			gridTemplateColumns: "repeat(1,70%)",
			gridGap: "2%",
		},
	},
};
