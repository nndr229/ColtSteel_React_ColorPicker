import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";

import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

class PaletteList extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false, id: null };
		this.goToPalette = this.goToPalette.bind(this);
	}
	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};
	Transition = React.forwardRef(function Transition(props, ref) {
		return <Slide direction='up' ref={ref} {...props} />;
	});

	goToPalette(id) {
		this.props.history.push(`/palette/${id}`);
	}
	handleDeleteClick = (e, id) => {
		e.stopPropagation();
		this.handleClickOpen();
		this.setState({ id: id });
		// this.props.deletePalette(id);
	};
	handleDelete = (e) => {
		this.handleClose();
		this.props.deletePalette(this.state.id);
	};
	render() {
		const { palettes, classes } = this.props;
		const { open } = this.state;
		return (
			<div className={classes.root}>
				{/* background by SVGBackgrounds.com  */}
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>React Colors</h1>
						<Link to='/palette/new'>Create Palette</Link>
					</nav>

					<Dialog
						open={open}
						// TransitionComponent={this.Transition}
						keepMounted
						onClose={this.handleClose}
						aria-labelledby='alert-dialog-slide-title'
						aria-describedby='alert-dialog-slide-description'
					>
						<DialogTitle
							id='alert-dialog-slide-title'
							align="center"
						>
							Are You Sure?
						</DialogTitle>
						<DialogActions>
							<Button
								variant='contained'
								onClick={this.handleClose}
								color='primary'
							>
								Go Back
							</Button>
							<Button
								variant='contained'
								onClick={this.handleDelete}
								color='secondary'
							>
								Delete
							</Button>
						</DialogActions>
					</Dialog>

					<TransitionGroup className={classes.palettes}>
						{palettes.map((palette) => {
							return (
								<CSSTransition key={palette.id} classNames='fade' timeout={600}>
									<MiniPalette
										{...palette}
										handleDeleteClick={this.handleDeleteClick}
										handleClick={() => this.goToPalette(palette.id)}
									/>
								</CSSTransition>
							);
						})}
					</TransitionGroup>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
