import * as THREE from 'three';
import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, useScroll, PerspectiveCamera } from '@react-three/drei';
import { LayerMaterial, Depth, Noise } from 'lamina';

import SpaceDust from './SpaceDust';
import AsteroidField from './AsteroidField';
import { Model } from './Model';
import { Earth } from './Earth';

const Scene = () => {
    const scroll = useScroll();
    const ship = useRef(null);
    const camera = useRef(null);
    const skybox = useRef(null);
	
	const [trajectory, setTrajectory] = useState(null);
	
	
	useEffect(() => {
        const initialCameraPosition = new THREE.Vector3(15, 8, 6);
	    const finalCameraPosition = new THREE.Vector3(-20, 5, 0);
		
        const normal = new THREE.Vector3();
		normal.subVectors(initialCameraPosition, finalCameraPosition);
		normal.set(normal.y, normal.x, 0);

		const tempA = new THREE.Vector3().copy(initialCameraPosition).addScaledVector(normal, 1 / 2);
		const tempB = new THREE.Vector3().copy(finalCameraPosition).addScaledVector(normal, 1 / 2);

		setTrajectory(
			new THREE.CubicBezierCurve3(initialCameraPosition, tempA, tempB, finalCameraPosition)
		);
	}, []);

	useFrame(() => {
        const scrollProgress = scroll.scroll.current;

        const p1 = scroll.range(0 / 10, 2 / 10);
        const p2 = scroll.range(2 / 10 , 3 / 10);
    	const p3 = scroll.range(3 / 10, 1);
		if (trajectory && camera.current) trajectory.getPoint(p1, camera.current.position);
		
		ship.current.power = p2 + p3;
        ship.current.position.x = (p2 * 10) + (p3 * 500);
        skybox.current.position.x = (p2 * 10) + (p3 * 500);
		camera.current.lookAt(ship.current.position);
		camera.current.position.x += p3 * 500;
	});

    return (
        <>
			<PerspectiveCamera ref={camera} makeDefault fov={45}/>
			<AsteroidField count={100} />
			<SpaceDust count={1000} ship={ship} />
			<Model ref={ship} rotation={[0, 0, 0]} />
			<Earth position={[200, 20, -100]} rotation={[1, 0, 0]} />
            <ambientLight color="white" intensity={0.2} />
            <directionalLight color="white" intensity={3} position={[0, 100, 100]} />
			<group ref={skybox}>
            	<Stars radius={50} depth={100} count={3000} factor={5} saturation={0} fade speed={1} />
				<mesh scale={500} ref={skybox}>
					<sphereGeometry args={[1, 100, 100]} />
					<LayerMaterial side={THREE.BackSide}>
						<Noise colorA="#0a0b47" colorB="#0b0c26" colorC="#071442" colorD="#0e0f47" alpha={1} scale={0.7} offset={[0, 0, 0]} />
						<Depth colorA="black" colorB="black" alpha={0.2} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
					</LayerMaterial>
				</mesh>
			</group>
        </>
    );
};

export default Scene;
