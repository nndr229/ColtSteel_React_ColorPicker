import React, { Component } from "react";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/ColorPickerFormStyles"

class ColorPickerForm extends Component {
	constructor(props) {
		super(props);
		this.state = { currentColor: "#428282", newColorName: "" };
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	componentDidMount() {
		ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
			return this.props.colors.every(
				(color) => color.name.toLowerCase() !== value.toLowerCase()
			);
		});
		ValidatorForm.addValidationRule("isColorValueUnique", (value) => {
			return this.props.colors.every(
				(color) => color.color !== this.state.currentColor
			);
		});
	}
	updateCurrentColor = (newColor) => {
		this.setState({ currentColor: newColor.hex });
	};
	render() {
		const { classes, colors, maxColors, addNewColor } = this.props;
		return (
			<div>
				<ChromePicker
					color={this.state.currentColor}
					onChange={this.updateCurrentColor}
					className={classes.picker}
				/>
				<ValidatorForm
					onSubmit={() => {
						return [
							addNewColor(this.state.newColorName, this.state.currentColor),
							this.setState({ newColorName: "" }),
						];
					}}
				>
					<TextValidator
						value={this.state.newColorName}
						name='newColorName'
						onChange={this.handleChange}
						validators={["required", "isColorNameUnique", "isColorValueUnique"]}
						errorMessages={[
							"Enter a color name",
							"Color Name must be unique!",
							"Color already used!",
						]}
						variant='filled'
						className={classes.colorInput}
						label="Color Name"
					/>
					<Button
						type='submit'
						variant='contained'
						color='primary'
						style={{
							backgroundColor:
								colors.length >= maxColors
									? "#BCC2BC"
									: this.state.currentColor,
						}}
						disabled={colors.length >= maxColors}
						className={classes.addColor}
					>
						{colors.length >= maxColors ? "Palette Full" : "Add New Color"}
					</Button>
				</ValidatorForm>
			</div>
		);
	}
}
export default withStyles(styles)(ColorPickerForm);
