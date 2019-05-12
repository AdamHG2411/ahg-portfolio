import React, { Component } from 'react';
import './Projects.css';
const allProjects = require('../../proj.json');

class Projects extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		let projectCards = allProjects.map((project, i) => {
			const projectImg = `../../images/${project.id}.png`;
			return (
				<div className="Project-Card" key={i}>
					<img src={projectImg} alt={project.name} />
					<h2 className="Project-Name">{project.name}</h2>
					<p>{project.description}</p>
					<p>{project.tech.join(' | ')}</p>
				</div>
			);
		});
		return <div className="Project-List">{projectCards}</div>;
	}
}

export default Projects;
