import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";

class MiniPalette extends PureComponent {
	render() {
		console.log("render mini palette " + this.props.paletteName);
		const {
			classes,
			paletteName,
			emoji,
			colors,
			handleClick,
			handleDeleteClick,
			id,
		} = this.props;
		const miniColorBoxes = colors.map((color) => (
			<div
				key={color.name}
				className={classes.miniColor}
				style={{ backgroundColor: color.color }}
			></div>
		));
		return (
			<div className={classes.root} onClick={handleClick}>
				<DeleteIcon
					style={{ top: "9", right: "8" }}
					className={classes.deleteIcon}
					onClick={(e) => handleDeleteClick(e, id)}
				/>
				<div className={classes.colors}>{miniColorBoxes} </div>
				<h5 className={classes.title}>
					{paletteName}
					<span className={classes.emoji}>{emoji}</span>
				</h5>
			</div>
		);
	}
}

export default withStyles(styles)(MiniPalette);
