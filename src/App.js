import * as THREE from 'three';
import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import { 
	Canvas,
	useLoader,
} from '@react-three/fiber';
import { Environment, OrbitControls, Stars, Clouds, Cloud } from '@react-three/drei';
import { LayerMaterial, Color, Depth, Noise } from 'lamina';

import { Model } from './Model';
import { Earth } from './Earth';

function App() {
	return (
		<div id="wrapper">
			<div className="content">
				<div className="hero-wrapper">
					<div className="hero-content">
						<h1>INDY SIERRA</h1>
						<p>Software Engineer</p>
					</div>
				</div>
			</div>
		
			<div id="canvas-container" style={{width:"100%", height:"100%"}}>
				<Canvas>
					<Suspense fallback={null}>
						<Model position={[-12, -1, -12]} rotation={[1.2, 1.2, -0.2]} />		
						<Earth position={[20, -15, -10]} rotation={[1, 2, 0]}/>
						<Stars radius={50} depth={100} count={3000} factor={5} saturation={0} fade speed={1} />
						<ambientLight color="white" intensity={0.5} />
						<directionalLight color="white" intensity={1.5} position={[0, 100, 100]} />
						<mesh scale={500}>
							<sphereGeometry args={[1, 100, 100]} />
							<LayerMaterial side={THREE.BackSide}>
								<Noise colorA="#0e0f47" colorB="#5c438c" colorC="#443283" colorD="#0e0f47" alpha={1} scale={0.7} offset={[0, 0, 0]} />
								<Depth colorA="black" colorB="black" alpha={0.5} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
							</LayerMaterial>
						</mesh>
						<OrbitControls />
					</Suspense>
				</Canvas>
			</div>
		</div>		
	);
}

export default App;
