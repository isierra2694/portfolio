import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment, OrbitControls, Stars, useScroll, ScrollControls, PerspectiveCamera } from '@react-three/drei';
import { LayerMaterial, Color, Depth, Noise } from 'lamina';

import { Model } from './Model';
import { Earth } from './Earth';

const Scene = () => {
	const scroll = useScroll();
	const { width, height } = useThree((state) => state.viewport);
	const model = useRef(null);
	const camera = useRef(null);

	useFrame((state, delta) => {
		camera.current.position.z = -scroll.scroll.current * 10;
		model.current.position.z = -scroll.scroll.current * 10 - 10;
	});

	return (
		<>
			<group ref={camera}>
				<PerspectiveCamera />
			</group>
			<Model ref={model} position={[0, -2, 0]} rotation={[0, Math.PI / 2, 0.25]} />		
			<Earth position={[20, -15, -10]} rotation={[1, 2, 0]}/>
			<Stars radius={50} depth={100} count={3000} factor={5} saturation={0} fade speed={1} />
			<ambientLight color="white" intensity={0.1} />
			<directionalLight color="white" intensity={1.5} position={[0, 100, 100]} />
			<mesh scale={500}>
				<sphereGeometry args={[1, 100, 100]} />
				<LayerMaterial side={THREE.BackSide}>
					<Noise colorA="#0a0b47" colorB="#0b0c26" colorC="#071442" colorD="#0e0f47" alpha={1} scale={0.7} offset={[0, 0, 0]} />
					<Depth colorA="black" colorB="black" alpha={0.2} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
				</LayerMaterial>
			</mesh>
		</>
	);
}

export default Scene;
