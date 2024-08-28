function ProjectCard({ title, description, link }) {
	return (
		<a className="project-card" target="_blank" href={link}>
			<div className="project-card-image-container">
			</div>
			<h2 className="project-card-title">{ title }</h2>
			<p className="project-card-description">{ description }</p>
		</a>
	);
}

export default ProjectCard;
