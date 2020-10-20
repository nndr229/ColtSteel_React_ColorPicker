import React, { Component } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 380;

const styles = (theme) => ({
	root: {
		display: "flex",
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
		justifyContent: "center",
		alignItems: "center",
		marginRight: "15px",

		"& a": {
			textDecoration: "none",
		},
	},
});

class PaletteFormNav extends Component {
	constructor(props) {
		super(props);
		this.state = { newPaletteName: "", open: false };
	}
	componentDidMount() {
		ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
			return this.props.palettes.every(
				(palette) => palette.paletteName.toLowerCase() !== value.toLowerCase()
			);
		});
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	render() {
		const { open, classes, handleDrawerOpen, savePalette } = this.props;
		const { newPaletteName } = this.state;
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					color='default'
					position='fixed'
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open,
					})}
				>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							onClick={handleDrawerOpen}
							edge='start'
							className={clsx(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' noWrap>
							Create New Palette
						</Typography>
					</Toolbar>
					<div className={classes.navBtns}>
						<ValidatorForm
							onSubmit={() => savePalette(newPaletteName)}
							style={{
								display: "flex",
								flexDirection: "row",
								marginRight: "10px",
							}}
						>
							<TextValidator
								style={{ marginRight: "15px" }}
								variant='filled'
								name='newPaletteName'
								onChange={this.handleChange}
								label='New Palette Name'
								value={newPaletteName}
								validators={["required", "isPaletteNameUnique"]}
								errorMessages={["Enter a Palette name", "Name already used!"]}
							/>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Button
									variant='contained'
									size='small'
									color='primary'
									type='submit'
								>
									Save Palette
								</Button>
							</div>
						</ValidatorForm>
						<Link to='/'>
							<Button variant='contained' size='small' color='secondary'>
								Go Back
							</Button>
						</Link>
					</div>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
