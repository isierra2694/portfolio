import * as THREE from 'three';
import { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll, PerspectiveCamera } from '@react-three/drei';
import FixedScrollHtml from './util/FixedScrollHtml';
import Home from './Home';

import SpaceDust from './objects/SpaceDust';
import { Ship } from './objects/Ship';
import Skybox from './objects/Skybox';
import { Sign } from './objects/Sign';

import SignContents from './SignContents';

const Scene = () => {
    const SHIP_SPEED = 5;
	
	const scroll = useScroll();
	const { width, height } = useThree((state) => state.size);
    const ship = useRef(null);
    const camera = useRef(null);
    const skybox = useRef(null);

	const [homePos, setHomePos] = useState(0);

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

	useEffect(() => {
		console.log((height * scroll.pages - 1) * 0.5)
		setHomePos((height * scroll.pages - 1) * 0.25);
	}, [width, height, scroll.pages]);

	useFrame(() => {
        const p1 = scroll.range(0 / 10, 1.5 / 10);
        const p2 = scroll.range(1.5 / 10 , 2.5 / 10);
    	const p3 = scroll.range(2.5 / 10, 1);
		if (trajectory && camera.current) trajectory.getPoint(p1, camera.current.position);
		
		// Move ship forward
		ship.current.power = p2 + p3;
        ship.current.position.x = (p2 * 10) + (p3 * 500 * SHIP_SPEED);
		
		// Move skybox to preserve illusion of space
		skybox.current.position.x = (p2 * 10) + (p3 * 500 * SHIP_SPEED);
		
		// Move and rotate camera towards ship
		camera.current.lookAt(ship.current.position);
		camera.current.position.x += p3 * 500 * SHIP_SPEED;
		
	});

    return (
        <>
			<FixedScrollHtml fixedUntil={0.07} style={{width:"100%", height:"100%"}}>
				<Home position={homePos} />
			</FixedScrollHtml>
			<PerspectiveCamera ref={camera} makeDefault fov={45}/>
			<SpaceDust count={100} ship={ship} />
			<Sign text={SignContents.intro} scrollValue={0.31} position={[250, 0, 0]}/>
			<Sign text={SignContents.skills} scrollValue={0.41} position={[500, 0, 0]}/>
			<Ship ref={ship} rotation={[0, 0, 0]} />
			<ambientLight color="white" intensity={0.05} />
            <directionalLight color="white" intensity={4} position={[0, 100, 100]} />
        	<Skybox innerRef={skybox} />
		</>
    );
};

export default Scene;
