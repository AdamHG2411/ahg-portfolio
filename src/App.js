import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Home from './pages/Home/Home.js';
import Projects from './pages/Projects/Projects.js';
import Contact from './pages/Contact/Contact.js';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<body>
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
			</body>
		</div>
	);
}

export default App;
