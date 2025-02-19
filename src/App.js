import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Page from "./Page";

class App extends Component {
	constructor(props) {
		super(props);
		const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
		this.state = { palettes: savedPalettes || seedColors };
		this.savePalette = this.savePalette.bind(this);
		this.findPalette = this.findPalette.bind(this);
		this.syncLocalStorage = this.syncLocalStorage.bind(this);
	}
	findPalette(id) {
		return this.state.palettes.find((palette) => palette.id === id);
	}

	deletePalette = (id) => {
		console.log(id);
		this.setState(
			{
				palettes: this.state.palettes.filter((palette) => palette.id !== id),
			},
			this.syncLocalStorage
		);
	};

	savePalette(newPalette) {
		this.setState(
			{ palettes: [...this.state.palettes, newPalette] },
			this.syncLocalStorage
		);
	}

	syncLocalStorage() {
		window.localStorage.setItem(
			"palettes",
			JSON.stringify(this.state.palettes)
		);
	}
	render() {
		const { palettes } = this.state;
		return (
			<Route
				render={({ location }) => (
					<TransitionGroup>
						<CSSTransition key={location.key} classNames='page' timeout={350}>
							<Switch location={location}>
								<Route
									exact
									path='/palette/new'
									render={(routeProps) => (
										<Page routeProps={routeProps}>
											<NewPaletteForm
												{...routeProps}
												palettes={this.state.palettes}
												savePalette={this.savePalette}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path='/'
									render={(routeProps) => (
										<Page routeProps={routeProps}>
											<PaletteList
												{...routeProps}
												palettes={palettes}
												deletePalette={this.deletePalette}
											/>
										</Page>
									)}
								/>

								<Route
									exact
									path='/palette/:id'
									render={(routeProps) => (
										<Page routeProps={routeProps}>
											<Palette
												palette={generatePalette(
													this.findPalette(routeProps.match.params.id)
												)}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path='/palette/:paletteId/:colorId'
									render={(routeProps) => (
										<Page routeProps={routeProps}>
											<SingleColorPalette
												colorId={routeProps.match.params.colorId}
												palette={generatePalette(
													this.findPalette(routeProps.match.params.paletteId)
												)}
											/>
										</Page>
									)}
								/>
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			/>
		);
	}
}

export default App;
