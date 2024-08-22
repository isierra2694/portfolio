import * as THREE from 'three';
import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, useScroll, PerspectiveCamera } from '@react-three/drei';
import { LayerMaterial, Depth, Noise } from 'lamina';
import FixedScrollHtml from './util/FixedScrollHtml';
import Home from './Home';

import SpaceDust from './objects/SpaceDust';
import AsteroidField from './objects/AsteroidField';
import { Ship } from './objects/Ship';
import { Earth } from './objects/Earth';

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
        const p1 = scroll.range(0 / 15, 2 / 15);
        const p2 = scroll.range(2 / 15 , 3 / 15);
    	const p3 = scroll.range(3 / 15, 10 / 15);
        const p4 = scroll.range(10 / 15, 1);
		
		if (trajectory && camera.current) trajectory.getPoint(p1, camera.current.position);
		
		ship.current.power = p2 + p3;
        ship.current.position.x = (p2 * 10) + (p3 * 500);
        skybox.current.position.x = (p2 * 10) + (p3 * 500);
		ship.current.position.y = (p4 * 100);
        ship.current.rotation.z = (p4 * 5);
        camera.current.lookAt(ship.current.position);
		camera.current.position.x += p3 * 500;
		
	});

    return (
        <>
			<FixedScrollHtml fixedUntil={0.5} style={{width:"100%", height:"100%"}}>
				<Home />
			</FixedScrollHtml>
			<PerspectiveCamera ref={camera} makeDefault fov={45}/>
			<AsteroidField count={100} />
			<SpaceDust count={500} ship={ship} />
			<Ship ref={ship} rotation={[0, 0, 0]} />
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
