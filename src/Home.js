import ProjectCard from './content/ProjectCard';
import ShipWireframeImage from './content/ShipWireframeImage';

export default function Home() {
	return (
		<div className="wrapper">
			<div className="home-hero-container">
				<h1 className="home-hero-name-label">SCROLL DOWN</h1>
			</div>
			<div className="main-content-container">
				<div className="main-content">
				<section className="about-container">
					<div className="about-text">
						<h1 className="section-title">About</h1>
						<p>Hi!  I'm Indy, and I like to create unique experiences with code.  I'm currently studying at Whatcom Community College.  Outside of work and class, you can catch me learning and building my projects, hiking with my wife in the beautiful PNW, or escaping with some of my favorite video games.</p>
						<div className="about-links">
							<a target="_blank" rel="noreferrer" href="/resume.pdf">Check out my resume</a>
							<br />
							<a href="mailto: isierra2694@gmail.com">Get in touch</a>
						</div>
					</div>
					<div className="about-image">
						<ShipWireframeImage />
					</div>
				</section>
				<section className="projects-container">
					<h1 className="section-title">Latest work</h1>	
					<div className="project-cards-grid">
						<ProjectCard 
							title="Plainner" 
							description="All in one plain planning app"
							image="/plainner.png" 
							link="https://plainner.com"
							badges={plainnerBadges}
						/>
						<ProjectCard 
							title="Emailz" 
							description="Simple email template manager" 
							image="/emailz.PNG"
							link="https://github.com/isierra2694/emailz"
							badges={emailzBadges}
						/>
						<ProjectCard 
							title="Bible Browser" 
							description="Handy Bible explorer" 
							image="/bible_browser.png"
							link="https://github.com/isierra2694/bible-browser"
							badges={bibleBrowserBadges}
						/>
						<ProjectCard 
							title="React Timers" 
							description="Accurate timer web app"
							image="/react_timers.PNG"
							link="https://isierra2694.github.io/react-timers/"
							badges={reactTimersBadges}
						/>
						<ProjectCard 
							title="Portfolio" 
							description="This website"
							image="/portfolio.PNG" 
							link="https://github.com/isierra2694/portfolio"
							badges={portfolioBadges}
						/>
					</div>
				</section>
				<footer>
					<div className="social-links-container">
						<a target="_blank" rel="noreferrer" href="/resume.pdf">
							Resume
						</a>
						<a target="_blank" rel="noreferrer"href="https://github.com/isierra2694">
							GitHub
						</a>
						<a target="_blank" rel="noreferrer"href="https://www.linkedin.com/in/harrison-sierra-54640826a/">
							LinkedIn
						</a>
						<a href="mailto:isierra2694@gmail.com">
							Contact
						</a>
					</div>
				</footer>
				</div>
			</div>
		</div>
	);
}

const plainnerBadges= [
	"https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
	"https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
	"https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white",
	"https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
	"https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"
]

const emailzBadges = [
	"https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
	"https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
]

const bibleBrowserBadges = [
	"https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white",
]

const reactTimersBadges = [
	"https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
	"https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
]

const portfolioBadges = [
	"https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
	"https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
	"https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white"
]
