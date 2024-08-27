import React, { forwardRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'

import Thruster from './Thruster';

export const Ship = forwardRef(({ ...props }, ref) => {
	const { nodes, materials } = useGLTF('/ship.glb')

	useFrame(({ clock }) => {
		const elapsedTime = clock.getElapsedTime();
		
		ref.current.rotation.x = Math.sin(elapsedTime * Math.PI / 2) * (Math.PI / 50);
		ref.current.position.y = Math.sin(elapsedTime * Math.PI / 4) * 0.5;	
	});

	return (
    	<group ref={ref} {...props} dispose={null}>
      		<group rotation={[Math.PI / 2, 0, 0]}>
       			<mesh
          			castShadow
          			receiveShadow
		    	    geometry={nodes.glass_Cube002.geometry}
			        material={materials.white}
        		/>
        		<mesh
          			castShadow
          			receiveShadow
          			geometry={nodes.glass_Cube002_1.geometry}
          			material={materials.None}
        		/>
        		<mesh
         	 		castShadow
          			receiveShadow
          			geometry={nodes.glass_Cube002_2.geometry}
          			material={materials.darkgrey}
        		/>
        		<mesh
          			castShadow
          			receiveShadow
          			geometry={nodes.glass_Cube002_3.geometry}
          			material={materials.red}
        		/>
        		<mesh
          			castShadow
          			receiveShadow
          			geometry={nodes.glass_Cube002_4.geometry}
          			material={materials.grey}
        		/>
        		<mesh
          			castShadow
          			receiveShadow
          			geometry={nodes.glass_Cube002_5.geometry}
          			material={materials.orange}
        		/>
				<Thruster rotation={[0, -Math.PI / 2, 0]} position={[-5.25, 0, 0]} count={200} radius={0.3} speed={100} scale={1} />
      			<Thruster rotation={[0, -Math.PI / 2, 0]} position={[-4.25, 2, 0]} count={100} radius={0.2} speed={100} scale={0.75} />

      			<Thruster rotation={[0, -Math.PI / 2, 0]} position={[-4.25, -2, 0]} count={100} radius={0.2} speed={100} scale={0.75} />
			</group>
    	</group>
  	)
})

useGLTF.preload('/ship.glb')
