import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';

import Effects from './Effects';
import Scene from './Scene';

function App() {
	const [pages, setPages] = useState(5);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;

			if (width <= 1100) {
				setPages(9.5); // Increase pages for mobile view
	  		} 
			else {
				setPages(5);  // Default for desktop view
	  		}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			<div id="canvas-container" style={{width:"100%", height:"100%"}}>
				<Canvas>
					<Suspense fallback={null}>
						<ScrollControls pages={pages}>
							<Effects />
							<Scene />
						</ScrollControls>
					</Suspense>
				</Canvas>
			</div>
		</>
	);
}

export default App;
