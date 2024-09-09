import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';

import Effects from './Effects';
import Scene from './Scene';

function App() {
	const [pages, setPages] = useState(5);

	useEffect(() => {
		const handleResize = () => {
			const idealWidth = 2560;
			const idealHeight = 1440;

			const x = (1 - window.innerWidth / idealWidth);
			const y = (1 - window.innerHeight / idealHeight);
		
			const pagesX = 4.5 + (8.5 - 4.5) * x;
			const pagesY = 4.5 + (12 - 4.5) * y;

			if (pagesX > pagesY) setPages(pagesX);
			else setPages(pagesY);
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
