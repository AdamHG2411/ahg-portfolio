import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Adam = require('../../images/adam.jpg');

class Home extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		return (
			<div>
				<div className="Home-About">
					<h2>Welcome!</h2>

					<div className="About-Text">
						<p>
							I'm a full-stack software engineer in Arlington, Virginia with a background in international
							affairs, environmental conservation, and project management. Through open communication,
							creative thinking, and the relentless pursuit of new skills, I build polished apps and
							websites tailored to meet your needs and achieve your desired impacts.
						</p>
						<p>
							I recently completed the Software Engineering Immersive program at General Assembly and I am
							seeking full-time employment as a full-stack or front-end software engineer.
						</p>
						<p>
							I am also on the lookout for freelance jobs, so if you have an app or website idea and want
							to work together, please don't hesitate to{' '}
							<Link id="contactLink" to="/contact">
								contact me
							</Link>{' '}
							for a free quote and/or consultation!
						</p>
					</div>

					<img className="About-Img" src={Adam} alt="Adam Grider - Software Engineer" />
				</div>
			</div>
		);
	}
}

export default Home;
