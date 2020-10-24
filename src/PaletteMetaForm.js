import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Slide from "@material-ui/core/Slide";

class PaletteMetaForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dialogOpen: false,
			open: false,
			newPaletteName: "",
			emoji: null,
			showEmojiPicker: false,
			isEnable: false,
		};
	}
	handleDialogOpen = () => {
		this.setState({ dialogOpen: true });
	};

	handleDialogClose = () => {
		this.setState({ dialogOpen: false });
	};
	Transition = React.forwardRef(function Transition(props, ref) {
		return <Slide direction='up' ref={ref} {...props} />;
	});

	handleClickOpen = () => {
		if (this.props.colors.length < 15) {
			this.handleDialogOpen();
		} else {
			this.setState({ open: true });
		}
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});

		let isEnable = this.props.palettes.every(
			(palette) =>
				palette.paletteName.toLowerCase() !==
				e.target.value.toLowerCase().trim()
		);
		console.log(isEnable);
		isEnable
			? this.setState({ isEnable: true })
			: this.setState({ isEnable: false });
	};

	addEmoji = (e) => {
		this.setState({ emoji: e.native });
	};
	showEmojiPicker = (e) => {
		this.setState({ showEmojiPicker: true });
	};

	componentDidMount() {
		ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
			return this.props.palettes.every(
				(palette) =>
					palette.paletteName.toLowerCase() !== value.toLowerCase().trim()
			);
		});
	}
	handleClose = () => {
		this.setState({ open: false });
		this.setState({ showEmojiPicker: false });
	};
	render() {
		const { open, dialogOpen } = this.state;
		return (
			<div>
				<Button
					variant='contained'
					color='primary'
					onClick={this.handleClickOpen}
					size='small'
					style={{ marginRight: "15px" }}
				>
					Save Palette
				</Button>

				<Dialog
					open={dialogOpen}
					TransitionComponent={this.Transition}
					keepMounted
					onClose={this.handleDialogClose}
					aria-labelledby='alert-dialog-slide-title'
					aria-describedby='alert-dialog-slide-description'
				>
					<DialogTitle id='alert-dialog-slide-title' align='center'>
						You need atleast 15 colors!
					</DialogTitle>
					<DialogActions>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								width: "100%",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Button
								variant='contained'
								onClick={this.handleDialogClose}
								color='primary'
							>
								Go Back
							</Button>
						</div>
					</DialogActions>
				</Dialog>

				<Dialog
					open={open}
					onClose={this.handleClose}
					aria-labelledby='form-dialog-title'
				>
					<DialogTitle id='form-dialog-title' style={{ textAlign: "center" }}>
						{this.state.showEmojiPicker
							? "Choose an Emoji"
							: "Choose a Palette Name"}
					</DialogTitle>
					<ValidatorForm
						onSubmit={() =>
							this.props.savePalette(
								this.state.newPaletteName,
								this.state.emoji
							)
						}
					>
						<DialogContent>
							<DialogContentText style={{ justifyContent: "center" }}>
								{this.state.showEmojiPicker
									? "Please choose an emoji!"
									: "Please enter a name for your palette. Make sure its unique!"}
							</DialogContentText>
							<div
								style={{
									display: this.state.showEmojiPicker ? "flex" : "none",
									zIndex: "10",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Picker onSelect={this.addEmoji} />
							</div>
							<TextValidator
								// style={{ marginRight: "15px", width: "100%" }}
								style={{
									display: this.state.showEmojiPicker ? "none" : "",
								}}
								margin='normal'
								fullWidth
								variant='filled'
								name='newPaletteName'
								onChange={this.handleChange}
								label='New Palette Name'
								value={this.state.newPaletteName}
								validators={["required", "isPaletteNameUnique"]}
								errorMessages={["Enter a Palette name", "Name already used!"]}
							/>
						</DialogContent>
						<DialogActions>
							<div
								style={{
									display: this.state.showEmojiPicker ? "none" : "flex",
									flexDirection: "row",
									width: "100%",
									justifyContent: "space-evenly",
									alignItems: "center",
								}}
							>
								<Button
									color='primary'
									onClick={this.showEmojiPicker}
									variant='contained'
									disabled={
										this.state.isEnable && this.state.newPaletteName.length > 0
											? false
											: true
									}
								>
									Choose Emoji
								</Button>

								<Button
									onClick={this.handleClose}
									variant='contained'
									color='secondary'
								>
									Cancel
								</Button>
							</div>
							<div
								style={{
									display: this.state.showEmojiPicker ? "flex" : "none",
									zIndex: "10",
									flexDirection: "row",
									width: this.state.showEmojiPicker ? "100%" : "0px",
									justifyContent: "space-evenly",
								}}
							>
								<Button
									style={{
										display: this.state.showEmojiPicker ? "flex" : "none",
									}}
									type='submit'
									onClick={() => this.handleClose()}
									color='primary'
									variant='contained'
								>
									Save
								</Button>
							</div>
						</DialogActions>
					</ValidatorForm>
				</Dialog>
			</div>
		);
	}
}

export default PaletteMetaForm;
