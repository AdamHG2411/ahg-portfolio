import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		return (
			<div className="Contact">
				<h2>Contact</h2>
				<div className="Contact-Form">
					<p>
						Thanks for your interest! I'm actively seeking full-time employment beginning in mid-June 2019,
						and I would love to help on a freelance basis with any apps or websites you want to build.
					</p>
					<p>
						I'll be adding a form here to send me an email soon. Until then, please don't hesitate to reach
						out to me on <a href="https://www.linkedin.com/in/adam-h-grider">LinkedIn</a> or{' '}
						<a href="https://www.twitter.com/ahgrider">Twitter</a>.
					</p>
				</div>
			</div>
		);
	}
}

export default Contact;
