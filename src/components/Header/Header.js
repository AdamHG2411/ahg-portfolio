import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		return (
			<header className="App-Header">
				<Link to="/">
					<h1 className="App-Title">Adam Grider - Software Engineer</h1>
				</Link>
				<nav className="App-Nav">
					<NavLink to="/projects">Projects</NavLink>
					<NavLink to="/contact">Contact</NavLink>
				</nav>
				<div className="App-Social">
					<a href="https://www.github.com/adamhg2411">gh</a>
					<a href="https://www.linkedin.com/in/adam-h-grider">li</a>
					<a href="https://www.twitter.com/ahgrider">tw</a>
				</div>
			</header>
		);
	}
}

export default Header;
