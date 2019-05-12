import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Home from './pages/Home/Home.js';
import Projects from './pages/Projects/Projects.js';
import Contact from './pages/Contact/Contact.js';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
	}
	render() {
		console.log('App: render');
		return (
			<div className="App">
				<div className="App-Wrapper">
					<Header />
					<main>
						<Switch>
							<Route
								exact
								path="/"
								render={() => {
									return <Home />;
								}}
							/>
							<Route
								exact
								path="/projects"
								render={() => {
									return <Projects />;
								}}
							/>
							<Route
								exact
								path="/contact"
								render={() => {
									return <Contact />;
								}}
							/>
						</Switch>
					</main>
				</div>
			</div>
		);
	}
	componentDidMount() {
		console.log('App: componentDidMount');
	}
}

export default App;
