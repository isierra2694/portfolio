import ProjectCard from './content/ProjectCard';

export default function Home() {
	return (
		<div className="wrapper">
			<div className="home-hero-container">
				<h1 className="home-hero-name-label">INDY SIERRA</h1>
			</div>
			<div className="main-content-container">
				<section className="about-container">
					<h1 className="section-title">About</h1>
					<p>Hi!  I'm Indy, and I like to create unique experiences with code.  I'm currently studying at Whatcom Community College.  Outside of work and class, you can catch me learning and building my projects, hiking with my wife in the beautiful PNW, or escaping with some of my favorite video games.</p>
					<a href="/resume">Check out my resume</a>
					<br />
					<a href="mailto: isierra2694@gmail.com">Get in touch</a>
				</section>
				<section className="projects-container">
					<h1 className="section-title">Latest work</h1>	
					<div className="project-cards-grid">
							<ProjectCard title="Plainner" description="All in one plain planning app" link="https://plainner.com" />
						<ProjectCard title="Emailz" description="Simple email template manager" link="https://github.com/isierra2694/emailz" />
						<ProjectCard title="Bible Browser" description="Handy Bible explorer" link="https://github.com/isierra2694/bible-browser" />
						<ProjectCard title="React Timers" description="Accurate timer web app" link="https://isierra2694.github.io/react-timers/" />
							<ProjectCard title="Portfolio" description="This website" link="https://github.com/isierra2694/portfolio" />
					</div>
				</section>
			</div>
		</div>
	);
}
