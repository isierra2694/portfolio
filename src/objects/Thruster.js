import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Random from 'canvas-sketch-util/random';

export default function Thruster({ count, radius, speed, scale, position, rotation }) {
	const mesh = useRef();

	const particles = useMemo(() => {
		const temp = [];
		for (let i = 0; i < count; i++) {
			// Slides from 0 - 100 and manages scale + z position
			const time = Random.range(-100, 0);
			const angle = Math.random() * 2 * Math.PI;
			const r = Math.sqrt(Math.random()) * radius;

			const x = r * Math.cos(angle);
			const y = r * Math.sin(angle);
			// Change this if we want the thruster to start at a specific place
			const z = 0;
			
			temp.push({ time, x, y, z });
		}
		return temp;
	}, [count, radius]);

	const dummy = useMemo(() => new THREE.Object3D(), []);

	useFrame(() => {
		particles.forEach((particle, index) => {
			let { x, y, z } = particle;
			
			// Reset particle if time is up
			if (particle.time >= 100) {
				particle.time = 0;
				z = 0;
			}

			// Update particle time
			const t = (particle.time += speed / 100);
				
			if (t > 0) {
				// Set position
				dummy.position.set(
					x, y, z + t / 10
				);
				dummy.rotation.set(
					x + t / 10,
					y + t / 10,
					z + t / 10
				);
			
				// Scale starts out at largest at the start of thruster, gradually goes down to 0
				const s = (1 - (t / 100)) * scale;
				dummy.scale.set(s, s, s);
				dummy.updateMatrix();

				mesh.current.setMatrixAt(index, dummy.matrix);
			}
		});
		mesh.current.instanceMatrix.needsUpdate = true;
	});

	return (
		<instancedMesh position={position} rotation={rotation} ref={mesh} args={[null, null, count]}>
			<boxGeometry args={[0.2, 0.2, 0.2]} />
			<meshStandardMaterial emissive="#6beeff" emissiveIntensity={1} color="#6beeff" />
		</instancedMesh>
	);
}
