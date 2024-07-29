import React, { useRef, forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const Model = forwardRef(({ ...props }, ref) => {
	const { nodes, materials } = useGLTF('/ship.glb')
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
      		</group>
    	</group>
  	)
})

useGLTF.preload('/ship.glb')
