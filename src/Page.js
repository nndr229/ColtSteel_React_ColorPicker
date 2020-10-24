import React, { Component } from "react";
import styles from "./styles/PageStyles";
import { withStyles } from "@material-ui/styles";

class Page extends Component {
	render() {
		return <div className='page'>{this.props.children}</div>;
	}
}

export default withStyles(styles)(Page);
