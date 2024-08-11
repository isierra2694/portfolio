import * as THREE from 'three';
import { useMemo, useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import Random from 'canvas-sketch-util/random';

export default function AsteroidField({ count }) {
	const { nodes, materials } = useGLTF('/asteroid1.glb');
	
	const mesh = useRef();

	const asteroids = useMemo(() => {
		const temp = [];
		for (let i = 0; i < count; i++) {
			const x = Random.range(-500, 500);
			const y = Random.range(-500, 500);
			const z = Random.range(-500, 500);
			const scale = Random.range(5, 20);

			temp.push({ x, y, z, scale });
		}
		return temp;
	}, [count]);
	
	const dummy = useMemo(() => new THREE.Object3D(), []);

	useEffect(() => {
		asteroids.forEach((asteroid, index) => {
			dummy.position.set(asteroid.x, asteroid.y, asteroid.z);
			dummy.rotation.set(asteroid.x, asteroid.y, asteroid.z);
			dummy.scale.set(asteroid.scale, asteroid.scale, asteroid.scale);

			dummy.updateMatrix();
			mesh.current.setMatrixAt(index, dummy.matrix);
		});
		mesh.current.instanceMatrix.needsUpdate = true;
	}, [asteroids, dummy]);

	return (
		<instancedMesh ref={mesh} args={[nodes.Icosphere.geometry, materials['Material.001'], count]} />
	);
}
