import React, { Component } from 'react';

class Home extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		return (
			<div>
				<p>Home</p>
			</div>
		);
	}
}

export default Home;
