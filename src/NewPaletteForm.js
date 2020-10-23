import React, { Component } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import Button from "@material-ui/core/Button";
import DraggableColorList from "./DraggableColorList";

import { arrayMove } from "react-sortable-hoc";
import PaletteFormNav from "./PaletteFormNav";

import ColorPickerForm from "./ColorPickerForm";
import styles from "./styles/NewPaletteFormStyles";

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
			randomColors: [],
			newPaletteName: "",
		};
		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
		this.handleDrawerClose = this.handleDrawerClose.bind(this);
		// this.updateCurrentColor = this.updateCurrentColor.bind(this);
		this.addNewColor = this.addNewColor.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.removeColor = this.removeColor.bind(this);
		this.clearColors = this.clearColors.bind(this);
		this.addRandomColor = this.addRandomColor.bind(this);
	}

	handleDrawerOpen() {
		this.setState({ open: true });
	}

	handleDrawerClose() {
		this.setState({ open: false });
	}

	clearColors() {
		this.setState({ colors: [] ,randomColors:[]});
	}

	addRandomColor() {
		const allColors = this.props.palettes.map((p) => p.colors).flat();
		let rand = Math.floor(Math.random() * allColors.length);
		if (this.state.randomColors.some((colorInd) => colorInd === rand)) {
			this.addRandomColor();
		} else {
			let randomColor = allColors[rand];
			randomColor.color = randomColor.color.toUpperCase();
			console.log(randomColor);
			this.setState({
				colors: [...this.state.colors, randomColor],
				randomColors: [...this.state.randomColors,rand],
			});
		}
	}
	savePalette = (newPaletteName, emoji) => {
		let newName = newPaletteName;
		const newPalette = {
			paletteName: newName,
			id: newName.toLowerCase().replace(/ /g, "-"),
			emoji: emoji,
			colors: this.state.colors,
		};
		this.props.savePalette(newPalette);
		this.props.history.push("/");
	};

	addNewColor(colorName, colorValue) {
		const color = {
			color: colorValue,
			name: colorName,
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
		const { classes, maxColors, palettes } = this.props;
		const { open, colors } = this.state;
		return (
			<div className={classes.root}>
				<PaletteFormNav
					open={open}
					palettes={palettes}
					handleDrawerOpen={this.handleDrawerOpen}
					savePalette={this.savePalette}
				/>
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
					<div className={classes.container}>
						<Typography variant='h4' gutterBottom>
							Design Your Palette
						</Typography>
						<div className={classes.buttons}>
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
								disabled={colors.length >= maxColors}
							>
								{colors.length >= maxColors ? "Palette Full" : "Random Color"}
							</Button>
						</div>
						<ColorPickerForm
							colors={colors}
							maxColors={maxColors}
							addNewColor={this.addNewColor}
						/>
					</div>
				</Drawer>
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open,
					})}
				>
					<div className={classes.drawerHeader} />
					<DraggableColorList
						open={this.state.open}
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
