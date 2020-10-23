import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/styles";
import styles from "./styles/ColorBoxStyles";

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = { copied: false };
		this.changeCopyState = this.changeCopyState.bind(this);
	}
	changeCopyState() {
		this.setState({ copied: true }, () => {
			setTimeout(() => this.setState({ copied: false }), 1000);
		});
	}
	render() {
		const {
			name,
			background,
			paletteId,
			id,
			showingFullPalette,
			classes,
		} = this.props;
		const { copied } = this.state;

		return (
			<div style={{ background }} className={classes.colorBox}>
				<div
					style={{ background }}
					className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
				/>
				<div
					className={`${classes.copyMessage} ${
						copied && classes.showCopyMessage
					}`}
				>
					<h1>copied</h1>
					<p>{background}</p>
				</div>

				<div className='copy-container'>
					<div className={classes.boxContent}>
						<span
							className={classes.colorBoxName}
							
						>
							{name}
						</span>
					</div>
					<CopyToClipboard text={background} onCopy={this.changeCopyState}>
						<button className={`${classes.copyButton}`}>Copy!</button>
					</CopyToClipboard>
				</div>

				{showingFullPalette && (
					<Link
						to={`/palette/${paletteId}/${id}`}
						onClick={(e) => e.stopPropagation()}
					>
						<span className={`${classes.seeMore}`}>More</span>
					</Link>
				)}
			</div>
		);
	}
}

export default withStyles(styles)(ColorBox);
