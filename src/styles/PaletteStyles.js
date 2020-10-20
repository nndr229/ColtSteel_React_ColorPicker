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
