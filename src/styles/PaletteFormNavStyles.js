import { DRAWER_WIDTH } from "../constants";
const drawerWidth = DRAWER_WIDTH

export default (theme) => ({
	root: {
		display: "flex",
	},
	hide: {
		display: "none",
	},
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		flexDirection: "row",
		justifyContent: "space-between",
		height: "65px",
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	navBtns: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginRight: "15px",

		"& a": {
			textDecoration: "none",
		},
	},
});
