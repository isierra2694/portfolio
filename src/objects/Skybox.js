import * as THREE from 'three';
import { Stars } from '@react-three/drei';
import { LayerMaterial, Noise, Depth } from 'lamina';

import { Earth } from './Earth';

export default function Skybox({ innerRef }) {
	return (
		<group renderOrder={-1} ref={innerRef}>
			<Earth position={[200, 20, -100]} rotation={[1, 0, 0]} />
			<Stars radius={50} depth={100} count={3000} factor={5} saturation={0} fade speed={1} />
			<mesh scale={500}>
				<sphereGeometry args={[1, 100, 100]} />
				<LayerMaterial side={THREE.BackSide}>
					<Noise colorA="#0a0b47" colorB="#0b0c26" colorC="#071442" colorD="#0e0f47" alpha={1} scale={0.7} offset={[0, 0, 0]} />
					<Depth colorA="black" colorB="black" alpha={0.2} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
				</LayerMaterial>
			</mesh>
		</group>
	);
}
