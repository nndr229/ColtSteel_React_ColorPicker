let routeArr=[]
const styles = {
	"@global": {
		".page": {
			height: "100vh",
			maxHeight:"100vh",
			position: "fixed",
			width: "100%",
		
			transition: "transform 200ms ease-in-out",

		},
		".page-enter": {
			transform: (props) => {
	
				routeArr.push(props.routeProps.location.pathname);
				if (routeArr.length === 1 && routeArr[0] === "/") {
                    routeArr =[]
                    return "translateX(-100%) scaleY(0)";
				} else if (routeArr.length === 1 && routeArr[0] !== "/") {
                    routeArr =[]
                    return "translateX(100%) scaleY(0)";
				}
			},

		},
		".page-enter-active": {
			transform: "translateX(0) scaleY(0)",
		},
		".page-exit-active": {
			// transform: (props) => {
			// 	routeArr.push(props.routeProps.location.pathname);
			// 	if (routeArr.length === 1 && routeArr[0] === "/") {
            //         routeArr =[]
            //         return "translateX(100%)";
			// 	} else if (routeArr.length === 1 && routeArr[0] !== "/") {
            //         routeArr =[]
            //         return "translateX(-100%)";
			// 	}
			// },
		},
	},
};
export default styles;
