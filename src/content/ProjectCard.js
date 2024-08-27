function ProjectCard({ title, description }) {
	return (
		<div className="project-card">
			<div className="project-card-image-container">
			</div>
			<h2 className="project-card-title">{ title }</h2>
			<p className="project-card-description">{ description }</p>
		</div>
	);
}

export default ProjectCard;
