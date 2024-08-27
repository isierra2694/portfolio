import ProjectCard from "./content/ProjectCard";

export default function Home() {
	return (
		<div className="wrapper">
			<div className="home-hero-container">
				<h1 className="home-hero-name-label">INDY SIERRA</h1>
			</div>
			<div className="main-content-container">
				<section className="about-container">
					<h1>ABOUT</h1>
					<p>I am a developer who is committed to building unique experiences.  My passion for programming flourished from my curiosity about how my favorite game worked.  Currently, I am studying software development at Whatcom Community College and I have hands-on experience with several different languages and technologies.</p>
					<a href="/resume">Check out my resume</a>
				</section>	
				<section className="projects-container">
					<h1>PROJECTS</h1>
					<div className="project-cards-grid">
						<ProjectCard title="Plainner" description="All in one plain planning app" />
						<ProjectCard title="Emailz" description="Simple email template manager" />
						<ProjectCard title="Bible Browser" description="Handy Bible explorer" />
						<ProjectCard title="React Timers" description="Accurate timer web app" />
						<ProjectCard title="Portfolio" description="This website" />
					</div>
				</section>
			</div>
		</div>
	);
}
