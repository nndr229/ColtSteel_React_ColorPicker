import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteStyles"


class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500, format: "hex" };
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}
	changeLevel(newLevel) {
		this.setState({ level: newLevel });
	}
	changeFormat(val) {
		this.setState({ format: val });
	}
	render() {
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { classes } = this.props;
		const { level, format } = this.state;
		const colorBoxes = colors[level].map((color) => {
			return (
				<ColorBox
					background={color[format]}
					name={color.name}
					key={color.id}
					id={color.id}
					paletteId={id}
					showingFullPalette={true}
				/>
			);
		});
		return (
			<div className={classes.Palette}>
				<Navbar
					showingAllColors={true}
					level={level}
					handleChange={this.changeFormat}
					changeLevel={this.changeLevel}
				/>
				<div className={classes.colors}>{colorBoxes}</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(Palette);
