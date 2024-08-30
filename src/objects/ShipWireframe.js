import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const ShipWireframe = forwardRef(({ ...props }, ref) => {
  const { nodes } = useGLTF('/models/ship.glb')
  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <group name="ship" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="glass_Cube002"
            geometry={nodes.glass_Cube002.geometry}
          >
			<meshBasicMaterial color="#4AF626" wireframe />
		  </mesh>
          <mesh
            name="glass_Cube002_2"
            geometry={nodes.glass_Cube002_2.geometry}
          >
 			<meshBasicMaterial color="#4AF626"wireframe />
		  </mesh>
          <mesh
            name="glass_Cube002_3"
            geometry={nodes.glass_Cube002_3.geometry}
          >
			<meshBasicMaterial color="#4AF626" wireframe />
		  </mesh>
          <mesh
            name="glass_Cube002_4"
            geometry={nodes.glass_Cube002_4.geometry}
          >
			<meshBasicMaterial color="#4AF626" wireframe />
		  </mesh>
          <mesh
            name="glass_Cube002_5"
            geometry={nodes.glass_Cube002_5.geometry}
          >
			<meshBasicMaterial color="#4AF626" wireframe />
		  </mesh>
        </group>
      </group>
    </group>
  )
});

useGLTF.preload('/ship.glb')
