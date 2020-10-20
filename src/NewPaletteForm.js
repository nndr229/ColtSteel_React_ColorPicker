import React, { Component } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";
import DraggableColorList from "./DraggableColorList";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { arrayMove } from "react-sortable-hoc";

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
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	},
	content: {
		height: "calc(100vh - 64px)",
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
});

class NewPaletteForm extends Component {
	static defaultProps = {
		maxColors: 20,
	};
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			currentColor: "teal",
			colors: this.props.palettes[0].colors,
			newColorName: "",
			newPaletteName: "",
		};
		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
		this.handleDrawerClose = this.handleDrawerClose.bind(this);
		this.updateCurrentColor = this.updateCurrentColor.bind(this);
		this.addNewColor = this.addNewColor.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.removeColor = this.removeColor.bind(this);
		this.clearColors = this.clearColors.bind(this);
		this.addRandomColor = this.addRandomColor.bind(this);
	}
	componentDidMount() {
		ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
			return this.state.colors.every(
				(color) => color.name.toLowerCase() !== value.toLowerCase()
			);
		});
		ValidatorForm.addValidationRule("isColorValueUnique", (value) => {
			return this.state.colors.every(
				(color) => color.color !== this.state.currentColor
			);
		});
		ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
			return this.props.palettes.every(
				(palette) => palette.paletteName.toLowerCase() !== value.toLowerCase()
			);
		});
	}
	handleDrawerOpen() {
		this.setState({ open: true });
	}

	handleDrawerClose() {
		this.setState({ open: false });
	}

	updateCurrentColor(newColor) {
		this.setState({ currentColor: newColor.hex });
	}

	clearColors() {
		this.setState({ colors: [] });
	}

	addRandomColor() {
		const allColors = this.props.palettes.map((p) => p.colors).flat();
		let rand = Math.floor(Math.random() * allColors.length);
		const randomColor = allColors[rand];
		this.setState({ colors: [...this.state.colors, randomColor] });
	}
	savePalette = () => {
		let newName = this.state.newPaletteName;
		const newPalette = {
			paletteName: newName,
			id: newName.toLowerCase().replace(/ /g, "-"),
			colors: this.state.colors,
		};
		this.props.savePalette(newPalette);
		this.props.history.push("/");
	};

	addNewColor() {
		const color = {
			color: this.state.currentColor,
			name: this.state.newColorName,
		};
		this.setState((st) => ({
			colors: [...st.colors, color],
			newColorName: "",
		}));
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}
	removeColor = (colorName) => {
		this.setState({
			colors: this.state.colors.filter((color) => color.name !== colorName),
		});
	};
	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ colors }) => ({
			colors: arrayMove(colors, oldIndex, newIndex),
		}));
	};
	render() {
		const { classes,maxColors } = this.props;
		const { open,colors } = this.state;
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
							onClick={this.handleDrawerOpen}
							edge='start'
							className={clsx(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' noWrap>
							New Palette
						</Typography>
						<ValidatorForm onSubmit={this.savePalette}>
							<TextValidator
								name='newPaletteName'
								onChange={this.handleChange}
								label='New Palette Name'
								value={this.state.newPaletteName}
								validators={["required", "isPaletteNameUnique"]}
								errorMessages={["Enter a Palette name", "Name already used!"]}
							/>
							<Button variant='contained' color='primary' type='submit'>
								Save Palette
							</Button>
						</ValidatorForm>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant='persistent'
					anchor='left'
					open={open}
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<Typography variant='h4'>Design Your Palette</Typography>
					<div>
						<Button
							variant='contained'
							color='secondary'
							onClick={this.clearColors}
						>
							Clear Palette
						</Button>{" "}
						<Button
							variant='contained'
							color='primary'
							onClick={this.addRandomColor}
							disabled = {colors.length>=maxColors}
						>
							{colors.length>=maxColors?"Palette Full":"Random Color"}
						</Button>
					</div>
					<ChromePicker
						color={this.state.currentColor}
						onChangeComplete={this.updateCurrentColor}
					/>
					<ValidatorForm onSubmit={this.addNewColor}>
						<TextValidator
							value={this.state.newColorName}
							name='newColorName'
							onChange={this.handleChange}
							validators={[
								"required",
								"isColorNameUnique",
								"isColorValueUnique",
							]}
							errorMessages={[
								"Enter a color name",
								"Color Name must be unique!",
								"Color already used!",
							]}
						/>
						<Button
							type='submit'
							variant='contained'
							color='primary'
							style={{ backgroundColor: colors.length>=maxColors?"#BCC2BC":this.state.currentColor }}
							disabled = {colors.length>=maxColors}
						>
							{colors.length>=maxColors?"Palette Full":"Add New Color"}
						</Button>
					</ValidatorForm>
				</Drawer>
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open,
					})}
				>
					<div className={classes.drawerHeader} />
					<DraggableColorList
						colors={this.state.colors}
						removeColor={this.removeColor}
						axis='xy'
						onSortEnd={this.onSortEnd}
					/>
				</main>
			</div>
		);
	}
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);
