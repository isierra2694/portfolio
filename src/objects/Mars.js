import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Mars(props) {
  const { nodes, materials } = useGLTF('/mars.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={2.573}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_1.geometry}
          material={materials.Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_2.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_3.geometry}
          material={materials.Red2}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/mars.glb')

