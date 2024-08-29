function ProjectCard({ title, description, image, link, badges }) {
	return (
		<div className="project-card">
			<div className="project-card-image-container">
				<a target="_blank" rel="noreferrer" href={link}>
					<img src={image} alt="Project window"></img>
				</a>
			</div>
			<div className="project-card-about-container">
				<h2 className="project-card-title">{ title }</h2>
				<p className="project-card-description">{ description }</p>
				<div className="project-card-badges">
					{badges && badges.map((badge, index) => (
						<img
							key={index}
							src={badge}
							alt="Tech badge"
							style={{ marginRight: '5px', height: '25px' }}
						/>
					))}
				</div>
				<br />
				<a target="_blank" rel="noreferrer" href={link}>Check out { title }</a>
			</div>
		</div>
	);
}

export default ProjectCard;
