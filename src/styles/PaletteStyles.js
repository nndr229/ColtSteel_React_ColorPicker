import sizes from "./sizes"
export default  {
	Palette: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
	},
	colors: {
		height: "87%",
	},
	goBack:{
		backgroundColor: 'black',
		position: 'relative',
		
		[sizes.down("lg")]:{
			width:"33.333%",
			height: '50.0%',
		},
		[sizes.down("md")]:{
			width:"50%",
			height: '50%',
		},
		[sizes.down("xs")]:{
			width:"100%",
			height: '15%',
			// height:props =>(props.showingFullPalette ? "8%" : "15%")
		},
		width: '20%',
		height: '50%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		marginBottom: '-4.5px',
		"& a":{
			cursor: 'pointer',
			width: '80px',
			height: '25px',
			position: 'absolute',
			display: 'inline-block',
			top: '50%',
			left: '50%',
			marginTop: '-15px',
			marginLeft: '-40px',
			textAlign: 'center',
			outline:'none',
			background: 'rgba(255, 255, 255, 0.3)',
			fontSize: '0.76em',
			color: 'azure',
			textTransform: 'uppercase',
			lineHeight: '1.99',
			border: 'none',
			textDecoration: 'none',
			opacity: '0.9'
		}
	}
};
