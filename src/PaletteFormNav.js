import React, { Component } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import PaletteMetaForm from "./PaletteMetaForm";
import styles from "./styles/PaletteFormNavStyles";

class PaletteFormNav extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false };
	}

	render() {
		const { open, classes, handleDrawerOpen, savePalette } = this.props;
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
							className={clsx(classes.menuButton, { [classes.hide]: open })}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' noWrap>
							Create New Palette
						</Typography>
					</Toolbar>
					<div className={classes.navBtns}>
						<PaletteMetaForm
							savePalette={savePalette}
							palettes={this.props.palettes}
						/>

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
