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

class PaletteFormNav extends Component {
	constructor(props) {
		super(props);
		this.state = { newPaletteName: "" ,open:false};
	}
	componentDidMount() {
		ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
			return this.props.palettes.every(
				(palette) => palette.paletteName.toLowerCase() !== value.toLowerCase()
			);
		});
    }
    handleChange = (e)=> {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}
	render() {
        const { open,classes,handleDrawerOpen,savePalette} = this.props;
        const {newPaletteName} = this.state ;
		return (
			<div>
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
							New Palette
						</Typography>
						<ValidatorForm onSubmit={()=>savePalette(newPaletteName)}>
							<TextValidator
								name='newPaletteName'
								onChange={this.handleChange}
								label='New Palette Name'
								value={newPaletteName}
								validators={["required", "isPaletteNameUnique"]}
								errorMessages={["Enter a Palette name", "Name already used!"]}
							/>
							<Button variant='contained' color='primary' type='submit'>
								Save Palette
							</Button>
							<Link to='/'>
								<Button variant='contained' color='secondary'>
									Go Back
								</Button>
							</Link>
						</ValidatorForm>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default PaletteFormNav;
