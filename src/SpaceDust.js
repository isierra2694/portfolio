import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Random from 'canvas-sketch-util/random';

export default function SpaceDust({ count, ship }) {
	const mesh1 = useRef();
	const mesh2 = useRef();
	const lastUpdated = useRef(0);

	const particles = useMemo(() => {
		const temp = [];
		for (let i = 0; i < count; i++) {
			const time = Random.range(0, 100);
     	 	const factor = Random.range(20, 120);
      		const speed = Random.range(0.01, 0.015) / 50;
      		const x = Random.range(-50, 50);
      		const y = Random.range(-50, 50);
      		const z = Random.range(-50, 50);
			temp.push({ time, factor, speed, x, y, z });
		}
		return temp;
	}, [count]);
	
	const dummy = useMemo(() => new THREE.Object3D(), []);

  	useFrame(() => {
		if (count === 0) return;
		
		const x = Math.round(ship.current ? ship.current.position.x : 0);
		
		if (x % 50 === 0 && x >= 50 && lastUpdated.current !== x) {
			if ((lastUpdated.current / 100) % 1 === 0) {
				mesh2.current.position.x = x + 50;
			}
			else {
				mesh1.current.position.x = x + 50;
			}
			lastUpdated.current = x;
		}

    	// Run through the randomized data to calculate some movement
    	particles.forEach((particle, index) => {
      		let { factor, speed, x, y, z } = particle;

      		// Update the particle time
      		const t = (particle.time += speed);

      		// Update the particle position based on the time
      		// This is mostly random trigonometry functions to oscillate around the (x, y, z) point
      		dummy.position.set(
        		x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        		y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
       			z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      		);

      		// Derive an oscillating value which will be used
      		// for the particle size and rotation
      		const s = Math.cos(t) / 10;
      		dummy.scale.set(s, s, s);
      		dummy.rotation.set(s * 5, s * 5, s * 5);
      		dummy.updateMatrix();

      		// And apply the matrix to the instanced item
      		mesh1.current.setMatrixAt(index, dummy.matrix);
    		mesh2.current.setMatrixAt(index, dummy.matrix);
		});
    	mesh1.current.instanceMatrix.needsUpdate = true;
		mesh2.current.instanceMatrix.needsUpdate = true;
  	});

	return (
		<group>
			<instancedMesh ref={mesh1} args={[null, null, count]}>
				<tetrahedronGeometry args={[0.4, 0]} />
				<meshPhongMaterial />
			</instancedMesh>
			<instancedMesh ref={mesh2} position={[50, 0, 0]} args={[null, null, count]}>
				<tetrahedronGeometry args={[0.4, 0]} />
				<meshPhongMaterial />
			</instancedMesh>
		</group>
	);
}
