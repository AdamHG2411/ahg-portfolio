import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GitHub, Linkedin, Twitter } from 'react-feather';
import './Header.css';

class Header extends Component {
	render() {
		console.log('Home: render');
		return (
			<header className="Header">
				<div className="Header-Title">
					<Link to="/">
						<h1 className="Title-Name">Adam Grider</h1>
						<h1 className="Title-Title">Software Engineer</h1>
					</Link>
					<nav className="Header-Nav">
						<NavLink exact to="/" activeClassName="selected" activeStyle={{ color: 'skyblue' }}>
							Home
						</NavLink>
						<NavLink to="/projects" activeClassName="selected" activeStyle={{ color: 'skyblue' }}>
							Projects
						</NavLink>
						<NavLink to="/contact" activeClassName="selected" activeStyle={{ color: 'skyblue' }}>
							Contact
						</NavLink>
					</nav>
				</div>
				<div className="Header-Social">
					<a href="https://www.github.com/adamhg2411">
						<p>GitHub</p>
						<GitHub height={20} width={20} />
					</a>
					<a href="https://www.linkedin.com/in/adam-h-grider">
						<p>LinkedIn</p>
						<Linkedin height={20} width={20} />
					</a>
					<a href="https://www.twitter.com/ahgrider">
						<p>Twitter</p>
						<Twitter height={20} width={20} />
					</a>
				</div>
			</header>
		);
	}
}

export default Header;
