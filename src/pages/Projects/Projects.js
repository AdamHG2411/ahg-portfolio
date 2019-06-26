import React, { Component } from 'react';
import { Globe, Code } from 'react-feather';
import './Projects.css';
const allProjects = require('../../proj.json');

class Projects extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		let projectCards = allProjects.sort((a, b) => (a.published < b.published ? 1 : -1)).map((project, i) => {
			const projectTech = project.tech.map((tech, j) => {
				return (
					<p className="Tech-Used" key={`${i}-${j}`}>
						{tech}
					</p>
				);
			});
			const projectImg = require(`../../images/${project.id}.png`);
			return (
				<div className="Project-Card" key={i}>
					<div className="Project-Img">
						<img className="Img-File" src={projectImg} alt={project.name} />
					</div>
					<div className="Project-Info">
						<h2 className="Project-Name">{project.name}</h2>
						<div className="Project-Links">
							<a href={project.url} target="_blank">
								<Globe height={20} width={20} />
								<p>Deployed</p>
							</a>
							<a href={project.repo} target="_blank">
								<Code height={20} width={20} />
								<p>Code Repo</p>
							</a>
						</div>
						<p className="Project-Desc">{project.description}</p>
					</div>
					<div className="Project-Tech">{projectTech}</div>
				</div>
			);
		});
		return <div className="Project-List">{projectCards}</div>;
	}
}

export default Projects;
