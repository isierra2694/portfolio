import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';

import Effects from './Effects';
import Scene from './Scene';

function App() {
	return (
		<>
			<div id="canvas-container" style={{width:"100%", height:"100%"}}>
				<Canvas>
					<Suspense fallback={null}>
						<ScrollControls pages={5}>
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
