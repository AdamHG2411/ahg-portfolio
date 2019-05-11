import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GitHub, Linkedin, Twitter } from 'react-feather';

class Header extends Component {
	render() {
		console.log('Home: render');
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
					<a href="https://www.github.com/adamhg2411">
						<GitHub />
					</a>
					<a href="https://www.linkedin.com/in/adam-h-grider">
						<Linkedin />
					</a>
					<a href="https://www.twitter.com/ahgrider">
						<Twitter />
					</a>
				</div>
			</header>
		);
	}
}

export default Header;
