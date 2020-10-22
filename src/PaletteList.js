import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";

class PaletteList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.goToPalette = this.goToPalette.bind(this);
	}
	goToPalette(id) {
		this.props.history.push(`/palette/${id}`);
	}
	handleDeleteClick = (e,id) =>{
		e.stopPropagation();
		this.props.deletePalette(id)
	}
	render() {
		const { palettes, classes } = this.props;

		return (
			<div className={classes.root}>
				   {/* background by SVGBackgrounds.com  */}
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>React Colors</h1>
						<Link to='/palette/new'>Create Palette</Link>
					</nav>
					<div className={classes.palettes}>
						{palettes.map((palette) => {
							return (
								<MiniPalette
									{...palette}
									handleDeleteClick = {this.handleDeleteClick}
									handleClick={() => this.goToPalette(palette.id)}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
